import { motion } from "framer-motion";
import HeroCanvas from "../components/HeroCanvas.jsx";
import HeroIntelPanel from "../components/HeroIntelPanel.jsx";
import DistributionMesh from "../components/DistributionMesh.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { CLIENTS, HERO_LIVE_METRICS, HOME_SNIPPETS, LINKEDIN, STATS } from "../data/siteData.js";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
};

export default function Home({ setPage }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <HeroCanvas />
        <div className="hero-glow" />
        <div className="hero-fade" />

        <div className="hero-split">
          <motion.div className="hero-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
            <p className="hero-eyebrow">23 · operator · crypto-native · AI-native</p>
            <h1 className="hero-name-xl">
              NICK <em>PINK</em>
            </h1>
            <div className="hero-lines">
              <div>
                <strong>AI systems.</strong> Distribution. Internet leverage.
              </div>
              <div>Two exits. Public markets + creator economy crossover.</div>
            </div>
            <p className="hero-lede">
              I build machines that buy, bend, and route attention—then make the spreadsheet reconcile. Crypto launches, X trending, paid, OOH, clip ops, automations. If it doesn’t ship, it doesn’t
              count.
            </p>
            <div className="hero-actions-row">
              <button type="button" className="btn-p" onClick={() => setPage("work")}>
                Execution log
              </button>
              <button type="button" className="btn-g" onClick={() => setPage("timeline")}>
                Career rail →
              </button>
              <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
            <HeroIntelPanel />
          </motion.div>
        </div>
      </section>

      <section className="wrap section home-metrics">
        <motion.div {...fadeUp}>
          <p className="s-label">Live proof</p>
          <h2 className="s-h">Numbers that survived contact with reality.</h2>
        </motion.div>
        <div className="metric-float-grid" style={{ marginTop: 22 }}>
          {HERO_LIVE_METRICS.map((m, i) => (
            <motion.div
              key={m.v + m.l}
              className="metric-float"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="metric-float-v">{m.v}</div>
              <div className="metric-float-l">{m.l}</div>
            </motion.div>
          ))}
        </div>
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

      <section className="dist-section">
        <div className="wrap">
          <motion.p className="s-label" {...fadeUp}>
            Distribution mesh
          </motion.p>
          <motion.h2 className="s-h" {...fadeUp}>
            Attention is geography. <em>I map the routes.</em>
          </motion.h2>
          <motion.p className="s-p wide" {...fadeUp}>
            Feed, paid, creators, cities. Same problem: compress latency between idea → pixels → pipeline. The mesh is metaphor—what’s underneath is ops.
          </motion.p>
          <DistributionMesh />
        </div>
      </section>

      <div className="clients">
        <div className="clients-label">Brands / projects in orbit</div>
        <div className="clients-track">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div className="cli" key={`${c.name}-${i}`}>
              <span style={{ color: c.color }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="wrap section">
        <p className="s-label">Resume snippets</p>
        <h2 className="s-h">Tap in. I’m not hiding the arc.</h2>
        <div className="snip-grid" style={{ marginTop: 18 }}>
          {HOME_SNIPPETS.map((s) => (
            <button key={s.k} type="button" className="snip-card" onClick={() => setPage(s.to)}>
              <div className="snip-k">{s.k}</div>
              <div className="snip-line">{s.line}</div>
            </button>
          ))}
        </div>
      </section>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
