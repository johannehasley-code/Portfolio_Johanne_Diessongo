export const profile = {
  name: "Johanne Hasley Diessongo",
  title: "Ingénieure Généraliste · Finance & Stratégie",
  email: "johannehasley.diessongo@gmail.com",
  phone: "+226 61029393",
  linkedin: "https://www.linkedin.com/in/johannehasleydiessongo",
  location: "Casablanca, Maroc",
  summary: "Étudiante en 4e année de Bachelor en ingénierie généraliste à l'École Centrale Casablanca. Je me spécialise en finance et stratégie d'entreprise, avec un intérêt pour la FinTech comme levier de transformation des marchés financiers ouest-africains (BRVM/UEMOA).",
  currentFocus: "Stage achevé chez SECCAPI (finance & stratégie) · Fondatrice de Laafi Épargne",
};

export const skills = {
  finance: [
    { name: "Modélisation financière", context: "Modèle prévisionnel 5 ans (SECCAPI)" },
    { name: "Forecasting", context: "Certification edX, 2024" },
    { name: "Analyse de données", context: "Excel avancé + Python" },
    { name: "Gestion de risques", context: "Analyse de ratios sur 6 exercices" },
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
    role: "Stagiaire, Modélisation financière et stratégie",
    company: "SECCAPI (cabinet d'expertise comptable)",
    period: "Juil. – Août 2026",
    type: "finance",
    tasks: [
      "Analyse financière par ratios sur six exercices comptables",
      "Construction d'un modèle prévisionnel 2026–2030 pour une société de transport public",
      "Production de livrables structurés pour la direction générale",
    ],
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
  {
    title: "Plan Stratégique — Transport Public",
    desc: "Analyse financière par ratios sur six exercices et construction d'un plan stratégique 2026–2030 pour une société de transport public, dans le cadre d'un projet financé par la Banque Mondiale.",
    tags: ["Stratégie", "Modélisation financière", "Secteur public"],
    color: "#f4f0e8",
    type: "finance",
    link: "#",
    linkLabel: "Voir un extrait du rapport",
  },
  {
    title: "Diagnostic Financier — Secteur Pharmaceutique",
    desc: "Diagnostic financier complet (2020–2024) d'une société pharmaceutique basée en Guinée-Conakry, réalisé pour le compte du cabinet (nom non divulgué pour raisons de confidentialité).",
    tags: ["Diagnostic financier", "Analyse de ratios", "Confidentiel"],
    color: "#eef0f8",
    type: "finance",
    link: "#",
    linkLabel: "Voir un extrait du rapport",
  },
  {
    title: "Laafi Épargne",
    desc: "Application d'épargne inclusive pour agriculteurs et éleveurs du Burkina Faso : sécurisation et croissance progressive de l'épargne, assistance vocale en langues locales.",
    tags: ["Inclusion financière", "IA", "BRVM"],
    color: "#e8f4f0",
    type: "education",
    link: "#",
    linkLabel: "Voir la démo",
  },
  {
    title: "App de Gestion de Tokens",
    desc: "Solution sécurisée de génération de tokens uniques pour les transferts d'argent (BOA Mali).",
    tags: ["FinTech", "Sécurité", "Banking"],
    color: "#f0e8f4",
    type: "security",
    link: "#",
    linkLabel: "Voir la démo",
  },
];

export const education = [
  {
    school: "École Centrale Casablanca",
    degree: "Bachelor of Engineering",
    period: "2023 – Présent",
    detail: "Échange académique à 2iE, Burkina Faso (janvier – juillet 2026)",
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
  { title: "Gestion de projet", org: "MOOC", year: "2023" },
];

export const qualities = ["Esprit d'équipe", "Leadership", "Rigueur analytique", "Adaptabilité", "Communication"];
