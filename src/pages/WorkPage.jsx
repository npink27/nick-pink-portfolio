import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import { Canvas } from "@react-three/fiber";
import { CASE_STUDIES } from "../data/siteData.js";
import CareerEnvironment from "../components/career/CareerEnvironment.jsx";

const themeByTone = { dark: "marketwise", pink: "nxtlvl", charcoal: "zeta" };

const panelMotion = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

function WorkOverlayR3f({ tone }) {
  const theme = themeByTone[tone] ?? "marketwise";
  return (
    <div className="work-overlay-r3f">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 3.6], fov: 50 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <CareerEnvironment theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function WorkPage() {
  const [openId, setOpenId] = useState(null);
  const active = CASE_STUDIES.find((c) => c.id === openId);

  return (
    <div className="page work-cinematic">
      <header className="work-intro">
        <h1>Work</h1>
        <p>Case studies you can open. Crypto, clips, paid, X, OOH, AI outbound.</p>
      </header>

      <div className="work-case-list">
        {CASE_STUDIES.map((cs) => (
          <motion.section key={cs.id} className={`work-case-row tone-${cs.tone}`} {...panelMotion}>
            <div className="work-case-row-inner">
              <div>
                <p className="case-tag">{cs.tag}</p>
                <h2 className="case-title case-title-row">{cs.title}</h2>
                <p className="case-copy">{cs.copy}</p>
                <div className="case-metrics case-metrics-row">
                  {cs.metrics.map((m) => (
                    <div key={m.l} className="case-metric">
                      <div className="case-metric-v">{m.v}</div>
                      <div className="case-metric-l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" className="btn-p work-open-btn" onClick={() => setOpenId(cs.id)}>
                Open study
              </button>
            </div>
          </motion.section>
        ))}
      </div>

      <div className="wrap section-breathe">
        <ContactCTA />
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            key={active.id}
            className="work-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="work-overlay-panel"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button type="button" className="work-overlay-x" onClick={() => setOpenId(null)} aria-label="Close">
                ×
              </button>
              <WorkOverlayR3f tone={active.tone} />
              <div className="work-overlay-body">
                <p className="case-tag">{active.tag}</p>
                <h2>{active.title}</h2>
                {active.detail?.paragraphs?.map((p, idx) => (
                  <p key={idx} className="work-overlay-p">
                    {p}
                  </p>
                ))}
                {active.detail?.hooks ? (
                  <ul className="work-overlay-hooks">
                    {active.detail.hooks.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
