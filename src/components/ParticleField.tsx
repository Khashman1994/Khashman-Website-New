"use client";

import { useEffect, useRef } from "react";

// Dezenter Partikel-Hintergrund (Pseudo-3D) als Canvas, ohne Bibliothek.
// Startet erst, wenn der Bereich fast sichtbar ist, pausiert außerhalb des Bildschirms
// und im Hintergrund-Tab und zeigt bei "Bewegung reduzieren" nur ein Standbild.

type Particle = { x: number; y: number; z: number; r: number; phase: number };

const DESKTOP_COUNT = 90;
const MOBILE_COUNT = 40;
const MAX_DPR = 1.5;
const FOV = 2.4; // Perspektive: je größer, desto flacher
const SPIN = 0.00006; // Drehung pro Millisekunde
const DRIFT = 0.04; // Auf- und Abschweben

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => {
    // Gleichmäßig in einer Kugel verteilt
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const radius = Math.cbrt(Math.random());
    return {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
      r: 0.8 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
    };
  });
}

// defer: Start erst im Leerlauf nach dem Laden (für Bereiche, die sofort im Bild sind, z. B. der Hero)
export default function ParticleField({ className, defer = false }: { className?: string; defer?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let color = "0, 0, 0";
    let frame = 0;
    let raf = 0;
    let visible = false;
    let running = false;
    let started = false;
    let ready = false;
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const readColor = () => {
      // Textfarbe der Seite (--fg) folgt automatisch dem hellen/dunklen Theme
      const match = getComputedStyle(canvas).color.match(/\d+(\.\d+)?/g);
      if (match && match.length >= 3) color = `${match[0]}, ${match[1]}, ${match[2]}`;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 768 ? MOBILE_COUNT : DESKTOP_COUNT;
      if (particles.length !== count) particles = createParticles(count);
      draw(performance.now());
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const angle = time * SPIN;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const scale = Math.min(width, height) * 0.62;

      for (const p of particles) {
        // Drehung um die Y-Achse plus sanftes Schweben
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        const y = p.y + Math.sin(time * 0.0004 + p.phase) * DRIFT;
        const depth = FOV / (FOV + z + 1); // 0 = weit weg, 1 = nah
        const px = width / 2 + x * scale * depth * 1.6;
        const py = height / 2 + y * scale * depth;
        const alpha = 0.1 + depth * 0.32;
        ctx.beginPath();
        ctx.arc(px, py, p.r * depth * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      if (frame++ % 60 === 0) readColor();
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    const update = () => {
      const shouldRun = ready && visible && !document.hidden && !reduceMotion;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const begin = () => {
      if (cancelled) return;
      ready = true;
      readColor();
      resize();
      update();
    };

    const start = () => {
      if (started) return;
      started = true;
      if (!defer) return begin();
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(begin, { timeout: 2500 });
      else timeoutId = setTimeout(begin, 1500);
    };

    // Erst starten, wenn der Bereich fast im Bild ist (kein Aufwand beim ersten Laden)
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        update();
      },
      { rootMargin: "200px" },
    );
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => ready && resize());
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", update);

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none text-fg ${className ?? ""}`} />;
}
