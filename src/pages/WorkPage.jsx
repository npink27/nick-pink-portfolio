import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import WorkDrawer from "../components/WorkDrawer.jsx";
import WorkHoloCard from "../components/WorkHoloCard.jsx";
import { WORK_CATEGORIES, WORK_LEGACY } from "../data/siteData.js";

export default function WorkPage({ setPage }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="page">
      <div className="wrap section">
        <p className="s-label">Work</p>
        <h1 className="s-h">
          Case stack. <em>Not case studies.</em>
        </h1>
        <p className="s-p wide">Tilt the cards—physics are real. Open one: metrics, receipts, the boring parts that matter.</p>

        <div className="work-card-grid">
          {WORK_CATEGORIES.map((w, i) => (
            <WorkHoloCard key={w.id} item={w} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <div className="wrap section">
        <p className="s-label">Log</p>
        <h2 className="s-h">
          Older <em>wins.</em>
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
