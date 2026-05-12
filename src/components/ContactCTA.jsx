import { EMAIL, LINKEDIN } from "../data/siteData";

export default function ContactCTA({ onNavigate }) {
  return (
    <div className="contact-cta">
      <div>
        <div className="contact-cta-k">Ready when you are</div>
        <div className="contact-cta-t">Contact Nick for launches, trending, paid, OOH, and AI systems.</div>
      </div>
      <div className="contact-cta-actions">
        <a className="btn-p" href={EMAIL}>
          Contact Nick
        </a>
        <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {onNavigate && (
          <button type="button" className="btn-g" onClick={() => onNavigate("contact")}>
            Full contact →
          </button>
        )}
      </div>
    </div>
  );
}
