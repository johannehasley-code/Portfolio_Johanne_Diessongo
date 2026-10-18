import { IconMapPin } from "./Icons";

const PHOTO = "/photo-johanne.jpg";

export default function PhotoCard() {
  return (
    <>
      <style>{`
        .photo-frame-wrap { position: relative; }
        .photo-frame {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--sand);
          box-shadow: var(--shadow-lift);
          position: relative;
        }
        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s ease;
        }
        .photo-frame:hover img { transform: scale(1.04); }
        .photo-frame-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(58,63,74,0.25) 0%, transparent 55%);
          pointer-events: none;
        }
        .photo-badge {
          position: absolute;
          bottom: -18px;
          right: -18px;
          background: white;
          border-radius: var(--radius-md);
          padding: 14px 18px;
          border: 1px solid var(--sand);
          box-shadow: var(--shadow-soft);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
          animation: float 5s ease-in-out infinite;
        }
        .badge-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--sage);
          flex-shrink: 0;
          animation: pulse-glow 2s infinite;
        }
        .badge-text-top { font-size: 0.66rem; color: var(--slate-pale); text-transform: uppercase; letter-spacing: 0.06em; }
        .badge-text-main { font-size: 0.82rem; font-weight: 600; color: var(--slate); line-height: 1.2; }
        .photo-loc-badge {
          position: absolute;
          top: -14px; left: -14px;
          background: var(--slate);
          color: white;
          border-radius: var(--radius-sm);
          padding: 9px 14px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.76rem;
          font-weight: 500;
          z-index: 2;
          box-shadow: var(--shadow-soft);
        }
        @media (max-width: 960px) {
          .photo-frame-wrap { max-width: 320px; margin: 0 auto; }
        }
      `}</style>

      <div className="photo-frame-wrap">
        <div className="photo-frame">
          <img src={PHOTO} alt="Johanne Hasley Diessongo" />
          <div className="photo-frame-overlay" />
        </div>
        <div className="photo-badge">
          <div className="badge-dot" />
          <div>
            <div className="badge-text-top">Statut</div>
            <div className="badge-text-main">Ouverte aux opportunités</div>
          </div>
        </div>
        <div className="photo-loc-badge">
          <IconMapPin size={13} color="var(--sage-light)" />
          Casablanca, Maroc
        </div>
      </div>
    </>
  );
}
