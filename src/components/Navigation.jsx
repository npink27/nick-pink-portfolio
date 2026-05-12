import { LINKEDIN } from "../data/siteData";

const ITEMS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "timeline", label: "Resume" },
  { id: "services", label: "Services" },
  { id: "ai", label: "Ask Nick" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ page, setPage }) {
  return (
    <>
      <header className="site-header">
        <button type="button" className="brand-mark" onClick={() => setPage("home")} aria-label="Home">
          NICK <em>PINK</em>
        </button>
        <nav className="nav-desktop" aria-label="Primary">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              className={`nav-tab ${page === it.id ? "active" : ""}`}
              onClick={() => setPage(it.id)}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <a className="nav-cta" href={LINKEDIN} target="_blank" rel="noreferrer">
          Get in touch
        </a>
      </header>

      <nav className="nav-mobile-bottom" aria-label="Mobile primary">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`nav-mob ${page === it.id ? "active" : ""}`}
            onClick={() => setPage(it.id)}
          >
            <span className="nav-mob-dot" />
            <span className="nav-mob-label">{it.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
