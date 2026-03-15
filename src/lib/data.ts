export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
}

export const posts: Post[] = [
  {
    id: 4314,
    slug: "growth-academy-ii-edizione",
    title: "Growth Academy — II Edizione",
    excerpt:
      "3 mesi, 30 ore, dalla storia dei videogiochi al marketing esports. Il nostro programma formativo.",
    content: `La seconda edizione della Growth Academy: un programma formativo di 3 mesi, 30 ore totali, con sessioni settimanali da 2.5 ore.

**Mese 1 — Hardware e Software**
PC vs console, tastiere meccaniche, monitor gaming, mobile gaming. Le basi tecniche per capire cosa c'è dietro al gioco.

**Mese 2 — Storia e Generi**
Da Spacewar! agli esports moderni. Un viaggio attraverso i generi, le piattaforme, le rivoluzioni che hanno cambiato il medium.

**Mese 3 — Marketing e Produzione**
Creare contenuti, costruire un brand, organizzare un evento esports live. Dalla teoria alla pratica.

Il programma include moduli di psicologia cognitiva: stati di flow, identità virtuale, cognizione sociale, gestione della dipendenza da gioco, tecniche di mindfulness applicate al gaming.

Perché giocare bene significa anche capire cosa il gioco fa a noi.`,
    date: "2021-04-14",
    category: "news",
    tags: ["academy", "formazione", "esports"],
    image: "/images/academy.jpg",
  },
  {
    id: 2078,
    slug: "milan-games-week-2019",
    title: "Milan Games Week 2019 — qualche riflessione a caldo",
    excerpt:
      "Power, Machete Gaming, Adidas. E qualche nota stonata. Le nostre impressioni dalla MGW.",
    content: `Qualche riflessione a caldo dalla Milan Games Week 2019.

**Cosa ha funzionato:**
- **Power** come brand ambassador — presenza coerente, comunicazione efficace
- **Machete Gaming** — l'integrazione tra musica e gaming funziona quando è genuina
- **Adidas** — capire che il gaming è lifestyle, non solo competizione
- **McDelivery** — sponsorizzazione intelligente, presente senza invadere

**Cosa meno:**
- **Gillette** — esecuzione debole, il messaggio non arrivava
- L'assenza di un palinsesto condiviso tra gli stand — ogni isola era un mondo a sé
- **Xbox** quasi invisibile, mentre **PlayStation** dominava lo spazio fisico

La riflessione più grande: il gaming è ormai cultura pop mainstream. A Milano lo vedi. Nelle code, nei cosplay, nelle famiglie che portano i figli. Non è più un fenomeno di nicchia da "sdoganare". È sdoganato. Ora serve farlo bene.`,
    date: "2019-09-30",
    category: "news",
    tags: [
      "mgw19",
      "cultura-pop",
      "esports",
      "microsoft",
      "nintendo",
      "playstation",
    ],
    image: "/images/mgw.jpg",
  },
  {
    id: 2018,
    slug: "il-videogioco-come-sport",
    title: "Il Videogioco Come Sport. Ti va di partecipare?",
    excerpt:
      "Esports come associazionismo sportivo. Cerchiamo giocatori, team, clan e coach.",
    content: `Una proposta: un gruppo esports amatoriale modellato sulle associazioni sportive tradizionali.

Fare esport vuol dire tante cose. Si possono giocare dal vivo oppure online, a livello amatoriale, semiprofessionistico e professionistico.

C'è una distinzione fondamentale tra videogiochi competitivi — gli esports veri e propri — e le meccaniche predatorie dei casual game. Noi scegliamo i primi.

**Cerchiamo:**
- Giocatori che vogliono migliorare
- Team e clan che cercano una struttura
- Coach che vogliono insegnare

Il modello è quello dell'associazione sportiva: allenamenti regolari, obiettivi condivisi, crescita collettiva. Perché il talento individuale senza organizzazione resta potenziale inespresso.`,
    date: "2019-04-19",
    category: "news",
    tags: ["esports", "aps", "competizioni"],
    image: "/images/esport.jpg",
  },
  {
    id: 1996,
    slug: "10-secondi-per-raccontarvi-chi-siamo",
    title: "10 secondi per raccontarvi chi siamo",
    excerpt:
      "Il nome, il logo, le due G invertite. Perché Growth Gaming e cosa significa GG.",
    content: `Perché "Growth Gaming"?

**Growth** viene dal growth hacking — il marketing basato sui dati, sulla sperimentazione, sulla crescita misurabile. Applicato al gaming diventa "giocare per crescere".

**GG** — le iniziali. Nel gaming, GG è "Good Game". Il saluto universale dell'esports, il rispetto tra avversari dopo una partita. Ci è sembrato il nome perfetto.

**Il logo:** due G invertite, come due giocatori contrapposti. In colori diversi, perché il gaming è il luogo dove la diversità si incontra. Razza, status, nazionalità, sesso, età — davanti a uno schermo siamo tutti uguali. O almeno, dovremmo esserlo.

Non è solo un nome. È una dichiarazione di intenti.`,
    date: "2019-04-03",
    category: "news",
    tags: ["growthgaming", "branding", "community"],
    image: "/images/gg-logo.jpg",
  },
  {
    id: 74,
    slug: "concerto-marshmello-fortnite",
    title: "2 febbraio 2019. Qualcosa di straordinario sta capitando.",
    excerpt:
      "Il concerto di Marshmello in Fortnite. Un nuovo livello di coinvolgimento.",
    content: `2 febbraio 2019. Ore 20. Qualcosa di straordinario sta capitando.

Marshmello suona in Fortnite. Non un video. Non uno streaming. Un concerto dentro il gioco, con il tuo avatar che balla tra milioni di altri avatar.

È un nuovo livello di coinvolgimento. Il videogioco come medium, non come prodotto. L'identificazione con l'avatar. Il desiderio di epicità. L'appartenenza tribale. La musica elettronica. La cultura pop. Il trasporto e l'emozione.

Un nuovo passo nella storia dell'umanità? Forse è un'iperbole. Ma fermati un secondo a pensare: dieci milioni di persone, nello stesso momento, nello stesso luogo virtuale, che vivono la stessa esperienza emotiva.

Quando è successo l'ultima volta?`,
    date: "2019-02-03",
    category: "news",
    tags: ["fortnite", "marshmello", "coinvolgimento", "videogiochi"],
    image: "/images/marshmello.jpg",
  },
  {
    id: 22,
    slug: "xmas-fight-sassari-2018-recap",
    title: "Xmas Fight — Sassari — 27 dicembre 2018",
    excerpt:
      "74 partecipanti, 8 PS4, un proiettore HD e tanta competizione. Il recap del nostro secondo evento.",
    content: `Il secondo evento Growth Gaming. Torneo Fortnite con 74 partecipanti registrati, competizione a coppie in modalità creativa.

**Il setup tecnico:**
- 8 PS4 connesse via LAN Ethernet
- Connessione FTTC 100/20 Mbps
- Switch HDMI e splitter per la regia
- MacBook con OBS per lo streaming
- Proiettore HD per il pubblico
- Una PlayStation dedicata a FIFA 19
- Due PC gaming per League of Legends
- 180€ in premi
- Due caster

Il bello di organizzare eventi gaming dal vivo è che scopri quanto la community abbia voglia di incontrarsi. Online siamo tutti connessi, ma la LAN party ha un'energia diversa. È il ritorno alle origini, quando giocare insieme significava essere nella stessa stanza.`,
    date: "2019-01-01",
    category: "eventi",
    tags: ["esports", "fortnite", "sassari", "torneo"],
    image: "/images/xmas-fight.jpg",
  },
  {
    id: 4937,
    slug: "growth-gaming-talk-udinese-esports",
    title: "Growth Gaming TALK — Intervista all'Udinese Esports",
    excerpt:
      "La prima puntata della nostra rubrica. Ospiti: il settore esports dell'Udinese Calcio.",
    content: `Nasce Growth Gaming TALK, la nostra rubrica periodica di interviste.

Prima puntata con il settore esports dell'Udinese Calcio. Live su YouTube il 18 maggio alle 20:00.

Parleremo di esports, FIFA e videogiochi con chi ha portato il gaming professionistico dentro un club di Serie A. Come funziona? Che competenze servono? Che futuro ha l'esports nel calcio italiano?

Sessione Q&A con il pubblico alla fine. Perché le conversazioni migliori sono quelle dove tutti possono dire la loro.`,
    date: "2021-05-15",
    category: "eventi",
    tags: ["talk", "udinese", "esports", "fifa"],
    image: "/images/talk.jpg",
  },
  {
    id: 16,
    slug: "xmas-fight-torneo-2v2-fortnite",
    title: "Xmas Fight — Torneo 2v2 Fortnite + Side Events",
    excerpt:
      "Torneo 2v2 Fortnite in Playground, postazioni League of Legends e FIFA 19.",
    content: `Annuncio: Xmas Fight, torneo 2v2 Fortnite in modalità Playground con scontri diretti.

**Main Event:** Torneo Fortnite 2v2 — modalità Playground, bracket a eliminazione diretta.

**Side Events:**
- Postazioni PC per League of Legends 1v1
- Console per FIFA 19

Il primo vero evento competitivo di Growth Gaming. L'idea è semplice: portare l'esports a Sassari, in un formato accessibile, dove chiunque possa partecipare senza sentirsi fuori posto.

Perché la competizione è divertente solo quando è inclusiva.`,
    date: "2018-11-22",
    category: "eventi",
    tags: ["esports", "fortnite", "fifa", "leagueoflegends", "sassari"],
    image: "/images/xmas-fight-announce.jpg",
  },
];

export const manifesto = {
  title: "Growth Gaming Manifesto",
  content: `Il gaming è un impegno serio. Non nel senso che non ci si diverte — ci si diverte eccome. Ma nel senso che merita rispetto, struttura, professionalità.

**I nostri principi:**

1. **Il gaming è cultura** — Non un passatempo da tollerare, ma un medium da comprendere e valorizzare.

2. **Approccio professionale** — Che si tratti di un torneo o di un corso di formazione, facciamo le cose per bene.

3. **Rispetto per la competizione** — Vincere è bello, ma come si vince conta di più.

4. **Solo giochi positivi** — Promuoviamo esperienze che costruiscono, non che distruggono.

5. **Le persone prima dei giochi** — La tecnologia è uno strumento. Le persone sono il fine.

Questo è Growth Gaming. Non vendiamo hype. Costruiamo competenze.`,
};

export const aboutContent = {
  title: "Chi siamo",
  subtitle: "Growth Gaming APS",
  content: `Growth Gaming è un'associazione di promozione sociale dedicata alla cultura del videogioco.

Fondata a Sassari, lavoriamo su quattro fronti:

**Educazione** — Corsi, workshop, programmi formativi. Dal hardware alla psicologia del gaming, dalla creazione di contenuti all'organizzazione di eventi.

**Esports** — Competizioni organizzate con serietà. Tornei locali, team building, supporto a giocatori e clan che vogliono crescere.

**Community** — Creare spazi di incontro, online e offline. Perché il gaming è prima di tutto un'esperienza sociale.

**Formazione professionale** — Growth Academy, il nostro programma di punta. Tre mesi intensivi per chi vuole fare del gaming una competenza spendibile.

Il nome dice tutto: giocare per crescere. Le due G del logo — Good Game — sono il nostro saluto e la nostra promessa.`,
  team: [
    {
      name: "Francesco Cugurra",
      role: "Presidente",
      focus: "Strategia, tech, AI",
    },
    {
      name: "Gianluca Carboni",
      role: "Vicepresidente",
      focus: "Formazione, gamification",
    },
    {
      name: "Pasqualino Demartis",
      role: "Consigliere",
      focus: "Organizzazione, segreteria",
    },
  ],
};

export const academyContent = {
  title: "Growth Academy",
  tagline: "Imparare, giocando.",
  intro: `Growth Academy è il nostro programma di formazione di punta. Non un corso qualsiasi: un percorso strutturato che unisce gaming, tecnologia e competenze trasversali.

Nato nel 2021, ha già formato decine di partecipanti trasformando la passione per il gaming in competenze concrete e spendibili.`,
  editions: [
    {
      name: "I Edizione",
      year: "2020",
      description:
        "Il progetto pilota. Un primo esperimento per validare l'idea che il gaming potesse essere un veicolo formativo serio.",
    },
    {
      name: "II Edizione",
      year: "2021",
      description:
        "Il formato maturo. 3 mesi, 30 ore, sessioni settimanali. Hardware, storia dei videogiochi, marketing esports e psicologia cognitiva.",
    },
  ],
  modules: [
    {
      icon: "Monitor",
      title: "Hardware & Software",
      description:
        "PC vs console, periferiche, monitor gaming, mobile. Le basi tecniche per capire cosa c'è sotto il cofano.",
      duration: "Mese 1 — 10 ore",
    },
    {
      icon: "Gamepad2",
      title: "Storia & Generi",
      description:
        "Da Spacewar! agli esports moderni. Un viaggio attraverso 50 anni di evoluzione del medium.",
      duration: "Mese 2 — 10 ore",
    },
    {
      icon: "Megaphone",
      title: "Marketing & Produzione",
      description:
        "Creare contenuti, costruire un brand, organizzare un evento esports live. Dalla teoria al palco.",
      duration: "Mese 3 — 10 ore",
    },
    {
      icon: "Brain",
      title: "Psicologia del Gaming",
      description:
        "Stati di flow, identità virtuale, cognizione sociale, dipendenza da gioco, mindfulness applicata.",
      duration: "Trasversale",
    },
  ],
  stats: [
    { value: "30+", label: "Ore di formazione" },
    { value: "70%", label: "Pratica" },
    { value: "50+", label: "Partecipanti formati" },
    { value: "3", label: "Mesi di percorso" },
  ],
  approach: `Il nostro approccio è semplice: 70% pratica, 30% teoria. Non crediamo nei corsi dove si ascolta e basta. Ogni sessione ha un output concreto — un progetto, un contenuto, un'esperienza.

Il gaming non è il fine. È il mezzo. Le competenze che si sviluppano — problem solving, lavoro di squadra, gestione dello stress, pensiero strategico — sono le stesse che il mercato del lavoro cerca.

Noi le insegniamo attraverso il linguaggio che i partecipanti conoscono meglio.`,
  cta: "Le iscrizioni per la prossima edizione apriranno a breve. Lascia i tuoi dati per essere tra i primi a saperlo.",
};
