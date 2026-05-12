import { motion } from "framer-motion";
import { CAPABILITIES } from "../data/siteData.js";
import ContactCTA from "../components/ContactCTA.jsx";

const item = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

export default function CapabilitiesPage() {
  return (
    <div className="page capabilities-page">
      <header className="capabilities-head">
        <p className="capabilities-k">Capabilities</p>
        <h1>Capabilities</h1>
        <p className="capabilities-dek">What actually ships when the brief is real.</p>
      </header>

      <div className="capabilities-grid">
        {CAPABILITIES.map((c, i) => (
          <motion.article key={c.id} className="capability-tile" {...item} transition={{ ...item.transition, delay: i * 0.04 }}>
            <h2>{c.name}</h2>
            <p>{c.blurb}</p>
          </motion.article>
        ))}
      </div>

      <div className="wrap section-breathe">
        <ContactCTA />
      </div>
    </div>
  );
}
