import { useEffect, useRef, useState } from "react";
import { projects, projectCategories } from "../data/portfolio";
import { IconTrendingUp, IconShield, IconUsers, IconBook, IconCode, IconHeart, IconArrowRight, IconCamera, IconExternalLink } from "./Icons";

function ProjectIcon({ type, size = 28 }) {
  if (type === "finance") return <IconTrendingUp size={size} color="var(--sage-dark)" />;
  if (type === "security") return <IconShield size={size} color="#3a6a8a" />;
  if (type === "education") return <IconUsers size={size} color="#9a7a30" />;
  if (type === "tech") return <IconCode size={size} color="#3a6a8a" />;
  if (type === "community") return <IconHeart size={size} color="#b05a6a" />;
  return <IconBook size={size} color="#7a6ab8" />;
}

function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const clickable = Boolean(project.demo);
  return (
    <div
      className="project-card reveal"
      style={{ animationDelay: `${index * 100}ms`, background: hovered ? "white" : project.color, cursor: clickable ? "pointer" : "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => clickable && onOpen(project)}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => { if (clickable && (e.key === "Enter" || e.key === " ")) onOpen(project); }}
    >
      <div className="project-icon-wrap">
        <div className="project-icon-circle" style={{ opacity: hovered ? 1 : 0.85 }}>
          <ProjectIcon type={project.type} />
        </div>
        {clickable && (
          <div className="project-arrow" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translate(0,0)" : "translate(-6px, 6px)" }}>
            <IconArrowRight size={20} color="var(--sage-dark)" />
          </div>
        )}
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

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;
  const { demo } = project;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <h3 className="project-modal-title">{project.title}</h3>
        <p className="project-modal-desc">{project.desc}</p>

        {demo.kind === "photos" && (
          demo.photos && demo.photos.length > 0 ? (
            <div className="project-modal-photos">
              {demo.photos.map((src) => <img key={src} src={src} alt={project.title} />)}
            </div>
          ) : (
            <div className="project-modal-placeholder">
              <IconCamera size={28} color="var(--slate-light)" />
              <p>Photos à venir</p>
            </div>
          )
        )}

        {demo.kind === "video" && (
          demo.url ? (
            <div className="project-modal-video">
              <iframe src={demo.url} title={`Démo — ${project.title}`} allowFullScreen />
            </div>
          ) : (
            <div className="project-modal-placeholder">
              <IconCamera size={28} color="var(--slate-light)" />
              <p>Vidéo de démonstration à venir</p>
            </div>
          )
        )}

        {demo.kind === "link" && (
          demo.url ? (
            <a className="project-modal-link" href={demo.url} target="_blank" rel="noreferrer">
              Voir la démo <IconExternalLink size={16} />
            </a>
          ) : (
            <div className="project-modal-placeholder">
              <IconExternalLink size={28} color="var(--slate-light)" />
              <p>Lien de démo à venir</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

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
        .projects-category { margin-top: 56px; }
        .projects-category:first-of-type { margin-top: 16px; }
        .projects-category-title { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; color: var(--slate); margin-bottom: 20px; }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
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

        .project-modal-backdrop { position: fixed; inset: 0; background: rgba(58,63,74,0.55); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 24px; }
        .project-modal { background: var(--warm-white); border-radius: var(--radius-lg); padding: 40px; max-width: 640px; width: 100%; max-height: 85vh; overflow-y: auto; position: relative; }
        .project-modal-close { position: absolute; top: 16px; right: 20px; background: none; border: none; font-size: 1.8rem; line-height: 1; color: var(--slate-light); cursor: pointer; }
        .project-modal-close:hover { color: var(--slate); }
        .project-modal-title { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600; color: var(--slate); margin-bottom: 12px; }
        .project-modal-desc { font-size: 0.92rem; color: var(--slate-light); line-height: 1.7; margin-bottom: 24px; }
        .project-modal-photos { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .project-modal-photos img { width: 100%; border-radius: var(--radius-md); object-fit: cover; }
        .project-modal-video { position: relative; padding-top: 56.25%; border-radius: var(--radius-md); overflow: hidden; }
        .project-modal-video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        .project-modal-link { display: inline-flex; align-items: center; gap: 8px; background: var(--sage-dark); color: white; padding: 12px 24px; border-radius: 50px; font-weight: 500; text-decoration: none; }
        .project-modal-placeholder { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 20px; background: rgba(58,63,74,0.04); border-radius: var(--radius-md); color: var(--slate-light); font-size: 0.9rem; }
      `}</style>

      <section className="projects" id="projects" ref={sectionRef}>
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Mes <em>projets</em></h2>
        </div>
        {projectCategories.map((cat) => {
          const items = projects.filter((p) => p.category === cat.key);
          if (items.length === 0) return null;
          return (
            <div className="projects-category" key={cat.key}>
              <h3 className="projects-category-title reveal">{cat.label}</h3>
              <div className="projects-grid">
                {items.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onOpen={setSelectedProject} />)}
              </div>
            </div>
          );
        })}
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
