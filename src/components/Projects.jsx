import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolio";
import { IconTrendingUp, IconShield, IconUsers, IconBook, IconCode, IconHeart, IconArrowRight } from "./Icons";

function ProjectIcon({ type, size = 28 }) {
  if (type === "finance") return <IconTrendingUp size={size} color="var(--sage-dark)" />;
  if (type === "security") return <IconShield size={size} color="#3a6a8a" />;
  if (type === "education") return <IconUsers size={size} color="#9a7a30" />;
  if (type === "tech") return <IconCode size={size} color="#3a6a8a" />;
  if (type === "community") return <IconHeart size={size} color="#b05a6a" />;
  return <IconBook size={size} color="#7a6ab8" />;
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="project-card reveal"
      style={{ animationDelay: `${index * 100}ms`, background: hovered ? "white" : project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-icon-wrap">
        <div className="project-icon-circle" style={{ opacity: hovered ? 1 : 0.85 }}>
          <ProjectIcon type={project.type} />
        </div>
        <div className="project-arrow" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translate(0,0)" : "translate(-6px, 6px)" }}>
          <IconArrowRight size={20} color="var(--sage-dark)" />
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
      </div>
      <div className="project-hover-line" style={{ transform: `scaleX(${hovered ? 1 : 0})` }} />
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
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
        .projects { padding: 120px 80px; background: var(--warm-white); position: relative; overflow: hidden; }
        .projects::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px; }
        .project-card { border-radius: var(--radius-lg); padding: 32px; border: 1px solid rgba(232, 224, 208, 0.6); cursor: pointer; position: relative; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .project-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lift); border-color: var(--sage-light); }
        .project-icon-wrap { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .project-icon-circle { width: 56px; height: 56px; border-radius: var(--radius-md); background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; }
        .project-card:hover .project-icon-circle { transform: scale(1.1) rotate(-4deg); background: white; }
        .project-arrow { transition: all 0.3s ease; }
        .project-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--slate); margin-bottom: 12px; line-height: 1.2; }
        .project-desc { font-size: 0.88rem; color: var(--slate-light); line-height: 1.7; margin-bottom: 20px; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .project-tag { background: rgba(255,255,255,0.7); border: 1px solid rgba(58,63,74,0.12); border-radius: 50px; padding: 4px 12px; font-size: 0.72rem; color: var(--slate); font-weight: 500; letter-spacing: 0.04em; transition: all 0.2s ease; }
        .project-card:hover .project-tag { background: white; border-color: var(--sage-light); }
        .project-hover-line { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--sage), var(--gold)); transform-origin: left; transition: transform 0.4s ease; }
        @media (max-width: 768px) { .projects { padding: 80px 32px; } .projects-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="projects" id="projects" ref={sectionRef}>
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Mes <em>projets</em></h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
