import { useEffect, useRef } from "react";
import { education } from "../data/portfolio";
import { IconGraduate, IconBook } from "./Icons";

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".reveal, .reveal-left").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 150));
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .education { padding: 120px 80px; background: var(--warm-white); position: relative; overflow: hidden; }
        .edu-bg-text { position: absolute; right: -20px; bottom: 20px; font-family: 'Cormorant Garamond', serif; font-size: 12rem; font-weight: 700; color: rgba(138,171,150,0.06); pointer-events: none; user-select: none; line-height: 1; }
        .edu-timeline { position: relative; padding-left: 48px; margin-top: 16px; }
        .edu-timeline::before { content: ''; position: absolute; left: 16px; top: 24px; bottom: 24px; width: 1.5px; background: linear-gradient(to bottom, var(--sage), var(--gold), transparent); }
        .edu-item { position: relative; margin-bottom: 48px; }
        .edu-dot { position: absolute; left: -40px; top: 24px; width: 32px; height: 32px; border-radius: 50%; background: white; border: 1.5px solid var(--sage-light); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(138,171,150,0.2); }
        .edu-item:hover .edu-dot { background: var(--sage); border-color: var(--sage-dark); transform: scale(1.15); }
        .edu-item:hover .edu-dot svg { stroke: white; }
        .edu-card { background: white; border-radius: var(--radius-lg); padding: 32px; border: 1px solid var(--sand); transition: all 0.4s ease; cursor: default; }
        .edu-card:hover { border-color: var(--sage-light); box-shadow: var(--shadow-lift); transform: translateX(8px); }
        .edu-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px; }
        .edu-school { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; color: var(--slate); }
        .edu-period { font-family: 'DM Mono', monospace; font-size: 0.8rem; color: var(--slate-pale); background: var(--sand); padding: 4px 14px; border-radius: 50px; }
        .edu-degree { font-size: 0.95rem; font-weight: 600; color: var(--sage-dark); margin-bottom: 8px; }
        .edu-detail { font-size: 0.85rem; color: var(--slate-light); font-style: italic; margin-bottom: 16px; }
        .edu-courses { display: flex; flex-wrap: wrap; gap: 8px; }
        .edu-course { background: var(--warm-white); border: 1px solid var(--sand); border-radius: var(--radius-sm); padding: 5px 14px; font-size: 0.78rem; color: var(--slate); transition: all 0.25s ease; }
        .edu-course:hover { background: var(--mint); border-color: var(--sage-light); color: var(--sage-dark); transform: translateY(-2px); }
        @media (max-width: 768px) { .education { padding: 80px 32px; } .edu-bg-text { font-size: 6rem; } }
      `}</style>

      <section className="education" id="education" ref={sectionRef}>
        <div className="edu-bg-text">EDU</div>
        <div className="reveal">
          <div className="section-label">Parcours académique</div>
          <h2 className="section-title">Ma <em>formation</em></h2>
        </div>
        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div key={i} className="edu-item reveal-left">
              <div className="edu-dot">
                {i === 0 ? <IconGraduate size={14} color="var(--sage-dark)" /> : <IconBook size={14} color="var(--slate-light)" />}
              </div>
              <div className="edu-card">
                <div className="edu-top">
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-period">{edu.period}</div>
                </div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-detail">{edu.detail}</div>
                {edu.courses.length > 0 && (
                  <div className="edu-courses">{edu.courses.map((c) => <span key={c} className="edu-course">{c}</span>)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
