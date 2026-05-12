import { LINKEDIN } from "../data/siteData.js";

const PAGES = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "career", label: "Career" },
  { id: "capabilities", label: "Tools" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ page, setPage, aiOpen, onToggleAi }) {
  return (
    <header className="site-header">
      <button type="button" className="brand-mark" onClick={() => setPage("home")} aria-label="Home">
        NICK <em>PINK</em>
      </button>
      <nav className="nav-primary" aria-label="Primary">
        {PAGES.map((it) => (
          <button key={it.id} type="button" className={`nav-tab ${page === it.id ? "active" : ""}`} onClick={() => setPage(it.id)}>
            {it.label}
          </button>
        ))}
        <button type="button" className={`nav-tab nav-tab-ai ${aiOpen ? "active" : ""}`} onClick={onToggleAi}>
          AI
        </button>
      </nav>
      <a className="nav-cta" href={LINKEDIN} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </header>
  );
}
