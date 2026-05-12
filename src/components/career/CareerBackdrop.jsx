import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CareerEnvironment from "./CareerEnvironment.jsx";

export default function CareerBackdrop({ theme }) {
  return (
    <div className="career-backdrop-canvas" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.2], fov: 46 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <CareerEnvironment theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  );
}
