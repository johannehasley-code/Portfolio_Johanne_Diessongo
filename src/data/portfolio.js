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
      "Conception de l'interface d'une application de gestion de tokens uniques pour sécuriser les transferts d'argent",
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
    demo: { kind: "link", url: "https://cnts-registration.netlify.app", label: "Voir l'application" },
  },
  {
    title: "Give Back Activities – Femmes déplacées internes",
    desc: "Collecte de fonds au profit de femmes déplacées internes au Burkina Faso, avec l'association Vivre au Village (VIVAVI), et organisation de formations pratiques en saponification et en transformation du soja.",
    tags: ["Collecte de fonds", "Formation", "Impact social"],
    color: "#f4ece8",
    type: "community",
    category: "communautaire",
    demo: { kind: "photos", photos: ["/projets/femmes-deplacees/photo-1.jpg", "/projets/femmes-deplacees/photo-2.jpg", "/projets/femmes-deplacees/photo-3.jpg", "/projets/femmes-deplacees/photo-4.jpg", "/projets/femmes-deplacees/photo-5.jpg", "/projets/femmes-deplacees/photo-6.jpg"] },
  },
  // Projets personnels
  {
    title: "Investpredict",
    desc: "Plateforme d'aide à l'investissement sur la BRVM : analyse des titres par IA selon le montant, la durée, le secteur et le profil de risque, suivi de portefeuille et cours des sociétés cotées. Présentée au Prix Jeune Inventeur du Faso 2026.",
    tags: ["IA", "BRVM", "Finance de marché", "React"],
    color: "#e8f4f0",
    type: "finance",
    category: "personnel",
    demo: { kind: "link", url: "https://investpredict-lime.vercel.app", label: "Voir l'application" },
  },
  {
    title: "App de Gestion de Tokens",
    desc: "Conception de l'interface d'une application de génération de tokens uniques pour sécuriser les transferts d'argent, réalisée pendant mon stage chez BOA Mali.",
    tags: ["FinTech", "UI", "Banking"],
    color: "#eef0f8",
    type: "security",
    category: "personnel",
    demo: { kind: "link", url: "https://johannehasley-code.github.io/BOA_Bank_App/", label: "Voir l'application" },
  },
  {
    title: "ScholarHub",
    desc: "Application centralisant les opportunités de bourses d'études pour étudiants africains.",
    tags: ["React", "UX", "Social", "Projet de groupe (5)"],
    color: "#f4f0e8",
    type: "education",
    category: "personnel",
    demo: { kind: "link", url: "https://scholarhubweb.netlify.app", label: "Voir l'application" },
  },
  // Projets académiques
  {
    title: "InnoFaso NC",
    desc: "Application web de gestion des non-conformités développée en collaboration avec Innofaso, entreprise agro-industrielle burkinabè. Analyse des causes par la méthode des 5 Pourquoi assistée par IA, gestion des accès par rôle.",
    tags: ["React", "Node.js", "MySQL", "IA"],
    color: "#e8f0f4",
    type: "tech",
    category: "academique",
    demo: { kind: "link", url: "https://innofasonc.netlify.app/", label: "Voir l'application" },
  },
  {
    title: "AES Connect",
    desc: "MVP permettant la mise à disposition et le partage de supports de cours pour étudiants.",
    tags: ["React", "Education", "MVP"],
    color: "#f0e8f4",
    type: "book",
    category: "academique",
    demo: { kind: "link", url: "https://johannehasley-code.github.io/AES_Collab/", label: "Voir l'application" },
  },
  {
    title: "MathBot AI",
    desc: "Application de tutorat en mathématiques assistée par IA pour aider les élèves du Burkina Faso à préparer le BEPC.",
    tags: ["IA", "Éducation", "EdTech"],
    color: "#e8eef4",
    type: "tech",
    category: "academique",
    demo: { kind: "link", url: "https://mathbot-frontend.vercel.app", label: "Voir l'application" },
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
