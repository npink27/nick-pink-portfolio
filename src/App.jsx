import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import "./surface.css";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AskNickPage from "./pages/AskNickPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const TITLES = {
  home: "Nick Pink — Operator",
  work: "Work — Nick Pink",
  timeline: "Career — Nick Pink",
  services: "Capabilities — Nick Pink",
  ai: "Intel — Nick Pink",
  contact: "Contact — Nick Pink",
};

const pageMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.title = TITLES[page] || TITLES.home;
  }, [page]);

  return (
    <div className="app-shell">
      <Navigation page={page} setPage={setPage} />
      <main>
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div key="home" className="page-root" {...pageMotion}>
              <Home setPage={setPage} />
            </motion.div>
          )}
          {page === "work" && (
            <motion.div key="work" className="page-root" {...pageMotion}>
              <WorkPage setPage={setPage} />
            </motion.div>
          )}
          {page === "timeline" && (
            <motion.div key="timeline" className="page-root" {...pageMotion}>
              <TimelinePage setPage={setPage} />
            </motion.div>
          )}
          {page === "services" && (
            <motion.div key="services" className="page-root" {...pageMotion}>
              <ServicesPage setPage={setPage} />
            </motion.div>
          )}
          {page === "ai" && (
            <motion.div key="ai" className="page-root" {...pageMotion}>
              <AskNickPage setPage={setPage} />
            </motion.div>
          )}
          {page === "contact" && (
            <motion.div key="contact" className="page-root" {...pageMotion}>
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
