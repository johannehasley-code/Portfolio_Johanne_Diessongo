# 🌿 Portfolio — Johanne Hasley Diessongo

Portfolio personnel axé sur la **FinTech & Finance de Marchés**, construit avec **React + Vite**.

## ✨ Sections
- **Hero** — Introduction animée avec mini-graphique financier et ticker en temps réel
- **Profil** — Présentation, langues et qualités
- **Expériences** — BOA Mali, Centrale Tech et projet communautaire
- **Projets** — 4 projets personnels interactifs
- **Compétences** — Barres animées (Tech + Finance) et certifications
- **Formation** — Timeline académique
- **Contact** — Formulaire et liens de contact

## 🎨 Design
- Thème **soft finance** : crème, sauge, or pâle
- Typographie : **Cormorant Garamond** (titres) + **DM Sans** (corps)
- Effets : hovers, apparitions au scroll, blobs, ticker, mini-chart SVG, parallax

## 🚀 Lancer le projet

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Builder pour production
npm run build
```

## 📁 Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── portfolio.js       ← Toutes tes données CV
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Education.jsx
        └── Contact.jsx
```

## 🛠️ Personnaliser
- Toutes les données (textes, projets, compétences…) sont dans `src/data/portfolio.js`
- Les couleurs sont dans les variables CSS dans `src/styles.css`
