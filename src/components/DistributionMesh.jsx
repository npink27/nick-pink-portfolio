export default function DistributionMesh() {
  return (
    <svg className="dist-mesh" viewBox="0 0 800 220" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <path d="M40,160 Q200,40 400,120 T760,80" />
      <path d="M60,180 Q220,100 420,60 T780,140" />
      <path d="M0,100 Q300,200 500,30 T800,160" />
      <circle cx="400" cy="110" r="4" fill="rgba(94,234,212,0.5)" />
      <circle cx="220" cy="130" r="3" fill="rgba(122,182,255,0.45)" />
      <circle cx="580" cy="90" r="3" fill="rgba(232,164,191,0.35)" />
    </svg>
  );
}
