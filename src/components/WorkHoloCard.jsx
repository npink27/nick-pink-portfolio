import { useEffect, useRef } from "react";
import Css3dWorkVisual from "./Css3dWorkVisual.jsx";

export default function WorkHoloCard({ item, index, onOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-y * 11).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 13).toFixed(2)}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      className="work-card holo-card"
      style={{
        transform: "perspective(1100px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        animationDelay: `${index * 0.05}s`,
      }}
      onClick={() => onOpen(item)}
    >
      <div className="work-card-visual">
        <Css3dWorkVisual type={item.visual} />
      </div>
      <div className="work-card-body">
        <div className="work-card-k">{item.headline}</div>
        <div className="work-card-m">{item.metrics}</div>
        <p className="work-card-a">{item.angle}</p>
      </div>
      <span className="work-card-cta">Inspect →</span>
    </button>
  );
}
