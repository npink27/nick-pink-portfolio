import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { CAREER_CHAPTERS } from "../data/siteData.js";

export default function CareerPage() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <div className="career-page career-page-vertical">
      <header className="career-vertical-head wrap">
        <p className="career-page-k">Career</p>
        <h1>Timeline</h1>
        <p className="career-page-dek">Scroll vertically. Click a role to expand details and metrics.</p>
      </header>

      <div className="career-tree wrap">
        <div className="career-tree-rail" aria-hidden />
        <ul className="career-tree-list">
          {CAREER_CHAPTERS.map((ch) => {
            const open = openId === ch.id;
            return (
              <li key={ch.id} className={`career-tree-item ${ch.featured ? "is-featured" : ""}`}>
                <button type="button" className={`career-tree-hit ${open ? "is-open" : ""}`} onClick={() => toggle(ch.id)} aria-expanded={open}>
                  <span className="career-tree-emblem" aria-hidden>
                    {ch.emblem}
                  </span>
                  <div className="career-tree-main">
                    <span className="career-tree-years">{ch.years}</span>
                    <span className="career-tree-org">{ch.org}</span>
                    <span className="career-tree-role">{ch.role}</span>
                    {ch.location ? <span className="career-tree-loc">{ch.location}</span> : null}
                    <p className="career-tree-summary">{ch.summary}</p>
                  </div>
                  <span className="career-tree-chev">{open ? "−" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="body"
                      className="career-tree-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="career-tree-body-inner">
                        {ch.details.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                        {ch.metrics?.length > 0 ? (
                          <ul className="career-tree-metrics">
                            {ch.metrics.map((m) => (
                              <li key={m.l}>
                                <span className="career-tree-mv">{m.v}</span>
                                <span className="career-tree-ml">{m.l}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
