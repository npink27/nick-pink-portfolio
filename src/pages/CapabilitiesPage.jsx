import { motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { TOOLS_AND_SYSTEMS } from "../data/siteData.js";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export default function CapabilitiesPage() {
  return (
    <div className="page tools-page">
      <header className="tools-page-head wrap">
        <p className="tools-page-k">Tools</p>
        <h1>Tools and systems</h1>
        <p className="tools-page-dek">
          Analytics, paid acquisition, creator systems, AI workflows, and outbound infrastructure used across campaigns and
          growth projects.
        </p>
      </header>

      <motion.ul className="tools-pill-list wrap" {...fade}>
        {TOOLS_AND_SYSTEMS.map((name) => (
          <li key={name} className="tools-pill">
            {name}
          </li>
        ))}
      </motion.ul>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
