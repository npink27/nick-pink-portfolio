import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { TIMELINE } from "../data/siteData.js";

export default function TimelinePage({ setPage }) {
  const [active, setActive] = useState(TIMELINE[0]?.id ?? null);
  const row = TIMELINE.find((r) => r.id === active) ?? null;

  return (
    <div className="page career-page">
      <div className="wrap section">
        <p className="s-label">Career</p>
        <h1 className="s-h">
          Interactive timeline. <em>Proof rides shotgun.</em>
        </h1>
        <p className="s-p wide">Scroll the rail, pick a node. Right panel loads receipts—metrics, context, no accordion cosplay.</p>

        <div className="career-layout">
          <div className="career-track">
            {TIMELINE.map((r) => {
              const is = active === r.id;
              return (
                <div key={r.id} className={`career-stop ${is ? "is-active" : ""}`}>
                  <span className="career-node" aria-hidden />
                  <button type="button" className="career-hit" onClick={() => setActive(r.id)}>
                    <div className="career-hit-inner">
                      <div>
                        <div className="career-meta">{r.range}</div>
                        <div className="career-title">
                          {r.title} · {r.org}
                        </div>
                        <div className="career-focus">{r.focus}</div>
                      </div>
                      <div className={`career-viz career-viz-${r.viz}`} aria-hidden />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <motion.aside className="career-side glass" layout transition={{ type: "spring", stiffness: 380, damping: 34 }}>
            <AnimatePresence mode="wait">
              {row ? (
                <motion.div key={row.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.28 }}>
                  <h3>
                    {row.title} · {row.org}
                  </h3>
                  <p>{row.detail}</p>
                  {row.metrics.length > 0 ? (
                    <ul className="career-metrics">
                      {row.metrics.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="career-side-empty">No vanity metrics here—origin story node.</p>
                  )}
                  <button type="button" className="btn-g" disabled style={{ marginTop: 12 }}>
                    Case artifacts (soon)
                  </button>
                </motion.div>
              ) : (
                <div className="career-side-empty">Select a node.</div>
              )}
            </AnimatePresence>
          </motion.aside>
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
