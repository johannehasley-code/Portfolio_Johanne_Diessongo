import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#photo", label: "Présentation" },
  { href: "#about", label: "Profil" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(250, 248, 244, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(232, 224, 208, 0.6);
          box-shadow: 0 4px 24px rgba(58,63,74,0.06);
          padding: 12px 48px;
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--slate);
          letter-spacing: 0.02em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--sage);
          animation: pulse-glow 2.5s infinite;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--slate-light);
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          position: relative;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--sage);
          transition: width 0.3s ease;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--sage-dark);
        }
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        .nav-cta {
          background: var(--slate);
          color: var(--cream) !important;
          padding: 8px 20px !important;
          border-radius: 50px;
          transition: all 0.3s ease !important;
        }
        .nav-cta::after { display: none !important; }
        .nav-cta:hover {
          background: var(--sage-dark) !important;
          transform: translateY(-1px);
          box-shadow: var(--shadow-soft);
        }
        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--slate);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
          .navbar { padding: 16px 24px; }
          .navbar.scrolled { padding: 12px 24px; }
          .nav-links { display: none; }
          .menu-btn { display: flex; }
          .mobile-menu {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(250, 248, 244, 0.97);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
            z-index: 999;
            animation: fadeIn 0.3s ease;
          }
          .mobile-menu a {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem;
            color: var(--slate);
            text-decoration: none;
            font-weight: 400;
            transition: color 0.2s;
          }
          .mobile-menu a:hover { color: var(--sage-dark); }
          .mobile-close {
            position: absolute;
            top: 24px; right: 24px;
            background: none; border: none;
            font-size: 1.5rem; cursor: pointer;
            color: var(--slate);
          }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-dot"></span>
          JHD
        </a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? "active" : ""}
                onClick={() => setActive(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta">Me contacter</a>
          </li>
        </ul>
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
