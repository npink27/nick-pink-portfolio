import { EMAIL, LINKEDIN } from "../data/siteData";

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap section contact-hero">
        <span className="s-label">Contact</span>
        <h1 className="s-h">
          Let’s <em>build.</em>
        </h1>
        <p className="s-p wide">Launches, trending, paid, OOH, AI systems — tell Nick what you’re optimizing for.</p>
        <div className="contact-big-actions">
          <a className="btn-p" href={EMAIL}>
            Email Nick
          </a>
          <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-note">Direct: npink@bu.edu</div>
      </div>
    </div>
  );
}
