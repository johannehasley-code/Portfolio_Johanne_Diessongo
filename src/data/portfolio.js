export const profile = {
  name: "Johanne Hasley Diessongo",
  title: "Ingénieure Généraliste · FinTech & Finance de Marchés",
  email: "johannehasley.diessongo@gmail.com",
  phone: "+212 618448926",
  linkedin: "https://www.linkedin.com/in/johannehasleydiessongo",
  location: "Ouagadougou, Burkina Faso",
  summary: "Étudiante en 4e année en ingénierie généraliste à l'École Centrale Casablanca, en mobilité académique au Burkina Faso. Je construis des ponts entre la technologie et la finance de marchés, avec un intérêt particulier pour les marchés financiers ouest-africains (BRVM/UEMOA).",
  currentFocus: "Fondatrice de Laafi Épargne",
};

export const skills = {
  finance: [
    { name: "Diagnostic financier", context: "Analyse sur 5 exercices, normes SYSCOHADA" },
    { name: "Forecasting", context: "Certification edX, 2024" },
    { name: "Analyse de données", context: "Excel avancé + Python" },
    { name: "Analyse par ratios", context: "Rentabilité, structure, trésorerie" },
    { name: "Analyse de marché", context: "Focus BRVM/UEMOA" },
  ],
  tech: [
    { name: "Python", context: "3 projets (ML, dashboards, scripts data)" },
    { name: "React", context: "5 applications déployées" },
    { name: "Java", context: "Projets académiques" },
    { name: "JavaScript", context: "Front-end de mes projets" },
    { name: "Excel", context: "Modèles multi-onglets" },
  ],
  management: ["Méthodes Agile (Scrum)", "Product Backlog", "Leadership", "Gestion de projet"],
  languages: [
    { lang: "Français", level: "C1" },
    { lang: "Anglais", level: "B2" },
  ],
};

export const experiences = [
  {
    role: "Stagiaire, Finance et stratégie",
    company: "SECCAPI (cabinet d'expertise comptable)",
    period: "Juil. – Août 2026",
    type: "finance",
    tasks: [
      "Diagnostic financier d'une société de distribution pharmaceutique sur cinq exercices, à partir d'états financiers au format SYSCOHADA",
      "Analyse par ratios de rentabilité, de structure et de trésorerie",
      "Contribution au plan stratégique d'une société de transport public",
    ],
    extracts: { photos: [] },
  },
  {
    role: "Stagiaire, Département Digital",
    company: "Bank Of Africa MALI (BOA MALI)",
    period: "Juil. – Août 2025",
    type: "finance",
    tasks: [
      "Analyse des statistiques relatives à la récupération des cartes bancaires",
      "Gestion des incidents de transfert Western Union (erreurs réseau, blocages, retards)",
      "Conception d'une application de gestion de tokens uniques pour sécuriser les transferts d'argent",
    ],
    extracts: { photos: [] },
  },
  {
    role: "Membre Active",
    company: "Centrale Tech",
    period: "Oct. 2024 – 2025",
    type: "tech",
    tasks: [
      "Conception et programmation de robots en équipe",
      "Participation à des projets d'innovation technologique",
    ],
  },
];

export const projects = [
  // Projets communautaires
  {
    title: "Give Back Activities – CNTS",
    desc: "Projet communautaire du Mastercard Foundation Scholars Program : conception d'un prototype d'application web pour le Centre National de Transfusion Sanguine (CNTS) de Ouagadougou, en équipe de huit boursiers.",
    tags: ["React", "Santé publique", "Bénévolat"],
    color: "#f4e8ea",
    type: "community",
    category: "communautaire",
    demo: { kind: "video", url: "" },
  },
  {
    title: "Aide aux femmes déplacées internes",
    desc: "Projet communautaire de soutien aux femmes déplacées internes au Burkina Faso. Fiche en cours de complément.",
    tags: ["Communautaire", "Impact social"],
    color: "#f4ece8",
    type: "community",
    category: "communautaire",
    demo: { kind: "photos", photos: [] },
  },
  // Projets personnels
  {
    title: "Investpredict",
    desc: "Application d'épargne inclusive pour agriculteurs et éleveurs du Burkina Faso : sécurisation et croissance progressive de l'épargne, assistance vocale en langues locales.",
    tags: ["React", "IA", "Finance inclusive", "BRVM"],
    color: "#e8f4f0",
    type: "finance",
    category: "personnel",
    demo: { kind: "video", url: "" },
  },
  {
    title: "App de Gestion de Tokens",
    desc: "Solution sécurisée de génération de tokens uniques pour les transferts d'argent (BOA Mali).",
    tags: ["FinTech", "Sécurité", "Banking"],
    color: "#eef0f8",
    type: "security",
    category: "personnel",
    demo: { kind: "link", url: "" },
  },
  {
    title: "Centralisation de Bourses",
    desc: "Application centralisant les opportunités de bourses d'études pour étudiants africains.",
    tags: ["React", "UX", "Social", "Projet de groupe (5)"],
    color: "#f4f0e8",
    type: "education",
    category: "personnel",
    demo: { kind: "link", url: "" },
  },
  // Projets académiques
  {
    title: "InnoFaso NC",
    desc: "Application web de gestion des non-conformités développée en collaboration avec Innofaso, entreprise agro-industrielle burkinabè. Analyse des causes par la méthode des 5 Pourquoi assistée par IA, gestion des accès par rôle.",
    tags: ["React", "Node.js", "MySQL", "IA"],
    color: "#e8f0f4",
    type: "tech",
    category: "academique",
    demo: { kind: "link", url: "" },
  },
  {
    title: "AES Connect",
    desc: "MVP permettant la mise à disposition et le partage de supports de cours pour étudiants.",
    tags: ["React", "Education", "MVP"],
    color: "#f0e8f4",
    type: "book",
    category: "academique",
    demo: { kind: "link", url: "" },
  },
  {
    title: "MathBot AI",
    desc: "Projet académique. Fiche en cours de complément.",
    tags: ["IA", "Académique"],
    color: "#e8eef4",
    type: "tech",
    category: "academique",
    demo: { kind: "link", url: "" },
  },
];

export const projectCategories = [
  { key: "communautaire", label: "Projets communautaires" },
  { key: "personnel", label: "Projets personnels" },
  { key: "academique", label: "Projets académiques" },
];

export const education = [
  {
    school: "École Centrale Casablanca – 2iE",
    degree: "Bachelor of Engineering",
    period: "2023 – Présent",
    detail: "Mobilité académique : Semestre d'échange à 2iE, Burkina Faso, 2026",
    courses: ["Analyse financière", "Micro/Macroéconomie", "Gestion de projet Agile", "Java, Python, React"],
  },
  {
    school: "Lycée Scientifique National, Bobo-Dioulasso",
    degree: "Baccalauréat Scientifique",
    period: "2020 – 2023",
    detail: "Spécialités : Mathématiques, Physique-Chimie",
    courses: [],
  },
];

export const certifications = [
  { title: "Modélisation financière et prévisions", org: "edX", year: "2024" },
  { title: "Data Forecasting", org: "LinkedIn Learning", year: "2024" },
  { title: "Introduction à la Finance", org: "Coursera", year: "2024" },
  { title: "Gestion de projet", org: "MOOC", year: "2023" },
];

export const qualities = ["Esprit d'équipe", "Leadership", "Rigueur analytique", "Adaptabilité", "Communication"];
