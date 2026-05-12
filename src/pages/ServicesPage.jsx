import Css3dWorkVisual from "../components/Css3dWorkVisual";
import ContactCTA from "../components/ContactCTA";
import { SERVICES_PILLARS } from "../data/siteData";

const vis = { ai: "ai", paid: "paid", x: "twitter", ooh: "ooh", dist: "dist" };

export default function ServicesPage({ setPage }) {
  return (
    <div className="page">
      <div className="wrap section">
        <p className="s-label">Capabilities</p>
        <h1 className="s-h">
          What I <em>actually ship.</em>
        </h1>
        <p className="s-p wide">Bundles, not vibes. Pick a lane—I’ve probably already run it at ugly scale.</p>

        <div className="svc-grid">
          {SERVICES_PILLARS.map((s, i) => (
            <div key={s.id} className="svc-card" style={{ animationDelay: `${i * 0.05}s` }}>
              {s.hot && <span className="svc-hot">CORE</span>}
              <div className="svc-visual">
                <Css3dWorkVisual type={vis[s.id] || "ai"} />
              </div>
              <h2 className="svc-n">{s.n}</h2>
              <p className="svc-o">{s.outcome}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
