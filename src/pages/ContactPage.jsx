import { EMAIL, LINKEDIN } from "../data/siteData.js";

export default function ContactPage() {
  return (
    <div className="page">
      <div className="contact-page-new">
        <h1>If you&apos;re building something real, reach out.</h1>
        <p className="sub">No forms. Two paths.</p>
        <div className="contact-page-actions">
          <a className="btn-p" href={EMAIL}>
            Email
          </a>
          <a className="btn-g" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
