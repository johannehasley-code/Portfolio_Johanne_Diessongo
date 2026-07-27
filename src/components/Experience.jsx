import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/portfolio";
import { IconBuilding, IconCode, IconHeart, IconCheck } from "./Icons";

function ExpIcon({ type }) {
  if (type === "finance") return <IconBuilding size={24} color="var(--gold)" />;
  return <IconCode size={24} color="var(--sage-dark)" />;
}

function ExperienceCard({ exp, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`exp-card reveal${index % 2 === 0 ? "" : "-right"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "white" : "var(--warm-white)",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? "var(--shadow-lift)" : "var(--shadow-soft)",
        borderColor: hovered ? "var(--sage-light)" : "var(--sand)",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div className="exp-card-top-bar" style={{ background: exp.type === "finance" ? "linear-gradient(90deg, var(--gold-pale), var(--mint))" : "linear-gradient(90deg, var(--sky-light), var(--mint))" }} />
      <div className="exp-header">
        <div className="exp-icon-wrap" style={{ background: exp.type === "finance" ? "var(--gold-pale)" : "var(--mint)" }}>
          <ExpIcon type={exp.type} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="exp-role">{exp.role}</div>
          <div className="exp-company">{exp.company}</div>
        </div>
        <div className="exp-period">{exp.period}</div>
      </div>
      <ul className="exp-tasks">
        {exp.tasks.map((t, i) => (
          <li key={i} className="exp-task-item">
            <span className="task-check"><IconCheck size={12} color="var(--sage-dark)" /></span>
            {t}
          </li>
        ))}
      </ul>
      <div className={`exp-type-badge exp-type-${exp.type}`}>
        {exp.type === "finance" ? "Finance & Digital" : "Technologie"}
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
        .experience { padding: 120px 80px; background: var(--cream); position: relative; }
        .exp-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-top: 16px; }
        .exp-card { border-radius: var(--radius-lg); padding: 0; border: 1px solid var(--sand); cursor: default; position: relative; overflow: hidden; }
        .exp-card-top-bar { height: 4px; width: 100%; }
        .exp-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; padding: 24px 28px 0; }
        .exp-icon-wrap { width: 52px; height: 52px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s ease; }
        .exp-card:hover .exp-icon-wrap { transform: scale(1.1) rotate(-3deg); }
        .exp-role { font-size: 1.05rem; font-weight: 600; color: var(--slate); margin-bottom: 4px; }
        .exp-company { font-size: 0.85rem; color: var(--sage-dark); font-weight: 500; }
        .exp-period { margin-left: auto; font-size: 0.75rem; color: var(--slate-pale); font-family: 'DM Mono', monospace; background: var(--sand); padding: 4px 12px; border-radius: 50px; white-space: nowrap; height: fit-content; }
        .exp-tasks { list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0 28px; }
        .exp-task-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--slate-light); line-height: 1.6; }
        .task-check { width: 20px; height: 20px; border-radius: 50%; background: var(--mint); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .exp-type-badge { display: inline-block; margin: 20px 28px 24px; font-size: 0.72rem; padding: 4px 14px; border-radius: 50px; font-weight: 500; letter-spacing: 0.04em; }
        .exp-type-finance { background: var(--gold-pale); color: #9a7a30; border: 1px solid var(--gold-light); }
        .exp-type-tech { background: var(--sky-light); color: #3a6a8a; border: 1px solid var(--sky); }
        .community-card { margin-top: 40px; border-radius: var(--radius-lg); padding: 32px; background: linear-gradient(135deg, var(--mint), var(--sage-light)); border: 1px solid var(--sage-light); display: flex; align-items: center; gap: 24px; transition: all 0.4s ease; cursor: default; }
        .community-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lift); }
        .community-icon-wrap { width: 56px; height: 56px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: var(--shadow-soft); }
        .community-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--slate); margin-bottom: 4px; }
        .community-desc { font-size: 0.9rem; color: var(--slate-light); }
        @media (max-width: 768px) { .experience { padding: 80px 32px; } .exp-cards { grid-template-columns: 1fr; } }
      `}</style>

      <section className="experience" id="experience" ref={sectionRef}>
        <div className="reveal">
          <div className="section-label">Parcours</div>
          <h2 className="section-title">Expériences <em>professionnelles</em></h2>
        </div>
        <div className="exp-cards">
          {experiences.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} />)}
        </div>
        <div className="community-card reveal">
          <div className="community-icon-wrap"><IconHeart size={24} color="var(--sage-dark)" /></div>
          <div>
            <div className="community-title">Projet communautaire</div>
            <div className="community-desc">Organisation d'une collecte de fonds pour former des femmes déplacées internes — un engagement concret pour l'émancipation économique des femmes en Afrique.</div>
          </div>
        </div>
      </section>
    </>
  );
}
