import { useEffect, useRef } from "react";
import { profile, qualities } from "../data/portfolio";
import { IconMapPin, IconGraduate, IconGlobe, IconMail } from "./Icons";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const infoCards = [
    { icon: <IconMapPin size={22} color="var(--sage-dark)" />, label: "Localisation", value: "Ouagadougou, Burkina Faso", sub: "Mobilité académique – 2026", bg: "var(--mint)" },
    { icon: <IconGraduate size={22} color="#7a6ab8" />, label: "Formation", value: "Bachelor of Engineering", sub: "École Centrale Casablanca", bg: "var(--lavender)" },
    { icon: <IconGlobe size={22} color="#3a6a8a" />, label: "Langues", value: null, sub: null, bg: "var(--sky-light)", isLanguages: true },
    { icon: <IconMail size={22} color="var(--gold)" />, label: "Email", value: profile.email, sub: null, bg: "var(--gold-pale)" },
  ];

  return (
    <>
      <style>{`
        .about { padding: 120px 80px; background: var(--warm-white); position: relative; overflow: hidden; }
        .about-decor { position: absolute; top: -60px; right: -60px; width: 300px; height: 300px; border-radius: 50%; border: 1px solid var(--sand); opacity: 0.5; pointer-events: none; }
        .about-decor-2 { position: absolute; bottom: -80px; left: -40px; width: 200px; height: 200px; border-radius: 50%; border: 1px solid var(--sage-light); opacity: 0.4; pointer-events: none; }
        .section-label { display: inline-flex; align-items: center; gap: 10px; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage-dark); font-weight: 600; margin-bottom: 16px; }
        .section-label::before { content: ''; width: 32px; height: 1.5px; background: var(--sage); display: block; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 300; color: var(--slate); line-height: 1.1; margin-bottom: 60px; letter-spacing: -0.01em; }
        .section-title em { font-style: italic; color: var(--sage-dark); }
        .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; }
        .about-text { font-size: 1.05rem; color: var(--slate-light); line-height: 1.85; margin-bottom: 32px; }
        .about-highlight { background: linear-gradient(135deg, var(--gold-pale), var(--mint)); border-radius: var(--radius-md); padding: 24px; border-left: 3px solid var(--gold); margin-bottom: 40px; }
        .about-highlight p { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-style: italic; color: var(--slate); line-height: 1.5; }
        .qualities-title { font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--slate-light); margin-bottom: 16px; font-weight: 600; }
        .qualities-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .quality-tag { background: white; border: 1px solid var(--sand); border-radius: 50px; padding: 8px 20px; font-size: 0.85rem; color: var(--slate); font-weight: 400; transition: all 0.3s ease; cursor: default; }
        .quality-tag:hover { background: var(--sage-light); border-color: var(--sage); color: var(--sage-dark); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(138, 171, 150, 0.2); }
        .about-info-cards { display: flex; flex-direction: column; gap: 16px; }
        .info-card { background: white; border-radius: var(--radius-md); padding: 20px 24px; border: 1px solid var(--sand); transition: all 0.4s ease; cursor: default; display: flex; align-items: flex-start; gap: 16px; }
        .info-card:hover { border-color: var(--sage-light); box-shadow: var(--shadow-soft); transform: translateX(6px); }
        .info-card-icon-wrap { width: 44px; height: 44px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s ease; }
        .info-card:hover .info-card-icon-wrap { transform: scale(1.1); }
        .info-card-body { flex: 1; }
        .info-card-label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--slate-pale); margin-bottom: 4px; }
        .info-card-value { font-size: 0.95rem; color: var(--slate); font-weight: 500; }
        .info-card-sub { font-size: 0.82rem; color: var(--slate-light); margin-top: 2px; }
        .languages-row { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .lang-header { display: flex; justify-content: space-between; gap: 12px; }
        .lang-name { font-size: 0.88rem; color: var(--slate); font-weight: 500; }
        .lang-level { font-size: 0.78rem; color: var(--sage-dark); font-weight: 600; font-family: 'DM Mono', monospace; }
        @media (max-width: 900px) { .about { padding: 80px 32px; } .about-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
      <section className="about" id="about" ref={sectionRef}>
        <div className="about-decor" /><div className="about-decor-2" />
        <div className="reveal">
          <div className="section-label">Profil</div>
          <h2 className="section-title">À propos de <em>moi</em></h2>
        </div>
        <div className="about-grid">
          <div>
            <p className="about-text reveal">Ce qui m'anime, c'est de rendre la finance de marchés plus accessible, en particulier pour l'Afrique de l'Ouest. Chaque projet que je mène part d'un besoin concret — que ce soit l'analyse financière d'une entreprise cliente ou la conception d'un outil d'épargne pour des populations aujourd'hui exclues du système financier.</p>
            <div className="about-highlight reveal"><p>"Mon ambition : construire à l'intersection de la technologie et de la finance pour créer des solutions qui transforment l'Afrique."</p></div>
            <div className="reveal">
              <div className="qualities-title">Qualités</div>
              <div className="qualities-list">{qualities.map((q) => <span key={q} className="quality-tag">{q}</span>)}</div>
            </div>
          </div>
          <div className="about-info-cards">
            {infoCards.map((card, i) => (
              <div key={i} className="info-card reveal">
                <div className="info-card-icon-wrap" style={{ background: card.bg }}>{card.icon}</div>
                <div className="info-card-body">
                  <div className="info-card-label">{card.label}</div>
                  {card.isLanguages ? (
                    <div className="languages-row">
                      <div className="lang-header"><span className="lang-name">Français</span><span className="lang-level">C1</span></div>
                      <div className="lang-header"><span className="lang-name">Anglais</span><span className="lang-level">B2</span></div>
                    </div>
                  ) : (
                    <><div className="info-card-value" style={{ fontSize: card.label === "Email" ? "0.82rem" : undefined }}>{card.value}</div>{card.sub && <div className="info-card-sub">{card.sub}</div>}</>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
