/* ============================================================
   data.js — Données de The Workbook (anglais pour francophones)
   Chargé AVANT app.js. Ne contient aucun JSX ni logique.
   Interface en français ; contenu (phrases, mots, verbes) en anglais.
   ============================================================ */

/* =================== BANQUE D'EXERCICES (4 catégories) ================== */
const BANK = [
  /* ---------- GRAMMAR : articles, pluriels, accords, comparatifs ---------- */
  { id: "g01", cat: "grammar", type: "qcm", prompt: "a / an / the ?", context: "I saw ___ elephant at the zoo.", options: ["a", "an", "the"], answer: "an", rule: "« an » devant un son voyelle : an elephant, an apple. « a » devant un son consonne." },
  { id: "g02", cat: "grammar", type: "qcm", prompt: "a / an ?", context: "She waited for ___ hour.", options: ["a", "an", "the"], answer: "an", rule: "Dans « hour », le h est muet : on entend une voyelle → an hour. (Mais « a house » : h prononcé.)" },
  { id: "g03", cat: "grammar", type: "qcm", prompt: "Choisissez la forme correcte.", context: "She studies ___ at university.", options: ["the biology", "biology", "a biology"], answer: "biology", rule: "Pas d'article devant les matières et les noms généraux : study biology, like music. Piège n°1 des francophones (« j'aime la musique » → I like music)." },
  { id: "g04", cat: "grammar", type: "qcm", prompt: "much / many ?", context: "How ___ people came?", options: ["much", "many", "a lot"], answer: "many", rule: "« many » + dénombrable pluriel (people, books). « much » + indénombrable (water, money)." },
  { id: "g05", cat: "grammar", type: "qcm", prompt: "some / any ?", context: "I don't have ___ money.", options: ["some", "any", "no"], answer: "any", rule: "« any » dans les négations et les questions ; « some » dans les phrases affirmatives." },
  { id: "g06", cat: "grammar", type: "qcm", prompt: "Pluriel correct ?", context: "My ___ hurt after the walk.", options: ["foots", "feet", "feets"], answer: "feet", rule: "Pluriels irréguliers : foot → feet, tooth → teeth, man → men, child → children." },
  { id: "g07", cat: "grammar", type: "qcm", prompt: "Accord de l'adjectif.", context: "They are very ___ children.", options: ["happys", "happies", "happy"], answer: "happy", rule: "L'adjectif est invariable en anglais : happy children, two happy dogs. Jamais de -s sur l'adjectif." },
  { id: "g08", cat: "grammar", type: "qcm", prompt: "Comparatif.", context: "She is ___ than me.", options: ["more tall", "taller", "talls"], answer: "taller", rule: "Adjectif court (1 syllabe) → -er : tall → taller. « more » seulement pour les adjectifs longs (more difficult)." },
  { id: "g09", cat: "grammar", type: "qcm", prompt: "Possession.", context: "This is ___.", options: ["the car of my brother", "my brother's car", "my brother car"], answer: "my brother's car", rule: "Possession avec une personne : nom + 's. « my brother's car », pas « the car of my brother »." },
  { id: "g10", cat: "grammar", type: "qcm", prompt: "there is / there are ?", context: "There ___ a lot of cars outside.", options: ["is", "are", "have"], answer: "are", rule: "« there are » + pluriel, « there is » + singulier. Jamais « there has » pour exprimer la présence." },
  { id: "g11", cat: "grammar", type: "qcm", prompt: "Exprimer l'âge.", context: "She ___ twenty years old.", options: ["has", "is", "have"], answer: "is", rule: "L'âge se dit avec be : « I am 20 (years old) », jamais « I have 20 years » (calque du français)." },
  { id: "g12", cat: "grammar", type: "qcm", prompt: "this / these ?", context: "Look at ___ photos.", options: ["this", "these", "those ones"], answer: "these", rule: "« this » singulier (this photo), « these » pluriel (these photos). De même that → those." },
  { id: "g13", cat: "grammar", type: "qcm", prompt: "Préposition de lieu.", context: "I'll meet you ___ the station.", options: ["at", "in", "to"], answer: "at", rule: "« at » pour un point de rendez-vous précis : at the station, at home. « in » = à l'intérieur d'un espace." },
  { id: "g14", cat: "grammar", type: "saisie", prompt: "Écrivez le pluriel de « child ».", context: "She has three ___.", answer: "children", accept: ["children"], rule: "Pluriel irrégulier : child → children (et non « childs »)." },
  { id: "g15", cat: "grammar", type: "qcm", prompt: "little / few ?", context: "We have very ___ time.", options: ["few", "little", "fewer"], answer: "little", rule: "« little » + indénombrable (time, money) ; « few » + dénombrable pluriel (people, days)." },
  { id: "g16", cat: "grammar", type: "saisie", prompt: "Superlatif de « good ».", context: "It's the ___ day of my life.", answer: "best", accept: ["best"], rule: "Comparatif/superlatif irréguliers : good → better → best ; bad → worse → worst." },

  /* ---------- VERBS : temps, formes, auxiliaires ---------- */
  { id: "v01", cat: "verbs", type: "qcm", prompt: "Present perfect ou prétérit ?", context: "I ___ him yesterday.", options: ["have seen", "saw", "seen"], answer: "saw", rule: "Marqueur de temps achevé (yesterday) → prétérit : « I saw him yesterday ». Jamais le present perfect avec une date passée." },
  { id: "v02", cat: "verbs", type: "qcm", prompt: "Quel temps ?", context: "I ___ Japan three times.", options: ["visited", "have visited", "visit"], answer: "have visited", rule: "Expérience de vie sans date précise → present perfect : « I have visited Japan three times »." },
  { id: "v03", cat: "verbs", type: "qcm", prompt: "Quel temps ?", context: "Listen! Someone ___.", options: ["sings", "is singing", "sing"], answer: "is singing", rule: "Action en train de se dérouler maintenant → présent continu (be + -ing) : « is singing »." },
  { id: "v04", cat: "verbs", type: "qcm", prompt: "Quel temps ?", context: "She ___ to work every day.", options: ["is going", "goes", "go"], answer: "goes", rule: "Habitude → présent simple. 3e personne du singulier → -s : « she goes »." },
  { id: "v05", cat: "verbs", type: "qcm", prompt: "will ou going to ?", context: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "rains"], answer: "is going to", rule: "Prédiction fondée sur un indice présent → « be going to » : « It's going to rain »." },
  { id: "v06", cat: "verbs", type: "qcm", prompt: "will ou going to ?", context: "The phone is ringing. — I ___ answer it.", options: ["will", "am going to", "answer"], answer: "will", rule: "Décision spontanée prise sur le moment → « will » : « I'll answer it »." },
  { id: "v07", cat: "verbs", type: "saisie", prompt: "Prétérit de « go ».", context: "We ___ to the beach last summer.", answer: "went", accept: ["went"], rule: "Prétérit de « go » : went (irrégulier). « We went to the beach »." },
  { id: "v08", cat: "verbs", type: "saisie", prompt: "Participe passé de « see ».", context: "I have ___ that film twice.", answer: "seen", accept: ["seen"], rule: "Participe passé de « see » : seen. Present perfect : « I have seen it »." },
  { id: "v09", cat: "verbs", type: "qcm", prompt: "since ou for ?", context: "She has worked here ___ 2019.", options: ["for", "since", "during"], answer: "since", rule: "« since » + point de départ (since 2019, since Monday). « for » + durée (for three years)." },
  { id: "v10", cat: "verbs", type: "qcm", prompt: "Question au passé.", context: "Where ___ you go last night?", options: ["did", "do", "have"], answer: "did", rule: "Question au prétérit : did + base verbale : « Where did you go? » (jamais « did you went »)." },
  { id: "v11", cat: "verbs", type: "saisie", prompt: "Présent simple de « play » (he).", context: "He ___ tennis every weekend.", answer: "plays", accept: ["plays"], rule: "Présent simple, 3e personne du singulier → -s : he plays." },
  { id: "v12", cat: "verbs", type: "qcm", prompt: "Négation au présent.", context: "He ___ like coffee.", options: ["don't", "doesn't", "not"], answer: "doesn't", rule: "Négation au présent, 3e personne : doesn't + base verbale : « He doesn't like » (le -s est porté par l'auxiliaire)." },
  { id: "v13", cat: "verbs", type: "qcm", prompt: "Conditionnel.", context: "If I had money, I ___ travel.", options: ["will", "would", "had"], answer: "would", rule: "2e conditionnel : if + prétérit, puis « would + base verbale » : « If I had money, I would travel »." },
  { id: "v14", cat: "verbs", type: "saisie", prompt: "Passé continu de « sleep ».", context: "I was ___ when you called.", answer: "sleeping", accept: ["sleeping"], rule: "Action en cours dans le passé → past continuous (was/were + -ing) : « I was sleeping »." },
  { id: "v15", cat: "verbs", type: "qcm", prompt: "Present perfect.", context: "I haven't finished ___.", options: ["already", "yet", "since"], answer: "yet", rule: "« yet » en fin de phrase négative ou de question : « I haven't finished yet »." },
  { id: "v16", cat: "verbs", type: "saisie", prompt: "Forme en -ing de « build ».", context: "They are ___ a new house.", answer: "building", accept: ["building"], rule: "« build » → building (pas de doublement : le mot finit par deux consonnes)." },

  /* ---------- SPELLING : orthographe anglaise délicate ---------- */
  { id: "s01", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "It is ___ to book in advance.", options: ["necessary", "neccessary", "necesary"], answer: "necessary", rule: "« necessary » : un seul c, deux s. Astuce : one Collar, two Sleeves." },
  { id: "s02", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "What is your email ___?", options: ["adress", "address", "addres"], answer: "address", rule: "« address » : deux d ET deux s (contrairement au français « adresse »)." },
  { id: "s03", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "I'm tired ___ I worked late.", options: ["becouse", "because", "becuase"], answer: "because", rule: "« because » : be-cause. Astuce : Big Elephants Can Always Understand Small Elephants." },
  { id: "s04", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "I ___ you.", options: ["beleive", "believe", "belive"], answer: "believe", rule: "« i » avant « e », sauf après « c » : believe, receive. Astuce : « i before e except after c »." },
  { id: "s05", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "I will ___ come to the party.", options: ["definitly", "definately", "definitely"], answer: "definitely", rule: "« definitely » : de-fini-te-ly. Le mot « finite » est caché à l'intérieur." },
  { id: "s06", cat: "spelling", type: "saisie", prompt: "Forme en -ing de « run ».", context: "He keeps ___ every morning.", answer: "running", accept: ["running"], rule: "Verbe court (1 voyelle + 1 consonne finale accentuée) → on double : run → running, stop → stopping." },
  { id: "s07", cat: "spelling", type: "saisie", prompt: "Prétérit de « like ».", context: "We ___ the film a lot.", answer: "liked", accept: ["liked"], rule: "Verbe en -e muet → on ajoute juste -d : like → liked, dance → danced." },
  { id: "s08", cat: "spelling", type: "saisie", prompt: "Prétérit de « study ».", context: "She ___ all night for the exam.", answer: "studied", accept: ["studied"], rule: "Consonne + y → -ied : study → studied, try → tried. (Mais play → played : voyelle + y.)" },
  { id: "s09", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "___ one do you prefer?", options: ["wich", "which", "witch"], answer: "which", rule: "« which » pour un choix (avec « h »). « witch » (sorcière) est un autre mot." },
  { id: "s10", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "What a ___ view!", options: ["beatiful", "beautiful", "beautifull"], answer: "beautiful", rule: "« beautiful » : beauti- (comme beauty) + -ful (un seul l)." },
  { id: "s11", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "He started his own ___.", options: ["buisness", "business", "bussiness"], answer: "business", rule: "« business » : busi-ness. Un seul s au milieu, le « i » juste après « bus »." },
  { id: "s12", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "Keep the two files ___.", options: ["seperate", "separate", "separete"], answer: "separate", rule: "« separate » : se-PA-Rate. Il y a « a rat » au milieu (sep-a-rat-e)." },
  { id: "s13", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "Please wait ___ tomorrow.", options: ["untill", "until", "untl"], answer: "until", rule: "« until » : un seul l (contrairement à « till », qui en a deux)." },
  { id: "s14", cat: "spelling", type: "qcm", prompt: "Quelle orthographe ?", context: "Did you ___ my email?", options: ["recieve", "receive", "receve"], answer: "receive", rule: "Après « c », c'est « ei » : receive, deceive. (Règle : i before e except after c.)" },
  { id: "s15", cat: "spelling", type: "saisie", prompt: "Forme en -ing de « write ».", context: "She is ___ a letter.", answer: "writing", accept: ["writing"], rule: "« write » → writing : on enlève le e muet avant -ing (un seul t)." },

  /* ---------- CONFUSED : homophones (their/there/they're…) ---------- */
  { id: "p01", cat: "confused", type: "qcm", prompt: "their / there / they're ?", context: "___ going to be late.", options: ["Their", "There", "They're"], answer: "They're", rule: "« They're » = they are. « Their » = leur (possessif). « There » = là. Astuce : « they are going »." },
  { id: "p02", cat: "confused", type: "qcm", prompt: "their / there / they're ?", context: "They forgot ___ keys.", options: ["their", "there", "they're"], answer: "their", rule: "« their » = leur(s), possessif : their keys. Astuce : « their » contient « heir » (l'héritier qui possède)." },
  { id: "p03", cat: "confused", type: "qcm", prompt: "their / there / they're ?", context: "Put it over ___.", options: ["their", "there", "they're"], answer: "there", rule: "« there » = là, l'endroit. Il contient le mot « here »." },
  { id: "p04", cat: "confused", type: "qcm", prompt: "your / you're ?", context: "___ my best friend.", options: ["Your", "You're", "Youre"], answer: "You're", rule: "« You're » = you are. « Your » = ton/ta (possessif). Astuce : « you are my best friend »." },
  { id: "p05", cat: "confused", type: "qcm", prompt: "your / you're ?", context: "Is this ___ bag?", options: ["your", "you're", "yours"], answer: "your", rule: "« your » + nom = possessif : your bag. « you're » = you are." },
  { id: "p06", cat: "confused", type: "qcm", prompt: "its / it's ?", context: "The dog hurt ___ paw.", options: ["its", "it's", "its'"], answer: "its", rule: "« its » = son/sa (possessif, SANS apostrophe). « it's » = it is. Astuce : « it is paw » ne marche pas → its." },
  { id: "p07", cat: "confused", type: "qcm", prompt: "its / it's ?", context: "___ raining again.", options: ["Its", "It's", "Its'"], answer: "It's", rule: "« It's » = it is : It's raining. Astuce : « it is raining » marche → it's." },
  { id: "p08", cat: "confused", type: "qcm", prompt: "to / too / two ?", context: "I want to come ___.", options: ["to", "too", "two"], answer: "too", rule: "« too » = aussi / trop. « to » = à, vers. « two » = 2." },
  { id: "p09", cat: "confused", type: "qcm", prompt: "then / than ?", context: "She is taller ___ me.", options: ["then", "than", "thann"], answer: "than", rule: "« than » pour comparer (taller than). « then » = ensuite, alors." },
  { id: "p10", cat: "confused", type: "qcm", prompt: "whose / who's ?", context: "___ at the door?", options: ["Whose", "Who's", "Whos"], answer: "Who's", rule: "« Who's » = who is. « Whose » = à qui (possessif). Astuce : « who is at the door » → who's." },

  /* ---------- CONFUSED : repérage d'erreurs dans les messages ---------- */
  { id: "pm01", cat: "confused", type: "sms", text: "Your late again !", error: { wrong: "Your", right: "You're" }, rule: "« You're late » = you are late. « Your » est un possessif. Astuce : « you are late »." },
  { id: "pm02", cat: "confused", type: "sms", text: "I think there coming tonight.", error: { wrong: "there", right: "they're" }, rule: "« they're coming » = they are coming. « there » = là. Astuce : « they are coming »." },
  { id: "pm03", cat: "confused", type: "sms", text: "Its raining, take a coat.", error: { wrong: "Its", right: "It's" }, rule: "« It's raining » = it is raining. « Its » (sans apostrophe) = possessif. Astuce : « it is raining »." },
  { id: "pm04", cat: "confused", type: "sms", text: "See you tomorrow !", errorFree: true, rule: "Rien à corriger : « See you tomorrow » est correct. Bon réflexe de ne pas surcorriger." },
  { id: "pm05", cat: "confused", type: "sms", text: "Their house is very nice.", errorFree: true, rule: "Rien à corriger : « their house » (possessif) est juste." },
  { id: "pm06", cat: "confused", type: "sms", text: "I have more money then you.", error: { wrong: "then", right: "than" }, rule: "Comparaison → than : more money than you. « then » = ensuite. Astuce : comparer = than (avec a, comme « compare »)." },
  { id: "pm07", cat: "confused", type: "sms", text: "Can you give me you're number ?", error: { wrong: "you're", right: "your" }, rule: "« your number » = ton numéro (possessif). « you're » = you are. Astuce : « you are number » ne marche pas." },
  { id: "pm08", cat: "confused", type: "sms", text: "Were going to be late.", error: { wrong: "Were", right: "We're" }, rule: "« We're going » = we are going. « Were » = passé de be (you were). Astuce : « we are going »." },
  { id: "pm09", cat: "confused", type: "sms", text: "I should of called you.", error: { wrong: "of", right: "have" }, rule: "« should have » (jamais « should of »). À l'oral « should've » sonne comme « should of », mais c'est have." },
  { id: "pm10", cat: "confused", type: "sms", text: "Thanks, I got it !", errorFree: true, rule: "Rien à corriger : « I got it » est correct et naturel." },
  { id: "pm11", cat: "confused", type: "sms", text: "Whose coming to the party ?", error: { wrong: "Whose", right: "Who's" }, rule: "« Who's coming » = who is coming. « Whose » = à qui (possessif). Astuce : « who is coming »." },
  { id: "pm12", cat: "confused", type: "sms", text: "Its too expensive for me.", error: { wrong: "Its", right: "It's" }, rule: "« It's too expensive » = it is too expensive. « Its » (sans apostrophe) = possessif. (Ici « too » = trop est correct.)" },
  { id: "pm13", cat: "confused", type: "sms", text: "We had alot of fun.", error: { wrong: "alot", right: "a lot" }, rule: "« a lot » s'écrit en DEUX mots. « alot » n'existe pas." },
  { id: "pm14", cat: "confused", type: "sms", text: "Their is a problem here.", error: { wrong: "Their", right: "There" }, rule: "« There is » = il y a. « Their » = leur (possessif). Astuce : « there is a problem »." },

  /* ---------- DICTÉES (audio en-US) ---------- */
  { id: "d01", cat: "spelling", type: "dictee", sentence: "I have been waiting for an hour.", rule: "Present perfect continu : have been + -ing. « an hour » (h muet → an)." },
  { id: "d02", cat: "spelling", type: "dictee", sentence: "She bought a new computer.", rule: "Prétérit irrégulier : buy → bought. « computer », pas « computor »." },
  { id: "d03", cat: "verbs", type: "dictee", sentence: "He doesn't speak French.", rule: "3e personne → doesn't + base verbale (speak, pas speaks)." },
  { id: "d04", cat: "grammar", type: "dictee", sentence: "There are many people here.", rule: "« there are » + pluriel. « people » est déjà pluriel." },
  { id: "d05", cat: "spelling", type: "dictee", sentence: "We received your message yesterday.", rule: "« received » : e-i après c. « message » : deux s. « your » (possessif)." },
  { id: "d06", cat: "verbs", type: "dictee", sentence: "They are going to travel next year.", rule: "« be going to » + base verbale (projet). « travel » : un seul l." },
  { id: "d07", cat: "confused", type: "dictee", sentence: "They're happy with their new house.", rule: "« They're » = they are ; « their » = leur. Deux homophones dans la même phrase." },
  { id: "d08", cat: "grammar", type: "dictee", sentence: "I would like a cup of coffee.", rule: "« would like » pour une demande polie. « coffee » : deux f, deux e." },
];


/* =================== VERBES & TEMPS ANGLAIS =================== */
const PRON = ["I", "you", "he/she/it", "we", "you", "they"];
/* Auxiliaires (indexés sur PRON) — utilisés par le moteur dans app.js */
const BE_PRES = ["am", "are", "is", "are", "are", "are"];
const BE_PAST = ["was", "were", "was", "were", "were", "were"];
const HAVE_PRES = ["have", "have", "has", "have", "have", "have"];

const TENSE_LABEL = {
  present: "Present simple", past: "Past simple", presentCont: "Present continuous",
  pastCont: "Past continuous", presentPerfect: "Present perfect", future: "Future (will)", conditional: "Conditional (would)",
};
const TENSE_USAGE = {
  present: { usage: "Pour les habitudes, les faits réguliers et les vérités générales. Souvent avec every day, usually, always. À la 3e personne du singulier, on ajoute -s.", ex: ["I work every day.", "She works in Paris.", "Water boils at 100 °C."] },
  past: { usage: "Pour une action terminée dans le passé (souvent avec yesterday, last week, ago). Réguliers en -ed ; nombreux verbes irréguliers (go → went).", ex: ["I worked late yesterday.", "They went home.", "She saw the film last week."] },
  presentCont: { usage: "be (am/is/are) + verbe-ing : pour une action en train de se dérouler maintenant, ou une situation temporaire.", ex: ["I am working right now.", "She is reading a book.", "They are playing outside."] },
  pastCont: { usage: "was/were + verbe-ing : pour une action qui était en cours dans le passé, souvent interrompue par une autre.", ex: ["I was sleeping when you called.", "They were waiting for the bus.", "It was raining all day."] },
  presentPerfect: { usage: "have/has + participe passé : pour un lien entre le passé et le présent (une expérience, un résultat encore valable). Refuse les dates passées précises.", ex: ["I have finished my work.", "She has lost her keys.", "We have lived here since 2019."] },
  future: { usage: "will + base verbale : pour une décision spontanée, une prédiction ou une promesse. Identique à toutes les personnes.", ex: ["I will call you tonight.", "It will rain tomorrow.", "They will arrive at noon."] },
  conditional: { usage: "would + base verbale : pour une hypothèse (2e conditionnel) ou une demande polie. Identique à toutes les personnes.", ex: ["If I had time, I would travel.", "I would like a coffee.", "Would you help me?"] },
};
/* Affichés dans le tableau du verbe ; un sous-ensemble est testé (formes qui varient selon la personne). */
const DISPLAY_TENSES = ["present", "past", "presentCont", "pastCont", "presentPerfect", "future", "conditional"];
const DRILL_TENSES = ["present", "presentCont", "pastCont", "presentPerfect"];

/* Chaque verbe = base + 4 formes (third / past / pp / ing).
   group : 1 = régulier, 2 = irrégulier, 3 = auxiliaire.
   « be » fournit un objet forms qui remplace les tables générées. */
const VERBS = [
  { base: "work", third: "works", past: "worked", pp: "worked", ing: "working", group: 1, reg: true, note: "Verbe régulier. 3e personne : works. Prétérit et participe passé : worked (-ed). -ing : working." },
  { base: "play", third: "plays", past: "played", pp: "played", ing: "playing", group: 1, reg: true, note: "Régulier. Voyelle + y → on garde le y : plays, played, playing." },
  { base: "watch", third: "watches", past: "watched", pp: "watched", ing: "watching", group: 1, reg: true, note: "Régulier. Verbe en -ch → on ajoute -es à la 3e personne : watches. Prétérit : watched." },
  { base: "study", third: "studies", past: "studied", pp: "studied", ing: "studying", group: 1, reg: true, note: "Régulier. Consonne + y → -ies / -ied : studies, studied. Mais le -ing garde le y : studying." },
  { base: "go", third: "goes", past: "went", pp: "gone", ing: "going", group: 2, reg: false, note: "Irrégulier : went / gone. 3e personne : goes. Futur proche : « be going to »." },
  { base: "make", third: "makes", past: "made", pp: "made", ing: "making", group: 2, reg: false, note: "Irrégulier : made / made. E muet → making. « make a decision, make a mistake »." },
  { base: "take", third: "takes", past: "took", pp: "taken", ing: "taking", group: 2, reg: false, note: "Irrégulier : took / taken. E muet → taking. « take a photo, take the bus »." },
  { base: "get", third: "gets", past: "got", pp: "got", ing: "getting", group: 2, reg: false, note: "Irrégulier : got / got (US : gotten). On double le t : getting. Sens très large (obtenir, devenir…)." },
  { base: "see", third: "sees", past: "saw", pp: "seen", ing: "seeing", group: 2, reg: false, note: "Irrégulier : saw / seen. On garde les deux e : seeing. Verbe de perception." },
  { base: "write", third: "writes", past: "wrote", pp: "written", ing: "writing", group: 2, reg: false, note: "Irrégulier : wrote / written. E muet → writing (un seul t)." },
  { base: "be", third: "is", past: "was", pp: "been", ing: "being", group: 3, reg: false, note: "Auxiliaire, totalement irrégulier. Présent : am / are / is. Passé : was / were. Participe : been. Sert d'auxiliaire (be + -ing) et exprime l'âge (I am 25).",
    forms: { present: ["am", "are", "is", "are", "are", "are"], past: ["was", "were", "was", "were", "were", "were"], presentCont: null, pastCont: null, presentPerfect: ["have been", "have been", "has been", "have been", "have been", "have been"], future: ["will be", "will be", "will be", "will be", "will be", "will be"], conditional: ["would be", "would be", "would be", "would be", "would be", "would be"] } },
  { base: "have", third: "has", past: "had", pp: "had", ing: "having", group: 3, reg: false, note: "Irrégulier / auxiliaire. 3e personne : has. Prétérit et participe : had. Auxiliaire du present perfect (have/has + participe)." },
  { base: "do", third: "does", past: "did", pp: "done", ing: "doing", group: 3, reg: false, note: "Irrégulier / auxiliaire. 3e personne : does. Prétérit : did. Auxiliaire des questions et négations (do / does / did)." },
];


/* ============================== COURS ================================= */
const LESSONS = [
  {
    id: "articles", title: "Les articles : a, an, the… ou rien", cat: "grammar",
    tagline: "Les francophones mettent « the » partout — voici quand l'enlever.",
    sections: [
      { h: "a / an = première mention, dénombrable singulier", p: "« a » devant un son consonne, « an » devant un son voyelle (an apple, an hour). Pour une chose non encore identifiée.", ex: [{ good: "I saw a dog." }, { good: "She is an engineer." }, { good: "an hour, an honest man", note: "h muet → son voyelle → an" }] },
      { h: "the = chose précise ou unique", p: "Quand on sait de quoi on parle (déjà mentionné), ou pour ce qui est unique au monde.", ex: [{ good: "Close the door.", note: "une porte précise" }, { good: "the sun, the President" }] },
      { h: "Rien (Ø) = sens général ou pluriel indéfini", p: "Pas d'article devant un nom général, indénombrable ou un pluriel indéfini. C'est là que le français trompe.", ex: [{ bad: "I love the music.", good: "I love music." }, { bad: "The dogs are loyal.", good: "Dogs are loyal.", note: "les chiens en général" }] },
    ],
    astuce: "« en général » → pas d'article : I like coffee, Dogs are loyal. « the » seulement pour quelque chose de précis ou d'unique.",
  },
  {
    id: "plurals", title: "Le pluriel des noms", cat: "grammar",
    tagline: "Réguliers en -s, mais des irréguliers à connaître par cœur.",
    sections: [
      { h: "Le cas général : -s", p: "On ajoute -s : a cat → cats, a book → books." },
      { h: "-s, -ch, -sh, -x → -es", p: "Quand le nom finit par un son sifflant, on ajoute -es.", ex: [{ good: "bus → buses, watch → watches" }, { good: "box → boxes, dish → dishes" }] },
      { h: "Consonne + y → -ies", p: "On change le y en -ies. (Mais voyelle + y → juste -s.)", ex: [{ good: "city → cities, baby → babies", note: "consonne + y" }, { good: "day → days, key → keys", note: "voyelle + y" }] },
      { h: "Les irréguliers à mémoriser", p: "Certains pluriels sont totalement irréguliers.", ex: [{ good: "man → men, woman → women" }, { good: "child → children, foot → feet" }, { good: "tooth → teeth, mouse → mice" }] },
    ],
    astuce: "Les incontournables : man/men, woman/women, child/children, foot/feet, tooth/teeth, person/people.",
  },
  {
    id: "continuous", title: "Present simple ou present continuous ?", cat: "verbs",
    tagline: "Une distinction qui n'existe pas en français.",
    sections: [
      { h: "Present simple = habitudes et vérités", p: "Pour les habitudes, les actions régulières, les vérités générales. Souvent avec every day, usually, always.", ex: [{ good: "She goes to work by train." }, { good: "I play tennis on Sundays." }] },
      { h: "Present continuous = en ce moment", p: "be (am/is/are) + verbe-ing, pour une action en train de se dérouler maintenant, ou une situation temporaire.", ex: [{ good: "I am working right now." }, { good: "He is staying with us this week." }] },
      { h: "Les verbes qui refusent le -ing", p: "Les verbes d'état (like, want, know, understand, love, prefer) restent au présent simple, même pour « maintenant ».", ex: [{ bad: "I am wanting a coffee.", good: "I want a coffee." }, { bad: "I am knowing the answer.", good: "I know the answer." }] },
    ],
    astuce: "« right now / at the moment » → continuous. « every day / usually » → simple. Les verbes d'état (know, want, like…) ne se mettent jamais en -ing.",
  },
  {
    id: "past", title: "Le passé : -ed et les verbes irréguliers", cat: "verbs",
    tagline: "Réguliers faciles, irréguliers à apprendre par cœur.",
    sections: [
      { h: "Réguliers : -ed", p: "On ajoute -ed à la base : work → worked, play → played, want → wanted.", ex: [{ good: "I worked late yesterday." }, { good: "They played football." }] },
      { h: "Petites règles d'orthographe", p: "E muet → -d ; consonne + y → -ied ; voyelle courte + consonne → on double.", ex: [{ good: "like → liked, dance → danced", note: "e muet" }, { good: "study → studied, try → tried", note: "consonne + y" }, { good: "stop → stopped, plan → planned", note: "on double la consonne" }] },
      { h: "Les irréguliers", p: "Beaucoup de verbes courants ont un passé irrégulier : pas de règle, il faut les mémoriser.", ex: [{ good: "go → went, see → saw, take → took" }, { good: "make → made, get → got, come → came" }] },
      { h: "Questions et négations : did", p: "Au prétérit, la question et la négation utilisent « did » + base verbale. Le verbe revient à sa base.", ex: [{ bad: "Did you went?", good: "Did you go?" }, { bad: "I didn't went.", good: "I didn't go." }] },
    ],
    astuce: "À l'affirmative : verbe au prétérit (I went). Avec « did » (question/négation) : base verbale (Did you go? / I didn't go).",
  },
  {
    id: "homophones", title: "their / there / they're & your / you're", cat: "confused",
    tagline: "Les pièges qui se prononcent pareil mais s'écrivent différemment.",
    sections: [
      { h: "they're = they are", p: "Contraction de « they are ». Astuce : si « they are » marche, écris « they're ».", ex: [{ good: "They're late.", note: "= they are late" }] },
      { h: "their = leur (possessif)", p: "Toujours devant un nom : their car, their friends.", ex: [{ good: "Their car is red." }] },
      { h: "there = là", p: "L'endroit, ou la structure « there is / there are ».", ex: [{ good: "It's over there." }, { good: "There is a problem." }] },
      { h: "your vs you're", p: "« your » = ton/ta (your bag). « you're » = you are (you're nice). Même astuce : teste « you are ».", ex: [{ bad: "Your very kind.", good: "You're very kind.", note: "= you are" }, { good: "Is this your phone?", note: "possessif" }] },
    ],
    astuce: "Teste la version longue : « they are » → they're, « you are » → you're. Si ça ne marche pas, c'est le possessif (their / your) ou le lieu (there).",
  },
  {
    id: "quantity", title: "much / many, some / any", cat: "grammar",
    tagline: "Dénombrable ou indénombrable ? Affirmation ou négation ?",
    sections: [
      { h: "many / much", p: "« many » + dénombrable pluriel (many books). « much » + indénombrable (much water).", ex: [{ good: "How many people?" }, { good: "How much money?" }, { bad: "many money", good: "much money" }] },
      { h: "some / any", p: "« some » dans l'affirmatif ; « any » dans le négatif et l'interrogatif.", ex: [{ good: "I have some bread." }, { good: "I don't have any bread." }, { good: "Do you have any questions?" }] },
      { h: "a few / a little", p: "« a few » + dénombrable (a few friends). « a little » + indénombrable (a little time).", ex: [{ good: "a few days" }, { good: "a little patience" }] },
    ],
    astuce: "Comptable (1, 2, 3…) → many / a few. Non comptable (water, money, time) → much / a little. Affirmation → some, négation/question → any.",
  },
];

/* Exposition globale : rend les données accessibles depuis app.js (script Babel). */
Object.assign(window, { BANK, PRON, BE_PRES, BE_PAST, HAVE_PRES, TENSE_LABEL, TENSE_USAGE, DISPLAY_TENSES, DRILL_TENSES, VERBS, LESSONS });


/* =================== VERBES IRRÉGULIERS (tableau de référence) ===================
   base · prétérit · participe passé · traduction française de l'infinitif. */
const IRREGULARS = [
  { base: "be", past: "was / were", pp: "been", fr: "être" },
  { base: "become", past: "became", pp: "become", fr: "devenir" },
  { base: "begin", past: "began", pp: "begun", fr: "commencer" },
  { base: "break", past: "broke", pp: "broken", fr: "casser" },
  { base: "bring", past: "brought", pp: "brought", fr: "apporter" },
  { base: "build", past: "built", pp: "built", fr: "construire" },
  { base: "buy", past: "bought", pp: "bought", fr: "acheter" },
  { base: "catch", past: "caught", pp: "caught", fr: "attraper" },
  { base: "choose", past: "chose", pp: "chosen", fr: "choisir" },
  { base: "come", past: "came", pp: "come", fr: "venir" },
  { base: "cost", past: "cost", pp: "cost", fr: "coûter" },
  { base: "cut", past: "cut", pp: "cut", fr: "couper" },
  { base: "do", past: "did", pp: "done", fr: "faire" },
  { base: "draw", past: "drew", pp: "drawn", fr: "dessiner" },
  { base: "drink", past: "drank", pp: "drunk", fr: "boire" },
  { base: "drive", past: "drove", pp: "driven", fr: "conduire" },
  { base: "eat", past: "ate", pp: "eaten", fr: "manger" },
  { base: "fall", past: "fell", pp: "fallen", fr: "tomber" },
  { base: "feel", past: "felt", pp: "felt", fr: "(se) sentir" },
  { base: "find", past: "found", pp: "found", fr: "trouver" },
  { base: "fly", past: "flew", pp: "flown", fr: "voler" },
  { base: "forget", past: "forgot", pp: "forgotten", fr: "oublier" },
  { base: "get", past: "got", pp: "got", fr: "obtenir" },
  { base: "give", past: "gave", pp: "given", fr: "donner" },
  { base: "go", past: "went", pp: "gone", fr: "aller" },
  { base: "grow", past: "grew", pp: "grown", fr: "grandir / pousser" },
  { base: "have", past: "had", pp: "had", fr: "avoir" },
  { base: "hear", past: "heard", pp: "heard", fr: "entendre" },
  { base: "hold", past: "held", pp: "held", fr: "tenir" },
  { base: "keep", past: "kept", pp: "kept", fr: "garder" },
  { base: "know", past: "knew", pp: "known", fr: "savoir / connaître" },
  { base: "leave", past: "left", pp: "left", fr: "partir / laisser" },
  { base: "lose", past: "lost", pp: "lost", fr: "perdre" },
  { base: "make", past: "made", pp: "made", fr: "fabriquer / faire" },
  { base: "mean", past: "meant", pp: "meant", fr: "signifier" },
  { base: "meet", past: "met", pp: "met", fr: "rencontrer" },
  { base: "pay", past: "paid", pp: "paid", fr: "payer" },
  { base: "put", past: "put", pp: "put", fr: "mettre" },
  { base: "read", past: "read", pp: "read", fr: "lire" },
  { base: "ride", past: "rode", pp: "ridden", fr: "monter (à vélo/cheval)" },
  { base: "ring", past: "rang", pp: "rung", fr: "sonner" },
  { base: "run", past: "ran", pp: "run", fr: "courir" },
  { base: "say", past: "said", pp: "said", fr: "dire" },
  { base: "see", past: "saw", pp: "seen", fr: "voir" },
  { base: "sell", past: "sold", pp: "sold", fr: "vendre" },
  { base: "send", past: "sent", pp: "sent", fr: "envoyer" },
  { base: "sing", past: "sang", pp: "sung", fr: "chanter" },
  { base: "sit", past: "sat", pp: "sat", fr: "s'asseoir" },
  { base: "sleep", past: "slept", pp: "slept", fr: "dormir" },
  { base: "speak", past: "spoke", pp: "spoken", fr: "parler" },
  { base: "spend", past: "spent", pp: "spent", fr: "dépenser / passer (du temps)" },
  { base: "stand", past: "stood", pp: "stood", fr: "être debout / supporter" },
  { base: "swim", past: "swam", pp: "swum", fr: "nager" },
  { base: "take", past: "took", pp: "taken", fr: "prendre" },
  { base: "teach", past: "taught", pp: "taught", fr: "enseigner" },
  { base: "tell", past: "told", pp: "told", fr: "raconter / dire" },
  { base: "think", past: "thought", pp: "thought", fr: "penser" },
  { base: "throw", past: "threw", pp: "thrown", fr: "lancer / jeter" },
  { base: "understand", past: "understood", pp: "understood", fr: "comprendre" },
  { base: "wake", past: "woke", pp: "woken", fr: "(se) réveiller" },
  { base: "wear", past: "wore", pp: "worn", fr: "porter (vêtement)" },
  { base: "win", past: "won", pp: "won", fr: "gagner" },
  { base: "write", past: "wrote", pp: "written", fr: "écrire" },
];

/* =================== MENU : autres applications ===================
   href absent = « à venir » (non cliquable). Mets à jour les URL ici. */
const APPS = [
  { name: "Musculation", note: "coachmuscu", href: "https://ricardospec.github.io/coachmuscu/" },
  { name: "Français", note: "L'Atelier — orthographe & conjugaison", href: "https://ricardospec.github.io/Lateliergram/" },
  { name: "Espagnol", note: "à venir" },
  { name: "Suivi du mémoire", note: "à venir" },
];

Object.assign(window, { IRREGULARS, APPS });
