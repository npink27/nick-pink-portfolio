import { motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { TOOLS_BY_CATEGORY } from "../data/siteData.js";

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
        <p className="tools-page-k">Stack</p>
        <h1>Tools and systems</h1>
        <p className="tools-page-dek">
          The stack I use across analytics, paid acquisition, AI workflows, creator systems, and outbound infrastructure.
        </p>
      </header>

      <motion.div className="tools-category-grid wrap" {...fade}>
        {TOOLS_BY_CATEGORY.map((cat) => (
          <article key={cat.id} className="tools-category-card">
            <div className="tools-category-card-head">
              <span className="tools-category-glyph" aria-hidden>
                {cat.glyph}
              </span>
              <h2 className="tools-category-title">{cat.title}</h2>
            </div>
            <ul className="tools-category-chips">
              {cat.items.map((name) => (
                <li key={name} className="tools-category-chip">
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </motion.div>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
