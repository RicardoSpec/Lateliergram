/* ============================================================
   data.js — Données de L'Atelier
   Chargé AVANT app.js. Ne contient aucun JSX ni logique.
   ============================================================ */

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

/* Exposition globale : rend les données accessibles depuis app.js (script Babel). */
Object.assign(window, { BANK, PRON, PRON_SUBJ, PRON_IMP, TENSE_LABEL, TENSE_USAGE, DISPLAY_TENSES, DRILL_TENSES, AUX_PRES, VERBS, LESSONS });
