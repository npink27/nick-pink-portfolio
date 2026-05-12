import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { LINKEDIN, STATS } from "../data/siteData.js";

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

export default function Home({ setPage }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <HeroScene />
        <div className="hero-atmos" aria-hidden>
          <div className="hero-smoke a" />
          <div className="hero-smoke b" />
          <div className="hero-smoke c" />
        </div>
        <div className="hero-vignette" />
        <div className="hero-bloom" />
        <div className="hero-fade" />

        <motion.div className="hero-stage" {...fade}>
          <h1 className="hero-massive">
            <span className="nick">Nick</span>
            <span className="pink">Pink</span>
          </h1>

          <p className="hero-sub">Marketing systems, paid media, creator growth, AI workflows, and digital distribution.</p>

          <div className="hero-copy hero-copy-grounded">
            <p>Worked across public-company marketing, creator ecosystems, crypto launches, and performance advertising.</p>
            <p>
              Built scalable systems for paid acquisition, clipping pipelines, outbound automation, and social growth.
            </p>
            <p>
              Generated millions of organic views, managed large-scale campaigns, and built growth infrastructure across
              multiple industries.
            </p>
          </div>

          <div className="hero-actions-min">
            <button type="button" className="btn-p" onClick={() => setPage("work")}>
              View Work
            </button>
            <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[...STATS, ...STATS].map((s, i) => (
            <div className="ti" key={`${s.v}-${i}`}>
              <span className="ti-v">{s.v}</span>
              <span className="ti-l">{s.l}</span>
              <span className="ti-s" />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section-breathe section-breathe-tight">
        <ContactCTA />
      </div>
    </div>
  );
}
