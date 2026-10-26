"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Three.js nur im Browser laden – hält das HTML schlank und blockiert das erste Rendern nicht
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// Erst laden, wenn die Seite fertig ist und der Browser Luft hat – Text & Buttons haben Vorrang
function whenIdle(callback: () => void): () => void {
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const schedule = () => {
    if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(callback, { timeout: 2500 });
    else timeoutId = setTimeout(callback, 300);
  };

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  return () => {
    window.removeEventListener("load", schedule);
    if (idleId !== undefined) window.cancelIdleCallback(idleId);
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  };
}

export default function HeroCanvas() {
  const container = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [lite, setLite] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const cancelIdle = whenIdle(() => {
      if (!supportsWebGL()) return;
      setLite(window.matchMedia("(max-width: 768px), (pointer: coarse)").matches);
      setEnabled(true);
    });

    const node = container.current;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    if (node) observer.observe(node);

    return () => {
      cancelIdle();
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} className="absolute inset-0" aria-hidden="true">
      {/* Weicher Farbschein als Platzhalter, bis die 3D-Szene bereit ist */}
      <div className="glow-hero absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2" />
      {enabled && (
        <div className={`absolute inset-0 transition-opacity duration-[1500ms] ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroScene active={active} lite={lite} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
