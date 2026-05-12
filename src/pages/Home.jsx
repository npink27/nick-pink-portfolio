import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { LINKEDIN, STATS } from "../data/siteData.js";

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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

          <div className="hero-copy">
            <p>
              <strong>23. Two exits.</strong>
            </p>
            <p>Built distribution systems that print reach at ugly scale.</p>
            <p>
              Crypto launches.
              <br />
              Paid media.
              <br />
              AI workflows.
              <br />
              Public-market creator systems.
            </p>
            <p>I build attention infrastructure that moves faster than meetings.</p>
            <p className="hero-kicker">If it doesn&apos;t move attention, I don&apos;t care about it.</p>
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

      <div className="wrap section-breathe">
        <ContactCTA />
      </div>
    </div>
  );
}
