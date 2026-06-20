/* ============================================================
   app.js — Logique de L'Atelier (transpilé par Babel via index.html)
   Chargé APRÈS data.js. Utilise BANK, VERBS, LESSONS, PRON,
   TENSE_LABEL, TENSE_USAGE, DISPLAY_TENSES, DRILL_TENSES, AUX_PRES…
   qui sont définis globalement dans data.js.
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* Stockage : localStorage avec repli en mémoire.
   → Fonctionne en local, sur GitHub Pages, et dans un aperçu sans localStorage. */
const __mem = {};
const storage = {
  async get(k) { try { const v = localStorage.getItem(k); return v == null ? null : { value: v }; } catch (e) { return __mem[k] != null ? { value: __mem[k] } : null; } },
  async set(k, v) { try { localStorage.setItem(k, v); } catch (e) { __mem[k] = v; } return { value: v }; },
};


/* =================== MOTEUR DE CONJUGAISON =================== */
const ER_END = { present: ["e", "es", "e", "ons", "ez", "ent"], imparfait: ["ais", "ais", "ait", "ions", "iez", "aient"], passeSimple: ["ai", "as", "a", "âmes", "âtes", "èrent"], subjonctif: ["e", "es", "e", "ions", "iez", "ent"] };
const IR_END = { present: ["is", "is", "it", "issons", "issez", "issent"], imparfait: ["issais", "issais", "issait", "issions", "issiez", "issaient"], passeSimple: ["is", "is", "it", "îmes", "îtes", "irent"], subjonctif: ["isse", "isses", "isse", "issions", "issiez", "issent"] };
const FUT_END = ["ai", "as", "a", "ons", "ez", "ont"];
const COND_END = ["ais", "ais", "ait", "ions", "iez", "aient"];

function conjugateRegular(v) {
  const inf = v.inf, s = inf.slice(0, -2);
  const E = v.reg === "er" ? ER_END : IR_END;
  const imp = v.reg === "er" ? [s + "e", s + "ons", s + "ez"] : [s + "is", s + "issons", s + "issez"];
  return {
    present: E.present.map((e) => s + e), imparfait: E.imparfait.map((e) => s + e),
    passeSimple: E.passeSimple.map((e) => s + e), futur: FUT_END.map((e) => inf + e),
    conditionnel: COND_END.map((e) => inf + e), subjonctif: E.subjonctif.map((e) => s + e), imperatif: imp,
  };
}
function getConj(v) {
  const base = v.reg ? conjugateRegular(v) : v.forms;
  return Object.assign({}, base, { passeCompose: AUX_PRES[v.aux].map((a) => a + " " + v.participe) });
}
const startsVowel = (s) => /^[aàâeéèêiîoôuûyœh]/i.test(s);
function lineFor(tenseKey, person, form) {
  if (tenseKey === "imperatif") return PRON_IMP[person] + " " + form;
  const pron = tenseKey === "subjonctif" ? PRON_SUBJ[person] : PRON[person];
  if (pron === "je") return (startsVowel(form) ? "j’" : "je ") + form;
  if (pron === "que je") return (startsVowel(form) ? "que j’" : "que je ") + form;
  return pron + " " + form;
}
function rowFor(tenseKey, person, form) {
  if (tenseKey === "imperatif") return { pre: PRON_IMP[person], glue: false, answer: form };
  const pron = tenseKey === "subjonctif" ? PRON_SUBJ[person] : PRON[person];
  if (pron === "je") return { pre: startsVowel(form) ? "j’" : "je", glue: startsVowel(form), answer: form };
  if (pron === "que je") return { pre: startsVowel(form) ? "que j’" : "que je", glue: startsVowel(form), answer: form };
  return { pre: pron, glue: false, answer: form };
}
function genTenseItems(verbs) {
  const out = [];
  verbs.forEach((v) => {
    const c = getConj(v);
    DRILL_TENSES.forEach((t) => {
      const forms = c[t];
      if (!forms) return;
      out.push({ id: "vt:" + v.inf + ":" + t, conj: true, tensefill: true, cat: "conjugaison", verb: v.inf, tense: t, prompt: "« " + v.inf + " » — " + TENSE_LABEL[t], rows: forms.map((f, p) => rowFor(t, p, f)), rule: v.note });
    });
  });
  return out;
}

/* =================== RÉPÉTITION ESPACÉE (3 d'affilée) ================== */
const MASTER_STREAK = 3;
const DUE_DAYS = [0, 1, 3, 7, 15, 30];
const dueDays = (streak) => DUE_DAYS[Math.min(streak, DUE_DAYS.length - 1)];
const DEFAULT_LENGTH = 8;
const BANK_IDS = new Set(BANK.map((q) => q.id));
const todayStr = () => new Date().toISOString().slice(0, 10);
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const CAT_LABEL = { accord: "Accords", conjugaison: "Conjugaison", orthographe: "Orthographe", message: "Messages" };
const CATS = ["accord", "conjugaison", "orthographe", "message"];

const norm = (s) => (s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[’']/g, "’");
const stripAccents = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function isCorrectSaisie(input, item) { return [item.answer].concat(item.accept || []).map(norm).includes(norm(input)); }
function accentOnlyMiss(input, item) {
  const a = stripAccents(norm(input));
  return [item.answer].concat(item.accept || []).map((x) => stripAccents(norm(x))).includes(a);
}
function tokenizeWords(s) { return norm(s).split(" ").map((w) => w.replace(/^[«»"“”().,;:!?…]+|[«»"“”().,;:!?…]+$/g, "")).filter(Boolean); }
function gradeDictee(input, target) {
  const t = tokenizeWords(target), u = tokenizeWords(input), n = Math.max(t.length, u.length), words = [];
  let allOk = true;
  for (let i = 0; i < n; i++) { const ok = t[i] !== undefined && t[i] === u[i]; if (!ok) allOk = false; words.push({ target: t[i], user: u[i], ok }); }
  return { allOk, words };
}
const isSpace = (s) => /^\s+$/.test(s);
function smsParse(text) { return text.split(/(\s+)/).filter((p) => p !== ""); }
function smsErrorIndex(item) { if (item.errorFree) return -1; return smsParse(item.text).findIndex((t) => !isSpace(t) && t === item.error.wrong); }

function useSpeech() {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSupported(true); window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }, []);
  const speak = (text, rate = 0.9) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "fr-FR"; u.rate = rate;
    const v = window.speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith("fr"));
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  };
  return { supported, speak };
}

/* ====================================================================== */
function App() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("home");
  const [session, setSession] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState("all");
  const [verbInf, setVerbInf] = useState(null);
  const [lessonId, setLessonId] = useState(null);
  const [lastSession, setLastSession] = useState(null);
  const inputRef = useRef(null);
  const speech = useSpeech();

  useEffect(() => {
    (async () => {
      try {
        const r = await storage.get("progress");
        const data = r && r.value ? JSON.parse(r.value) : null;
        setProgress(data ? withDefaults(data) : fresh());
      } catch (e) { setProgress(fresh()); } finally { setLoading(false); }
    })();
  }, []);

  function emptyStats() { return { streak: 0, lastSessionDate: null, totalAnswered: 0, totalCorrect: 0, sessions: 0 }; }
  function fresh() { return { items: {}, stats: emptyStats(), settings: { length: DEFAULT_LENGTH, noAudio: false } }; }
  function migrateItem(it) {
    if (it && it.streak === undefined) { const b = it.box || 1; return Object.assign({}, it, { streak: b >= 5 ? MASTER_STREAK : Math.max(0, b - 1) }); }
    return it;
  }
  function withDefaults(d) {
    const raw = d.items || {}, items = {};
    Object.keys(raw).forEach((k) => { items[k] = migrateItem(raw[k]); });
    return { items, stats: Object.assign({}, emptyStats(), d.stats || {}), settings: Object.assign({ length: DEFAULT_LENGTH, noAudio: false }, d.settings || {}) };
  }
  async function save(next) { setProgress(next); try { await storage.set("progress", JSON.stringify(next)); } catch (e) {} }

  function counts() {
    const items = (progress && progress.items) || {};
    let mastered = 0, reviewable = 0, seen = 0;
    const perCat = {}; CATS.forEach((c) => (perCat[c] = { total: 0, mastered: 0 }));
    BANK.forEach((q) => { perCat[q.cat].total++; });
    Object.keys(items).forEach((id) => {
      if (!BANK_IDS.has(id)) return;
      const it = items[id]; seen++;
      const m = (it.streak || 0) >= MASTER_STREAK;
      if (!m) reviewable++;
      const q = BANK.find((b) => b.id === id);
      if (m) { mastered++; if (q) perCat[q.cat].mastered++; }
    });
    return { mastered, reviewable, seen, total: BANK.length, perCat };
  }

  function isErrorItem(it) { return !!it && (it.timesWrong || 0) > 0 && (it.streak || 0) < MASTER_STREAK; }
  function errorItems() {
    const items = (progress && progress.items) || {};
    const out = [];
    BANK.forEach((q) => { if (isErrorItem(items[q.id])) out.push(q); });
    genTenseItems(VERBS).forEach((q) => { if (isErrorItem(items[q.id])) out.push(q); });
    return out;
  }

  function conjStats() {
    const items = (progress && progress.items) || {};
    const perVerb = {}; let reviewable = 0, mastered = 0, total = 0;
    VERBS.forEach((v) => {
      const c = getConj(v); let t = 0;
      DRILL_TENSES.forEach((k) => { if (c[k]) t += 1; });
      perVerb[v.inf] = { total: t, mastered: 0 }; total += t;
    });
    Object.keys(items).forEach((id) => {
      if (id.slice(0, 3) !== "vt:") return;
      const it = items[id], inf = id.split(":")[1];
      const m = (it.streak || 0) >= MASTER_STREAK;
      if ((it.timesWrong || 0) > 0 && !m) reviewable++;
      if (m) { mastered++; if (perVerb[inf]) perVerb[inf].mastered++; }
    });
    return { reviewable, mastered, total, perVerb };
  }

  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function varyByCat(list) {
    const by = {}; CATS.forEach((c) => (by[c] = []));
    list.forEach((q) => { (by[q.cat] || (by[q.cat] = [])).push(q); });
    const out = []; let i = 0;
    while (CATS.some((c) => by[c].length)) { const c = CATS[i % CATS.length]; if (by[c].length) out.push(by[c].shift()); i++; }
    return out;
  }
  function selectSR(pool, mode) {
    const items = (progress && progress.items) || {}, length = (progress && progress.settings && progress.settings.length) || DEFAULT_LENGTH, today = todayStr();
    const freshItems = [], weak = [];
    pool.forEach((q) => { const p = items[q.id]; if (!p) freshItems.push(q); else if ((p.streak || 0) < MASTER_STREAK) weak.push({ q, streak: p.streak || 0, due: p.dueDate <= today }); });
    let pick = [];
    if (mode === "review") {
      pick = weak.sort((a, b) => (a.due === b.due ? a.streak - b.streak : a.due ? -1 : 1)).map((w) => w.q);
    } else {
      pick = weak.filter((w) => w.due).sort((a, b) => a.streak - b.streak).map((w) => w.q);
      const fr = varyByCat(shuffle(freshItems));
      for (let k = 0; k < fr.length; k++) { if (pick.length >= length) break; pick.push(fr[k]); }
      const rest = weak.filter((w) => !w.due).sort((a, b) => a.streak - b.streak).map((w) => w.q);
      for (let k = 0; k < rest.length; k++) { if (pick.length >= length) break; pick.push(rest[k]); }
      if (pick.length === 0) pick = shuffle(pool).slice(0, length);
    }
    return shuffle(pick).slice(0, length);
  }

  function launchSession(items, cfg) {
    if (!items.length) return;
    setSession(items); setIdx(0); setAnswer(""); setRevealed(false); setFeedback(null); setResults([]);
    setLastSession(cfg); setScreen("session");
  }
  function start(opts) {
    opts = opts || {};
    const focusCat = opts.focusCat != null ? opts.focusCat : focus;
    const noAudio = !!(progress.settings && progress.settings.noAudio);
    const pool = BANK.filter((q) => (focusCat === "all" || q.cat === focusCat) && (!noAudio || q.type !== "dictee"));
    launchSession(selectSR(pool, opts.mode || "normal"), { kind: "bank", focusCat, mode: opts.mode || "normal", returnScreen: opts.returnScreen || "home" });
  }
  function startItems(its, returnScreen) { launchSession(shuffle(its), { kind: "items", items: its, returnScreen: returnScreen || "home" }); }
  function startVerbTables(inf) {
    const v = VERBS.find((x) => x.inf === inf); if (!v) return;
    launchSession(genTenseItems([v]), { kind: "verbTables", verbInf: inf, returnScreen: "verb" });
  }
  function startWeakTables() {
    const items = (progress && progress.items) || {}, today = todayStr();
    const weak = genTenseItems(VERBS).filter((q) => { const p = items[q.id]; return p && (p.timesWrong || 0) > 0 && (p.streak || 0) < MASTER_STREAK; })
      .sort((a, b) => { const pa = items[a.id], pb = items[b.id]; const da = pa.dueDate <= today, db = pb.dueDate <= today; return da === db ? (pa.streak || 0) - (pb.streak || 0) : da ? -1 : 1; });
    launchSession(weak, { kind: "weakTables", returnScreen: "ref" });
  }
  function relaunch(cfg) {
    if (!cfg) return start();
    if (cfg.kind === "verbTables") return startVerbTables(cfg.verbInf);
    if (cfg.kind === "weakTables") return startWeakTables();
    if (cfg.kind === "items") return startItems(cfg.items, cfg.returnScreen);
    return start({ focusCat: cfg.focusCat, returnScreen: cfg.returnScreen });
  }

  const current = session[idx];

  function check(choice) {
    if (revealed) return;
    const item = current; let ok, fb;
    if (item.type === "qcm") { ok = choice === item.answer; fb = { ok, kind: ok ? "ok" : "ko" }; }
    else if (item.type === "dictee") { const g = gradeDictee(answer, item.sentence); ok = g.allOk; fb = { ok, kind: ok ? "ok" : "ko", dictee: g }; }
    else if (item.type === "sms") {
      const target = smsErrorIndex(item);
      ok = choice.type === "none" ? !!item.errorFree : (!item.errorFree && choice.index === target);
      fb = { ok, kind: ok ? "ok" : "ko", sms: { target, picked: choice } };
    } else if (item.tensefill) {
      const table = item.rows.map((r, i) => { const val = (choice && choice[i]) ? choice[i] : ""; const okc = norm(val) === norm(r.answer); const near = !okc && stripAccents(norm(val)) === stripAccents(norm(r.answer)); return Object.assign({}, r, { val, ok: okc, near }); });
      ok = table.every((c) => c.ok);
      fb = { ok, kind: ok ? "ok" : "ko", table };
    } else {
      ok = isCorrectSaisie(answer, item);
      const near = !ok && accentOnlyMiss(answer, item);
      fb = { ok, kind: ok ? "ok" : near ? "near" : "ko" };
    }
    setFeedback(fb); setRevealed(true);
    setResults((r) => r.concat([{ item, correct: ok }]));
    const items = Object.assign({}, (progress && progress.items) || {});
    const prev = items[item.id] || { streak: 0, timesCorrect: 0, timesWrong: 0 };
    const streak = ok ? (prev.streak || 0) + 1 : 0;
    items[item.id] = { streak, dueDate: addDays(dueDays(streak)), lastSeen: todayStr(), timesCorrect: (prev.timesCorrect || 0) + (ok ? 1 : 0), timesWrong: (prev.timesWrong || 0) + (ok ? 0 : 1) };
    save(Object.assign({}, progress, { items }));
  }
  function next() { if (idx + 1 < session.length) { setIdx(idx + 1); setAnswer(""); setRevealed(false); setFeedback(null); } else finish(); }
  function skipCurrent() { if (idx + 1 < session.length) { setIdx(idx + 1); setAnswer(""); setRevealed(false); setFeedback(null); } else finish(); }
  function finish() {
    const correct = results.filter((r) => r.correct).length;
    const stats = Object.assign({}, progress.stats), last = stats.lastSessionDate, today = todayStr();
    if (last === today) {} else if (last === addDays(-1)) stats.streak = (stats.streak || 0) + 1; else stats.streak = 1;
    stats.lastSessionDate = today; stats.totalAnswered += results.length; stats.totalCorrect += correct; stats.sessions = (stats.sessions || 0) + 1;
    save(Object.assign({}, progress, { stats })); setScreen("done");
  }
  function setLength(n) { save(Object.assign({}, progress, { settings: Object.assign({}, progress.settings, { length: n }) })); }
  function toggleAudio() { save(Object.assign({}, progress, { settings: Object.assign({}, progress.settings, { noAudio: !(progress.settings && progress.settings.noAudio) }) })); }
  async function resetAll() { if (!window.confirm("Effacer toute votre progression et recommencer à zéro ?")) return; await save(fresh()); setScreen("home"); }

  useEffect(() => {
    if (screen === "session" && current && (current.type === "saisie" || current.type === "dictee") && !revealed && inputRef.current) inputRef.current.focus();
  }, [idx, screen, revealed, current]);

  if (loading) return (<div className="atelier-root"><div className="loading">Chargement de votre atelier…</div></div>);

  let body = null;
  if (screen === "home") { const errs = errorItems(); body = (<Home counts={counts()} conj={conjStats()} stats={progress.stats} settings={progress.settings} focus={focus} setFocus={setFocus} onStart={start} errorCount={errs.length} onReview={() => startItems(errs, "home")} onLength={setLength} onToggleAudio={toggleAudio} onReset={resetAll} onOpenRef={() => setScreen("ref")} onOpenCours={() => setScreen("cours")} onOpenRules={() => setScreen("rules")} />); }
  else if (screen === "rules") body = (<RulesScreen errItems={errorItems()} onBack={() => setScreen("home")} />);
  else if (screen === "cours") body = (<CoursHome onBack={() => setScreen("home")} onOpen={(id) => { setLessonId(id); setScreen("lesson"); }} />);
  else if (screen === "lesson") body = (<LessonScreen lesson={LESSONS.find((l) => l.id === lessonId)} onBack={() => setScreen("cours")} onPractice={(cat) => start({ focusCat: cat, returnScreen: "lesson" })} />);
  else if (screen === "ref") body = (<ConjHome conj={conjStats()} onBack={() => setScreen("home")} onOpenVerb={(inf) => { setVerbInf(inf); setScreen("verb"); }} onReview={() => startWeakTables()} />);
  else if (screen === "verb") {
    const v = VERBS.find((x) => x.inf === verbInf); const ts = {};
    if (v) DRILL_TENSES.forEach((t) => { const p = progress.items["vt:" + v.inf + ":" + t]; ts[t] = (p && p.streak) || 0; });
    body = (<VerbScreen v={v} conj={conjStats()} tenseStreak={ts} onBack={() => setScreen("ref")} onExercise={() => startVerbTables(verbInf)} />);
  }
  else if (screen === "session" && current) body = (<Session item={current} index={idx} total={session.length} answer={answer} setAnswer={setAnswer} revealed={revealed} feedback={feedback} onCheck={check} onNext={next} onSkip={skipCurrent} inputRef={inputRef} speech={speech} />);
  else if (screen === "done") {
    const ret = (lastSession && lastSession.returnScreen) || "home";
    const backLabel = ret === "home" ? "Terminer" : (ret === "ref" || ret === "verb") ? "Retour aux tableaux" : "Retour au cours";
    body = (<Done results={results} stats={progress.stats} onHome={() => setScreen(ret)} onAgain={() => relaunch(lastSession)} onDrillItems={(its) => startItems(its, "home")} backLabel={backLabel} />);
  }

  return (<div className="atelier-root">{body}</div>);
}
/* ============================== ÉCRANS ================================ */
function Stat({ value, label, accent }) {
  return (<div className={"stat" + (accent ? " stat-accent" : "")}><span className="stat-value">{value}</span><span className="stat-label">{label}</span></div>);
}

function Home({ counts, conj, stats, settings, focus, setFocus, onStart, errorCount, onReview, onLength, onToggleAudio, onReset, onOpenRef, onOpenCours, onOpenRules }) {
  const streak = stats.streak || 0;
  const pct = counts.total ? Math.round((counts.mastered / counts.total) * 100) : 0;
  return (
    <div className="screen">
      <header className="masthead">
        <span className="eyebrow">Cahier d’exercices</span>
        <h1 className="logo">L’Atelier</h1>
      </header>
      <div className="paper card-intro">
        <h2 className="greet">On s’y met ?</h2>
        <p className="lede">Quelques questions ciblées sur vos points faibles. Choisissez un thème, ou laissez « Tout » pour un mélange.</p>
        <div className="focus-row">
          <button className={"chip" + (focus === "all" ? " chip-on" : "")} onClick={() => setFocus("all")}>Tout</button>
          {CATS.map((c) => (<button key={c} className={"chip" + (focus === c ? " chip-on" : "")} onClick={() => setFocus(c)}>{CAT_LABEL[c]}</button>))}
        </div>
        <button className="btn-primary" onClick={() => onStart()}>Commencer la séance du jour</button>
        {errorCount > 0 && (<button className="link-review" onClick={onReview}>Réviser mes erreurs ({errorCount})</button>)}
      </div>
      <button className="btn-zone zone-cours" onClick={onOpenCours}>
        <span className="zone-label">Cours</span>
        <span className="zone-sub">Comprendre la règle, puis s’entraîner dans la foulée</span>
        <span className="zone-meta">{LESSONS.length} leçons</span>
      </button>
      <button className="btn-zone" onClick={onOpenRef}>
        <span className="zone-label">Conjugaison</span>
        <span className="zone-sub">Tableaux des verbes, emploi des temps et exercices</span>
        <span className="zone-meta">{conj.mastered} / {conj.total} tableaux acquis</span>
      </button>
      <button className="btn-zone zone-rules" onClick={onOpenRules}>
        <span className="zone-label">Mémo des règles</span>
        <span className="zone-sub">Toutes les règles des exercices, à faire défiler</span>
        <span className="zone-meta">{errorCount > 0 ? errorCount + (errorCount > 1 ? " règles à revoir" : " règle à revoir") : "révision libre"}</span>
      </button>
      <div className="stats-row">
        <Stat value={streak} label={streak > 1 ? "jours de suite" : "jour"} />
        <Stat value={counts.mastered} label="acquis" />
        <Stat value={errorCount} label="à revoir" accent />
      </div>
      <div className="progress-cats">
        {CATS.map((c) => { const pc = counts.perCat[c]; const p = pc.total ? Math.round((pc.mastered / pc.total) * 100) : 0; return (
          <div key={c}>
            <div className="pcat-head"><span className={"dot dot-" + c}></span>{CAT_LABEL[c]}<span className="pcat-frac">{pc.mastered}/{pc.total}</span></div>
            <div className={"pbar pbar-" + c}><span style={{ width: p + "%" }}></span></div>
          </div>
        ); })}
      </div>
      <div className="settings-row">
        <span className="settings-label">Longueur :</span>
        <div className="seg">{[6, 8, 12].map((n) => (<button key={n} className={"seg-btn" + (settings.length === n ? " seg-on" : "")} onClick={() => onLength(n)}>{n}</button>))}</div>
        <span className="settings-hint">questions / séance</span>
      </div>
      <div className="settings-row">
        <span className="settings-label">Audio :</span>
        <button className={"toggle-audio" + (settings.noAudio ? " toggle-on" : "")} onClick={onToggleAudio}>{settings.noAudio ? "🔇 Sans dictées" : "🔊 Avec dictées"}</button>
        <span className="settings-hint">{settings.noAudio ? "aucun son requis" : "écoute nécessaire"}</span>
      </div>
      <div className="home-foot">
        <span>Progression : {pct}%</span>
        <button className="link-reset" onClick={onReset}>Réinitialiser</button>
      </div>
    </div>
  );
}

function CoursHome({ onBack, onOpen }) {
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Accueil</button>
      <header className="masthead"><span className="eyebrow">Cours</span><h1 className="logo-sm">Les règles, pas à pas</h1></header>
      <div className="lesson-list">
        {LESSONS.map((l) => (
          <button key={l.id} className="lesson-row" onClick={() => onOpen(l.id)}>
            <span className={"dot dot-" + l.cat}></span>
            <span className="lesson-row-text">
              <span className="lesson-row-title">{l.title}</span>
              <span className="lesson-row-sub">{l.tagline}</span>
            </span>
            <span className="vrow-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Example({ ex }) {
  return (
    <div className="ls-ex">
      {ex.bad && <span className="ex-line ex-bad">{ex.bad}</span>}
      {ex.good && <span className="ex-line ex-good">{ex.good}</span>}
      {ex.note && <span className="ex-note">{ex.note}</span>}
    </div>
  );
}

function LessonScreen({ lesson, onBack, onPractice }) {
  if (!lesson) return null;
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Cours</button>
      <div className="lesson-head">
        <span className={"cat-tag cat-" + lesson.cat}>{CAT_LABEL[lesson.cat]}</span>
        <h1 className="lesson-title">{lesson.title}</h1>
        <p className="lesson-tagline">{lesson.tagline}</p>
      </div>
      <div className="paper lesson-body">
        {lesson.sections.map((s, i) => (
          <div key={i} className="lesson-section">
            <h3 className="ls-h">{s.h}</h3>
            {s.p && <p className="ls-p">{s.p}</p>}
            {s.ex && <div className="ls-ex-group">{s.ex.map((e, j) => (<Example key={j} ex={e} />))}</div>}
          </div>
        ))}
        {lesson.astuce && (<div className="astuce"><span className="astuce-label">Astuce</span><p>{lesson.astuce}</p></div>)}
      </div>
      <button className="btn-primary lesson-practice" onClick={() => onPractice(lesson.cat)}>S’entraîner sur ce thème →</button>
    </div>
  );
}

function ConjHome({ conj, onBack, onOpenVerb, onReview }) {
  const groups = [
    { title: "1er groupe (-er)", note: "réguliers + particularités", verbs: VERBS.filter((v) => v.group === 1) },
    { title: "2e groupe (-ir)", note: "type « finir »", verbs: VERBS.filter((v) => v.group === 2) },
    { title: "3e groupe", note: "irréguliers fréquents", verbs: VERBS.filter((v) => v.group === 3) },
  ];
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Accueil</button>
      <header className="masthead"><span className="eyebrow">Conjugaison</span><h1 className="logo-sm">Tableaux des verbes</h1></header>
      <p className="verb-hint">Ouvrez un verbe pour réviser ses tableaux et l’emploi de chaque temps. Pour vous exercer, vous compléterez un tableau entier — il est validé seulement si toutes les cases sont justes.</p>
      {conj.reviewable > 0 && (<button className="btn-primary lesson-practice" style={{ marginTop: 0, marginBottom: 18 }} onClick={onReview}>Réviser les tableaux à revoir ({conj.reviewable})</button>)}
      {groups.map((g, i) => (
        <div key={i} className="vgroup">
          <div className="vgroup-head"><span className="vgroup-title">{g.title}</span><span className="vgroup-note">{g.note}</span></div>
          <div className="vlist">
            {g.verbs.map((v) => { const pv = conj.perVerb[v.inf] || { total: 0, mastered: 0 }; const p = pv.total ? Math.round((pv.mastered / pv.total) * 100) : 0; return (
              <button key={v.inf} className="vrow" onClick={() => onOpenVerb(v.inf)}>
                <span className="vrow-inf">{v.inf}</span>
                <span className="vrow-bar"><span style={{ width: p + "%" }}></span></span>
                <span className="vrow-frac">{pv.mastered}/{pv.total}</span>
                <span className="vrow-arrow">→</span>
              </button>
            ); })}
          </div>
        </div>
      ))}
    </div>
  );
}

function VerbScreen({ v, conj, tenseStreak, onBack, onExercise }) {
  const [openTense, setOpenTense] = useState(null);
  if (!v) return null;
  const c = getConj(v);
  const groupLabel = v.group === 1 ? "1er groupe" : v.group === 2 ? "2e groupe" : "3e groupe";
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Tableaux</button>
      <div className="verb-head">
        <h1 className="verb-title">{v.inf}</h1>
        <span className="verb-group">{groupLabel} · participe passé : {v.participe}</span>
      </div>
      {v.note && (<div className="paper verb-note-card"><p className="verb-note">{v.note}</p></div>)}
      <p className="verb-hint">Touchez le nom d’un temps pour voir quand l’employer, avec des exemples.</p>
      {DISPLAY_TENSES.map((t) => {
        const forms = c[t]; if (!forms) return null;
        const isImp = t === "imperatif";
        const drilled = DRILL_TENSES.indexOf(t) >= 0;
        const acquired = drilled && (tenseStreak[t] || 0) >= MASTER_STREAK;
        const open = openTense === t;
        const u = TENSE_USAGE[t];
        return (
          <div key={t} className="ten-block">
            <button className="ten-label-btn" onClick={() => setOpenTense(open ? null : t)}>
              <span className="ten-label-name">{TENSE_LABEL[t]}{acquired && <span className="ten-check">✓ acquis</span>}</span>
              <span className="ten-toggle">{open ? "masquer" : "quand l’employer ?"}</span>
            </button>
            {open && u && (
              <div className="ten-usage">
                <p className="ten-usage-when">{u.usage}</p>
                <ul className="ten-usage-ex">{u.ex.map((e, i) => (<li key={i}>{e}</li>))}</ul>
              </div>
            )}
            <div className={"ten-grid" + (isImp ? " ten-imp" : "")}>
              {forms.map((f, p) => (<div key={p} className="cline">{lineFor(t, p, f)}</div>))}
            </div>
            {t === "passeCompose" && (<div className="ten-foot">Auxiliaire « {v.aux} » au présent + participe passé. L’exercice porte sur les temps simples.</div>)}
          </div>
        );
      })}
      <button className="btn-primary verb-drill" onClick={onExercise}>S’exercer : compléter les tableaux →</button>
    </div>
  );
}
/* ===================== SÉANCE & COMPOSANTS DE QUESTION ================= */
function renderContext(item, revealed) {
  const parts = (item.context || "").split("___");
  return (
    <p className={"context" + (item.cat === "conjugaison" ? " context-conj" : "")}>
      {parts[0]}
      {revealed ? <span className="blank-filled">{item.answer}</span> : <span className="blank">___</span>}
      {parts[1]}
    </p>
  );
}

function TenseFillBlock({ item, values, onChange, revealed, table, onEnter }) {
  return (
    <div className="tfill">
      {item.rows.map((r, i) => {
        const cell = table ? table[i] : null;
        const cls = !revealed ? "" : cell.ok ? " tf-ok" : cell.near ? " tf-near" : " tf-ko";
        return (
          <div key={i} className="tfill-row">
            <span className="tfill-pre">{r.pre}</span>
            <span className="tfill-cell">
              <input className={"tfill-input" + cls} value={values[i] || ""} disabled={revealed}
                onChange={(e) => onChange(i, e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") onEnter(); }}
                placeholder="…" autoComplete="off" autoCapitalize="off" spellCheck={false} />
              {revealed && cell && !cell.ok && <span className="tfill-correct">{r.answer}</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SmsBlock({ item, revealed, feedback, onPick }) {
  const tokens = smsParse(item.text);
  const picked = feedback && feedback.sms ? feedback.sms.picked : null;
  const target = feedback && feedback.sms ? feedback.sms.target : -1;
  return (
    <div className="sms-block">
      <div className="sms-thread">
        <span className="sms-meta">Message reçu — repérez l’erreur</span>
        <div className="sms-bubble">
          {tokens.map((tok, i) => {
            if (isSpace(tok)) return <span key={i}>{tok}</span>;
            let cls = "sms-word";
            if (revealed) {
              if (i === target) cls += " w-err";
              else if (picked && picked.type === "word" && picked.index === i) cls += " w-pick";
            }
            return (<button key={i} className={cls} disabled={revealed} onClick={() => onPick({ type: "word", index: i })}>{tok}</button>);
          })}
        </div>
      </div>
      <button className={"sms-none" + (revealed ? (item.errorFree ? " none-good" : (picked && picked.type === "none" ? " none-bad" : " none-dim")) : "")} disabled={revealed} onClick={() => onPick({ type: "none" })}>Aucune erreur</button>
      {revealed && (
        <div className="sms-fix">
          {item.errorFree
            ? <p className="fix-ok">✓ Ce message est correct.</p>
            : <p className="fix-line"><s>{item.error.wrong}</s> → <strong>{item.error.right}</strong></p>}
        </div>
      )}
    </div>
  );
}

function DicteeReview({ grade, sentence }) {
  return (
    <div className="dictee-review">
      <p className="dr-label">La phrase correcte :</p>
      <p className="dr-sentence">{grade.words.map((w, i) => (<span key={i} className={w.ok ? "w-ok" : "w-ko"}>{w.target || ""}{" "}</span>))}</p>
      <p className="dr-yours">Vous avez écrit : {grade.words.map((w, i) => (<span key={i} className={w.ok ? "" : "y-ko"}>{w.user || "—"}{" "}</span>))}</p>
    </div>
  );
}

function Session({ item, index, total, answer, setAnswer, revealed, feedback, onCheck, onNext, onSkip, inputRef, speech }) {
  const [tvals, setTvals] = useState([]);
  useEffect(() => { setTvals([]); }, [item]);

  const pct = Math.round(((index + (revealed ? 1 : 0)) / total) * 100);
  const isDictee = item.type === "dictee";
  const isSms = item.type === "sms";
  const isFill = !!item.tensefill;
  const typePill = isDictee ? "✎ Dictée" : isSms ? "✉ Message" : isFill ? "✍ Tableau" : null;

  function submitFill() { if (!revealed) onCheck(tvals); }
  const fillIncomplete = isFill && item.rows.some((r, i) => !(tvals[i] && tvals[i].trim()));

  return (
    <div className="screen">
      <div className="progress-wrap">
        <div className="progress-bar"><span style={{ width: pct + "%" }}></span></div>
        <span className="progress-count">{index + 1}/{total}</span>
      </div>
      <div className="tag-row">
        <span className={"cat-tag cat-" + item.cat}>{CAT_LABEL[item.cat]}</span>
        {typePill && <span className="type-pill">{typePill}</span>}
      </div>

      <div className="question-card">
        <p className="prompt">{item.prompt}</p>

        {isDictee && (
          <div className="dictee-zone">
            <div className="audio-controls">
              <button className="audio-btn" onClick={() => speech.speak(item.sentence, 0.9)} disabled={!speech.supported}>▶ Écouter</button>
              <button className="audio-btn audio-slow" onClick={() => speech.speak(item.sentence, 0.55)} disabled={!speech.supported}>🐢 Lentement</button>
            </div>
            {!speech.supported && <span className="fallback-note">Lecture audio indisponible ici — vous pouvez « Passer » cette dictée plus bas.</span>}
          </div>
        )}

        {isSms && <SmsBlock item={item} revealed={revealed} feedback={feedback} onPick={(c) => onCheck(c)} />}

        {!isDictee && !isSms && !isFill && renderContext(item, revealed)}

        {isFill && (
          <React.Fragment>
            <p className="table-instr">Complétez tout le tableau, puis validez. « Entrée » valide.</p>
            <TenseFillBlock item={item} values={tvals} revealed={revealed} table={feedback && feedback.table} onEnter={submitFill}
              onChange={(i, val) => setTvals((p) => { const n = p.slice(); n[i] = val; return n; })} />
          </React.Fragment>
        )}
      </div>

      {item.type === "saisie" && !revealed && (
        <div className="saisie-wrap">
          <input ref={inputRef} className="saisie-input" value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") onCheck(); }} placeholder="Votre réponse" autoComplete="off" autoCapitalize="off" spellCheck={false} />
          <button className="btn-primary btn-check" onClick={() => onCheck()}>Vérifier</button>
        </div>
      )}

      {isDictee && !revealed && (
        <div className="saisie-wrap saisie-dictee">
          <textarea ref={inputRef} className="dictee-input" rows={2} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Écrivez la phrase entendue" autoComplete="off" spellCheck={false} />
          <div className="dictee-actions">
            <button className="btn-primary btn-check" onClick={() => onCheck()}>Vérifier</button>
            <button className="btn-skip" onClick={onSkip}>Passer — je ne peux pas écouter</button>
          </div>
        </div>
      )}

      {item.type === "qcm" && (
        <div className="options">
          {item.options.map((opt, i) => {
            let cls = "opt";
            if (revealed) cls += opt === item.answer ? " opt-correct" : " opt-dim";
            return (<button key={i} className={cls} disabled={revealed} onClick={() => onCheck(opt)}><span className="opt-key">{"ABC"[i]}</span>{opt}</button>);
          })}
        </div>
      )}

      {isFill && !revealed && (
        <button className="btn-primary table-validate" disabled={fillIncomplete} onClick={submitFill}>Valider le tableau</button>
      )}

      {revealed && feedback && (
        <div className={"feedback fb-" + feedback.kind}>
          <p className="fb-head">
            {feedback.kind === "ok" ? (isFill ? "Tableau validé !" : "Juste !") : feedback.kind === "near" ? "Presque — accent oublié" : isFill ? "À corriger" : "Pas tout à fait"}
            {item.type === "saisie" && feedback.kind !== "ok" && (<span className="fb-answer">{feedback.kind === "near" ? "" : <s>{answer || "—"}</s>}{item.answer}</span>)}
          </p>
          {isDictee && feedback.dictee && <DicteeReview grade={feedback.dictee} sentence={item.sentence} />}
          {item.rule && <p className="fb-rule">{item.rule}</p>}
          <button className="btn-next" onClick={onNext}>{index + 1 < total ? "Suivant →" : "Voir le bilan →"}</button>
        </div>
      )}
    </div>
  );
}

/* =============================== BILAN ================================= */
function Done({ results, stats, onHome, onAgain, onDrillItems, backLabel }) {
  const correct = results.filter((r) => r.correct).length;
  const total = results.length;
  const seen = {}, toReview = [];
  results.filter((r) => !r.correct).forEach((r) => { if (!seen[r.item.id]) { seen[r.item.id] = true; toReview.push(r.item); } });

  function label(item) {
    if (item.tensefill) return item.verb + " · " + TENSE_LABEL[item.tense] + " (tableau)";
    if (item.type === "dictee") return "Dictée : « " + item.sentence + " »";
    if (item.type === "sms") return "Message : « " + item.text + " »";
    return CAT_LABEL[item.cat] + " — " + (item.prompt || "");
  }
  const msg = total === 0 ? "" : correct === total ? "Sans faute, bravo !" : correct >= total * 0.7 ? "Beau score." : "C’est en forgeant qu’on devient forgeron.";

  return (
    <div className="screen">
      <header className="masthead"><span className="eyebrow">Bilan de la séance</span></header>
      <div className="paper bilan-card">
        <div className="score-big">{correct}<span className="score-sep">/</span>{total}</div>
        <p className="bilan-msg">{msg}</p>
        {stats.streak > 1 && <p className="bilan-streak">{stats.streak} jours de suite ✦</p>}
      </div>

      {toReview.length > 0 && (
        <div className="review-list">
          <div className="review-head">
            <p className="review-title" style={{ margin: 0 }}>À revoir</p>
            <button className="review-all" onClick={() => onDrillItems(toReview)}>Tout retravailler</button>
          </div>
          <p className="review-tip">Touchez une notion pour la retravailler seule. Elle sort de cette liste après 3 bonnes réponses d’affilée.</p>
          {toReview.map((item, i) => (
            <button key={i} className="review-item-btn" onClick={() => onDrillItems([item])}>
              <span className={"dot dot-" + item.cat}></span>
              <span className="review-item-text"><strong>{label(item)}</strong>{item.rule && <span className="review-rule">{item.rule}</span>}</span>
              <span className="review-arrow">→</span>
            </button>
          ))}
        </div>
      )}

      <div className="done-actions">
        <button className="btn-primary" onClick={onAgain}>Nouvelle séance</button>
        <button className="btn-ghost" onClick={onHome}>{backLabel}</button>
      </div>
    </div>
  );
}

function RulesScreen({ errItems, onBack }) {
  const errIds = {}; errItems.forEach((i) => (errIds[i.id] = true));
  const exampleOf = (q) => (q.context ? q.context.replace("___", "…") : q.sentence || q.text || "");
  const groups = CATS.map((cat) => ({ cat, rules: BANK.filter((q) => q.cat === cat && q.rule).map((q) => ({ id: q.id, rule: q.rule, ex: exampleOf(q), err: !!errIds[q.id] })) })).filter((g) => g.rules.length);
  const errCount = Object.keys(errIds).filter((id) => BANK_IDS.has(id)).length;
  const grp = (v) => (v === 1 ? "1er groupe" : v === 2 ? "2e groupe" : "3e groupe");
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Accueil</button>
      <header className="masthead"><span className="eyebrow">Mémo complet</span><h1 className="logo-sm">Tout pour réviser</h1></header>
      <p className="verb-hint">Le récapitulatif complet, à faire défiler : les règles des exercices, l’emploi de chaque temps, les particularités des verbes et les astuces des cours.{errCount > 0 ? " Ce que vous avez raté est signalé en rouge." : ""}</p>

      {groups.map((g) => (
        <div key={g.cat} className="rule-group">
          <div className="rule-group-head"><span className={"dot dot-" + g.cat}></span>Règles — {CAT_LABEL[g.cat]}</div>
          {g.rules.map((r) => (
            <div key={r.id} className={"rule-card" + (r.err ? " rule-err" : "")}>
              {r.ex && <p className="rule-ex">« {r.ex} »</p>}
              <p className="rule-text">{r.rule}</p>
              {r.err && <span className="rule-badge">à revoir</span>}
            </div>
          ))}
        </div>
      ))}

      <div className="rule-group">
        <div className="rule-group-head"><span className="dot dot-conjugaison"></span>Emploi des temps</div>
        {DISPLAY_TENSES.map((t) => { const u = TENSE_USAGE[t]; if (!u) return null; return (
          <div key={t} className="rule-card">
            <p className="rule-sub">{TENSE_LABEL[t]}</p>
            <p className="rule-text">{u.usage}</p>
            <ul className="rule-ex-list">{u.ex.map((e, i) => (<li key={i}>{e}</li>))}</ul>
          </div>
        ); })}
      </div>

      <div className="rule-group">
        <div className="rule-group-head"><span className="dot dot-conjugaison"></span>Particularités des verbes</div>
        {VERBS.map((v) => (
          <div key={v.inf} className="rule-card">
            <p className="rule-sub">{v.inf}<span className="rule-tag">{grp(v.group)} · participe : {v.participe}</span></p>
            <p className="rule-text">{v.note}</p>
          </div>
        ))}
      </div>

      <div className="rule-group">
        <div className="rule-group-head"><span className="dot dot-accord"></span>Astuces des cours</div>
        {LESSONS.filter((l) => l.astuce).map((l) => (
          <div key={l.id} className="rule-card">
            <p className="rule-sub">{l.title}</p>
            <p className="rule-text">{l.astuce}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =============================== MONTAGE ============================== */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
