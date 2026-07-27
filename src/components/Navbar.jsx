import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-mark-badge {
          position: relative;
          flex-shrink: 0;
        }
        .nav-mark-badge .pulse-corner {
          animation: pulse-glow 2.5s infinite;
        }
        .nav-mark-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--slate);
          letter-spacing: 0.01em;
          line-height: 1;
          white-space: nowrap;
        }
        .nav-mark-text em { font-style: italic; color: var(--sage-dark); font-weight: 500; }
        @media (max-width: 520px) {
          .nav-mark-text { display: none; }
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
          z-index: 1100;
          position: relative;
        }
        .menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--slate);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .menu-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .menu-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .menu-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        @media (max-width: 900px) {
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
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          <span className="nav-mark-badge">
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18.5" fill="var(--slate)" />
              <circle cx="20" cy="20" r="18.5" stroke="var(--gold)" strokeWidth="1.4" fill="none" />
              <polyline points="9,23 15,18 20,21 27,11" stroke="var(--sage-light)" strokeWidth="1.3" fill="none" opacity="0.55" strokeLinecap="round" strokeLinejoin="round" />
              <text x="14" y="27" fontFamily="'Cormorant Garamond', serif" fontSize="17" fontWeight="600" fill="var(--cream)">J</text>
              <text x="21" y="27" fontFamily="'Cormorant Garamond', serif" fontSize="17" fontWeight="600" fill="var(--gold-light)">D</text>
            </svg>
            <svg className="pulse-corner" width="9" height="9" viewBox="0 0 9 9" style={{ position: "absolute", top: -1, right: -1 }}>
              <circle cx="4.5" cy="4.5" r="4.5" fill="var(--sage)" />
            </svg>
          </span>
          <span className="nav-mark-text">Johanne <em>Hasley</em> D.</span>
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
        <button
          className={`menu-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                setActive(l.href);
                setMenuOpen(false);
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
