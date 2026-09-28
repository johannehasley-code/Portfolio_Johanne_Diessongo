import { useEffect } from "react";

export default function Modal({ title, subtitle, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <style>{`
        .modal-backdrop { position: fixed; inset: 0; background: rgba(58,63,74,0.55); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 24px; }
        .modal-card { background: var(--warm-white); border-radius: var(--radius-lg); padding: 40px; max-width: 640px; width: 100%; max-height: 85vh; overflow-y: auto; position: relative; }
        .modal-close { position: absolute; top: 16px; right: 20px; background: none; border: none; font-size: 1.8rem; line-height: 1; color: var(--slate-light); cursor: pointer; }
        .modal-close:hover { color: var(--slate); }
        .modal-title { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600; color: var(--slate); margin-bottom: 4px; }
        .modal-subtitle { font-size: 0.85rem; color: var(--sage-dark); font-weight: 500; margin-bottom: 20px; }
        .modal-placeholder { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 20px; background: rgba(58,63,74,0.04); border-radius: var(--radius-md); color: var(--slate-light); font-size: 0.9rem; }
      `}</style>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
          <h3 className="modal-title">{title}</h3>
          {subtitle && <div className="modal-subtitle">{subtitle}</div>}
          {children}
        </div>
      </div>
    </>
  );
}
