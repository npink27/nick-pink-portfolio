import { EMAIL, EMAIL_ADDRESS, LINKEDIN, PHONE_DISPLAY, PHONE_HREF } from "../data/siteData.js";

export default function ContactPage() {
  return (
    <div className="page">
      <div className="contact-page-new">
        <h1>Contact</h1>
        <p className="sub">Phone, email, LinkedIn. Pick what fits.</p>
        <div className="contact-page-actions">
          <a className="btn-p" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <a className="btn-g" href={EMAIL}>
            {EMAIL_ADDRESS}
          </a>
          <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
