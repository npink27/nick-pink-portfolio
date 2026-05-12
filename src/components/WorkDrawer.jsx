import { motion } from "framer-motion";
import { OOH, PAID_CAMPAIGNS, TRENDING_DATA } from "../data/siteData";

export default function WorkDrawer({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div
      className="drawer-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.aside
        className="drawer-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 380, damping: 38 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer-head">
          <div>
            <div className="drawer-k">{item.headline}</div>
            <h2 id="drawer-title" className="drawer-title">
              {item.angle}
            </h2>
          </div>
          <button type="button" className="drawer-x" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className="drawer-metrics">{item.metrics}</p>
        <p className="drawer-summary">{item.summary}</p>
        <ul className="drawer-bullets">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {item.id === "twitter" && (
          <div className="drawer-extra">
            <div className="drawer-extra-h">Trend board</div>
            <div className="trend-mini-grid">
              {TRENDING_DATA.map((t) => (
                <div key={t.project} className="trend-mini-card">
                  <div className="trend-mini-name">{t.project}</div>
                  <div className="trend-mini-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.id === "paid" && (
          <div className="drawer-extra">
            <div className="drawer-extra-h">Campaign snapshots</div>
            <div className="paid-mini-grid">
              {PAID_CAMPAIGNS.map((c) => (
                <div key={c.label} className="paid-mini-card">
                  <div className="paid-mini-l">{c.label}</div>
                  <div className="paid-mini-v">{c.cpc} CPC</div>
                  <div className="paid-mini-s">{c.clicks} clicks</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.id === "ooh" && (
          <div className="drawer-extra">
            <div className="drawer-extra-h">OOH moments</div>
            <div className="ooh-mini-grid">
              {OOH.map((c, i) => (
                <div key={i} className="ooh-mini" style={{ background: c.bg }}>
                  <div className="ooh-mini-l">{c.label}</div>
                  <div className="ooh-mini-s">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="drawer-actions">
          <button type="button" className="btn-g" disabled>
            View Proof / Case Study (soon)
          </button>
          <a className="btn-p" href="mailto:npink@bu.edu">
            Contact Nick
          </a>
        </div>
      </motion.aside>
    </motion.div>
  );
}
