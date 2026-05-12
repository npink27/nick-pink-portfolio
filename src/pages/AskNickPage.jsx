import { useEffect, useRef, useState } from "react";
import AvatarOrb from "../components/AvatarOrb";
import ContactCTA from "../components/ContactCTA";
import { getMockAiReply } from "../data/siteData";

const SUGGESTIONS = [
  "What’s Nick’s biggest win?",
  "Can Nick trend my project?",
  "What does OOH cost?",
  "What has Nick done at MarketWise?",
  "What AI systems has Nick built?",
];

export default function AskNickPage({ setPage }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Ask Nick’s AI — demo mode. Answers are pulled from Nick’s portfolio data only (no live model calls)." },
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
      const reply = getMockAiReply(msg);
      setMessages((p) => [...p, { role: "assistant", content: reply }]);
      setBusy(false);
    }, 420);
  };

  return (
    <div className="page ask-page">
      <div className="wrap section ask-layout">
        <div className="ask-visual-col">
          <span className="s-label">Ask Nick’s AI</span>
          <h1 className="s-h">
            Local <em>intel.</em>
          </h1>
          <p className="s-p">3D orb avatar — subtle motion, particles, no external APIs.</p>
          <div className="ask-orb-shell">
            <div className="ask-orb-glow" />
            <AvatarOrb />
          </div>
        </div>

        <div className="chat-wrap">
          <div className="chat-hdr">
            <div className="chat-dot" />
            <span className="chat-hdr-t">Ask Nick’s AI</span>
            <span className="chat-hdr-s">DEMO</span>
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
            {SUGGESTIONS.map((q) => (
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
              placeholder="Ask anything (demo replies)…"
            />
            <button type="button" className="chat-send" onClick={() => send()} disabled={busy || !input.trim()}>
              {busy ? "···" : "Send →"}
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
