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
      mouse.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 1.4;
      mouse.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 1.0;
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
    const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 200);
    camera.position.z = 9;

    const mkStars = (n, col, sz, sp) => {
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i * 3] = (Math.random() - 0.5) * sp;
        p[i * 3 + 1] = (Math.random() - 0.5) * sp;
        p[i * 3 + 2] = (Math.random() - 0.5) * sp * 0.55;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      return new THREE.Points(
        g,
        new THREE.PointsMaterial({
          color: col,
          size: sz,
          transparent: true,
          opacity: 0.38,
          sizeAttenuation: true,
        }),
      );
    };

    scene.add(mkStars(560, 0xc8d4e8, 0.016, 52));
    scene.add(mkStars(220, 0x5eead4, 0.012, 40));
    scene.add(mkStars(55, 0xe8a4bf, 0.01, 28));

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
      t += 0.00028;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.06;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.06;
      camera.position.x = Math.sin(t) * 0.38 + mouse.current.x * 0.55;
      camera.position.y = Math.cos(t * 0.62) * 0.2 + mouse.current.y * 0.45;
      camera.lookAt(mouse.current.x * 0.3, mouse.current.y * 0.2, 0);
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
