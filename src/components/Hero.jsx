import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { PHOTO } from "../data/photo";
import { IconArrowRight, IconMail, IconMapPin, IconTrendingUp, IconBarChart, IconAward } from "./Icons";

const tickers = [
  "SECCAPI · Finance & Stratégie",
  "École Centrale Casablanca",
  "Laafi Épargne · Fondatrice",
  "Finance & Stratégie d'Entreprise",
  "Casablanca · Maroc",
  "BRVM / UEMOA",
  "Gestion de Risques",
  "Intérêt pour la FinTech",
];

const stats = [
  { icon: <IconTrendingUp size={18} color="var(--sage-dark)" />, value: "6", label: "Exercices analysés (SECCAPI)" },
  { icon: <IconBarChart size={18} color="var(--gold)" />, value: "2", label: "Stages en finance" },
  { icon: <IconAward size={18} color="#7a6ab8" />, value: "1", label: "Projet fondé (Laafi Épargne)" },
];

export default function Hero() {
  const tickerRef = useRef(null);
  const sectionRef = useRef(null);
  const repeated = [...tickers, ...tickers];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, var(--cream) 0%, var(--warm-white) 100%);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.45;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--sage-light) 0%, transparent 70%);
          top: -100px; right: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--gold-light) 0%, transparent 70%);
          bottom: 0; left: -80px;
          animation: float 10s ease-in-out infinite 2s;
        }
        .blob-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, var(--sky) 0%, transparent 70%);
          top: 40%; left: 40%;
          animation: float 7s ease-in-out infinite 4s;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 72px;
          align-items: center;
          flex: 1;
          padding: 150px 80px 80px;
          position: relative;
          z-index: 1;
        }
        .hero-left { animation: slideLeft 0.9s ease forwards; }
        .hero-right { animation: slideRight 0.9s ease forwards; }

        /* Photo */
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

        /* Right column content */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gold-pale);
          border: 1px solid var(--gold-light);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #9a7a30;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse-glow 2s infinite;
        }
        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 4.2vw, 4.6rem);
          font-weight: 300;
          line-height: 1.05;
          color: var(--slate);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .hero-name em { font-style: italic; color: var(--sage-dark); }
        .hero-title {
          font-size: 1rem;
          color: var(--slate-light);
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .hero-desc {
          font-size: 0.95rem;
          color: var(--slate-light);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 32px;
          text-align: justify;
          text-justify: inter-word;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--slate);
          color: var(--cream);
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none; cursor: pointer;
        }
        .btn-primary:hover {
          background: var(--sage-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(92, 138, 110, 0.3);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--slate);
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1.5px solid var(--sand);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-secondary:hover {
          border-color: var(--sage);
          color: var(--sage-dark);
          background: var(--mint);
          transform: translateY(-2px);
        }

        /* Stats + traits (single source of truth, no duplicates elsewhere) */
        .photo-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
        .photo-stat {
          background: white;
          border: 1px solid var(--sand);
          border-radius: var(--radius-md);
          padding: 18px 14px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
        }
        .photo-stat:hover { border-color: var(--sage-light); transform: translateY(-4px); box-shadow: var(--shadow-soft); }
        .photo-stat-icon { display: flex; justify-content: center; margin-bottom: 8px; }
        .photo-stat-value { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600; color: var(--slate); line-height: 1; margin-bottom: 4px; }
        .photo-stat-label { font-size: 0.66rem; color: var(--slate-pale); text-transform: uppercase; letter-spacing: 0.05em; }
        .photo-traits { display: flex; flex-wrap: wrap; gap: 8px; }
        .photo-trait {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--warm-white); border: 1px solid var(--sand);
          border-radius: 50px; padding: 7px 16px;
          font-size: 0.8rem; color: var(--slate); font-weight: 500;
          transition: all 0.3s ease; cursor: default;
        }
        .photo-trait:hover { background: var(--mint); border-color: var(--sage-light); color: var(--sage-dark); transform: translateY(-2px); }
        .trait-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--sage); flex-shrink: 0; }

        /* Ticker */
        .ticker-wrap {
          background: var(--slate);
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .ticker-inner {
          display: flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
          gap: 0;
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 0 32px;
          font-size: 0.75rem;
          color: rgba(250,248,244,0.7);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .ticker-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 120px 32px 60px;
            gap: 40px;
          }
          .photo-frame-wrap { max-width: 320px; margin: 0 auto; }
          .photo-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="hero" id="hero" ref={sectionRef}>
        <div className="hero-bg">
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
          <div className="hero-blob blob-3" />
        </div>

        <div className="hero-grid">
          <div className="hero-left photo-frame-wrap reveal-left">
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
              Casablanca, MA
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-eyebrow reveal">
              <span className="eyebrow-dot" />
              Disponible · Étudiante en 4e année
            </div>
            <h1 className="hero-name reveal">
              Johanne <em>Hasley</em> DIESSONGO
            </h1>
            <p className="hero-title reveal">Ingénieure Généraliste · Finance & Stratégie</p>
            <h3 className="hero-desc reveal">{profile.summary}</h3>
            <div className="hero-actions reveal">
              <a href="#projects" className="btn-primary">Voir mes projets <IconArrowRight size={16} color="white" /></a>
              <a href="#contact" className="btn-secondary"><IconMail size={16} color="currentColor" /> Me contacter</a>
            </div>

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
              {["4e année · École Centrale Casablanca", "SECCAPI · Stage achevé", "Laafi Épargne · Fondatrice"].map((t) => (
                <span key={t} className="photo-trait">
                  <span className="trait-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="ticker-wrap">
          <div className="ticker-inner" ref={tickerRef}>
            {repeated.map((t, i) => (
              <span className="ticker-item" key={i}>
                {t}
                <span className="ticker-sep" />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
