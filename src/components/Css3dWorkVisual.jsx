export default function Css3dWorkVisual({ type }) {
  return (
    <div className={`css3d-scene css3d-${type}`}>
      {type === "twitter" && (
        <div className="css3d-tower">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="css3d-tower-ring"
              style={{ top: `${i * 16}px`, transform: `translateX(-50%) translateZ(${-i * 8}px) rotateX(12deg)` }}
            >
              <span>#</span>
              <span>{4 - i}</span>
            </div>
          ))}
        </div>
      )}
      {type === "crypto" && (
        <div className="css3d-coin">
          <div className="css3d-coin-face css3d-coin-a">$2B</div>
          <div className="css3d-coin-edge" />
          <div className="css3d-coin-face css3d-coin-b">60 days</div>
        </div>
      )}
      {type === "paid" && (
        <div className="css3d-dash">
          {[56, 78, 44, 92, 68].map((h, i) => (
            <div key={i} className="css3d-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      )}
      {type === "ooh" && (
        <div className="css3d-board">
          <div className="css3d-board-screen">OOH</div>
          <div className="css3d-board-pole" />
        </div>
      )}
      {type === "ai" && (
        <div className="css3d-nodes">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="css3d-node" style={{ ["--a"]: `${i * 60}deg` }} />
          ))}
          <div className="css3d-node-core" />
        </div>
      )}
      {type === "dist" && (
        <div className="css3d-dist">
          <div className="css3d-dist-orbit css3d-dist-a" />
          <div className="css3d-dist-orbit css3d-dist-b" />
          <div className="css3d-dist-core">∞</div>
        </div>
      )}
    </div>
  );
}
