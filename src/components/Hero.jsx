import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { IconArrowRight, IconMail, IconMapPin } from "./Icons";

const tickers = [
  "SECCAPI · Modélisation Financière",
  "École Centrale Casablanca",
  "Laafi Épargne · Fondatrice",
  "FinTech · Finance de Marchés",
  "Ouagadougou · Burkina Faso",
  "BRVM / UEMOA",
  "Gestion de Risques",
  "Innovation · Tech · Finance",
];

function MiniChart() {
  const points = [30, 55, 40, 70, 60, 85, 72, 95, 80, 100];
  const w = 200, h = 80, pad = 10;
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (w - 2 * pad));
  const ys = points.map((p) => h - pad - (p / 110) * (h - 2 * pad));
  const path = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const area = `${path} L ${xs[xs.length - 1]} ${h} L ${xs[0]} ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8aab96" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8aab96" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#5c8a6e" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartGrad)" />
      <path
        d={path}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{
          animation: "draw 2s ease forwards 0.8s",
        }}
      />
      {xs.map((x, i) => (
        <circle
          key={i}
          cx={x} cy={ys[i]} r="3"
          fill={i === points.length - 1 ? "#c9a84c" : "#8aab96"}
          opacity={i === points.length - 1 ? 1 : 0.4}
          style={{ animation: `fadeIn 0.3s ease forwards ${0.8 + i * 0.12}s`, opacity: 0 }}
        />
      ))}
    </svg>
  );
}

function StatCard({ value, label, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="stat-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const tickerRef = useRef(null);
  const repeated = [...tickers, ...tickers];

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: var(--cream);
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
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          flex: 1;
          padding: 140px 80px 80px;
          position: relative;
          z-index: 1;
        }
        .hero-left { animation: slideLeft 0.9s ease forwards; }
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
          font-size: clamp(3rem, 5vw, 5.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: var(--slate);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .hero-name em {
          font-style: italic;
          color: var(--sage-dark);
        }
        .hero-title {
          font-size: 1rem;
          color: var(--slate-light);
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 32px;
          line-height: 1.5;
        }
        .hero-desc {
          font-size: 0.95rem;
          color: var(--slate-light);
          line-height: 1.75;
          max-width: 460px;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
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
        .hero-right {
          animation: slideRight 0.9s ease forwards;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hero-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(232, 224, 208, 0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lift);
        }
        .chart-card { padding: 24px 28px 16px; }
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .chart-title { font-size: 0.8rem; color: var(--slate-light); text-transform: uppercase; letter-spacing: 0.06em; }
        .chart-val {
          font-family: 'DM Mono', monospace;
          font-size: 1.6rem;
          color: var(--slate);
          font-weight: 500;
        }
        .chart-change {
          font-size: 0.8rem;
          color: var(--sage-dark);
          background: var(--mint);
          padding: 2px 8px;
          border-radius: 50px;
          font-weight: 500;
        }
        .chart-area { height: 80px; }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .stat-card {
          background: var(--warm-white);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
          border: 1px solid var(--sand);
          transition: all 0.3s ease;
          cursor: default;
        }
        .stat-card:hover {
          background: var(--mint);
          border-color: var(--sage-light);
          transform: translateY(-2px);
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--slate);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label { font-size: 0.7rem; color: var(--slate-pale); text-transform: uppercase; letter-spacing: 0.06em; }
        .location-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--slate-light);
        }
        .location-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--sage);
          animation: pulse-glow 2s infinite;
          flex-shrink: 0;
        }

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
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
          <div className="hero-blob blob-3" />
        </div>

        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Disponible · Étudiante en mobilité 2026
            </div>
            <h1 className="hero-name">
              Johanne<br />
              <em>Hasley</em><br />
              Diessongo
            </h1>
            <p className="hero-title">Ingénieure Généraliste · FinTech & Finance de Marchés</p>
            <p className="hero-desc">{profile.summary}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">Voir mes projets <IconArrowRight size={16} color="white" /></a>
              <a href="#contact" className="btn-secondary"><IconMail size={16} color="currentColor" /> Me contacter</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card chart-card">
              <div className="chart-header">
                <div>
                  <div className="chart-title">Croissance des compétences</div>
                  <div className="chart-val">+47.2%</div>
                </div>
                <span className="chart-change">▲ 2024–2026</span>
              </div>
              <div className="chart-area"><MiniChart /></div>
            </div>

            <div className="stats-row">
              <StatCard value="3+" label="Ans d'études" delay={400} />
              <StatCard value="4" label="Projets" delay={550} />
              <StatCard value="4" label="Certifications" delay={700} />
            </div>

            <div className="hero-card" style={{ padding: "16px 24px" }}>
              <div className="location-row">
                <span className="location-dot" />
                {profile.location} · École Centrale Casablanca
              </div>
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
