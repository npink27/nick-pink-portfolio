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
        <p className="work-page-dek">Selected projects, campaigns, and systems with real metrics.</p>
      </header>

      <div className="work-grid wrap">
        {CASE_STUDIES.map((cs) => {
          const open = openId === cs.id;
          return (
            <article key={cs.id} className={`work-premium-card tone-${cs.tone} ${open ? "is-open" : ""}`}>
              <div className="work-premium-card-inner">
                <div className="work-premium-top">
                  <div className="work-premium-emblem" aria-hidden>
                    {cs.emblem}
                  </div>
                  <div className="work-premium-headtext">
                    <p className="work-premium-label">{cs.label}</p>
                    <h2 className="work-premium-title">{cs.title}</h2>
                    {cs.dateRange ? <p className="work-premium-date">{cs.dateRange}</p> : null}
                    {cs.tag ? <p className="work-premium-tag">{cs.tag}</p> : null}
                  </div>
                </div>

                <p className="work-premium-desc">{cs.copy}</p>

                <div className="work-premium-metrics">
                  {cs.metrics.map((m) => (
                    <div key={m.l} className="work-premium-metric">
                      <span className="work-premium-mv">{m.v}</span>
                      <span className="work-premium-ml">{m.l}</span>
                    </div>
                  ))}
                </div>

                <button type="button" className="work-premium-cta" onClick={() => toggle(cs.id)} aria-expanded={open}>
                  {open ? "Hide details" : "View details"}
                </button>
              </div>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="detail"
                    className="work-premium-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="work-premium-detail-inner">
                      <p className="work-premium-detail-h">Overview</p>
                      {cs.detail?.paragraphs?.map((p, idx) => (
                        <p key={idx} className="work-premium-detail-p">
                          {p}
                        </p>
                      ))}

                      {cs.detail?.expandedBullets?.length ? (
                        <>
                          <p className="work-premium-detail-h">Systems built</p>
                          <ul className="work-premium-detail-list">
                            {cs.detail.expandedBullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}

                      <p className="work-premium-detail-h">Metrics</p>
                      <div className="work-premium-metrics work-premium-metrics--detail">
                        {cs.metrics.map((m) => (
                          <div key={`d-${m.l}`} className="work-premium-metric">
                            <span className="work-premium-mv">{m.v}</span>
                            <span className="work-premium-ml">{m.l}</span>
                          </div>
                        ))}
                      </div>

                      {cs.detail?.tools?.length ? (
                        <>
                          <p className="work-premium-detail-h">Tools used</p>
                          <div className="work-premium-chips">
                            {cs.detail.tools.map((t) => (
                              <span key={t} className="work-premium-chip">
                                {t}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : null}

                      {cs.detail?.proven ? (
                        <>
                          <p className="work-premium-detail-h">What it proved</p>
                          <p className="work-premium-detail-p work-premium-proven">{cs.detail.proven}</p>
                        </>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
