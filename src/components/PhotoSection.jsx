import { useEffect, useRef } from "react";
import { IconTrendingUp, IconBarChart, IconAward, IconMapPin } from "./Icons";

const PHOTO = "/photo-johanne.jpg";

const stats = [
  { icon: <IconTrendingUp size={18} color="var(--sage-dark)" />, value: "6", label: "Exercices analysés" },
  { icon: <IconBarChart size={18} color="var(--gold)" />, value: "2", label: "Stages en finance" },
  { icon: <IconAward size={18} color="#7a6ab8" />, value: "1", label: "Projet fondé" },
];

export default function PhotoSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .photo-section {
          padding: 100px 80px;
          background: linear-gradient(160deg, var(--cream) 0%, var(--warm-white) 100%);
          position: relative;
          overflow: hidden;
        }
        .photo-section::before {
          content: \'\';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--sage-light), transparent);
        }
        .photo-deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
          pointer-events: none;
        }
        .ring-1 { width: 600px; height: 600px; border-color: rgba(138,171,150,0.1); top: -200px; right: -200px; }
        .ring-2 { width: 400px; height: 400px; border-color: rgba(201,168,76,0.08); top: -100px; right: -100px; }
        .photo-layout {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 80px;
          align-items: center;
        }
        .photo-frame-wrap { position: relative; }
        .photo-frame {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--sand);
          box-shadow: var(--shadow-lift);
          position: relative;
        }
        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s ease;
        }
        .photo-frame:hover img { transform: scale(1.04); }
        .photo-frame-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(58,63,74,0.25) 0%, transparent 55%);
          pointer-events: none;
        }
        .photo-badge {
          position: absolute;
          bottom: -18px;
          right: -18px;
          background: white;
          border-radius: var(--radius-md);
          padding: 14px 18px;
          border: 1px solid var(--sand);
          box-shadow: var(--shadow-soft);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
          animation: float 5s ease-in-out infinite;
        }
        .badge-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--sage);
          flex-shrink: 0;
          animation: pulse-glow 2s infinite;
        }
        .badge-text-top { font-size: 0.66rem; color: var(--slate-pale); text-transform: uppercase; letter-spacing: 0.06em; }
        .badge-text-main { font-size: 0.82rem; font-weight: 600; color: var(--slate); line-height: 1.2; }
        .photo-loc-badge {
          position: absolute;
          top: -14px; left: -14px;
          background: var(--slate);
          color: white;
          border-radius: var(--radius-sm);
          padding: 9px 14px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.76rem;
          font-weight: 500;
          z-index: 2;
          box-shadow: var(--shadow-soft);
        }
        .photo-content { display: flex; flex-direction: column; gap: 32px; }
        .photo-headline {
          font-family: \'Cormorant Garamond\', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          color: var(--slate);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .photo-headline em { font-style: italic; color: var(--sage-dark); }
        .photo-bio {
          font-size: 0.95rem;
          color: var(--slate-light);
          line-height: 1.85;
          border-left: 2px solid var(--sage-light);
          padding-left: 20px;
        }
        .photo-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .photo-stat {
          background: white;
          border: 1px solid var(--sand);
          border-radius: var(--radius-md);
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
        }
        .photo-stat:hover { border-color: var(--sage-light); transform: translateY(-4px); box-shadow: var(--shadow-soft); }
        .photo-stat-icon { display: flex; justify-content: center; margin-bottom: 10px; }
        .photo-stat-value { font-family: \'Cormorant Garamond\', serif; font-size: 2rem; font-weight: 600; color: var(--slate); line-height: 1; margin-bottom: 4px; }
        .photo-stat-label { font-size: 0.7rem; color: var(--slate-pale); text-transform: uppercase; letter-spacing: 0.06em; }
        .photo-traits { display: flex; flex-wrap: wrap; gap: 8px; }
        .photo-trait {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--warm-white); border: 1px solid var(--sand);
          border-radius: 50px; padding: 7px 16px;
          font-size: 0.82rem; color: var(--slate); font-weight: 500;
          transition: all 0.3s ease; cursor: default;
        }
        .photo-trait:hover { background: var(--mint); border-color: var(--sage-light); color: var(--sage-dark); transform: translateY(-2px); }
        .trait-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--sage); flex-shrink: 0; }
        @media (max-width: 960px) {
          .photo-section { padding: 80px 32px; }
          .photo-layout { grid-template-columns: 1fr; gap: 48px; }
          .photo-frame-wrap { max-width: 320px; margin: 0 auto; }
          .photo-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="photo-section" id="photo" ref={sectionRef}>
        <div className="photo-deco-ring ring-1" />
        <div className="photo-deco-ring ring-2" />

        <div className="photo-layout">
          <div className="photo-frame-wrap reveal-left">
            <div className="photo-frame">
              <img src={PHOTO} alt="Johanne Hasley Diessongo" />
              <div className="photo-frame-overlay" />
            </div>
            <div className="photo-badge">
              <div className="badge-dot" />
              <div>
                <div className="badge-text-top">Statut</div>
                <div className="badge-text-main">Ouverte aux opportunités</div>
              </div>
            </div>
            <div className="photo-loc-badge">
              <IconMapPin size={13} color="var(--sage-light)" />
              Casablanca, Maroc
            </div>
          </div>

          <div className="photo-content">
            <div className="reveal">
              <div className="section-label">Présentation</div>
              <h2 className="photo-headline">
                Ingénieure à l'intersection<br />
                de la <em>finance</em><br />
                et de la <em>technologie</em>
              </h2>
            </div>
            <p className="photo-bio reveal">
              Basée à Casablanca, j'ai récemment terminé mon stage chez SECCAPI sur un mandat
              du plan de développement stratégique d'une société de transport public,
              tout en développant Investpredict, ma plateforme d'aide à l'investissement
              sur la BRVM propulsée par l'IA.
            </p>
            <div className="photo-stats">
              {stats.map((s, i) => (
                <div key={i} className="photo-stat reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="photo-stat-icon">{s.icon}</div>
                  <div className="photo-stat-value">{s.value}</div>
                  <div className="photo-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="photo-traits reveal">
              {["Disponible pour un stage · Mars 2027"].map((t) => (
                <span key={t} className="photo-trait">
                  <span className="trait-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
