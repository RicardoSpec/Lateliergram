import { useState, useEffect, useRef } from "react";

/* =========================================================================
   L'ATELIER — orthographe · grammaire · conjugaison (français)
   Entraînement : QCM, saisie, dictée audio, repérage d'erreurs SMS,
   tableaux de conjugaison + complétion des tableaux.
   Répétition espacée (Leitner), suivi par catégorie, mémoire persistante.
   ========================================================================= */

/* =================== BANQUE D'EXERCICES (4 catégories) ================== */
const BANK = [
  // ---------------- ACCORDS ----------------
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

  // ---------------- CONJUGAISON ----------------
  { id: "c01", cat: "conjugaison", type: "qcm", prompt: "-é, -er ou -ez ?", context: "Je vais ___ le courrier ce matin.", options: ["envoyé", "envoyer", "envoyez"], answer: "envoyer", rule: "Astuce : remplacez par « vendre ». « Je vais vendre » → infinitif → -er : envoyer." },
  { id: "c02", cat: "conjugaison", type: "qcm", prompt: "-é, -er ou -ez ?", context: "Hier, j’ai ___ une lettre importante.", options: ["envoyé", "envoyer", "envoyez"], answer: "envoyé", rule: "Astuce : « j’ai vendu » fonctionne → participe passé → -é : envoyé." },
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

  // ---------------- ORTHOGRAPHE ----------------
  { id: "o01", cat: "orthographe", type: "qcm", prompt: "Quelle orthographe ?", context: "Merci pour votre chaleureux ___.", options: ["accueil", "acceuil", "aceuil"], answer: "accueil", rule: "« accueil » : deux c, puis « ueil » après c et g. Pareil pour « cueillir », « recueil »." },
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

  // ---------------- DICTÉES ----------------
  { id: "di1", cat: "accord", type: "dictee", sentence: "Les enfants sont allés à l’école.", rule: "Avec être, le participe s’accorde avec le sujet : les enfants → allés." },
  { id: "di2", cat: "accord", type: "dictee", sentence: "Ils ont rangé leurs affaires.", rule: "« rangé » ne s’accorde pas (COD après avoir). « leurs » au pluriel." },
  { id: "di3", cat: "conjugaison", type: "dictee", sentence: "Il faut que tu fasses des efforts.", rule: "« Il faut que » + subjonctif : que tu fasses." },
  { id: "di4", cat: "orthographe", type: "dictee", sentence: "J’ai reçu une bonne nouvelle.", rule: "« reçu » prend une cédille. « nouvelle » : deux l." },
  { id: "di5", cat: "conjugaison", type: "dictee", sentence: "Nous mangeons ensemble chaque dimanche.", rule: "Verbe manger : e devant o pour le son [j] → nous mangeons." },
  { id: "di6", cat: "orthographe", type: "dictee", sentence: "Cette histoire est vraiment passionnante.", rule: "« vraiment » sans e après le i. « passionnante » : deux s, deux n." },
  { id: "di7", cat: "accord", type: "dictee", sentence: "Quatre-vingts personnes ont participé.", rule: "« quatre-vingts » prend un s. « participé » invariable ici." },
  { id: "di8", cat: "conjugaison", type: "dictee", sentence: "Nous appelons nos amis ce soir.", rule: "« appeler » : un seul l à « nous appelons »." },

  // ---------------- SMS : REPÉRER L'ERREUR ----------------
  { id: "m01", cat: "message", type: "sms", text: "Tu va au ciné ce soir ?", error: { wrong: "va", right: "vas" }, rule: "« tu » + verbe = -s : tu vas. Faute d’étourderie n°1 dans les SMS." },
  { id: "m02", cat: "message", type: "sms", text: "J'espère que sa va mieux.", error: { wrong: "sa", right: "ça" }, rule: "« ça » (= cela) prend une cédille. « sa » est un possessif. Astuce : remplace par « cela »." },
  { id: "m03", cat: "message", type: "sms", text: "Je t'envoie les photos demain.", errorFree: true, rule: "Rien à corriger : « je t’envoie » est juste. Bon réflexe de ne pas surcorriger." },
  { id: "m04", cat: "message", type: "sms", text: "On ce voit à quelle heure ?", error: { wrong: "ce", right: "se" }, rule: "Pronominal « se voir » → on se voit. « ce » = déterminant (ce soir). Astuce : « on te voit »." },
  { id: "m05", cat: "message", type: "sms", text: "Il ma dit qu'il venait.", error: { wrong: "ma", right: "m'a" }, rule: "« m’a » = « me a » : il m’a dit. « ma » = possessif. Astuce : « il me l’a dit »." },
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

/* ===================== CONJUGAISON : DONNÉES & MOTEUR =================== */
const PRON = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
const PRON_SUBJ = ["que je", "que tu", "qu’il/elle", "que nous", "que vous", "qu’ils/elles"];
const PRON_IMP = ["(tu)", "(nous)", "(vous)"];
const TENSE_LABEL = {
  present: "Présent", imparfait: "Imparfait", futur: "Futur simple",
  conditionnel: "Conditionnel présent", subjonctif: "Subjonctif présent",
  imperatif: "Impératif présent", passeCompose: "Passé composé", passeSimple: "Passé simple",
};
const DISPLAY_TENSES = ["present", "imparfait", "futur", "conditionnel", "subjonctif", "imperatif", "passeCompose", "passeSimple"];
const DRILL_TENSES = ["present", "imparfait", "futur", "conditionnel", "subjonctif", "passeSimple", "imperatif"];
const AUX_PRES = { avoir: ["ai", "as", "a", "avons", "avez", "ont"], "être": ["suis", "es", "est", "sommes", "êtes", "sont"] };

const VERBS = [
  // --- 1er groupe régulier ---
  { inf: "parler", group: 1, reg: "er", aux: "avoir", participe: "parlé", note: "Modèle du 1er groupe (-er). Toutes les terminaisons sont régulières." },
  { inf: "regarder", group: 1, reg: "er", aux: "avoir", participe: "regardé", note: "1er groupe régulier (-er), comme parler." },
  // --- 1er groupe : exceptions orthographiques ---
  { inf: "manger", group: 1, aux: "avoir", participe: "mangé", note: "-ger : on garde le e devant a et o (nous mangeons, je mangeais), mais pas devant i (nous mangions).",
    forms: { present: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"], imparfait: ["mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"], passeSimple: ["mangeai", "mangeas", "mangea", "mangeâmes", "mangeâtes", "mangèrent"], futur: ["mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"], conditionnel: ["mangerais", "mangerais", "mangerait", "mangerions", "mangeriez", "mangeraient"], subjonctif: ["mange", "manges", "mange", "mangions", "mangiez", "mangent"], imperatif: ["mange", "mangeons", "mangez"] } },
  { inf: "appeler", group: 1, aux: "avoir", participe: "appelé", note: "-eler : double le l devant un e muet (j’appelle, ils appellent, futur j’appellerai) ; un seul l à « nous appelons ».",
    forms: { present: ["appelle", "appelles", "appelle", "appelons", "appelez", "appellent"], imparfait: ["appelais", "appelais", "appelait", "appelions", "appeliez", "appelaient"], passeSimple: ["appelai", "appelas", "appela", "appelâmes", "appelâtes", "appelèrent"], futur: ["appellerai", "appelleras", "appellera", "appellerons", "appellerez", "appelleront"], conditionnel: ["appellerais", "appellerais", "appellerait", "appellerions", "appelleriez", "appelleraient"], subjonctif: ["appelle", "appelles", "appelle", "appelions", "appeliez", "appellent"], imperatif: ["appelle", "appelons", "appelez"] } },
  // --- 2e groupe régulier ---
  { inf: "finir", group: 2, reg: "ir", aux: "avoir", participe: "fini", note: "Modèle du 2e groupe (-ir, nous finissons). Infixe -iss- aux pluriels et à l’imparfait." },
  { inf: "choisir", group: 2, reg: "ir", aux: "avoir", participe: "choisi", note: "2e groupe régulier (-ir / -issons), comme finir." },
  // --- 3e groupe (irréguliers) ---
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
  return { ...base, passeCompose: AUX_PRES[v.aux].map((a) => a + " " + v.participe) };
}
const startsVowel = (s) => /^[aàâeéèêiîoôuûyœh]/i.test(s);
function lineFor(tenseKey, person, form) {
  if (tenseKey === "imperatif") return PRON_IMP[person] + " " + form;
  const pron = tenseKey === "subjonctif" ? PRON_SUBJ[person] : PRON[person];
  if (pron === "je") return (startsVowel(form) ? "j’" : "je ") + form;
  if (pron === "que je") return (startsVowel(form) ? "que j’" : "que je ") + form;
  return pron + " " + form;
}
function blankContext(tenseKey, person, form) {
  if (tenseKey === "imperatif") return PRON_IMP[person] + " ___";
  const pron = tenseKey === "subjonctif" ? PRON_SUBJ[person] : PRON[person];
  if (pron === "je") return startsVowel(form) ? "j’___" : "je ___";
  if (pron === "que je") return startsVowel(form) ? "que j’___" : "que je ___";
  return pron + " ___";
}
function genConjItems(verbs) {
  const out = [];
  verbs.forEach((v) => {
    const c = getConj(v);
    DRILL_TENSES.forEach((t) => {
      const forms = c[t];
      if (!forms) return;
      forms.forEach((form, p) => {
        out.push({
          id: `v:${v.inf}:${t}:${p}`, cat: "conjugaison", type: "saisie", conj: true,
          verb: v.inf, tense: t, person: p,
          prompt: `« ${v.inf} » · ${TENSE_LABEL[t]}`,
          context: blankContext(t, p, form), answer: form, accept: [form], rule: v.note,
        });
      });
    });
  });
  return out;
}

/* =================== RÉPÉTITION ESPACÉE (Leitner) ====================== */
const INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 15 };
const MASTERED_BOX = 5;
const DEFAULT_LENGTH = 8;
const BANK_IDS = new Set(BANK.map((q) => q.id));
const todayStr = () => new Date().toISOString().slice(0, 10);
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const CAT_LABEL = { accord: "Accords", conjugaison: "Conjugaison", orthographe: "Orthographe", message: "Messages" };
const CATS = ["accord", "conjugaison", "orthographe", "message"];

/* ---------- Normalisation et comparaison ------------------------------- */
const norm = (s) => (s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[’']/g, "’");
const stripAccents = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function isCorrectSaisie(input, item) { return [item.answer, ...(item.accept || [])].map(norm).includes(norm(input)); }
function accentOnlyMiss(input, item) {
  const a = stripAccents(norm(input));
  return [item.answer, ...(item.accept || [])].map((x) => stripAccents(norm(x))).includes(a);
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

/* ---------- Synthèse vocale (dictée) ----------------------------------- */
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
export default function App() {
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
  const [afterDone, setAfterDone] = useState("home"); // où revenir après le bilan
  const inputRef = useRef(null);
  const speech = useSpeech();

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("progress");
        const data = r?.value ? JSON.parse(r.value) : null;
        setProgress(data ? withDefaults(data) : fresh());
      } catch { setProgress(fresh()); } finally { setLoading(false); }
    })();
  }, []);

  function emptyStats() { return { streak: 0, lastSessionDate: null, totalAnswered: 0, totalCorrect: 0, sessions: 0 }; }
  function fresh() { return { items: {}, stats: emptyStats(), settings: { length: DEFAULT_LENGTH } }; }
  function withDefaults(d) { return { items: d.items || {}, stats: { ...emptyStats(), ...(d.stats || {}) }, settings: { length: DEFAULT_LENGTH, ...(d.settings || {}) } }; }
  async function save(next) { setProgress(next); try { await window.storage.set("progress", JSON.stringify(next)); } catch {} }

  /* ----- stats générales (BANK uniquement) ----- */
  function counts() {
    const items = progress?.items || {};
    let mastered = 0, review = 0, seen = 0, reviewable = 0;
    const perCat = {};
    CATS.forEach((c) => (perCat[c] = { total: 0, mastered: 0 }));
    BANK.forEach((q) => { perCat[q.cat].total++; });
    Object.entries(items).forEach(([id, it]) => {
      if (!BANK_IDS.has(id)) return;
      seen++;
      if (it.box < MASTERED_BOX) reviewable++;
      const q = BANK.find((b) => b.id === id);
      if (it.box >= MASTERED_BOX) { mastered++; if (q) perCat[q.cat].mastered++; }
      else if (it.box <= 2) review++;
    });
    return { mastered, review, reviewable, seen, total: BANK.length, perCat };
  }

  /* ----- stats conjugaison (ids "v:…") ----- */
  function conjStats() {
    const items = progress?.items || {};
    const perVerb = {}; let reviewable = 0, mastered = 0, total = 0;
    VERBS.forEach((v) => {
      const c = getConj(v); let t = 0;
      DRILL_TENSES.forEach((k) => { if (c[k]) t += c[k].length; });
      perVerb[v.inf] = { total: t, mastered: 0 }; total += t;
    });
    Object.entries(items).forEach(([id, it]) => {
      if (!id.startsWith("v:")) return;
      const inf = id.split(":")[1];
      if (it.box < MASTERED_BOX) reviewable++;
      if (it.box >= MASTERED_BOX) { mastered++; if (perVerb[inf]) perVerb[inf].mastered++; }
    });
    return { reviewable, mastered, total, perVerb };
  }

  function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function varyByCat(list) {
    const by = {}; CATS.forEach((c) => (by[c] = []));
    list.forEach((q) => { (by[q.cat] || (by[q.cat] = [])).push(q); });
    const out = []; let i = 0;
    while (CATS.some((c) => by[c].length)) { const c = CATS[i % CATS.length]; if (by[c].length) out.push(by[c].shift()); i++; }
    return out;
  }
  function selectSR(pool, mode) {
    const items = progress?.items || {}, length = progress?.settings?.length || DEFAULT_LENGTH, today = todayStr();
    const freshItems = [], weak = [];
    pool.forEach((q) => { const p = items[q.id]; if (!p) freshItems.push(q); else if (p.box < MASTERED_BOX) weak.push({ q, box: p.box, due: p.dueDate <= today }); });
    let pick = [];
    if (mode === "review") {
      pick = weak.sort((a, b) => (a.due === b.due ? a.box - b.box : a.due ? -1 : 1)).map((w) => w.q);
    } else {
      pick = weak.filter((w) => w.due).sort((a, b) => a.box - b.box).map((w) => w.q);
      for (const q of varyByCat(shuffle(freshItems))) { if (pick.length >= length) break; pick.push(q); }
      for (const q of weak.filter((w) => !w.due).sort((a, b) => a.box - b.box).map((w) => w.q)) { if (pick.length >= length) break; pick.push(q); }
      if (pick.length === 0) pick = shuffle(pool).slice(0, length);
    }
    return shuffle(pick).slice(0, length);
  }

  function start(opts = {}) {
    const pool = BANK.filter((q) => (opts.focusCat ?? focus) === "all" || q.cat === (opts.focusCat ?? focus));
    const s = selectSR(pool, opts.mode || "normal");
    if (!s.length) return;
    setSession(s); setIdx(0); setAnswer(""); setRevealed(false); setFeedback(null); setResults([]);
    setAfterDone("home"); setScreen("session");
  }
  function startConj(opts = {}) {
    const verbs = opts.verb ? VERBS.filter((v) => v.inf === opts.verb) : VERBS;
    const s = selectSR(genConjItems(verbs), opts.mode || "normal");
    if (!s.length) return;
    setSession(s); setIdx(0); setAnswer(""); setRevealed(false); setFeedback(null); setResults([]);
    setAfterDone(opts.verb ? "verb" : "ref"); setScreen("session");
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
    } else {
      ok = isCorrectSaisie(answer, item);
      const near = !ok && accentOnlyMiss(answer, item);
      fb = { ok, kind: ok ? "ok" : near ? "near" : "ko" };
    }
    setFeedback(fb); setRevealed(true);
    setResults((r) => [...r, { item, correct: ok }]);
    const items = { ...(progress.items || {}) };
    const prev = items[item.id] || { box: 1, timesCorrect: 0, timesWrong: 0 };
    const box = ok ? Math.min(prev.box + 1, MASTERED_BOX) : 1;
    items[item.id] = { box, dueDate: addDays(INTERVALS[box]), lastSeen: todayStr(), timesCorrect: prev.timesCorrect + (ok ? 1 : 0), timesWrong: prev.timesWrong + (ok ? 0 : 1) };
    save({ ...progress, items });
  }
  function next() { if (idx + 1 < session.length) { setIdx(idx + 1); setAnswer(""); setRevealed(false); setFeedback(null); } else finish(); }
  function finish() {
    const correct = results.filter((r) => r.correct).length;
    const stats = { ...progress.stats }, last = stats.lastSessionDate, today = todayStr();
    if (last === today) {} else if (last === addDays(-1)) stats.streak = (stats.streak || 0) + 1; else stats.streak = 1;
    stats.lastSessionDate = today; stats.totalAnswered += results.length; stats.totalCorrect += correct; stats.sessions = (stats.sessions || 0) + 1;
    save({ ...progress, stats }); setScreen("done");
  }
  function setLength(n) { save({ ...progress, settings: { ...progress.settings, length: n } }); }
  async function resetAll() { if (!window.confirm("Effacer toute votre progression et recommencer à zéro ?")) return; await save(fresh()); setScreen("home"); }

  useEffect(() => {
    if (screen === "session" && (current?.type === "saisie" || current?.type === "dictee") && !revealed && inputRef.current) inputRef.current.focus();
  }, [idx, screen, revealed, current]);

  if (loading) return (<div className="atelier-root"><style>{CSS}</style><div className="loading">Chargement de votre atelier…</div></div>);

  return (
    <div className="atelier-root">
      <style>{CSS}</style>

      {screen === "home" && (
        <Home counts={counts()} conj={conjStats()} stats={progress.stats} settings={progress.settings}
          focus={focus} setFocus={setFocus} onStart={start} onReview={() => start({ mode: "review", focusCat: "all" })}
          onLength={setLength} onReset={resetAll} onOpenRef={() => setScreen("ref")} />
      )}
      {screen === "ref" && (
        <ConjHome conj={conjStats()} onBack={() => setScreen("home")} onOpenVerb={(inf) => { setVerbInf(inf); setScreen("verb"); }}
          onDrillAll={() => startConj({})} onReview={() => startConj({ mode: "review" })} />
      )}
      {screen === "verb" && (
        <VerbScreen v={VERBS.find((x) => x.inf === verbInf)} conj={conjStats()} onBack={() => setScreen("ref")} onDrill={() => startConj({ verb: verbInf })} />
      )}
      {screen === "session" && current && (
        <Session item={current} index={idx} total={session.length} answer={answer} setAnswer={setAnswer}
          revealed={revealed} feedback={feedback} onCheck={check} onNext={next} inputRef={inputRef} speech={speech} />
      )}
      {screen === "done" && (
        <Done results={results} stats={progress.stats} onHome={() => setScreen(afterDone)} onAgain={() => (afterDone === "home" ? start() : startConj(afterDone === "verb" ? { verb: verbInf } : {}))} backLabel={afterDone === "home" ? "Terminer" : "Retour aux tableaux"} />
      )}
    </div>
  );
}

/* ---------------------------- ÉCRAN ACCUEIL ---------------------------- */
function Home({ counts, conj, stats, settings, focus, setFocus, onStart, onReview, onLength, onReset, onOpenRef }) {
  const greeting = (() => { const h = new Date().getHours(); return h < 12 ? "Bonjour" : h < 18 ? "Bon après-midi" : "Bonsoir"; })();
  const doneToday = stats.lastSessionDate === todayStr();
  return (
    <div className="screen home">
      <header className="masthead"><span className="eyebrow">Entraînement quotidien · français</span><h1 className="logo">L’Atelier</h1></header>

      <div className="paper card-intro">
        <p className="greet">{greeting}.</p>
        <p className="lede">Une séance courte, vos points faibles d’abord. Ce que vous ratez revient plus souvent ; ce que vous maîtrisez s’espace.</p>
        <div className="focus-row" role="group" aria-label="Thème de la séance">
          {["all", ...CATS].map((c) => (
            <button key={c} className={"chip" + (focus === c ? " chip-on" : "")} onClick={() => setFocus(c)}>{c === "all" ? "Tout" : CAT_LABEL[c]}</button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => onStart()}>{doneToday ? "Refaire une séance" : "Commencer la séance"}</button>
        {counts.reviewable > 0 && (<button className="link-review" onClick={onReview}>Réviser mes {counts.reviewable} {counts.reviewable === 1 ? "erreur" : "erreurs"} →</button>)}
        {doneToday && <p className="note-done">Séance du jour déjà faite — bravo.</p>}
      </div>

      <button className="btn-zone" onClick={onOpenRef}>
        <span className="zone-label">📚 Conjugaison</span>
        <span className="zone-sub">Tableaux de tous les temps · compléter les tableaux</span>
        <span className="zone-meta">{conj.mastered}/{conj.total} formes maîtrisées</span>
      </button>

      <div className="stats-row">
        <Stat value={stats.streak || 0} label={stats.streak === 1 ? "jour de suite" : "jours de suite"} flame />
        <Stat value={counts.mastered} label="maîtrisés" />
        <Stat value={counts.review} label="à revoir" accent />
      </div>

      <div className="progress-cats">
        {CATS.map((c) => { const pc = counts.perCat[c]; const pct = pc.total ? Math.round((pc.mastered / pc.total) * 100) : 0;
          return (<div key={c} className="pcat"><div className="pcat-head"><span className={"dot dot-" + c} /> {CAT_LABEL[c]}<span className="pcat-frac">{pc.mastered}/{pc.total}</span></div><div className={"pbar pbar-" + c}><span style={{ width: pct + "%" }} /></div></div>);
        })}
      </div>

      <div className="settings-row">
        <span className="settings-label">Longueur</span>
        <div className="seg">{[6, 8, 12].map((n) => (<button key={n} className={"seg-btn" + (settings.length === n ? " seg-on" : "")} onClick={() => onLength(n)}>{n}</button>))}</div>
        <span className="settings-hint">questions</span>
      </div>

      <footer className="home-foot"><span>{counts.seen}/{counts.total} notions vues</span><button className="link-reset" onClick={onReset}>Réinitialiser</button></footer>
    </div>
  );
}
function Stat({ value, label, flame, accent }) {
  return (<div className={"stat" + (accent ? " stat-accent" : "")}><span className="stat-value">{flame && value > 0 ? "🔥 " : ""}{value}</span><span className="stat-label">{label}</span></div>);
}

/* ------------------ ZONE CONJUGAISON : ACCUEIL ------------------------- */
function ConjHome({ conj, onBack, onOpenVerb, onDrillAll, onReview }) {
  const groups = [
    { n: 1, label: "1er groupe (-er)", note: "Réguliers + exceptions orthographiques" },
    { n: 2, label: "2e groupe (-ir, nous -issons)", note: "Réguliers" },
    { n: 3, label: "3e groupe (irréguliers)", note: "À mémoriser" },
  ];
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Accueil</button>
      <header className="masthead"><span className="eyebrow">Conjugaison</span><h1 className="logo-sm">Tableaux &amp; entraînement</h1></header>

      <div className="paper card-intro">
        <p className="lede">Consultez un verbe pour voir tous ses temps, ou entraînez-vous à compléter les tableaux. Les formes ratées sont mémorisées et reviennent en priorité.</p>
        <button className="btn-primary" onClick={onDrillAll}>Compléter les tableaux</button>
        {conj.reviewable > 0 && (<button className="link-review" onClick={onReview}>Revoir mes {conj.reviewable} {conj.reviewable === 1 ? "forme" : "formes"} fragile{conj.reviewable === 1 ? "" : "s"} →</button>)}
      </div>

      {groups.map((g) => (
        <div key={g.n} className="vgroup">
          <div className="vgroup-head"><span className="vgroup-title">{g.label}</span><span className="vgroup-note">{g.note}</span></div>
          <div className="vlist">
            {VERBS.filter((v) => v.group === g.n).map((v) => {
              const pv = conj.perVerb[v.inf]; const pct = pv.total ? Math.round((pv.mastered / pv.total) * 100) : 0;
              return (
                <button key={v.inf} className="vrow" onClick={() => onOpenVerb(v.inf)}>
                  <span className="vrow-inf">{v.inf}</span>
                  <span className="vrow-bar"><span style={{ width: pct + "%" }} /></span>
                  <span className="vrow-frac">{pv.mastered}/{pv.total}</span>
                  <span className="vrow-arrow">→</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------ ZONE CONJUGAISON : TABLEAU D'UN VERBE -------------- */
function VerbScreen({ v, conj, onBack, onDrill }) {
  if (!v) return null;
  const c = getConj(v);
  const pv = conj.perVerb[v.inf];
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>← Tous les verbes</button>
      <header className="verb-head">
        <h1 className="verb-title">{v.inf}</h1>
        <span className="verb-group">{v.group === 1 ? "1er groupe" : v.group === 2 ? "2e groupe" : "3e groupe"} · auxiliaire {v.aux} · part. passé « {v.participe} »</span>
      </header>

      <div className="paper verb-note-card"><p className="verb-note">{v.note}</p></div>

      {DISPLAY_TENSES.map((t) => {
        const forms = c[t];
        return (
          <div key={t} className="ten-block">
            <div className="ten-label">{TENSE_LABEL[t]}</div>
            {forms ? (
              <div className={"ten-grid" + (t === "imperatif" ? " ten-imp" : "")}>
                {forms.map((f, i) => (<div className="cline" key={i}>{lineFor(t, i, f)}</div>))}
              </div>
            ) : (<div className="cline cline-none">— (pas d’impératif usuel)</div>)}
            {t === "passeCompose" && v.aux === "être" && (<div className="ten-foot">Auxiliaire être → accord avec le sujet : allé, allée, allés, allées.</div>)}
          </div>
        );
      })}

      <button className="btn-primary verb-drill" onClick={onDrill}>S’entraîner sur « {v.inf} » ({pv.total} formes)</button>
    </div>
  );
}

/* ---------------------------- ÉCRAN SÉANCE ----------------------------- */
function Session({ item, index, total, answer, setAnswer, revealed, feedback, onCheck, onNext, inputRef, speech }) {
  const pct = ((index + (revealed ? 1 : 0)) / total) * 100;
  const isDictee = item.type === "dictee", isSms = item.type === "sms", isConj = !!item.conj;

  useEffect(() => {
    if (isDictee && !revealed && speech.supported) { const t = setTimeout(() => speech.speak(item.sentence), 250); return () => clearTimeout(t); }
  }, [item.id]); // eslint-disable-line

  useEffect(() => {
    function onKey(e) {
      if (!revealed && item.type === "qcm") { const n = parseInt(e.key, 10); if (n >= 1 && n <= item.options.length) { e.preventDefault(); onCheck(item.options[n - 1]); } }
      else if (revealed && e.key === "Enter") { e.preventDefault(); onNext(); }
    }
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [item, revealed, onCheck, onNext]);

  function onInputKey(e) { if (e.key === "Enter") { e.preventDefault(); if (!revealed && answer.trim()) onCheck(); else if (revealed) onNext(); } }
  const typePill = isDictee ? "✎ Dictée" : isSms ? "✉ SMS" : isConj ? "✍ Tableau" : null;

  return (
    <div className="screen session">
      <div className="progress-wrap"><div className="progress-bar"><span style={{ width: pct + "%" }} /></div><span className="progress-count">{index + 1} / {total}</span></div>
      <div className="tag-row"><span className={"cat-tag cat-" + item.cat}>{CAT_LABEL[item.cat]}</span>{typePill && <span className="type-pill">{typePill}</span>}</div>

      <div className="paper question-card">
        {isSms ? (<SmsBlock item={item} revealed={revealed} feedback={feedback} onCheck={onCheck} />)
        : isDictee ? (
          <div className="dictee-zone">
            <p className="prompt">Écoutez et écrivez la phrase, sans faute.</p>
            {speech.supported ? (
              <div className="audio-controls"><button className="audio-btn" onClick={() => speech.speak(item.sentence)}>▶ Réécouter</button><button className="audio-btn audio-slow" onClick={() => speech.speak(item.sentence, 0.6)}>🐢 Lentement</button></div>
            ) : (<p className="context dictee-fallback">{item.sentence}<span className="fallback-note">(audio indisponible — recopiez la phrase)</span></p>)}
          </div>
        ) : (
          <><p className="prompt">{item.prompt}</p><p className={"context" + (isConj ? " context-conj" : "")}>{renderContext(item.context, revealed, item)}</p></>
        )}

        {item.type === "qcm" && (
          <div className="options">
            {item.options.map((opt, i) => { let cls = "opt"; if (revealed) cls += opt === item.answer ? " opt-correct" : " opt-dim";
              return (<button key={opt} className={cls} disabled={revealed} onClick={() => onCheck(opt)}><span className="opt-key">{i + 1}</span>{opt}</button>); })}
          </div>
        )}

        {(item.type === "saisie" || isDictee) && (
          <div className={"saisie-wrap" + (isDictee ? " saisie-dictee" : "")}>
            {isDictee ? (
              <textarea ref={inputRef} className={"dictee-input" + (revealed ? (feedback.ok ? " si-ok" : " si-ko") : "")} value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={onInputKey} disabled={revealed} placeholder="Écrivez la phrase entendue…" spellCheck={false} autoComplete="off" rows={2} />
            ) : (
              <input ref={inputRef} className={"saisie-input" + (revealed ? (feedback.ok ? " si-ok" : feedback.kind === "near" ? " si-near" : " si-ko") : "")} value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={onInputKey} disabled={revealed} placeholder="Écrivez ici…" spellCheck={false} autoComplete="off" autoCapitalize="off" />
            )}
            {!revealed && (<button className="btn-primary btn-check" disabled={!answer.trim()} onClick={() => onCheck()}>Vérifier</button>)}
          </div>
        )}
      </div>

      {revealed && (
        <div className={"feedback fb-" + feedback.kind}>
          <p className="fb-head">
            {feedback.ok ? "Correct" : feedback.kind === "near" ? "Presque !" : "À retenir"}
            {!feedback.ok && !isDictee && !isSms && (<span className="fb-answer">{answer ? <s>{answer}</s> : null} {item.answer}</span>)}
          </p>
          {feedback.kind === "near" && <p className="fb-near">La bonne réponse est juste, il manque (ou il y a en trop) un accent.</p>}
          {isSms && (<div className="sms-fix">{item.errorFree ? <p className="fix-line fix-ok">✓ Ce message est correct — rien à corriger.</p> : <p className="fix-line"><s>{item.error.wrong}</s>&nbsp;→&nbsp;<strong>{item.error.right}</strong></p>}</div>)}
          {isDictee && <DicteeReview g={feedback.dictee} />}
          <p className="fb-rule">{item.rule}</p>
          <button className="btn-next" onClick={onNext}>{index + 1 < total ? "Suivant →" : "Voir le bilan →"}</button>
        </div>
      )}
    </div>
  );
}

function SmsBlock({ item, revealed, feedback, onCheck }) {
  const toks = smsParse(item.text);
  const target = feedback?.sms?.target ?? -1, picked = feedback?.sms?.picked;
  function wordClass(i) { let cls = "sms-word"; if (revealed) { if (i === target) cls += " w-err"; else if (picked && picked.type === "word" && picked.index === i) cls += " w-pick"; else cls += " w-plain"; } return cls; }
  let noneCls = "sms-none"; if (revealed) { if (item.errorFree) noneCls += " none-good"; else if (picked && picked.type === "none") noneCls += " none-bad"; else noneCls += " none-dim"; }
  return (
    <div className="sms-block">
      <p className="prompt">Lis ce message reçu. Touche le mot fautif — ou indique qu’il n’y a pas d’erreur.</p>
      <div className="sms-thread"><span className="sms-meta">● Message reçu</span>
        <div className="sms-bubble">{toks.map((t, i) => isSpace(t) ? <span key={i}>{t}</span> : <button key={i} className={wordClass(i)} disabled={revealed} onClick={() => onCheck({ type: "word", index: i })}>{t}</button>)}</div>
      </div>
      <button className={noneCls} disabled={revealed} onClick={() => onCheck({ type: "none" })}>✓ Aucune erreur</button>
    </div>
  );
}
function DicteeReview({ g }) {
  return (
    <div className="dictee-review">
      <p className="dr-label">La phrase correcte :</p>
      <p className="dr-sentence">{g.words.map((w, i) => (w.target === undefined ? null : <span key={i} className={w.ok ? "w-ok" : "w-ko"}>{w.target} </span>))}</p>
      {g.words.some((w) => !w.ok) && (<p className="dr-yours">Vous avez écrit&nbsp;:&nbsp;{g.words.map((w, i) => <span key={i} className={w.ok ? "" : "y-ko"}>{w.user !== undefined ? w.user : "—"} </span>)}</p>)}
    </div>
  );
}
function renderContext(text, revealed, item) {
  if (!text.includes("___")) return text;
  const [before, after] = text.split("___");
  return (<>{before}<span className={"blank" + (revealed ? " blank-filled" : "")}>{revealed ? item.answer : "____"}</span>{after}</>);
}

/* ---------------------------- ÉCRAN BILAN ------------------------------ */
function Done({ results, stats, onHome, onAgain, backLabel }) {
  const correct = results.filter((r) => r.correct).length, total = results.length, wrong = results.filter((r) => !r.correct);
  const score = Math.round((correct / total) * 100);
  const msg = score === 100 ? "Sans faute. Impeccable." : score >= 75 ? "Belle séance." : score >= 50 ? "Bon travail, ça progresse." : "C’est en se trompant qu’on apprend. On y revient.";
  const label = (it) => it.conj ? `${it.verb} · ${TENSE_LABEL[it.tense]} : ${lineFor(it.tense, it.person, it.answer)}` : it.type === "sms" ? (it.errorFree ? "Aucune erreur — " + it.text : it.error.wrong + " → " + it.error.right) : it.type === "dictee" ? it.sentence : it.answer;
  return (
    <div className="screen done">
      <header className="masthead"><span className="eyebrow">Bilan de la séance</span></header>
      <div className="paper bilan-card"><div className="score-big">{correct}<span className="score-sep">/</span>{total}</div><p className="bilan-msg">{msg}</p>{stats.streak > 0 && <p className="bilan-streak">🔥 {stats.streak} {stats.streak === 1 ? "jour" : "jours"} de suite</p>}</div>
      {wrong.length > 0 && (
        <div className="review-list"><h2 className="review-title">À revoir</h2>
          {wrong.map((r, i) => (<div key={i} className="review-item"><span className={"dot dot-" + r.item.cat} /><div><strong>{label(r.item)}</strong><span className="review-rule">{r.item.rule}</span></div></div>))}
        </div>
      )}
      <div className="done-actions"><button className="btn-primary" onClick={onHome}>{backLabel}</button><button className="btn-ghost" onClick={onAgain}>Une autre séance</button></div>
    </div>
  );
}

/* ============================== STYLES ================================= */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap');
.atelier-root{--paper:#FBFAF6;--ink:#1B2A4A;--ink-soft:#5B6781;--line:#CBD8EC;--blue:#2C4C86;--blue-deep:#21386A;--red:#C23A33;--green:#2E7D52;--green-soft:#EAF4EE;--red-soft:#FBEDEC;--amber:#B8791C;--amber-soft:#FAF1DF;--violet:#6A4FB0;--violet-soft:#EEEAF8;font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--paper);min-height:100vh;width:100%;-webkit-font-smoothing:antialiased;}
*{box-sizing:border-box;}
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

/* ---- zone conjugaison ---- */
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

/* ---- séance ---- */
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
.review-item{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid #E7E2D6;}
.review-item .dot{margin-top:6px;}
.review-item strong{font-family:'Spectral',serif;font-size:16px;display:block;line-height:1.4;}
.review-rule{display:block;font-size:13px;color:var(--ink-soft);line-height:1.5;margin-top:3px;}
.done-actions{display:flex;gap:12px;margin-top:8px;flex-wrap:wrap;}
.btn-ghost{background:none;border:1.5px solid #D8D2C4;color:var(--ink);border-radius:3px;padding:13px 22px;font-size:15px;font-weight:600;}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue);}

@keyframes rise{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}
@media (prefers-reduced-motion:reduce){*{animation:none !important;transition:none !important;}}
@media (max-width:430px){
  .logo{font-size:38px;}.context{font-size:19px;}.context-conj{font-size:22px;}.score-big{font-size:54px;}
  .stats-row{gap:7px;}.stat-value{font-size:24px;}.sms-bubble{font-size:17px;}
  .ten-grid{grid-template-columns:1fr;}.vrow-inf{flex-basis:80px;font-size:16px;}
}
`;
