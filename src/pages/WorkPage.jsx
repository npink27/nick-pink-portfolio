import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { CASE_STUDIES } from "../data/siteData.js";

export default function WorkPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <div className="page work-page-v2">
      <header className="work-page-head wrap">
        <h1>Work</h1>
        <p className="work-page-dek">
          Selected projects with real metrics. Click a card to expand context, systems, and numbers.
        </p>
      </header>

      <div className="work-accordion wrap">
        {CASE_STUDIES.map((cs) => {
          const open = openId === cs.id;
          return (
            <section key={cs.id} className={`work-acc-card tone-${cs.tone} ${open ? "is-open" : ""}`}>
              <button type="button" className="work-acc-hit" onClick={() => toggle(cs.id)} aria-expanded={open}>
                <div className="work-acc-hit-main">
                  <p className="work-acc-label">{cs.label}</p>
                  <h2 className="work-acc-title">{cs.title}</h2>
                  {cs.dateRange ? <p className="work-acc-date">{cs.dateRange}</p> : null}
                  <p className="work-acc-tag">{cs.tag}</p>
                  <p className="work-acc-copy">{cs.copy}</p>
                  <div className="work-acc-metrics-preview">
                    {cs.metrics.map((m) => (
                      <div key={m.l} className="work-acc-metric">
                        <span className="work-acc-mv">{m.v}</span>
                        <span className="work-acc-ml">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="work-acc-expand-label">{open ? "Close" : "Details"}</span>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    className="work-acc-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="work-acc-body-inner">
                      {cs.detail?.paragraphs?.map((p, idx) => (
                        <p key={idx} className="work-acc-body-p">
                          {p}
                        </p>
                      ))}
                      {cs.detail?.expandedBullets?.length ? (
                        <div>
                          <p className="work-acc-body-h">Systems and scope</p>
                          <ul className="work-acc-bullets">
                            {cs.detail.expandedBullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </section>
          );
        })}
      </div>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
