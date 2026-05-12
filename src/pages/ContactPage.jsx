import { EMAIL, LINKEDIN } from "../data/siteData.js";

export default function ContactPage() {
  return (
    <div className="page">
      <div className="contact-dense">
        <p className="s-label">Contact</p>
        <h1 className="s-h">
          Inbox beats <em>forms.</em>
        </h1>
        <p className="s-p wide">If you’re trying to move markets, feeds, or revenue—not “explore synergies”—use one of these. I read what I get.</p>

        <div className="contact-dense-grid">
          <a className="contact-tile glass" href={EMAIL}>
            <div className="contact-tile-k">Email</div>
            <div className="contact-tile-v">npink@bu.edu</div>
            <div className="contact-tile-s">Fastest path for scope, dates, and real constraints.</div>
          </a>
          <a className="contact-tile glass" href={LINKEDIN} target="_blank" rel="noreferrer">
            <div className="contact-tile-k">LinkedIn</div>
            <div className="contact-tile-v">/in/nicholaspink</div>
            <div className="contact-tile-s">Background, endorsements, DMs—fine for first touch.</div>
          </a>
        </div>

        <p className="s-p" style={{ marginTop: 28, maxWidth: "52ch" }}>
          Current lane: MarketWise (NASDAQ: MKTW) — social + digital lead. Side interests: launches, AI execution layers, anything where attention has a ledger.
        </p>
      </div>
    </div>
  );
}
