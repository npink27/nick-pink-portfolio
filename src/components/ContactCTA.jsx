import { EMAIL, LINKEDIN } from "../data/siteData.js";

export default function ContactCTA({ onNavigate }) {
  return (
    <div className="contact-cta glass">
      <div>
        <div className="contact-cta-k">Ping</div>
        <div className="contact-cta-t">Launches, X, paid, OOH, AI ops—send the actual problem.</div>
      </div>
      <div className="contact-cta-actions">
        <a className="btn-p" href={EMAIL}>
          Email
        </a>
        <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {onNavigate && (
          <button type="button" className="btn-g" onClick={() => onNavigate("contact")}>
            Contact grid →
          </button>
        )}
      </div>
    </div>
  );
}
