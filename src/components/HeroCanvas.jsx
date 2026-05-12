import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 200);
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
          opacity: 0.42,
          sizeAttenuation: true,
        }),
      );
    };

    scene.add(mkStars(520, 0xffffff, 0.018, 48));
    scene.add(mkStars(160, 0xc4a8ff, 0.012, 38));
    scene.add(mkStars(90, 0xffbad4, 0.014, 32));

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
      t += 0.00032;
      camera.position.x = Math.sin(t) * 0.42;
      camera.position.y = Math.cos(t * 0.62) * 0.22;
      camera.lookAt(0, 0, 0);
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
