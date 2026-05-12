import { useEffect, useRef, useState } from "react";
import AvatarOrb from "./AvatarOrb.jsx";
import { getMockAiReply, INTEL_PROMPTS } from "../data/siteData.js";

export default function HeroIntelPanel() {
  const shellRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Ask about campaigns, AI systems, crypto launches, paid, creators, OOH. Demo replies only—no API keys, no theater.",
    },
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
    }, 380);
  };

  return (
    <div className="hero-intel glass" ref={shellRef}>
      <div className="hero-orb-stage">
        <AvatarOrb parallaxRef={shellRef} />
      </div>

      <div className="intel-terminal glass">
        <div className="intel-terminal-hd">
          <span className="intel-dot" />
          <span className="intel-title">Live layer</span>
          <span className="intel-badge">local · demo</span>
        </div>
        <div className="intel-msgs">
          {messages.map((m, i) => (
            <div className={`intel-row ${m.role === "user" ? "user" : ""}`} key={`m-${i}`}>
              <div className="intel-label">{m.role === "user" ? "you" : "nick.intel"}</div>
              <div>{m.content}</div>
            </div>
          ))}
          {busy ? (
            <div className="intel-row">
              <div className="intel-label">nick.intel</div>
              <div>…</div>
            </div>
          ) : null}
          <div ref={endRef} />
        </div>
        <div className="intel-prompts">
          {INTEL_PROMPTS.map((q) => (
            <button key={q} type="button" className="intel-chip" onClick={() => send(q)}>
              {q}
            </button>
          ))}
        </div>
        <div className="intel-foot">
          <input
            className="intel-in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a question…"
          />
          <button type="button" className="intel-send" onClick={() => send()} disabled={busy || !input.trim()}>
            Run
          </button>
        </div>
      </div>
    </div>
  );
}
