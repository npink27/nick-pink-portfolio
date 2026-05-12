import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import "./cinematic.css";
import Navigation from "./components/Navigation.jsx";
import AiAssistantDock from "./components/AiAssistantDock.jsx";
import Home from "./pages/Home.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import CapabilitiesPage from "./pages/CapabilitiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const TITLES = {
  home: "Nick Pink",
  work: "Work — Nick Pink",
  career: "Career — Nick Pink",
  capabilities: "Capabilities — Nick Pink",
  contact: "Contact — Nick Pink",
};

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  const [page, setPage] = useState("home");
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    document.title = TITLES[page] || TITLES.home;
  }, [page]);

  return (
    <div className="app-shell">
      <Navigation page={page} setPage={setPage} aiOpen={aiOpen} onToggleAi={() => setAiOpen((v) => !v)} />
      <main>
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div key="home" className="page-root" {...pageMotion}>
              <Home setPage={setPage} />
            </motion.div>
          )}
          {page === "work" && (
            <motion.div key="work" className="page-root" {...pageMotion}>
              <WorkPage />
            </motion.div>
          )}
          {page === "career" && (
            <motion.div key="career" className="page-root" {...pageMotion}>
              <CareerPage />
            </motion.div>
          )}
          {page === "capabilities" && (
            <motion.div key="capabilities" className="page-root" {...pageMotion}>
              <CapabilitiesPage />
            </motion.div>
          )}
          {page === "contact" && (
            <motion.div key="contact" className="page-root" {...pageMotion}>
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <AiAssistantDock open={aiOpen} onOpenChange={setAiOpen} />
    </div>
  );
}
