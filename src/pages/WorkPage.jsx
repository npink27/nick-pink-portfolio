import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Css3dWorkVisual from "../components/Css3dWorkVisual";
import ContactCTA from "../components/ContactCTA";
import WorkDrawer from "../components/WorkDrawer";
import { WORK_CATEGORIES, WORK_LEGACY } from "../data/siteData";

export default function WorkPage({ setPage }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="page">
      <div className="wrap section">
        <span className="s-label">Work</span>
        <h1 className="s-h">
          Interactive <em>case stack.</em>
        </h1>
        <p className="s-p wide">Hover a card for tilt. Click to open metrics, proof placeholders, and deeper context.</p>

        <div className="work-card-grid">
          {WORK_CATEGORIES.map((w, i) => (
            <button
              key={w.id}
              type="button"
              className="work-card"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => setOpen(w)}
            >
              <div className="work-card-visual">
                <Css3dWorkVisual type={w.visual} />
              </div>
              <div className="work-card-body">
                <div className="work-card-k">{w.headline}</div>
                <div className="work-card-m">{w.metrics}</div>
                <p className="work-card-a">{w.angle}</p>
              </div>
              <span className="work-card-cta">Open detail →</span>
            </button>
          ))}
        </div>
      </div>

      <div className="wrap section">
        <span className="s-label">Selected timeline</span>
        <h2 className="s-h">
          Legacy <em>rows.</em>
        </h2>
        <div className="work-legacy">
          {WORK_LEGACY.map((w) => (
            <div key={w.co} className="work-legacy-row">
              <div>
                <span className="work-legacy-tag">{w.tag}</span>
                <div className="work-legacy-co">{w.co}</div>
              </div>
              <p className="work-legacy-desc">{w.desc}</p>
              <div className="work-legacy-meta">
                <span>{w.result}</span>
                <span className="work-legacy-y">{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>

      <AnimatePresence>{open && <WorkDrawer item={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  );
}
