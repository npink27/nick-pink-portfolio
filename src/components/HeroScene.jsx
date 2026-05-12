import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function ParallaxRig({ children }) {
  const group = useRef(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const on = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 1.4;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.9;
    };
    window.addEventListener("pointermove", on, { passive: true });
    return () => window.removeEventListener("pointermove", on);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    const tx = target.current.x * -0.32;
    const ty = target.current.y * 0.22;
    group.current.position.x += (tx - group.current.position.x) * 0.05;
    group.current.position.y += (ty - group.current.position.y) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

function DistortField() {
  return (
    <Float speed={0.55} rotationIntensity={0.18} floatIntensity={0.32}>
      <mesh scale={2.45}>
        <icosahedronGeometry args={[1, 48]} />
        <MeshDistortMaterial
          color="#050505"
          emissive="#2a1018"
          emissiveIntensity={0.55}
          roughness={0.42}
          metalness={0.55}
          speed={0.9}
          distort={0.22}
          radius={0.92}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <ParallaxRig>
      <ambientLight intensity={0.18} />
      <directionalLight position={[4, 2.5, 5]} intensity={0.85} color="#ffb8d4" />
      <directionalLight position={[-4, -1.5, 3]} intensity={0.35} color="#f5f0eb" />
      <pointLight position={[0, 1.5, 2]} intensity={0.4} color="#ffb8d4" distance={12} decay={2} />
      <DistortField />
      <Sparkles count={70} scale={14} size={1.6} speed={0.12} color="#ffb8d4" opacity={0.55} />
      <Sparkles count={45} scale={11} size={1.1} speed={0.08} color="#f5f0eb" opacity={0.35} />
    </ParallaxRig>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-r3f">
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5.4], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
