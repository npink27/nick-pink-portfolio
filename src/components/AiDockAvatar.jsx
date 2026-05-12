import { Component, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

const MODEL_PATH = "/models/nick-ai-avatar.glb";

function DockLights() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.09} />
      <directionalLight position={[2.8, 1.4, 2.2]} intensity={1.05} color="#ffb8d4" />
      <directionalLight position={[-2.2, -0.6, 1.2]} intensity={0.18} color="#6a7080" />
      <pointLight position={[-1.4, 0.9, 1.6]} intensity={0.35} color="#ffb8d4" distance={8} decay={2} />
    </>
  );
}

function OrbFallback() {
  const root = useRef(null);
  useFrame((s) => {
    if (!root.current) return;
    const t = s.clock.elapsedTime;
    root.current.rotation.x = t * 0.18;
    root.current.rotation.y = t * 0.32;
    root.current.position.y = Math.sin(t * 1.05) * 0.075;
  });
  return (
    <group ref={root}>
      <mesh>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshStandardMaterial
          color="#080608"
          emissive="#3a1526"
          emissiveIntensity={0.72}
          metalness={0.52}
          roughness={0.34}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.52, 1]} />
        <meshBasicMaterial color="#ffb8d4" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function LoadingPlaceholder() {
  return (
    <mesh>
      <sphereGeometry args={[0.35, 24, 24]} />
      <meshStandardMaterial color="#0a0a0a" emissive="#1a1014" emissiveIntensity={0.4} roughness={0.6} metalness={0.35} />
    </mesh>
  );
}

function GltfAvatar() {
  const { scene } = useGLTF(MODEL_PATH);
  const copy = useMemo(() => clone(scene), [scene]);
  const root = useRef(null);

  useLayoutEffect(() => {
    copy.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    const box = new THREE.Box3().setFromObject(copy);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    copy.position.sub(center);
    const max = Math.max(size.x, size.y, size.z, 0.001);
    const target = 1.85;
    copy.scale.setScalar(target / max);
  }, [copy]);

  useFrame((s) => {
    if (!root.current) return;
    const t = s.clock.elapsedTime;
    root.current.rotation.y = t * 0.28;
    root.current.position.y = Math.sin(t * 0.95) * 0.065;
  });

  return (
    <group ref={root}>
      <primitive object={copy} />
    </group>
  );
}

class AvatarErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <OrbFallback />;
    }
    return this.props.children;
  }
}

/** HEAD check avoids infinite Suspense when the GLB is missing from /public. */
function ModelLoader() {
  const [missing, setMissing] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(MODEL_PATH, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setMissing(!res.ok);
      })
      .catch(() => {
        if (!cancelled) setMissing(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (missing === null) {
    return <LoadingPlaceholder />;
  }
  if (missing) {
    return <OrbFallback />;
  }

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <GltfAvatar />
    </Suspense>
  );
}

function DockScene() {
  return (
    <>
      <DockLights />
      <AvatarErrorBoundary>
        <ModelLoader />
      </AvatarErrorBoundary>
    </>
  );
}

/**
 * Floating 3D assistant: GLB at /models/nick-ai-avatar.glb, or pink-lit orb if missing / corrupt.
 */
export default function AiDockAvatar({ open, onOpenChange }) {
  return (
    <button
      type="button"
      className={`ai-dock-avatar-wrap ${open ? "is-open" : ""}`}
      onClick={() => onOpenChange(!open)}
      aria-expanded={open}
      aria-label={open ? "Close assistant" : "Open assistant"}
    >
      <Canvas
        className="ai-dock-avatar-canvas"
        dpr={[1, 1.75]}
        gl={{ alpha: false, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0.05, 2.45], fov: 38 }}
        frameloop="always"
      >
        <DockScene />
      </Canvas>
    </button>
  );
}
