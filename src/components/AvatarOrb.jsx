import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AvatarOrb({ parallaxRef }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const target = parallaxRef?.current ?? wrapRef.current;
    if (!target) return;
    const onMove = (e) => {
      const rect = target.getBoundingClientRect();
      mouse.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    target.addEventListener("pointermove", onMove);
    return () => target.removeEventListener("pointermove", onMove);
  }, [parallaxRef]);

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
        color: 0x0c1824,
        emissive: 0x0d3d34,
        emissiveIntensity: 0.55,
        metalness: 0.42,
        roughness: 0.38,
        wireframe: true,
      }),
    );
    scene.add(core);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 0),
      new THREE.MeshBasicMaterial({ color: 0x5eead4, wireframe: true, transparent: true, opacity: 0.28 }),
    );
    scene.add(inner);

    const pts = new THREE.Points(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 200 }, () => new THREE.Vector3((Math.random() - 0.5) * 3.2, (Math.random() - 0.5) * 3.2, (Math.random() - 0.5) * 3.2)),
      ),
      new THREE.PointsMaterial({ color: 0x7ab6ff, size: 0.026, transparent: true, opacity: 0.5 }),
    );
    scene.add(pts);

    const amb = new THREE.AmbientLight(0xffffff, 0.32);
    const dir = new THREE.DirectionalLight(0x5eead4, 0.85);
    dir.position.set(2, 3, 4);
    const fill = new THREE.DirectionalLight(0x7ab6ff, 0.35);
    fill.position.set(-3, -1, 2);
    scene.add(amb, dir, fill);

    let id;
    let t = 0;
    const resize = () => {
      const s = Math.min(wrap.clientWidth, 320);
      renderer.setSize(s, s);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    const loop = () => {
      id = requestAnimationFrame(loop);
      t += 0.016;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;
      const breathe = 1 + Math.sin(t * 0.9) * 0.035;
      core.rotation.x += 0.0035 + mouse.current.y * 0.008;
      core.rotation.y += 0.0055 + mouse.current.x * 0.01;
      core.position.x = mouse.current.x * 0.12;
      core.position.y = mouse.current.y * -0.1;
      core.scale.setScalar(breathe);
      inner.rotation.x -= 0.0028;
      inner.rotation.y += 0.0085;
      inner.position.x = mouse.current.x * 0.06;
      inner.position.y = mouse.current.y * -0.05;
      pts.rotation.y += 0.0011;
      pts.rotation.x = mouse.current.y * 0.04;
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
