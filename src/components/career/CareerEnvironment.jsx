import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Grid, Sparkles } from "@react-three/drei";

function BUScene() {
  const mesh = useRef(null);
  useFrame((s) => {
    if (mesh.current) {
      mesh.current.rotation.x = s.clock.elapsedTime * 0.31;
      mesh.current.rotation.y = s.clock.elapsedTime * 0.42;
    }
  });
  return (
    <group>
      <pointLight position={[2, 2, 3]} intensity={2.2} color="#c8102e" distance={14} decay={2} />
      <mesh ref={mesh}>
        <torusKnotGeometry args={[0.85, 0.22, 120, 16]} />
        <meshStandardMaterial color="#1a0508" emissive="#5c0a14" emissiveIntensity={0.9} metalness={0.55} roughness={0.35} />
      </mesh>
    </group>
  );
}

function BurstScene() {
  const mesh = useRef(null);
  useFrame((s) => {
    if (mesh.current) {
      mesh.current.rotation.z = s.clock.elapsedTime * 1.8;
      mesh.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 2.2) * 0.08);
    }
  });
  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.5}>
      <group ref={mesh}>
        <Sparkles count={220} scale={5.5} size={2.8} speed={1.4} color="#ffb8d4" />
        <mesh>
          <torusGeometry args={[0.65, 0.18, 32, 96]} />
          <meshStandardMaterial color="#080404" emissive="#3d1520" emissiveIntensity={0.85} metalness={0.5} roughness={0.38} />
        </mesh>
      </group>
    </Float>
  );
}

function GridScene() {
  const g = useRef(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.1;
  });
  return (
    <group ref={g}>
      <Grid infiniteGrid fadeDistance={14} sectionColor="#ffb8d4" cellColor="#0a0a0a" sectionThickness={1} cellThickness={0.6} />
    </group>
  );
}

function BillboardScene() {
  const g = useRef(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.28;
  });
  return (
    <group ref={g}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[i * 0.48 - 0.72, Math.sin(i * 0.7) * 0.12, -0.08 * i]}>
          <planeGeometry args={[0.5, 0.3]} />
          <meshStandardMaterial color="#121212" emissive="#2a1018" emissiveIntensity={0.4} metalness={0.45} roughness={0.42} />
        </mesh>
      ))}
      <Sparkles count={50} scale={4.5} size={1.6} speed={0.35} color="#ffb8d4" />
    </group>
  );
}

function EnterpriseScene() {
  const mesh = useRef(null);
  useFrame((s) => {
    if (mesh.current) {
      mesh.current.rotation.x = s.clock.elapsedTime * 0.18;
      mesh.current.rotation.y = s.clock.elapsedTime * 0.24;
    }
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#080808" wireframe emissive="#ffb8d4" emissiveIntensity={0.2} />
    </mesh>
  );
}

function MarketwiseScene() {
  const root = useRef(null);
  const clips = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => {
        const t = i * 0.381;
        return {
          x: Math.sin(t * 2.1) * Math.cos(t * 1.3) * 1.7,
          y: Math.cos(t * 1.7) * Math.sin(t * 0.9) * 0.95,
          z: Math.sin(t * 3.2) * 0.55,
          s: 0.07 + (i % 7) * 0.014,
          sp: 0.45 + (i % 5) * 0.18,
        };
      }),
    [],
  );

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const g = root.current;
    if (!g) return;
    let mi = 0;
    g.children.forEach((ch) => {
      if (!ch.isMesh) return;
      const c = clips[mi++];
      if (!c) return;
      ch.position.x = ((((c.x + t * c.sp) % 3.4) + 1.7) % 3.4) - 1.7;
      ch.position.y = c.y + Math.sin(t * 2.2 + mi) * 0.06;
      ch.position.z = c.z;
    });
  });

  return (
    <group ref={root}>
      <pointLight position={[0, 0.8, 2]} intensity={1.35} color="#ffb8d4" distance={11} decay={2} />
      {clips.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]} scale={[c.s * 2.4, c.s * 1.25, 0.018]}>
          <planeGeometry />
          <meshStandardMaterial color="#f8f4ef" emissive="#ffb8d4" emissiveIntensity={0.28} metalness={0.15} roughness={0.55} />
        </mesh>
      ))}
      <Sparkles count={110} scale={6.5} size={2.1} speed={0.6} color="#ffb8d4" />
    </group>
  );
}

export default function CareerEnvironment({ theme }) {
  return (
    <group>
      <ambientLight intensity={0.16} />
      {theme === "bu" && <BUScene />}
      {theme === "nxtlvl" && <BurstScene />}
      {theme === "wayfair" && <GridScene />}
      {theme === "minute" && <BillboardScene />}
      {theme === "zeta" && <EnterpriseScene />}
      {theme === "marketwise" && <MarketwiseScene />}
    </group>
  );
}
