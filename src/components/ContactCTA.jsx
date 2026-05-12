import { useCallback, useState } from "react";
import { EMAIL_ADDRESS, LINKEDIN, PHONE_DISPLAY } from "../data/siteData.js";

async function copyText(text, setHint) {
  try {
    await navigator.clipboard.writeText(text);
    setHint("Copied");
    window.setTimeout(() => setHint(""), 2000);
  } catch {
    setHint("Copy failed");
    window.setTimeout(() => setHint(""), 2500);
  }
}

export default function ContactCTA() {
  const [hint, setHint] = useState("");

  const onCopyEmail = useCallback(() => copyText(EMAIL_ADDRESS, setHint), []);
  const onCopyPhone = useCallback(() => copyText(PHONE_DISPLAY, setHint), []);

  return (
    <div className="contact-cta-strip contact-cta-v2">
      <div className="contact-cta-v2-text">
        <div className="contact-cta-k">Contact</div>
        <div className="contact-cta-t">Get in touch to work together.</div>
        <p className="contact-cta-sub">
          For marketing, AI systems, paid media, creator growth, crypto launches, or campaign strategy, reach out through
          LinkedIn.
        </p>
        {hint ? <p className="contact-cta-hint">{hint}</p> : null}
      </div>
      <div className="contact-cta-actions contact-cta-actions-v2">
        <a className="btn-p" href={LINKEDIN} target="_blank" rel="noreferrer">
          View LinkedIn
        </a>
        <button type="button" className="btn-g" onClick={onCopyEmail}>
          Copy Email
        </button>
        <button type="button" className="btn-g" onClick={onCopyPhone}>
          Copy Phone
        </button>
      </div>
    </div>
  );
}
