<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>L'Atelier — orthographe &amp; conjugaison</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap');
.atelier-root{--paper:#FBFAF6;--ink:#1B2A4A;--ink-soft:#5B6781;--line:#CBD8EC;--blue:#2C4C86;--blue-deep:#21386A;--red:#C23A33;--green:#2E7D52;--green-soft:#EAF4EE;--red-soft:#FBEDEC;--amber:#B8791C;--amber-soft:#FAF1DF;--violet:#6A4FB0;--violet-soft:#EEEAF8;font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--paper);min-height:100vh;width:100%;-webkit-font-smoothing:antialiased;}
*{box-sizing:border-box;}
body{margin:0;}
.atelier-root button{font-family:inherit;cursor:pointer;}
.atelier-root button:focus-visible{outline:2px solid var(--blue);outline-offset:2px;}
.loading{padding:80px 24px;text-align:center;color:var(--ink-soft);font-style:italic;}
.screen{max-width:560px;margin:0 auto;padding:28px 20px 56px;}
.back{background:none;border:none;color:var(--ink-soft);font-size:14px;font-weight:600;padding:0 0 14px;}
.back:hover{color:var(--blue);}
.masthead{text-align:center;margin-bottom:22px;}
.eyebrow{display:inline-block;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.logo{font-family:'Spectral',serif;font-weight:700;font-size:46px;line-height:1;margin:6px 0 0;letter-spacing:-.01em;}
.logo-sm{font-family:'Spectral',serif;font-weight:700;font-size:30px;line-height:1.1;margin:6px 0 0;}
.paper{position:relative;background:#fff;border-radius:4px;border:1px solid #E7E2D6;box-shadow:0 1px 0 #EDE8DC,0 10px 30px -18px rgba(27,42,74,.35);background-image:repeating-linear-gradient(to bottom,transparent 0 31px,var(--line) 31px 32px);background-position:0 14px;padding:26px 24px 26px 30px;overflow:hidden;}
.paper::before{content:"";position:absolute;top:0;bottom:0;left:18px;width:1.5px;background:rgba(194,58,51,.4);}
.card-intro{padding-top:24px;}
.greet{font-family:'Spectral',serif;font-size:24px;font-weight:600;margin:0 0 6px;}
.lede{color:var(--ink-soft);font-size:15px;line-height:1.55;margin:0 0 18px;max-width:44ch;}
.focus-row{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 18px;}
.chip{background:#fff;border:1.5px solid #D8D2C4;border-radius:99px;padding:7px 14px;font-size:13px;font-weight:500;color:var(--ink-soft);transition:all .12s;}
.chip:hover{border-color:var(--blue);color:var(--blue);}
.chip-on{background:var(--ink);border-color:var(--ink);color:#fff;}
.btn-primary{background:var(--blue);color:#fff;border:none;border-radius:3px;font-size:15px;font-weight:600;padding:13px 22px;transition:background .15s,transform .05s;}
.btn-primary:hover{background:var(--blue-deep);}
.btn-primary:active{transform:translateY(1px);}
.btn-primary:disabled{opacity:.4;cursor:not-allowed;}
.link-review{display:inline-block;margin:14px 0 0;background:none;border:none;color:var(--red);font-weight:600;font-size:14px;padding:0;}
.link-review:hover{text-decoration:underline;}
.note-done{font-family:'Caveat',cursive;color:var(--green);font-size:18px;margin:12px 0 0;}
.btn-zone{display:block;width:100%;text-align:left;background:#fff;border:1.5px solid #CDE0D4;border-left:4px solid var(--green);border-radius:4px;padding:16px 18px;margin:16px 0;transition:background .12s,transform .05s;}
.btn-zone:hover{background:#F4FAF6;}
.btn-zone:active{transform:translateY(1px);}
.zone-label{display:block;font-family:'Spectral',serif;font-size:19px;font-weight:600;color:var(--ink);}
.zone-sub{display:block;font-size:13px;color:var(--ink-soft);margin-top:2px;}
.zone-meta{display:block;font-size:12px;color:var(--green);font-weight:600;margin-top:7px;}
.stats-row{display:flex;gap:10px;margin:18px 0 16px;}
.stat{flex:1;background:#fff;border:1px solid #E7E2D6;border-radius:4px;padding:14px 10px;text-align:center;}
.stat-accent{border-color:#EAC9C6;background:var(--red-soft);}
.stat-value{display:block;font-family:'Spectral',serif;font-size:28px;font-weight:700;line-height:1;}
.stat-accent .stat-value{color:var(--red);}
.stat-label{display:block;font-size:11px;color:var(--ink-soft);margin-top:5px;letter-spacing:.02em;}
.progress-cats{display:flex;flex-direction:column;gap:12px;margin:6px 0 18px;}
.pcat-head{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;margin-bottom:6px;}
.pcat-frac{margin-left:auto;color:var(--ink-soft);font-weight:500;font-variant-numeric:tabular-nums;}
.pbar{height:7px;background:#E7E2D6;border-radius:99px;overflow:hidden;}
.pbar span{display:block;height:100%;border-radius:99px;transition:width .4s ease;}
.pbar-accord span{background:var(--blue);}.pbar-conjugaison span{background:var(--green);}.pbar-orthographe span{background:var(--red);}.pbar-message span{background:var(--violet);}
.dot{width:9px;height:9px;border-radius:99px;flex-shrink:0;}
.dot-accord{background:var(--blue);}.dot-conjugaison{background:var(--green);}.dot-orthographe{background:var(--red);}.dot-message{background:var(--violet);}
.settings-row{display:flex;align-items:center;gap:10px;margin:0 0 18px;font-size:13px;color:var(--ink-soft);}
.settings-label{font-weight:600;}
.seg{display:inline-flex;border:1.5px solid #D8D2C4;border-radius:4px;overflow:hidden;}
.seg-btn{background:#fff;border:none;padding:6px 13px;font-size:13px;font-weight:600;color:var(--ink-soft);border-right:1px solid #E7E2D6;}
.seg-btn:last-child{border-right:none;}
.seg-on{background:var(--blue);color:#fff;}
.settings-hint{font-size:12px;}
.home-foot{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--ink-soft);border-top:1px solid #E7E2D6;padding-top:14px;}
.link-reset{background:none;border:none;color:var(--ink-soft);text-decoration:underline;font-size:12px;}
.link-reset:hover{color:var(--red);}
.vgroup{margin:18px 0;}
.vgroup-head{display:flex;align-items:baseline;gap:10px;margin-bottom:10px;flex-wrap:wrap;}
.vgroup-title{font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--green);}
.vgroup-note{font-size:12px;color:var(--ink-soft);}
.vlist{display:flex;flex-direction:column;gap:8px;}
.vrow{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #E7E2D6;border-radius:4px;padding:12px 14px;text-align:left;transition:border-color .12s,background .12s;}
.vrow:hover{border-color:var(--green);background:#F4FAF6;}
.vrow-inf{font-family:'Spectral',serif;font-size:18px;font-weight:600;flex:0 0 96px;}
.vrow-bar{flex:1;height:6px;background:#E7E2D6;border-radius:99px;overflow:hidden;}
.vrow-bar span{display:block;height:100%;background:var(--green);border-radius:99px;}
.vrow-frac{font-size:12px;color:var(--ink-soft);font-variant-numeric:tabular-nums;min-width:44px;text-align:right;}
.vrow-arrow{color:var(--ink-soft);font-weight:700;}
.verb-head{text-align:center;margin-bottom:18px;}
.verb-title{font-family:'Spectral',serif;font-size:40px;font-weight:700;margin:0;font-style:italic;}
.verb-group{font-size:13px;color:var(--ink-soft);}
.verb-note-card{padding-top:22px;margin-bottom:18px;}
.verb-note{font-size:14px;line-height:1.55;color:var(--ink);margin:0;}
.ten-block{margin:0 0 18px;}
.ten-label{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--green);border-bottom:1.5px solid #E0EAE3;padding-bottom:5px;margin-bottom:8px;}
.ten-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 18px;}
.ten-imp{grid-template-columns:1fr;}
.cline{font-family:'Spectral',serif;font-size:17px;line-height:1.5;padding:1px 0;}
.cline-none{color:var(--ink-soft);font-style:italic;font-family:'Inter',sans-serif;font-size:14px;}
.ten-foot{font-size:12px;color:var(--ink-soft);margin-top:6px;font-style:italic;}
.verb-drill{display:block;width:100%;margin-top:8px;}
.progress-wrap{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
.progress-bar{flex:1;height:6px;background:#E7E2D6;border-radius:99px;overflow:hidden;}
.progress-bar span{display:block;height:100%;background:var(--blue);border-radius:99px;transition:width .3s ease;}
.progress-count{font-size:12px;color:var(--ink-soft);font-variant-numeric:tabular-nums;min-width:42px;text-align:right;}
.tag-row{display:flex;align-items:center;gap:8px;margin-bottom:12px;}
.cat-tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:99px;}
.cat-accord{background:#E8EEF8;color:var(--blue-deep);}.cat-conjugaison{background:#EAF4EE;color:var(--green);}.cat-orthographe{background:var(--red-soft);color:var(--red);}.cat-message{background:var(--violet-soft);color:var(--violet);}
.type-pill{font-size:11px;font-weight:600;letter-spacing:.04em;padding:4px 9px;border-radius:99px;background:var(--amber-soft);color:var(--amber);}
.question-card{margin-bottom:18px;}
.prompt{font-size:13px;font-weight:600;color:var(--ink-soft);margin:0 0 14px;letter-spacing:.01em;}
.context{font-family:'Spectral',serif;font-size:21px;line-height:1.5;margin:0 0 22px;}
.context-conj{font-size:24px;}
.blank{color:var(--blue);font-weight:600;border-bottom:2px solid var(--blue);padding:0 2px;}
.blank-filled{font-family:'Caveat',cursive;color:var(--red);border-bottom:none;font-size:26px;font-weight:700;}
.dictee-zone{margin-bottom:18px;}
.audio-controls{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px;}
.audio-btn{background:var(--amber-soft);color:var(--amber);border:1.5px solid #EAD6AE;border-radius:99px;padding:11px 20px;font-size:15px;font-weight:600;}
.audio-btn:hover{background:#F5E6C8;}
.audio-slow{background:#fff;}
.dictee-fallback{display:block;}
.fallback-note{display:block;font-family:'Inter',sans-serif;font-size:12px;color:var(--ink-soft);margin-top:4px;}
.sms-block{margin-bottom:6px;}
.sms-thread{margin:4px 0 18px;}
.sms-meta{display:block;font-size:11px;color:var(--violet);font-weight:600;letter-spacing:.04em;margin-bottom:6px;}
.sms-bubble{display:inline-block;max-width:94%;background:#F1EFF6;border:1px solid #E4DFF1;border-radius:6px 18px 18px 18px;padding:14px 16px;font-size:18px;line-height:1.7;color:var(--ink);}
.sms-word{display:inline;border:none;background:transparent;font:inherit;color:inherit;padding:1px 3px;border-radius:5px;cursor:pointer;box-decoration-break:clone;-webkit-box-decoration-break:clone;}
.sms-word:hover:not(:disabled){background:#E0D9F4;text-decoration:underline;}
.sms-word:disabled{cursor:default;}
.w-err{background:var(--red-soft);color:var(--red);font-weight:700;text-decoration:underline;text-decoration-style:wavy;text-decoration-color:rgba(194,58,51,.6);}
.w-pick{background:var(--amber-soft);color:var(--amber);text-decoration:line-through;}
.sms-none{margin-top:2px;width:100%;text-align:left;background:#fff;border:1.5px solid #D8D2C4;border-radius:4px;padding:13px 14px;font-size:15px;font-weight:600;color:var(--ink-soft);transition:all .12s;}
.sms-none:hover:not(:disabled){border-color:var(--green);color:var(--green);background:#F4FAF6;}
.none-good{border-color:var(--green);background:var(--green-soft);color:var(--green);}
.none-bad{border-color:var(--amber);background:var(--amber-soft);color:var(--amber);}
.none-dim{opacity:.5;}
.sms-fix{margin:2px 0 6px;}
.fix-line{font-family:'Spectral',serif;font-size:19px;margin:0;}
.fix-line s{color:var(--red);opacity:.7;}
.fix-line strong{color:var(--green);font-family:'Caveat',cursive;font-size:26px;font-weight:700;}
.fix-ok{font-family:'Inter',sans-serif;font-size:15px;color:var(--green);font-weight:600;}
.options{display:flex;flex-direction:column;gap:10px;}
.opt{display:flex;align-items:center;gap:12px;text-align:left;background:#fff;border:1.5px solid #D8D2C4;border-radius:4px;padding:13px 14px;font-size:16px;color:var(--ink);transition:border-color .12s,background .12s;}
.opt-key{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:4px;background:#F0ECE0;color:var(--ink-soft);font-size:12px;font-weight:700;flex-shrink:0;}
.opt:hover:not(:disabled){border-color:var(--blue);background:#F7F9FD;}
.opt-correct{border-color:var(--green);background:var(--green-soft);font-weight:600;}
.opt-correct .opt-key{background:var(--green);color:#fff;}
.opt-dim{opacity:.45;}
.saisie-wrap{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-start;}
.saisie-dictee{flex-direction:column;}
.saisie-input{flex:1;min-width:0;font-family:'Spectral',serif;font-size:20px;padding:12px 14px;border:none;border-bottom:2px solid var(--blue);background:#F7F9FD;border-radius:4px 4px 0 0;color:var(--ink);outline:none;}
.dictee-input{width:100%;font-family:'Spectral',serif;font-size:19px;line-height:1.5;padding:12px 14px;border:none;border-bottom:2px solid var(--blue);background:#F7F9FD;border-radius:4px 4px 0 0;color:var(--ink);outline:none;resize:vertical;}
.saisie-input:focus,.dictee-input:focus{background:#EEF3FB;}
.si-ok{border-bottom-color:var(--green);background:var(--green-soft);}
.si-ko{border-bottom-color:var(--red);background:var(--red-soft);}
.si-near{border-bottom-color:var(--amber);background:var(--amber-soft);}
.saisie-dictee .btn-check{margin-top:12px;align-self:flex-start;}
.feedback{border-radius:4px;padding:18px 20px;animation:rise .25s ease;}
.fb-ok{background:var(--green-soft);border-left:3px solid var(--green);}
.fb-ko{background:var(--red-soft);border-left:3px solid var(--red);}
.fb-near{background:var(--amber-soft);border-left:3px solid var(--amber);}
.fb-head{margin:0 0 8px;font-weight:700;font-size:15px;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;}
.fb-ok .fb-head{color:var(--green);}.fb-ko .fb-head{color:var(--red);}.fb-near .fb-head{color:var(--amber);}
.fb-answer{font-family:'Caveat',cursive;font-size:22px;font-weight:700;}
.fb-answer s{opacity:.5;font-size:18px;margin-right:4px;}
.fb-near{font-size:14px;margin:0 0 10px;color:var(--ink);}
.fb-rule{margin:14px 0 16px;font-size:14px;line-height:1.55;color:var(--ink);}
.btn-next{background:var(--ink);color:#fff;border:none;border-radius:3px;padding:11px 20px;font-size:14px;font-weight:600;}
.btn-next:hover{background:#0F1B33;}
.dictee-review{margin:6px 0 4px;}
.dr-label{font-size:12px;color:var(--ink-soft);margin:0 0 4px;font-weight:600;letter-spacing:.02em;}
.dr-sentence{font-family:'Spectral',serif;font-size:19px;line-height:1.5;margin:0 0 10px;}
.w-ok{color:var(--ink);}
.w-ko{color:var(--red);font-weight:700;text-decoration:underline;text-decoration-color:rgba(194,58,51,.5);}
.dr-yours{font-size:14px;color:var(--ink-soft);margin:0;}
.y-ko{color:var(--red);text-decoration:line-through;text-decoration-color:rgba(194,58,51,.6);}
.bilan-card{text-align:center;padding:34px 24px;}
.score-big{font-family:'Spectral',serif;font-size:64px;font-weight:700;line-height:1;color:var(--blue);}
.score-sep{color:var(--ink-soft);font-weight:400;margin:0 6px;font-size:46px;}
.bilan-msg{font-size:16px;color:var(--ink);margin:14px 0 0;}
.bilan-streak{font-family:'Caveat',cursive;font-size:22px;color:var(--red);margin:10px 0 0;}
.review-list{margin:22px 0;}
.review-title{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft);margin:0 0 12px;}
.review-rule{display:block;font-size:13px;color:var(--ink-soft);line-height:1.5;margin-top:3px;}
.review-item strong,.review-item-text strong{font-family:'Spectral',serif;font-size:16px;display:block;line-height:1.4;}
.done-actions{display:flex;gap:12px;margin-top:8px;flex-wrap:wrap;}
.btn-ghost{background:none;border:1.5px solid #D8D2C4;color:var(--ink);border-radius:3px;padding:13px 22px;font-size:15px;font-weight:600;}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue);}
.btn-zone.zone-cours{border-left-color:var(--blue);}
.btn-zone.zone-cours:hover{background:#F5F8FD;}
.zone-cours .zone-meta{color:var(--blue);}
.lesson-list{display:flex;flex-direction:column;gap:8px;}
.lesson-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #E7E2D6;border-radius:4px;padding:14px 16px;text-align:left;transition:border-color .12s,background .12s;}
.lesson-row:hover{border-color:var(--blue);background:#F7F9FD;}
.lesson-row-text{flex:1;}
.lesson-row-title{display:block;font-family:'Spectral',serif;font-size:17px;font-weight:600;color:var(--ink);line-height:1.3;}
.lesson-row-sub{display:block;font-size:13px;color:var(--ink-soft);margin-top:3px;line-height:1.4;}
.lesson-head{margin-bottom:16px;}
.lesson-head .cat-tag{margin-bottom:10px;}
.lesson-title{font-family:'Spectral',serif;font-size:27px;font-weight:700;line-height:1.15;margin:0;}
.lesson-tagline{font-size:14px;color:var(--ink-soft);margin:8px 0 0;line-height:1.45;}
.lesson-body{padding-top:24px;}
.lesson-section{margin-bottom:18px;}
.ls-h{font-family:'Spectral',serif;font-size:17px;font-weight:700;color:var(--ink);margin:0 0 6px;}
.ls-p{font-size:14px;line-height:1.6;color:var(--ink);margin:0 0 8px;}
.ls-ex-group{display:flex;flex-direction:column;gap:8px;margin-top:8px;}
.ls-ex{display:flex;flex-direction:column;gap:2px;border-left:3px solid #E7E2D6;padding-left:12px;}
.ex-line{font-family:'Spectral',serif;font-size:16px;line-height:1.4;}
.ex-good{color:var(--green);}
.ex-bad{color:var(--red);text-decoration:line-through;}
.ex-note{font-size:12px;color:var(--ink-soft);}
.astuce{background:var(--amber-soft);border-radius:4px;padding:14px 16px;margin-top:6px;}
.astuce-label{display:block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--amber);margin-bottom:5px;}
.astuce p{margin:0;font-size:14px;line-height:1.55;color:var(--ink);}
.lesson-practice{display:block;width:100%;margin-top:16px;}
.ten-label-btn{display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:none;border-bottom:1.5px solid #E0EAE3;padding:0 0 5px;margin-bottom:8px;cursor:pointer;text-align:left;}
.ten-label-name{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--green);display:flex;align-items:center;gap:8px;}
.ten-check{color:var(--green);font-size:10px;letter-spacing:.04em;background:var(--green-soft);padding:2px 7px;border-radius:99px;}
.ten-toggle{font-size:11px;font-weight:600;color:var(--ink-soft);text-transform:none;letter-spacing:0;white-space:nowrap;}
.ten-label-btn:hover .ten-toggle{color:var(--blue);text-decoration:underline;}
.ten-usage{background:#F4FAF6;border-left:3px solid var(--green);border-radius:4px;padding:12px 14px;margin-bottom:10px;}
.ten-usage-when{font-size:14px;line-height:1.5;color:var(--ink);margin:0 0 8px;}
.ten-usage-ex{margin:0;padding-left:18px;}
.ten-usage-ex li{font-family:'Spectral',serif;font-size:15px;color:var(--ink-soft);line-height:1.5;}
.verb-hint{font-size:13px;color:var(--ink-soft);margin:10px 0 18px;line-height:1.4;}
.table-instr{font-size:13px;color:var(--ink-soft);margin:0 0 14px;}
.table-validate{display:block;width:100%;margin-top:4px;}
.tfill{display:flex;flex-direction:column;gap:10px;margin:6px 0 16px;}
.tfill-row{display:flex;align-items:center;gap:10px;}
.tfill-pre{font-family:'Spectral',serif;font-size:18px;color:var(--ink-soft);min-width:88px;text-align:right;flex-shrink:0;}
.tfill-cell{position:relative;flex:1;display:flex;align-items:center;gap:10px;min-width:0;}
.tfill-input{flex:1;min-width:0;font-family:'Spectral',serif;font-size:18px;padding:9px 12px;border:none;border-bottom:2px solid var(--blue);background:#F7F9FD;border-radius:4px 4px 0 0;color:var(--ink);outline:none;}
.tfill-input:focus{background:#EEF3FB;}
.tf-ok{border-bottom-color:var(--green);background:var(--green-soft);}
.tf-ko{border-bottom-color:var(--red);background:var(--red-soft);}
.tf-near{border-bottom-color:var(--amber);background:var(--amber-soft);}
.tfill-correct{font-family:'Caveat',cursive;font-size:22px;font-weight:700;color:var(--green);white-space:nowrap;}
.review-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:4px;}
.review-all{background:none;border:none;color:var(--blue);font-weight:600;font-size:13px;}
.review-all:hover{text-decoration:underline;}
.review-tip{font-size:12px;color:var(--ink-soft);margin:0 0 12px;line-height:1.4;}
.review-item-btn{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;background:#fff;border:1px solid #E7E2D6;border-radius:4px;padding:12px 14px;margin-bottom:8px;transition:border-color .12s,background .12s;}
.review-item-btn:hover{border-color:var(--blue);background:#F7F9FD;}
.review-item-btn .dot{margin-top:6px;}
.review-item-text{flex:1;}
.review-arrow{margin-left:auto;color:var(--ink-soft);font-weight:700;align-self:center;}
@keyframes rise{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}
@media (prefers-reduced-motion:reduce){*{animation:none !important;transition:none !important;}}
@media (max-width:430px){
  .logo{font-size:38px;}.context{font-size:19px;}.context-conj{font-size:22px;}.score-big{font-size:54px;}
  .stats-row{gap:7px;}.stat-value{font-size:24px;}.sms-bubble{font-size:17px;}
  .ten-grid{grid-template-columns:1fr;}.vrow-inf{flex-basis:80px;font-size:16px;}
  .tfill-pre{min-width:72px;font-size:16px;}
}
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel" data-presets="env,react">
const { useState, useEffect, useRef } = React;

/* Stockage : localStorage avec repli en mémoire.
   → Fonctionne en local, sur GitHub Pages, et dans un aperçu sans localStorage. */
const __mem = {};
const storage = {
  async get(k) { try { const v = localStorage.getItem(k); return v == null ? null : { value: v }; } catch (e) { return __mem[k] != null ? { value: __mem[k] } : null; } },
  async set(k, v) { try { localStorage.setItem(k, v); } catch (e) { __mem[k] = v; } return { value: v }; },
};

/* =================== BANQUE D'EXERCICES (4 catégories) ================== */
const BANK = [
  { id: "a01", cat: "accord", type: "qcm", prompt: "Complétez l’accord.", context: "Les ___ galopaient dans la prairie.", options: ["chevals", "chevaux", "chevaus"], answer: "chevaux", rule: "Les noms en -al font leur pluriel en -aux : un cheval → des chevaux (sauf bal, carnaval, festival, récital…)." },
  { id: "a02", cat: "accord", type: "qcm", prompt: "Quel participe passé ?", context: "Elle a ___ les pommes du jardin.", options: ["mangé", "mangée", "mangées"], answer: "mangé", rule: "Avec avoir, le participe ne s’accorde pas avec le COD placé après le verbe : « a mangé les pommes »." },
  { id: "a03", cat: "accord", type: "qcm", prompt: "Quel participe passé ?", context: "Les pommes qu’elle a ___ étaient mûres.", options: ["mangé", "mangées", "mangé es"], answer: "mangées", rule: "Avec avoir, le participe s’accorde avec le COD placé AVANT : « qu’ » = les pommes (fém. plur.) → mangées." },
  { id: "a04", cat: "accord", type: "qcm", prompt: "Accordez avec être.", context: "Mes sœurs sont ___ hier soir.", options: ["arrivé", "arrivés", "arrivées"], answer: "arrivées", rule: "Avec être, le participe s’accorde avec le sujet : « mes sœurs » (fém. plur.) → arrivées." },
  { id: "a05", cat: "accord", type: "qcm", prompt: "Choisissez la bonne forme.", context: "Elle s’est ___ les mains avant le repas.", options: ["lavé", "lavée", "lavées"], answer: "lavé", rule: "Pronominal : le COD « les mains » est APRÈS → pas d’accord. (Mais « elle s’est lavée » s’accorde.)" },
  { id: "a06", cat: "accord", type: "qcm", prompt: "Adjectif de couleur.", context: "Elle portait des chaussures ___.", options: ["marron", "marrons", "marronnes"], answer: "marron", rule: "Les couleurs issues d’un nom (marron, orange…) sont invariables. Mais « des chaussures vertes » s’accorde." },
  { id: "a07", cat: "accord", type: "qcm", prompt: "Choisissez la bonne forme.", context: "Nous arriverons dans une ___.", options: ["demi-heure", "demie-heure", "demi heure"], answer: "demi-heure", rule: "Avant le nom, « demi » est invariable : une demi-heure. Après : « deux heures et demie »." },
  { id: "a08", cat: "accord", type: "qcm", prompt: "Combien de « s » ?", context: "Le stade contient quatre-___ places.", options: ["vingt", "vingts", "vingt's"], answer: "vingts", rule: "« Vingt » et « cent » prennent un s s’ils sont multipliés ET terminent le nombre : quatre-vingts (mais quatre-vingt-deux)." },
  { id: "a09", cat: "accord", type: "qcm", prompt: "Choisissez la bonne forme.", context: "Cette voiture a coûté trois ___ euros.", options: ["cent", "cents", "centes"], answer: "cents", rule: "« Cent » multiplié et en fin de nombre prend un s : trois cents (mais trois cent vingt → invariable)." },
  { id: "a10", cat: "accord", type: "qcm", prompt: "Tout / tous / toutes ?", context: "Les invités sont ___ partis.", options: ["tout", "tous", "toutes"], answer: "tous", rule: "« tous » pronom reprend « les invités » (masc. plur.). Devant un adjectif fém., « tout » varie : toutes contentes." },
  { id: "a11", cat: "accord", type: "qcm", prompt: "Leur / leurs ?", context: "Les enfants ont rangé ___ jouets.", options: ["leur", "leurs", "leur's"], answer: "leurs", rule: "Déterminant devant un nom pluriel → leurs. Pronom devant un verbe, invariable : « je leur parle »." },
  { id: "a12", cat: "accord", type: "qcm", prompt: "Accord du verbe.", context: "Ni Paul ni Marie ne ___ venir.", options: ["peut", "peuvent", "peux"], answer: "peuvent", rule: "Avec « ni… ni… », le verbe se met souvent au pluriel : ne peuvent." },
  { id: "a13", cat: "accord", type: "qcm", prompt: "Nu / nus ?", context: "Les enfants couraient ___ dans le jardin.", options: ["nu-pieds", "nus-pieds", "nu pieds"], answer: "nu-pieds", rule: "Avant le nom, « nu » est invariable et lié par un trait d’union : nu-pieds. Après : « les pieds nus »." },
  { id: "a14", cat: "accord", type: "qcm", prompt: "Quel(s) que / quelque ?", context: "___ soient les difficultés, nous réussirons.", options: ["Quelque", "Quelques", "Quelles que"], answer: "Quelles que", rule: "Devant un verbe (souvent être au subjonctif), « quel que » en deux mots, accordé : quelles que soient." },
  { id: "a15", cat: "accord", type: "qcm", prompt: "Accord du verbe.", context: "Tout le monde ___ d’accord avec lui.", options: ["est", "sont", "êtes"], answer: "est", rule: "« Tout le monde » est singulier, même s’il désigne plusieurs personnes : tout le monde est." },
  { id: "c01", cat: "conjugaison", type: "qcm", prompt: "-é, -er ou -ez ?", context: "Je vais ___ le courrier ce matin.", options: ["envoyé", "envoyer", "envoyez"], answer: "envoyer", rule: "Astuce : remplacez par « mordre ». « Je vais mordre » → infinitif → -er : envoyer." },
  { id: "c02", cat: "conjugaison", type: "qcm", prompt: "-é, -er ou -ez ?", context: "Hier, j’ai ___ une lettre importante.", options: ["envoyé", "envoyer", "envoyez"], answer: "envoyé", rule: "Astuce : « j’ai mordu » fonctionne → participe passé → -é : envoyé." },
  { id: "c03", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « rendre » au présent (3e pers. sing.).", context: "Il ___ toujours ses livres à temps.", answer: "rend", accept: ["rend"], rule: "Les verbes en -dre gardent leur d et ne prennent PAS de t : il rend, il prend, il répond." },
  { id: "c04", cat: "conjugaison", type: "saisie", prompt: "Impératif présent de « manger » (2e pers. sing.).", context: "« ___ ta soupe ! » dit-elle.", answer: "mange", accept: ["mange"], rule: "À l’impératif, les verbes en -er ne prennent pas de s à la 2e personne : mange ! (mais « manges-en »)." },
  { id: "c05", cat: "conjugaison", type: "qcm", prompt: "Futur ou conditionnel ?", context: "Demain, je ___ au marché.", options: ["irai", "irais", "iré"], answer: "irai", rule: "Fait certain → futur : j’irai. Hypothèse → conditionnel : « si j’avais le temps, j’irais »." },
  { id: "c06", cat: "conjugaison", type: "saisie", prompt: "Subjonctif présent de « faire » (2e pers. sing.).", context: "Il faut que tu ___ attention.", answer: "fasses", accept: ["fasses"], rule: "« faire » au subjonctif : que je fasse, que tu fasses. « Il faut que » entraîne le subjonctif." },
  { id: "c07", cat: "conjugaison", type: "saisie", prompt: "Subjonctif présent de « voir » (1re pers. sing.).", context: "Il aimerait que je le ___ demain.", answer: "voie", accept: ["voie"], rule: "« voir » au subjonctif : que je voie. On garde le i mais pas de y : « voie », pas « voye »." },
  { id: "c08", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « appeler » au présent (1re pers. sing.).", context: "Je t’ ___ dès que j’arrive.", answer: "appelle", accept: ["appelle"], rule: "« appeler » double le l devant un e muet : j’appelle. Mais « nous appelons » (un seul l)." },
  { id: "c09", cat: "conjugaison", type: "qcm", prompt: "Participe présent ou adjectif ?", context: "C’est un travail très ___.", options: ["fatigant", "fatiguant", "fatiguent"], answer: "fatigant", rule: "L’adjectif s’écrit « fatigant » (sans u). On garde le u au participe : « en fatiguant »." },
  { id: "c10", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « commencer » (1re pers. plur. du présent).", context: "Nous ___ la réunion à neuf heures.", answer: "commençons", accept: ["commençons"], rule: "Le c prend une cédille devant a, o, u pour garder le son [s] : nous commençons." },
  { id: "c11", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « envoyer » au futur (1re pers. sing.).", context: "Je vous ___ le dossier lundi.", answer: "enverrai", accept: ["enverrai"], rule: "« envoyer » est irrégulier au futur : j’enverrai (deux r). De même « renvoyer »." },
  { id: "c12", cat: "conjugaison", type: "qcm", prompt: "Indicatif ou subjonctif ?", context: "Bien qu’il ___ malade, il est venu.", options: ["est", "soit", "était"], answer: "soit", rule: "« Bien que » est toujours suivi du subjonctif : bien qu’il soit malade." },
  { id: "c13", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « finir » au présent (1re pers. sing.).", context: "Je ___ mon travail puis je pars.", answer: "finis", accept: ["finis"], rule: "Verbes en -ir du 2e groupe : je finis, il finit, nous finissons." },
  { id: "c14", cat: "conjugaison", type: "qcm", prompt: "Présent de « prendre ».", context: "Il ___ le train tous les matins.", options: ["prend", "prends", "prent"], answer: "prend", rule: "« prendre » : il prend (avec d, jamais de t). Je prends, tu prends." },
  { id: "c15", cat: "conjugaison", type: "saisie", prompt: "Conjuguez « jeter » au présent (1re pers. sing.).", context: "Je ___ ce vieux papier à la poubelle.", answer: "jette", accept: ["jette"], rule: "« jeter » double le t devant un e muet : je jette. Mais « nous jetons »." },
  { id: "c16", cat: "conjugaison", type: "saisie", prompt: "Subjonctif présent de « avoir » (2e pers. sing.).", context: "Il faut que tu ___ de la patience.", answer: "aies", accept: ["aies"], rule: "« avoir » au subjonctif : que j’aie, que tu aies, qu’il ait. À ne pas confondre avec « tu es »." },
  { id: "o01", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Merci pour votre chaleureux ___.", options: ["accueil", "acceuil", "aceuil"], answer: "accueil", rule: "On écrit « accueil » : deux c, puis « ueil » après c et g. Pareil pour « cueillir », « recueil »." },
  { id: "o02", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Il a un emploi ___.", options: ["professionnel", "profesionnel", "professionel"], answer: "professionnel", rule: "« professionnel » : deux s et deux n." },
  { id: "o03", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Le projet est en plein ___.", options: ["développement", "developpement", "dévelopement"], answer: "développement", rule: "« développement » : accent aigu, et deux p (pas deux l)." },
  { id: "o04", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Je viens de m’en ___.", options: ["apercevoir", "appercevoir", "aperçevoir"], answer: "apercevoir", rule: "« apercevoir » : un seul p. (Le c devient ç seulement devant o/u : « il aperçoit ».)" },
  { id: "o05", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Quel est le ___ de cette phrase ?", options: ["rythme", "rhythme", "rytme"], answer: "rythme", rule: "« rythme » : un y, puis « th ». Mot d’origine grecque, à retenir tel quel." },
  { id: "o06", cat: "orthographe", type: "saisie", prompt: "Écrivez le verbe (un seul r), à l’infinitif.", context: "Il aime ___ le matin pour rester en forme.", answer: "courir", accept: ["courir"], rule: "« courir » : un seul r à l’infinitif (comme « mourir »). Au futur, deux r → « je courrai »." },
  { id: "o07", cat: "orthographe", type: "saisie", prompt: "Écrivez le verbe (deux r), à l’infinitif.", context: "Il faut ___ la plante chaque jour.", answer: "nourrir", accept: ["nourrir"], rule: "« nourrir » : deux r, contrairement à « courir » et « mourir »." },
  { id: "o08", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Nous avons visité un grand ___ de meubles.", options: ["magasin", "magazin", "magazine"], answer: "magasin", rule: "Le lieu de vente : « magasin » (avec s). « Magazine » avec z = une revue." },
  { id: "o09", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Son ___ s’est beaucoup amélioré.", options: ["langage", "language", "languaje"], answer: "langage", rule: "« langage » sans u (contrairement à « langue »). Piège dû à l’anglais « language »." },
  { id: "o10", cat: "orthographe", type: "qcm", prompt: "Censé ou sensé ?", context: "Tu étais ___ arriver à huit heures.", options: ["censé", "sensé", "sancé"], answer: "censé", rule: "« censé » = supposé. « sensé » = qui a du bon sens (un discours sensé)." },
  { id: "o11", cat: "orthographe", type: "qcm", prompt: "Près ou prêt ?", context: "Je suis ___ à partir.", options: ["près", "prêt", "pré"], answer: "prêt", rule: "« prêt (à) » = préparé. « près (de) » = à faible distance. Astuce : « prête » → on entend le t." },
  { id: "o12", cat: "orthographe", type: "qcm", prompt: "Davantage ou d’avantage ?", context: "J’aimerais en savoir ___.", options: ["davantage", "d’avantage", "d’avantages"], answer: "davantage", rule: "« davantage » (un mot) = plus. « d’avantage(s) » = de bénéfice(s)." },
  { id: "o13", cat: "orthographe", type: "saisie", prompt: "Écrivez ce petit mot (sans s).", context: "___ mes efforts, je n’y suis pas arrivé.", answer: "malgré", accept: ["malgré"], rule: "« malgré » sans s, avec accent aigu. Le s final est une faute fréquente." },
  { id: "o14", cat: "orthographe", type: "saisie", prompt: "Écrivez ce mot (sans s final).", context: "Il y avait beaucoup de monde ___ les invités.", answer: "parmi", accept: ["parmi"], rule: "« parmi » ne prend jamais de s. À ne pas confondre avec « hormis »." },
  { id: "o15", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "C’est un véritable ___.", options: ["dilemme", "dilemne", "dilème"], answer: "dilemme", rule: "« dilemme » : deux m (et non « -mn »)." },
  { id: "o16", cat: "orthographe", type: "qcm", prompt: "Voire ou voir ?", context: "C’est difficile, ___ impossible.", options: ["voir", "voire", "voirre"], answer: "voire", rule: "« voire » (avec e) = et même. « voir » sans e est le verbe." },
  { id: "o17", cat: "orthographe", type: "saisie", prompt: "Écrivez ce mot du quotidien.", context: "On se voit ___ après-midi.", answer: "aujourd’hui", accept: ["aujourd’hui", "aujourd'hui"], rule: "« aujourd’hui » : apostrophe, pas de tiret, h muet." },
  { id: "o18", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "C’est un client très ___.", options: ["exigeant", "exigant", "exijeant"], answer: "exigeant", rule: "On garde le e après le g pour le son [j] devant a : exigeant, mangeant." },
  { id: "o19", cat: "orthographe", type: "saisie", prompt: "Écrivez ce mot (dernière lettre muette).", context: "Il y avait ___ de monde à la fête.", answer: "beaucoup", accept: ["beaucoup"], rule: "« beaucoup » finit par un p muet, qu’on entend en liaison : « beaucoup d’amis »." },
  { id: "di1", cat: "accord", type: "dictee", sentence: "Les enfants sont allés à l’école.", rule: "Avec être, le participe s’accorde avec le sujet : les enfants → allés." },
  { id: "di2", cat: "accord", type: "dictee", sentence: "Ils ont rangé leurs affaires.", rule: "« rangé » ne s’accorde pas (COD après avoir). « leurs » au pluriel." },
  { id: "di3", cat: "conjugaison", type: "dictee", sentence: "Il faut que tu fasses des efforts.", rule: "« Il faut que » + subjonctif : que tu fasses." },
  { id: "di4", cat: "orthographe", type: "dictee", sentence: "J’ai reçu une bonne nouvelle.", rule: "« reçu » prend une cédille. « nouvelle » : deux l." },
  { id: "di5", cat: "conjugaison", type: "dictee", sentence: "Nous mangeons ensemble chaque dimanche.", rule: "Verbe manger : e devant o pour le son [j] → nous mangeons." },
  { id: "di6", cat: "orthographe", type: "dictee", sentence: "Cette histoire est vraiment passionnante.", rule: "« vraiment » sans e après le i. « passionnante » : deux s, deux n." },
  { id: "di7", cat: "accord", type: "dictee", sentence: "Quatre-vingts personnes ont participé.", rule: "« quatre-vingts » prend un s. « participé » invariable ici." },
  { id: "di8", cat: "conjugaison", type: "dictee", sentence: "Nous appelons nos amis ce soir.", rule: "« appeler » : un seul l à « nous appelons »." },
  { id: "m01", cat: "message", type: "sms", text: "Tu va au ciné ce soir ?", error: { wrong: "va", right: "vas" }, rule: "« tu » + verbe = -s : tu vas. Faute d’étourderie n°1 dans les SMS." },
  { id: "m02", cat: "message", type: "sms", text: "J'espère que sa va mieux.", error: { wrong: "sa", right: "ça" }, rule: "« ça » (= cela) prend une cédille. « sa » est un possessif. Astuce : remplace par « cela »." },
  { id: "m03", cat: "message", type: "sms", text: "Je t'envoie les photos demain.", errorFree: true, rule: "Rien à corriger : « je t’envoie » est juste. Bon réflexe de ne pas surcorriger." },
  { id: "m04", cat: "message", type: "sms", text: "On ce voit à quelle heure ?", error: { wrong: "ce", right: "se" }, rule: "Pronominal « se voir » → on se voit. « ce » est un déterminant (ce soir). Astuce : « on te voit »." },
  { id: "m05", cat: "message", type: "sms", text: "Il ma dit qu'il venait.", error: { wrong: "ma", right: "m'a" }, rule: "« m’a » = « me a » : il m’a dit. « ma » est un possessif. Astuce : « il me l’a dit »." },
  { id: "m06", cat: "message", type: "sms", text: "Tu pourra venir samedi ?", error: { wrong: "pourra", right: "pourras" }, rule: "« tu » → -s : tu pourras. Le futur ne change rien à la 2e personne." },
  { id: "m07", cat: "message", type: "sms", text: "C'est bon pour moi !", errorFree: true, rule: "« c’est » (= cela est) est correct. À distinguer de ses / ces / s’est." },
  { id: "m08", cat: "message", type: "sms", text: "Tu a vu mon message ?", error: { wrong: "a", right: "as" }, rule: "« tu as » (avoir). « a » = 3e personne (il a). Astuce : « tu avais » → tu as." },
  { id: "m09", cat: "message", type: "sms", text: "Il a oublié ces clés.", error: { wrong: "ces", right: "ses" }, rule: "Ce sont SES clés à lui (possessif) → ses. « ces » = ceux-là. Astuce : « ses clés à lui »." },
  { id: "m10", cat: "message", type: "sms", text: "On se retrouve devant le cinéma.", errorFree: true, rule: "« on se retrouve » est correct (pronominal)." },
  { id: "m11", cat: "message", type: "sms", text: "Je voudrai un café s'il te plaît.", error: { wrong: "voudrai", right: "voudrais" }, rule: "Politesse → conditionnel : je voudrais. « voudrai » (futur) = je le ferai. Astuce : « tu voudrais »." },
  { id: "m12", cat: "message", type: "sms", text: "Apelle-moi quand tu peux.", error: { wrong: "Apelle-moi", right: "Appelle-moi" }, rule: "« appeler » prend deux p : appelle. Étourderie souvent introduite par le correcteur." },
  { id: "m13", cat: "message", type: "sms", text: "Ont est en retard, désolé.", error: { wrong: "Ont", right: "On" }, rule: "« on est » (on + être). « ont » = ils ont (avoir). Astuce : « il est en retard »." },
  { id: "m14", cat: "message", type: "sms", text: "Merci, j'ai bien reçu !", errorFree: true, rule: "« reçu » (cédille) est correct." },
  { id: "m15", cat: "message", type: "sms", text: "Tu m'enverra l'adresse ?", error: { wrong: "m'enverra", right: "m'enverras" }, rule: "« tu » → -s : tu m’enverras. (Et « envoyer » garde ses deux r au futur.)" },
  { id: "m16", cat: "message", type: "sms", text: "Sa fait longtemps !", error: { wrong: "Sa", right: "Ça" }, rule: "« ça fait longtemps » → cédille. Astuce : « cela fait longtemps »." },
];

/* =================== CONJUGAISON : DONNÉES & MOTEUR =================== */
const PRON = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
const PRON_SUBJ = ["que je", "que tu", "qu’il/elle", "que nous", "que vous", "qu’ils/elles"];
const PRON_IMP = ["(tu)", "(nous)", "(vous)"];
const TENSE_LABEL = { present: "Présent", imparfait: "Imparfait", futur: "Futur simple", conditionnel: "Conditionnel présent", subjonctif: "Subjonctif présent", imperatif: "Impératif présent", passeCompose: "Passé composé", passeSimple: "Passé simple" };
const TENSE_USAGE = {
  present: { usage: "Pour ce qui est vrai maintenant, les habitudes et les vérités générales.", ex: ["Je travaille en ce moment.", "Elle court tous les matins.", "L’eau bout à 100 °C."] },
  imparfait: { usage: "Pour décrire le passé : une situation, un décor, une habitude, ou une action en train de se dérouler.", ex: ["Il faisait beau ce jour-là.", "Quand j’étais petit, je lisais beaucoup.", "Elle dormait quand le téléphone a sonné."] },
  futur: { usage: "Pour une action à venir, présentée comme certaine.", ex: ["Demain, je partirai tôt.", "Nous verrons bien.", "Ils arriveront vers midi."] },
  conditionnel: { usage: "Pour une hypothèse, un souhait, ou par politesse.", ex: ["Si j’avais le temps, je viendrais.", "Je voudrais un café.", "Tu pourrais m’aider ?"] },
  subjonctif: { usage: "Après une expression de volonté, d’émotion, de doute ou d’obligation — souvent introduit par « que ».", ex: ["Il faut que tu partes.", "Je veux qu’il vienne.", "Bien que ce soit difficile…"] },
  imperatif: { usage: "Pour donner un ordre, un conseil ou une consigne. Pas de pronom sujet.", ex: ["Ferme la porte.", "Prenons un taxi.", "Faites attention."] },
  passeCompose: { usage: "Pour une action passée, ponctuelle et achevée — le temps du passé à l’oral et dans les messages.", ex: ["J’ai fini mon travail.", "Ils sont arrivés hier.", "Tu as vu ce film ?"] },
  passeSimple: { usage: "Pour un récit écrit (romans, contes, histoire). Rare à l’oral, remplacé par le passé composé.", ex: ["Il ouvrit la porte et entra.", "Elle prit son manteau et partit.", "Ils vécurent heureux."] },
};
const DISPLAY_TENSES = ["present", "imparfait", "futur", "conditionnel", "subjonctif", "imperatif", "passeCompose", "passeSimple"];
const DRILL_TENSES = ["present", "imparfait", "futur", "conditionnel", "subjonctif", "passeSimple", "imperatif"];
const AUX_PRES = { avoir: ["ai", "as", "a", "avons", "avez", "ont"], "être": ["suis", "es", "est", "sommes", "êtes", "sont"] };

const VERBS = [
  { inf: "parler", group: 1, reg: "er", aux: "avoir", participe: "parlé", note: "Modèle du 1er groupe (-er). Toutes les terminaisons sont régulières." },
  { inf: "regarder", group: 1, reg: "er", aux: "avoir", participe: "regardé", note: "1er groupe régulier (-er), comme parler." },
  { inf: "manger", group: 1, aux: "avoir", participe: "mangé", note: "-ger : on garde le e devant a et o (nous mangeons, je mangeais), mais pas devant i (nous mangions).",
    forms: { present: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"], imparfait: ["mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"], passeSimple: ["mangeai", "mangeas", "mangea", "mangeâmes", "mangeâtes", "mangèrent"], futur: ["mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"], conditionnel: ["mangerais", "mangerais", "mangerait", "mangerions", "mangeriez", "mangeraient"], subjonctif: ["mange", "manges", "mange", "mangions", "mangiez", "mangent"], imperatif: ["mange", "mangeons", "mangez"] } },
  { inf: "appeler", group: 1, aux: "avoir", participe: "appelé", note: "-eler : double le l devant un e muet (j’appelle, ils appellent, futur j’appellerai) ; un seul l à « nous appelons ».",
    forms: { present: ["appelle", "appelles", "appelle", "appelons", "appelez", "appellent"], imparfait: ["appelais", "appelais", "appelait", "appelions", "appeliez", "appelaient"], passeSimple: ["appelai", "appelas", "appela", "appelâmes", "appelâtes", "appelèrent"], futur: ["appellerai", "appelleras", "appellera", "appellerons", "appellerez", "appelleront"], conditionnel: ["appellerais", "appellerais", "appellerait", "appellerions", "appelleriez", "appelleraient"], subjonctif: ["appelle", "appelles", "appelle", "appelions", "appeliez", "appellent"], imperatif: ["appelle", "appelons", "appelez"] } },
  { inf: "finir", group: 2, reg: "ir", aux: "avoir", participe: "fini", note: "Modèle du 2e groupe (-ir, nous finissons). Infixe -iss- aux pluriels et à l’imparfait." },
  { inf: "choisir", group: 2, reg: "ir", aux: "avoir", participe: "choisi", note: "2e groupe régulier (-ir / -issons), comme finir." },
  { inf: "être", group: 3, aux: "avoir", participe: "été", note: "Auxiliaire. Entièrement irrégulier ; à mémoriser.",
    forms: { present: ["suis", "es", "est", "sommes", "êtes", "sont"], imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"], passeSimple: ["fus", "fus", "fut", "fûmes", "fûtes", "furent"], futur: ["serai", "seras", "sera", "serons", "serez", "seront"], conditionnel: ["serais", "serais", "serait", "serions", "seriez", "seraient"], subjonctif: ["sois", "sois", "soit", "soyons", "soyez", "soient"], imperatif: ["sois", "soyons", "soyez"] } },
  { inf: "avoir", group: 3, aux: "avoir", participe: "eu", note: "Auxiliaire. Subjonctif : que j’aie. Impératif : aie, ayons, ayez.",
    forms: { present: ["ai", "as", "a", "avons", "avez", "ont"], imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"], passeSimple: ["eus", "eus", "eut", "eûmes", "eûtes", "eurent"], futur: ["aurai", "auras", "aura", "aurons", "aurez", "auront"], conditionnel: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"], subjonctif: ["aie", "aies", "ait", "ayons", "ayez", "aient"], imperatif: ["aie", "ayons", "ayez"] } },
  { inf: "aller", group: 3, aux: "être", participe: "allé", note: "En -er mais 3e groupe. Futur sur « ir- » (j’irai). Auxiliaire être → accord (elle est allée).",
    forms: { present: ["vais", "vas", "va", "allons", "allez", "vont"], imparfait: ["allais", "allais", "allait", "allions", "alliez", "allaient"], passeSimple: ["allai", "allas", "alla", "allâmes", "allâtes", "allèrent"], futur: ["irai", "iras", "ira", "irons", "irez", "iront"], conditionnel: ["irais", "irais", "irait", "irions", "iriez", "iraient"], subjonctif: ["aille", "ailles", "aille", "allions", "alliez", "aillent"], imperatif: ["va", "allons", "allez"] } },
  { inf: "faire", group: 3, aux: "avoir", participe: "fait", note: "« vous faites », « ils font ». Subjonctif : que je fasse.",
    forms: { present: ["fais", "fais", "fait", "faisons", "faites", "font"], imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"], passeSimple: ["fis", "fis", "fit", "fîmes", "fîtes", "firent"], futur: ["ferai", "feras", "fera", "ferons", "ferez", "feront"], conditionnel: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"], subjonctif: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"], imperatif: ["fais", "faisons", "faites"] } },
  { inf: "prendre", group: 3, aux: "avoir", participe: "pris", note: "« il prend » (pas de t). Double n : ils prennent, que je prenne.",
    forms: { present: ["prends", "prends", "prend", "prenons", "prenez", "prennent"], imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"], passeSimple: ["pris", "pris", "prit", "prîmes", "prîtes", "prirent"], futur: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"], conditionnel: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"], subjonctif: ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"], imperatif: ["prends", "prenons", "prenez"] } },
  { inf: "venir", group: 3, aux: "être", participe: "venu", note: "Futur sur « viendr- », passé simple en « vin- ». Auxiliaire être.",
    forms: { present: ["viens", "viens", "vient", "venons", "venez", "viennent"], imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"], passeSimple: ["vins", "vins", "vint", "vînmes", "vîntes", "vinrent"], futur: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"], conditionnel: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"], subjonctif: ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"], imperatif: ["viens", "venons", "venez"] } },
  { inf: "pouvoir", group: 3, aux: "avoir", participe: "pu", note: "« je peux » (forme soutenue : je puis). Futur en « pourr- ». Subjonctif : que je puisse. Pas d’impératif.",
    forms: { present: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"], imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"], passeSimple: ["pus", "pus", "put", "pûmes", "pûtes", "purent"], futur: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"], conditionnel: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"], subjonctif: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"], imperatif: null } },
  { inf: "vouloir", group: 3, aux: "avoir", participe: "voulu", note: "Futur en « voudr- ». Conditionnel de politesse : je voudrais. Impératif surtout « veuillez ».",
    forms: { present: ["veux", "veux", "veut", "voulons", "voulez", "veulent"], imparfait: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"], passeSimple: ["voulus", "voulus", "voulut", "voulûmes", "voulûtes", "voulurent"], futur: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"], conditionnel: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"], subjonctif: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"], imperatif: ["veuille", "veuillons", "veuillez"] } },
];

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

/* ============================== COURS ================================= */
const LESSONS = [
  {
    id: "cod", title: "Le COD (complément d’objet direct)", cat: "accord",
    tagline: "Le mot qui subit l’action — et la clé de l’accord du participe passé.",
    sections: [
      { h: "C’est quoi ?", p: "Le COD est ce sur quoi porte directement l’action du verbe, sans préposition. Pour le trouver, on pose « qui ? » ou « quoi ? » juste après le verbe." },
      { h: "Le trouver", p: "On garde la question simple : verbe + « qui / quoi ? ».", ex: [{ good: "Je lis un livre.", note: "lis quoi ? → un livre = COD" }, { good: "Elle appelle son frère.", note: "appelle qui ? → son frère = COD" }] },
      { h: "Ne pas confondre avec le COI", p: "Si le complément est introduit par une préposition (à, de…), c’est un COI, pas un COD.", ex: [{ good: "Je parle à Marie.", note: "parle à qui ? → COI" }, { good: "Je téléphone à mon père.", note: "à mon père → COI" }] },
      { h: "Pourquoi c’est important", p: "Avec l’auxiliaire avoir, le participe passé s’accorde avec le COD — mais seulement s’il est placé AVANT le verbe (souvent un pronom : le, la, les, l’, ou « que »).", ex: [{ bad: "Les fleurs que j’ai acheté.", good: "Les fleurs que j’ai achetées.", note: "« que » = les fleurs, placé avant → accord" }, { good: "J’ai acheté des fleurs.", note: "COD après le verbe → pas d’accord" }] },
    ],
    astuce: "Repère le petit mot devant le verbe (l’, la, les, que). S’il remplace le COD, le participe s’accorde avec lui.",
  },
  {
    id: "pp", title: "L’accord du participe passé", cat: "accord",
    tagline: "Trois cas, trois réflexes.",
    sections: [
      { h: "Avec être → accord avec le sujet", p: "Le participe s’accorde en genre et en nombre avec le sujet.", ex: [{ good: "Elle est partie." }, { good: "Ils sont venus." }, { good: "Les filles sont arrivées." }] },
      { h: "Avec avoir → en principe, pas d’accord", p: "Avec avoir, le participe ne s’accorde pas avec le sujet.", ex: [{ bad: "Elles ont mangées.", good: "Elles ont mangé." }] },
      { h: "Sauf : COD placé avant", p: "Avec avoir, le participe s’accorde avec le COD s’il est placé avant le verbe (voir la leçon sur le COD).", ex: [{ good: "La lettre que j’ai écrite.", note: "« que » = la lettre, avant → accord" }] },
      { h: "Verbes pronominaux", p: "Souvent comme être (« elle s’est lavée »), mais pas si un COD suit (« elle s’est lavé les mains »)." },
    ],
    astuce: "Être ? J’accorde avec le sujet. Avoir ? Je cherche un COD avant : s’il y en a un, j’accorde avec lui ; sinon, rien.",
  },
  {
    id: "homophones", title: "Les homophones (a/à, on/ont, ça/sa…)", cat: "message",
    tagline: "Des mots qui se prononcent pareil mais s’écrivent différemment.",
    sections: [
      { h: "a / à", p: "« a » = le verbe avoir (remplace par « avait »). « à » = préposition.", ex: [{ good: "Il a faim.", note: "« il avait faim » marche → a" }, { good: "Je vais à Paris.", note: "« avait » impossible → à" }] },
      { h: "on / ont", p: "« on » = pronom sujet (remplace par « il »). « ont » = avoir au pluriel (remplace par « avaient »).", ex: [{ good: "On est prêts.", note: "« il est prêt » → on" }, { good: "Ils ont gagné.", note: "« avaient gagné » → ont" }] },
      { h: "ça / sa", p: "« ça » = cela. « sa » = possessif féminin.", ex: [{ good: "Ça me plaît.", note: "« cela me plaît » → ça" }, { good: "Il prend sa veste.", note: "possessif → sa" }] },
      { h: "ce / se", p: "« ce » = déterminant ou « ce que ». « se » = pronom des verbes pronominaux.", ex: [{ good: "Ce livre est à moi." }, { good: "Il se lave.", note: "il lave lui-même → se" }] },
      { h: "et / est", p: "« et » = and (addition). « est » = verbe être (remplace par « était »).", ex: [{ good: "Paul et Marie." }, { good: "Il est tard.", note: "« était tard » → est" }] },
      { h: "ces / ses / c’est / s’est", p: "« ces » = ceux-là (démonstratif). « ses » = les siens (possessif). « c’est » = cela est. « s’est » = pronominal (il s’est levé)." },
    ],
    astuce: "La substitution est ta meilleure amie : remplace par « avait », « avaient », « cela », « était ». Si ça marche, tu sais lequel écrire.",
  },
  {
    id: "infinitif", title: "-é, -er ou -ez ? (verbes en -er)", cat: "conjugaison",
    tagline: "La faute la plus courante à l’écrit — et son astuce imparable.",
    sections: [
      { h: "Le problème", p: "Pour les verbes en -er, l’infinitif (-er), le participe passé (-é) et la 2e personne du pluriel (-ez) se prononcent tous [é]. On les confond donc à l’écrit." },
      { h: "L’astuce du 3e groupe", p: "Remplace le verbe par « mordre » (ou « vendre »). La forme qui sonne juste te donne la terminaison.", ex: [{ good: "Je vais manger.", note: "« je vais mordre » → infinitif → -er" }, { good: "J’ai mangé.", note: "« j’ai mordu » → participe → -é" }, { good: "Vous mangez.", note: "« vous mordez » → -ez" }] },
      { h: "À l’œil", p: "Après une préposition (à, de, pour, sans…), c’est toujours l’infinitif : « pour manger », « sans parler »." },
    ],
    astuce: "Dans le doute, dis la phrase avec « mordre ». Mordre → -er, mordu → -é, mordez → -ez.",
  },
  {
    id: "pluriel", title: "Le pluriel des noms", cat: "accord",
    tagline: "Les terminaisons spéciales et leurs exceptions.",
    sections: [
      { h: "Le cas général", p: "On ajoute un -s : un chat → des chats." },
      { h: "Noms en -al → -aux", p: "un cheval → des chevaux, un journal → des journaux.", ex: [{ good: "des chevaux, des journaux" }, { bad: "des festivaux", good: "des festivals", note: "exceptions en -als : bal, carnaval, festival, récital, chacal" }] },
      { h: "Noms en -eau, -au, -eu → -x", p: "un bateau → des bateaux, un jeu → des jeux. Exceptions en -s : pneu, bleu, landau." },
      { h: "Noms en -ou → -s, sauf 7", p: "des trous, des clous… mais sept noms prennent -x.", ex: [{ good: "bijoux, cailloux, choux, genoux, hiboux, joujoux, poux", note: "les 7 « -oux » à retenir par cœur" }] },
    ],
    astuce: "Les 7 « -oux » : bijou, caillou, chou, genou, hibou, joujou, pou.",
  },
];
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
  function fresh() { return { items: {}, stats: emptyStats(), settings: { length: DEFAULT_LENGTH } }; }
  function migrateItem(it) {
    if (it && it.streak === undefined) { const b = it.box || 1; return Object.assign({}, it, { streak: b >= 5 ? MASTER_STREAK : Math.max(0, b - 1) }); }
    return it;
  }
  function withDefaults(d) {
    const raw = d.items || {}, items = {};
    Object.keys(raw).forEach((k) => { items[k] = migrateItem(raw[k]); });
    return { items, stats: Object.assign({}, emptyStats(), d.stats || {}), settings: Object.assign({ length: DEFAULT_LENGTH }, d.settings || {}) };
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
      if (!m) reviewable++;
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
    const pool = BANK.filter((q) => focusCat === "all" || q.cat === focusCat);
    launchSession(selectSR(pool, opts.mode || "normal"), { kind: "bank", focusCat, mode: opts.mode || "normal", returnScreen: opts.returnScreen || "home" });
  }
  function startItems(its, returnScreen) { launchSession(shuffle(its), { kind: "items", items: its, returnScreen: returnScreen || "home" }); }
  function startVerbTables(inf) {
    const v = VERBS.find((x) => x.inf === inf); if (!v) return;
    launchSession(genTenseItems([v]), { kind: "verbTables", verbInf: inf, returnScreen: "verb" });
  }
  function startWeakTables() {
    const items = (progress && progress.items) || {}, today = todayStr();
    const weak = genTenseItems(VERBS).filter((q) => { const p = items[q.id]; return p && (p.streak || 0) < MASTER_STREAK; })
      .sort((a, b) => { const pa = items[a.id], pb = items[b.id]; const da = pa.dueDate <= today, db = pb.dueDate <= today; return da === db ? (pa.streak || 0) - (pb.streak || 0) : da ? -1 : 1; })
      .slice(0, 8);
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
    items[item.id] = { streak, dueDate: addDays(dueDays(streak)), lastSeen: todayStr(), timesCorrect: prev.timesCorrect + (ok ? 1 : 0), timesWrong: prev.timesWrong + (ok ? 0 : 1) };
    save(Object.assign({}, progress, { items }));
  }
  function next() { if (idx + 1 < session.length) { setIdx(idx + 1); setAnswer(""); setRevealed(false); setFeedback(null); } else finish(); }
  function finish() {
    const correct = results.filter((r) => r.correct).length;
    const stats = Object.assign({}, progress.stats), last = stats.lastSessionDate, today = todayStr();
    if (last === today) {} else if (last === addDays(-1)) stats.streak = (stats.streak || 0) + 1; else stats.streak = 1;
    stats.lastSessionDate = today; stats.totalAnswered += results.length; stats.totalCorrect += correct; stats.sessions = (stats.sessions || 0) + 1;
    save(Object.assign({}, progress, { stats })); setScreen("done");
  }
  function setLength(n) { save(Object.assign({}, progress, { settings: Object.assign({}, progress.settings, { length: n }) })); }
  async function resetAll() { if (!window.confirm("Effacer toute votre progression et recommencer à zéro ?")) return; await save(fresh()); setScreen("home"); }

  useEffect(() => {
    if (screen === "session" && current && (current.type === "saisie" || current.type === "dictee") && !revealed && inputRef.current) inputRef.current.focus();
  }, [idx, screen, revealed, current]);

  if (loading) return (<div className="atelier-root"><div className="loading">Chargement de votre atelier…</div></div>);

  let body = null;
  if (screen === "home") body = (<Home counts={counts()} conj={conjStats()} stats={progress.stats} settings={progress.settings} focus={focus} setFocus={setFocus} onStart={start} onReview={() => start({ mode: "review", focusCat: "all" })} onLength={setLength} onReset={resetAll} onOpenRef={() => setScreen("ref")} onOpenCours={() => setScreen("cours")} />);
  else if (screen === "cours") body = (<CoursHome onBack={() => setScreen("home")} onOpen={(id) => { setLessonId(id); setScreen("lesson"); }} />);
  else if (screen === "lesson") body = (<LessonScreen lesson={LESSONS.find((l) => l.id === lessonId)} onBack={() => setScreen("cours")} onPractice={(cat) => start({ focusCat: cat, returnScreen: "lesson" })} />);
  else if (screen === "ref") body = (<ConjHome conj={conjStats()} onBack={() => setScreen("home")} onOpenVerb={(inf) => { setVerbInf(inf); setScreen("verb"); }} onReview={() => startWeakTables()} />);
  else if (screen === "verb") {
    const v = VERBS.find((x) => x.inf === verbInf); const ts = {};
    if (v) DRILL_TENSES.forEach((t) => { const p = progress.items["vt:" + v.inf + ":" + t]; ts[t] = (p && p.streak) || 0; });
    body = (<VerbScreen v={v} conj={conjStats()} tenseStreak={ts} onBack={() => setScreen("ref")} onExercise={() => startVerbTables(verbInf)} />);
  }
  else if (screen === "session" && current) body = (<Session item={current} index={idx} total={session.length} answer={answer} setAnswer={setAnswer} revealed={revealed} feedback={feedback} onCheck={check} onNext={next} inputRef={inputRef} speech={speech} />);
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

function Home({ counts, conj, stats, settings, focus, setFocus, onStart, onReview, onLength, onReset, onOpenRef, onOpenCours }) {
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
        {counts.reviewable > 0 && (<button className="link-review" onClick={onReview}>Réviser mes erreurs ({counts.reviewable})</button>)}
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
      <div className="stats-row">
        <Stat value={streak} label={streak > 1 ? "jours de suite" : "jour"} />
        <Stat value={counts.mastered} label="acquis" />
        <Stat value={counts.reviewable} label="à revoir" accent />
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

function Session({ item, index, total, answer, setAnswer, revealed, feedback, onCheck, onNext, inputRef, speech }) {
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
            {!speech.supported && <span className="fallback-note">Lecture audio indisponible sur ce navigateur — la phrase s’affiche à la correction.</span>}
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
          <button className="btn-primary btn-check" onClick={() => onCheck()}>Vérifier</button>
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

/* =============================== MONTAGE ============================== */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>
