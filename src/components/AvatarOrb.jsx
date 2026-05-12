import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AvatarOrb() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.z = 4.2;

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshStandardMaterial({
        color: 0x1a1030,
        emissive: 0x331844,
        emissiveIntensity: 0.6,
        metalness: 0.35,
        roughness: 0.45,
        wireframe: true,
      }),
    );
    scene.add(core);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 0),
      new THREE.MeshBasicMaterial({ color: 0xffbad4, wireframe: true, transparent: true, opacity: 0.35 }),
    );
    scene.add(inner);

    const pts = new THREE.Points(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 220 }, () => new THREE.Vector3((Math.random() - 0.5) * 3.2, (Math.random() - 0.5) * 3.2, (Math.random() - 0.5) * 3.2)),
      ),
      new THREE.PointsMaterial({ color: 0xa78bfa, size: 0.028, transparent: true, opacity: 0.55 }),
    );
    scene.add(pts);

    const amb = new THREE.AmbientLight(0xffffff, 0.35);
    const dir = new THREE.DirectionalLight(0xffbad4, 0.9);
    dir.position.set(2, 3, 4);
    scene.add(amb, dir);

    let id;
    let t = 0;
    const resize = () => {
      const s = Math.min(wrap.clientWidth, 340);
      renderer.setSize(s, s);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    const loop = () => {
      id = requestAnimationFrame(loop);
      t += 0.016;
      const breathe = 1 + Math.sin(t * 0.9) * 0.04;
      core.rotation.x += 0.004;
      core.rotation.y += 0.0065;
      core.scale.setScalar(breathe);
      inner.rotation.x -= 0.003;
      inner.rotation.y += 0.009;
      pts.rotation.y += 0.0012;
      renderer.render(scene, camera);
    };

    resize();
    loop();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="avatar-orb-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
