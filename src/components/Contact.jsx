import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { IconMail, IconPhone, IconLinkedin, IconCopy, IconCheck, IconArrowRight } from "./Icons";

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 120)); });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    { icon: <IconMail size={22} color="var(--sage-light)" />, label: "Email", value: profile.email, action: copyEmail, bg: "rgba(138,171,150,0.12)" },
    { icon: <IconPhone size={22} color="var(--sage-light)" />, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone}`, bg: "rgba(201,168,76,0.12)" },
    { icon: <IconLinkedin size={22} color="var(--sage-light)" />, label: "LinkedIn", value: "Voir le profil", href: profile.linkedin, bg: "rgba(200,220,232,0.12)" },
  ];

  return (
    <>
      <style>{`
        .contact { padding: 120px 80px; background: var(--slate); position: relative; overflow: hidden; }
        .c-blob-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; filter: blur(80px); background: radial-gradient(circle, rgba(138,171,150,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; }
        .c-blob-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; filter: blur(80px); background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%); bottom: -80px; left: 100px; pointer-events: none; }
        .contact-inner { max-width: 700px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
        .contact .section-label { color: var(--sage-light); }
        .contact .section-label::before { background: var(--sage); }
        .contact .section-title { color: var(--cream); }
        .contact .section-title em { color: var(--sage-light); }
        .contact-sub { font-size: 1.05rem; color: rgba(250,248,244,0.55); line-height: 1.75; margin-bottom: 56px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .contact-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 48px; }
        .contact-card { border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 24px 20px; text-decoration: none; transition: all 0.4s ease; display: block; cursor: pointer; }
        .contact-card:hover { border-color: rgba(138,171,150,0.4); transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.2); }
        .cc-icon-wrap { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; transition: transform 0.3s ease; }
        .contact-card:hover .cc-icon-wrap { transform: scale(1.15); }
        .cc-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(250,248,244,0.4); margin-bottom: 6px; }
        .cc-value { font-size: 0.85rem; color: rgba(250,248,244,0.85); font-weight: 500; word-break: break-all; }
        .contact-actions { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .contact-cta { display: inline-flex; align-items: center; gap: 10px; background: var(--sage); color: white; padding: 16px 40px; border-radius: 50px; font-size: 0.95rem; font-weight: 500; text-decoration: none; transition: all 0.4s ease; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .contact-cta:hover { background: var(--sage-dark); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(92,138,110,0.35); }
        .copy-btn { display: inline-flex; align-items: center; gap: 8px; background: transparent; border: 1.5px solid rgba(255,255,255,0.2); color: rgba(250,248,244,0.7); padding: 14px 24px; border-radius: 50px; font-size: 0.85rem; cursor: pointer; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif; }
        .copy-btn:hover { border-color: var(--sage-light); color: var(--sage-light); }
        .footer-bar { background: rgba(0,0,0,0.2); text-align: center; padding: 24px; font-size: 0.78rem; color: rgba(250,248,244,0.3); letter-spacing: 0.04em; }
        @media (max-width: 768px) { .contact { padding: 80px 32px; } .contact-cards { grid-template-columns: 1fr; } .contact-actions { flex-direction: column; } }
      `}</style>

      <section className="contact" id="contact" ref={sectionRef}>
        <div className="c-blob-1" /><div className="c-blob-2" />
        <div className="contact-inner">
          <div className="reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Travaillons <em>ensemble</em></h2>
          </div>
          <p className="contact-sub reveal">Ouverte aux opportunités en finance de marchés, stratégie d'entreprise et conseil, avec un intérêt pour les projets FinTech innovants. N'hésitez pas à me contacter !</p>
          <div className="contact-cards">
            {contactCards.map((c, i) => (
              c.href ? (
                <a key={i} className="contact-card reveal" href={c.href} target="_blank" rel="noreferrer" style={{ background: c.bg }}>
                  <div className="cc-icon-wrap" style={{ background: "rgba(255,255,255,0.08)" }}>{c.icon}</div>
                  <div className="cc-label">{c.label}</div>
                  <div className="cc-value">{c.value}</div>
                </a>
              ) : (
                <div key={i} className="contact-card reveal" onClick={c.action} style={{ background: c.bg }}>
                  <div className="cc-icon-wrap" style={{ background: "rgba(255,255,255,0.08)" }}>{c.icon}</div>
                  <div className="cc-label">{c.label}</div>
                  <div className="cc-value">{c.value}</div>
                </div>
              )
            ))}
          </div>
          <div className="contact-actions reveal">
            <a href={`mailto:${profile.email}`} className="contact-cta">
              <IconMail size={18} color="white" />
              Envoyer un message
              <IconArrowRight size={16} color="white" />
            </a>
            <button className="copy-btn" onClick={copyEmail}>
              {copied ? <><IconCheck size={15} color="var(--sage-light)" /> Copié !</> : <><IconCopy size={15} color="currentColor" /> Copier l'email</>}
            </button>
          </div>
        </div>
      </section>

      <div className="footer-bar">
        © 2026 Johanne Hasley Diessongo · Ingénieure · Finance & Stratégie
      </div>
    </>
  );
}
