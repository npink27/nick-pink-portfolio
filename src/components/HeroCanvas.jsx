import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      mouse.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 1.6;
      mouse.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 1.1;
    };
    wrap.addEventListener("pointermove", onMove);
    return () => wrap.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.042);

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 200);
    camera.position.z = 10;

    const mkDust = (n, col, sz, spread) => {
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i * 3] = (Math.random() - 0.5) * spread;
        p[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.85;
        p[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.45;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      return new THREE.Points(
        g,
        new THREE.PointsMaterial({
          color: col,
          size: sz,
          transparent: true,
          opacity: 0.5,
          sizeAttenuation: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
    };

    scene.add(mkDust(420, 0xe8e0d8, 0.018, 48));
    scene.add(mkDust(180, 0xffb8d4, 0.014, 36));
    scene.add(mkDust(90, 0xf5f0eb, 0.01, 22));

    let id;
    let t = 0;
    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const loop = () => {
      id = requestAnimationFrame(loop);
      t += 0.00022;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.055;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.055;
      camera.position.x = Math.sin(t * 0.8) * 0.42 + mouse.current.x * 0.5;
      camera.position.y = Math.cos(t * 0.55) * 0.22 + mouse.current.y * 0.42;
      camera.lookAt(mouse.current.x * 0.25, mouse.current.y * 0.18, 0);
      renderer.render(scene, camera);
    };

    resize();
    loop();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-canvas-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} className="hero-canvas-el" />
    </div>
  );
}
