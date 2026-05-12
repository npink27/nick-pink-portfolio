import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA";
import { TIMELINE } from "../data/siteData";

function TimelineVisual({ kind }) {
  return <div className={`tl-viz tl-viz-${kind}`} aria-hidden />;
}

export default function TimelinePage({ setPage }) {
  const [exp, setExp] = useState(null);

  return (
    <div className="page">
      <div className="wrap section">
        <span className="s-label">Resume</span>
        <h1 className="s-h">
          Timeline <em>mode.</em>
        </h1>
        <p className="s-p wide">Click an experience to expand metrics. Visuals are stylized emblems — no trademarked marks.</p>

        <div className="timeline">
          {TIMELINE.map((row) => {
            const isOpen = exp === row.id;
            return (
              <div key={row.id} className={`tl-row ${isOpen ? "open" : ""}`}>
                <button type="button" className="tl-hit" onClick={() => setExp(isOpen ? null : row.id)}>
                  <div className="tl-rail">
                    <span className="tl-dot" />
                  </div>
                  <div className="tl-card">
                    <div className="tl-top">
                      <TimelineVisual kind={row.visual} />
                      <div className="tl-text">
                        <div className="tl-range">{row.range}</div>
                        <div className="tl-title">
                          {row.title} · {row.org}
                        </div>
                        <div className="tl-focus">{row.focus}</div>
                      </div>
                      <span className="tl-chev">{isOpen ? "−" : "+"}</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="tl-expand"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <p className="tl-detail">{row.detail}</p>
                          {row.metrics.length > 0 && (
                            <ul className="tl-metrics">
                              {row.metrics.map((m) => (
                                <li key={m}>{m}</li>
                              ))}
                            </ul>
                          )}
                          <button type="button" className="btn-g tl-proof" disabled>
                            View Proof / Case Study (soon)
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
