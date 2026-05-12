import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AiDockAvatar from "./AiDockAvatar.jsx";
import { AI_ASSISTANT_INTRO, getMockAiReply, INTEL_PROMPTS } from "../data/siteData.js";

export default function AiAssistantDock({ open, onOpenChange }) {
  const [messages, setMessages] = useState([{ role: "assistant", content: AI_ASSISTANT_INTRO }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text) => {
    const msg = (text ?? input).trim();
    if (!msg || busy) return;
    setInput("");
    setBusy(true);
    setMessages((p) => [...p, { role: "user", content: msg }]);
    window.setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: getMockAiReply(msg) }]);
      setBusy(false);
    }, 340);
  };

  return (
    <div className="ai-dock-root">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            className="ai-dock-panel"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ai-dock-hdr">
              <span className="ai-dock-title">Ask</span>
              <button type="button" className="ai-dock-close" onClick={() => onOpenChange(false)} aria-label="Close assistant">
                ×
              </button>
            </div>
            <div className="ai-dock-msgs">
              {messages.map((m, i) => (
                <div key={`${i}-${m.content.slice(0, 12)}`} className={`ai-dock-msg ${m.role}`}>
                  {m.content}
                </div>
              ))}
              {busy ? <div className="ai-dock-msg assistant">…</div> : null}
              <div ref={endRef} />
            </div>
            <div className="ai-dock-suggs">
              {INTEL_PROMPTS.map((q) => (
                <button key={q} type="button" className="ai-dock-chip" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
            <div className="ai-dock-inputrow">
              <input
                className="ai-dock-in"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Message"
                aria-label="Message"
              />
              <button type="button" className="ai-dock-send" onClick={() => send()} disabled={busy || !input.trim()}>
                Send
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AiDockAvatar open={open} onOpenChange={onOpenChange} />
    </div>
  );
}
