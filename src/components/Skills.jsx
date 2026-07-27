import { useEffect, useRef } from "react";
import { skills, certifications } from "../data/portfolio";
import { IconCode, IconBarChart, IconTarget, IconAward, IconCheck } from "./Icons";

function SkillChip({ name, context }) {
  return (
    <div className="skill-chip">
      <div className="skill-chip-name">{name}</div>
      <div className="skill-chip-context">{context}</div>
    </div>
  );
}

function CertCard({ cert, index }) {
  return (
    <div className="cert-card reveal" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="cert-icon-wrap">
        <IconAward size={22} color="var(--slate)" />
      </div>
      <div className="cert-title">{cert.title}</div>
      <div className="cert-meta">
        <span className="cert-org">{cert.org}</span>
        <span className="cert-year">{cert.year}</span>
      </div>
      <div className="cert-check">
        <IconCheck size={11} color="white" /> Certifié
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80)); });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .skills-section { padding: 120px 80px; background: var(--cream); }
        .skills-col-header { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid var(--sand); }
        .skills-col-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .skills-col-label { font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--slate-light); font-weight: 600; }
        .skills-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-top: 16px; }
        .skill-chip { padding: 12px 0; border-bottom: 1px solid var(--sand); }
        .skill-chip:last-child { border-bottom: none; }
        .skill-chip-name { font-size: 0.9rem; color: var(--slate); font-weight: 600; margin-bottom: 3px; }
        .skill-chip-context { font-size: 0.78rem; color: var(--slate-light); }
        .languages-inline { display: flex; gap: 24px; margin-top: 8px; }
        .language-pill { display: flex; align-items: center; gap: 8px; background: white; border: 1px solid var(--sand); border-radius: 50px; padding: 8px 16px; font-size: 0.85rem; color: var(--slate); }
        .language-pill b { color: var(--sage-dark); }
        .management-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
        .management-pill { background: var(--gold-pale); border: 1px solid var(--gold-light); color: #9a7a30; border-radius: var(--radius-sm); padding: 10px 18px; font-size: 0.85rem; font-weight: 500; transition: all 0.3s ease; cursor: default; display: flex; align-items: center; gap: 8px; }
        .management-pill:hover { background: var(--gold-light); transform: translateY(-3px); box-shadow: var(--shadow-gold); }
        .certs-section { margin-top: 80px; padding-top: 60px; border-top: 1px solid var(--sand); }
        .certs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 32px; }
        .cert-card { background: var(--warm-white); border-radius: var(--radius-md); padding: 24px; border: 1px solid var(--sand); transition: all 0.4s ease; cursor: default; position: relative; overflow: hidden; }
        .cert-card:hover { border-color: var(--sage-light); transform: translateY(-6px); box-shadow: var(--shadow-soft); }
        .cert-icon-wrap { width: 44px; height: 44px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; background: var(--mint); transition: transform 0.3s ease; }
        .cert-card:hover .cert-icon-wrap { transform: scale(1.1) rotate(5deg); }
        .cert-title { font-size: 0.85rem; font-weight: 600; color: var(--slate); line-height: 1.4; margin-bottom: 8px; }
        .cert-meta { display: flex; justify-content: space-between; align-items: center; }
        .cert-org { font-size: 0.75rem; color: var(--sage-dark); font-weight: 500; }
        .cert-year { font-size: 0.72rem; color: var(--slate-pale); font-family: 'DM Mono', monospace; }
        .cert-check { position: absolute; top: 14px; right: 14px; font-size: 0.68rem; background: var(--sage); color: white; padding: 3px 8px; border-radius: 50px; opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: center; gap: 4px; }
        .cert-card:hover .cert-check { opacity: 1; }
        @media (max-width: 900px) { .skills-section { padding: 80px 32px; } .skills-layout { grid-template-columns: 1fr; gap: 40px; } .certs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .certs-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="skills-section" id="skills" ref={sectionRef}>
        <div className="reveal">
          <div className="section-label">Savoir-faire</div>
          <h2 className="section-title">Mes <em>compétences</em></h2>
        </div>
        <div className="skills-layout">
          <div className="reveal">
            <div className="skills-col-header">
              <div className="skills-col-icon" style={{ background: "var(--sky-light)" }}><IconCode size={18} color="#3a6a8a" /></div>
              <span className="skills-col-label">Compétences Techniques</span>
            </div>
            {skills.tech.map((s) => <SkillChip key={s.name} name={s.name} context={s.context} />)}
          </div>
          <div>
            <div className="reveal">
              <div className="skills-col-header">
                <div className="skills-col-icon" style={{ background: "var(--gold-pale)" }}><IconBarChart size={18} color="var(--gold)" /></div>
                <span className="skills-col-label">Compétences Financières</span>
              </div>
              {skills.finance.map((s) => <SkillChip key={s.name} name={s.name} context={s.context} />)}
            </div>
            <div className="reveal" style={{ marginTop: 40 }}>
              <div className="skills-col-header">
                <div className="skills-col-icon" style={{ background: "var(--lavender)" }}><IconTarget size={18} color="#7a6ab8" /></div>
                <span className="skills-col-label">Management & Langues</span>
              </div>
              <div className="languages-inline">
                {skills.languages.map((l) => (
                  <div key={l.lang} className="language-pill"><b>{l.lang}</b> {l.level}</div>
                ))}
              </div>
              <div className="management-pills">
                {skills.management.map((m) => <span key={m} className="management-pill"><IconCheck size={13} color="var(--sage-dark)" />{m}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="certs-section reveal">
          <div className="section-label">Certifications</div>
          <div className="certs-grid">
            {certifications.map((c, i) => <CertCard key={i} cert={c} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
