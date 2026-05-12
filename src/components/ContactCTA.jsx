import { EMAIL, LINKEDIN } from "../data/siteData.js";

export default function ContactCTA() {
  return (
    <div className="contact-cta-strip">
      <div>
        <div className="contact-cta-k">Contact</div>
        <div className="contact-cta-t">Let&apos;s build something loud.</div>
      </div>
      <div className="contact-cta-actions">
        <a className="btn-p" href={EMAIL}>
          Email
        </a>
        <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
