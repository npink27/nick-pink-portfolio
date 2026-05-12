import { useEffect, useRef, useState } from "react";
import AvatarOrb from "../components/AvatarOrb.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { getMockAiReply, INTEL_PROMPTS } from "../data/siteData.js";

export default function AskNickPage({ setPage }) {
  const shellRef = useRef(null);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Same demo brain as the homepage orb. No API calls—just hard-coded answers from real work." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text) => {
    const msg = (text ?? input).trim();
    if (!msg || busy) return;
    setInput("");
    setBusy(true);
    setMessages((p) => [...p, { role: "user", content: msg }]);
    window.setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: getMockAiReply(msg) }]);
      setBusy(false);
    }, 400);
  };

  return (
    <div className="page ask-page">
      <div className="wrap section ask-layout">
        <div className="ask-visual-col" ref={shellRef}>
          <p className="s-label">Deep link</p>
          <h1 className="s-h">
            Orb lives <em>on home.</em>
          </h1>
          <p className="s-p">This is the portable terminal. Same mock layer—use it if you bookmarked this route.</p>
          <button type="button" className="btn-g" style={{ marginTop: 8 }} onClick={() => setPage("home")}>
            ← Back to live layer
          </button>
          <div className="ask-orb-shell" style={{ marginTop: 20 }}>
            <div className="ask-orb-glow" />
            <AvatarOrb parallaxRef={shellRef} />
          </div>
        </div>

        <div className="chat-wrap glass">
          <div className="chat-hdr">
            <div className="chat-dot" />
            <span className="chat-hdr-t">nick.intel</span>
            <span className="chat-hdr-s">local</span>
          </div>
          <div className="chat-msgs">
            {messages.map((m, i) => (
              <div className={`msg ${m.role}`} key={`${m.role}-${i}`}>
                <div className="bubble">{m.content}</div>
              </div>
            ))}
            {busy && (
              <div className="msg assistant">
                <div className="bubble">
                  <div className="typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="suggs">
            {INTEL_PROMPTS.map((q) => (
              <button key={q} type="button" className="sugg" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>
          <div className="chat-foot">
            <input
              className="chat-in"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask…"
            />
            <button type="button" className="chat-send" onClick={() => send()} disabled={busy || !input.trim()}>
              Run
            </button>
          </div>
        </div>
      </div>

      <div className="wrap section section-last">
        <ContactCTA onNavigate={setPage} />
      </div>
    </div>
  );
}
