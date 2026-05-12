import HeroCanvas from "../components/HeroCanvas";
import ContactCTA from "../components/ContactCTA";
import { CLIENTS, LINKEDIN, PROOF_TILES, STATS, TESTIMONIALS } from "../data/siteData";

export default function Home({ setPage }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <HeroCanvas />
        <div className="hero-glow" />
        <div className="hero-fade" />
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-dot" />
            GROWTH · AI SYSTEMS · DISTRIBUTION
          </div>
          <h1 className="hero-name">
            NICK
            <br />
            <em>PINK</em>
          </h1>
          <p className="hero-tagline">Growth marketer, AI systems operator, and distribution builder.</p>
          <div className="hero-actions">
            <button type="button" className="btn-p" onClick={() => setPage("work")}>
              View work
            </button>
            <button type="button" className="btn-g" onClick={() => setPage("ai")}>
              Ask Nick’s AI →
            </button>
          </div>
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

      <div className="wrap section">
        <span className="s-label">Proof</span>
        <h2 className="s-h">
          Numbers that <em>travel.</em>
        </h2>
        <p className="s-p">Quick proof tiles — same story, faster scan.</p>
        <div className="proof-grid">
          {PROOF_TILES.map((p) => (
            <div key={p.v} className="proof-tile">
              <div className="proof-v">{p.v}</div>
              <div className="proof-l">{p.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="clients">
        <div className="clients-label">TRUSTED BY</div>
        <div className="clients-track">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div className="cli" key={`${c.name}-${i}`}>
              <span style={{ color: c.color }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section">
        <div className="about-compact">
          <div>
            <h2 className="s-h">
              Distribution <em>machines.</em>
            </h2>
            <p className="s-p wide">
              By 23: exited an agency from a dorm room, scaled crypto to billions in market cap, and built AI systems that compress execution time at public companies. Nick engineers attention,
              narrative, and leverage — not slide decks.
            </p>
            <a className="inline-link" href={LINKEDIN} target="_blank" rel="noreferrer">
              linkedin.com/in/nicholaspink ↗
            </a>
          </div>
          <div className="pill-row">
            {[
              ["103M+", "Snap views"],
              ["$2B+", "Crypto supported"],
              ["81.6M+", "IG views / 30d"],
            ].map(([v, l]) => (
              <div className="stat-pill" key={v}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap section">
        <span className="s-label">Clients</span>
        <h2 className="s-h">
          Word on the <em>street.</em>
        </h2>
        <div className="testi-compact">
          {TESTIMONIALS.map((t, i) => (
            <figure key={`testi-${i}`} className="testi-compact-card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.from}</strong>
                {t.kind === "person" && t.subtitle ? <span className="testi-sub">{t.subtitle}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
