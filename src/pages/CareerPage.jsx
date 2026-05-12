import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import ContactCTA from "../components/ContactCTA.jsx";
import CareerBackdrop from "../components/career/CareerBackdrop.jsx";
import CareerEnvironment from "../components/career/CareerEnvironment.jsx";
import { CAREER_CHAPTERS } from "../data/siteData.js";

function OverlayCanvas({ theme }) {
  return (
    <div className="career-overlay-r3f">
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 3.8], fov: 48 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <CareerEnvironment theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function CareerPage() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const theme = CAREER_CHAPTERS[activeIndex]?.theme ?? "bu";

  const syncActive = useCallback(() => {
    const root = scrollRef.current;
    if (!root) return;
    const cards = root.querySelectorAll("[data-career-card]");
    let best = 0;
    let bestRatio = 0;
    cards.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const rootR = root.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const mid = rootR.left + rootR.width / 2;
      const ratio = 1 / (1 + Math.abs(cx - mid) / rootR.width);
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      () => {
        syncActive();
      },
      { root, threshold: [0.2, 0.35, 0.5, 0.65, 0.8], rootMargin: "0px" },
    );
    root.querySelectorAll("[data-career-card]").forEach((el) => obs.observe(el));
    root.addEventListener("scroll", syncActive, { passive: true });
    syncActive();
    return () => {
      obs.disconnect();
      root.removeEventListener("scroll", syncActive);
    };
  }, [syncActive]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setExpandedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const expanded = CAREER_CHAPTERS.find((c) => c.id === expandedId);

  return (
    <div className="career-page">
      <CareerBackdrop theme={theme} />

      <header className="career-page-head">
        <p className="career-page-k">Career</p>
        <h1>Chapters</h1>
        <p className="career-page-dek">Scroll horizontally. Click a stop for the full run.</p>
      </header>

      <div className="career-scroll" ref={scrollRef}>
        {CAREER_CHAPTERS.map((ch, i) => (
          <article
            key={ch.id}
            className={`career-card ${ch.featured ? "is-featured" : ""}`}
            data-career-card
            data-index={i}
          >
            <button type="button" className="career-card-hit" onClick={() => setExpandedId(ch.id)}>
              <span className="career-card-years">{ch.years}</span>
              <h2 className="career-card-org">{ch.cardTitle}</h2>
              <p className="career-card-role">{ch.role}</p>
              <p className="career-card-preview">{ch.preview}</p>
              <span className="career-card-cta">Open chapter</span>
            </button>
          </article>
        ))}
      </div>

      <p className="career-scroll-hint">Scroll · click to expand</p>

      <div className="wrap section-breathe">
        <ContactCTA />
      </div>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            key="ov"
            className="career-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="career-overlay-panel"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button type="button" className="career-overlay-x" onClick={() => setExpandedId(null)} aria-label="Close">
                ×
              </button>
              <OverlayCanvas theme={expanded.theme} />
              <div className="career-overlay-body">
                <p className="career-overlay-years">{expanded.years}</p>
                <h2>{expanded.org}</h2>
                <p className="career-overlay-role">{expanded.role}</p>
                {expanded.degree ? <p className="career-overlay-degree">{expanded.degree}</p> : null}
                <div className="career-overlay-copy">
                  {expanded.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {expanded.metrics?.length > 0 ? (
                  <ul className="career-overlay-metrics">
                    {expanded.metrics.map((m) => (
                      <li key={m.l}>
                        <strong>{m.v}</strong> <span>{m.l}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {expanded.closing ? <p className="career-overlay-closing">{expanded.closing}</p> : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
