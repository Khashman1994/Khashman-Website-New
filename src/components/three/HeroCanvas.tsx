"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Three.js nur im Browser laden – hält das HTML schlank und blockiert das erste Rendern nicht
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

// Live-3D nur auf Desktops mit Maus und genug Rechenleistung. Handys bekommen das Standbild:
// ~1 MB three.js plus Shader-Kompilierung würden dort den Prozessor sekundenlang blockieren.
function canRunLiveScene(): boolean {
  if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return false;
  if ((navigator.hardwareConcurrency ?? 4) < 4) return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

const POSTER_CLASS =
  "object-cover transition-opacity duration-[1500ms] [mask-image:radial-gradient(closest-side,black_55%,transparent)]";

const INTERACTION_EVENTS = ["pointermove", "pointerdown", "wheel", "keydown", "scroll"] as const;

// Erst bei der ersten echten Interaktion laden: Das Standbild trägt den ersten Eindruck,
// die Live-Szene übernimmt, sobald jemand die Maus bewegt oder scrollt.
function onFirstInteraction(callback: () => void): () => void {
  const handler = () => {
    cleanup();
    callback();
  };
  const cleanup = () => INTERACTION_EVENTS.forEach((type) => window.removeEventListener(type, handler));
  INTERACTION_EVENTS.forEach((type) => window.addEventListener(type, handler, { once: true, passive: true }));
  return cleanup;
}

export default function HeroCanvas() {
  const container = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!canRunLiveScene()) return;
    const cancel = onFirstInteraction(() => setEnabled(true));

    const node = container.current;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    if (node) observer.observe(node);

    return () => {
      cancel();
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} className="absolute inset-0" aria-hidden="true">
      <div className="glow-hero absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2" />

      {/* Vorgerendertes Standbild der Szene – Ränder weich ausgeblendet, damit kein Kasten sichtbar ist.
          Je Theme ein eigenes Bild, weil der Hintergrund mitgerendert ist. */}
      <Image
        src="/hero-poster.jpg"
        alt=""
        fill
        // LCP-Element auf dem Handy: sofort und mit hoher Priorität laden
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 1024px) 70vw, 100vw"
        className={`${POSTER_CLASS} light:hidden ${ready ? "opacity-0" : "opacity-100"}`}
      />
      {/* lazy + display:none → wird nur geladen, wenn der helle Modus aktiv ist */}
      <Image
        src="/hero-poster-light.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 70vw, 100vw"
        className={`${POSTER_CLASS} hidden light:block ${ready ? "opacity-0" : "opacity-100"}`}
      />

      {enabled && (
        <div className={`absolute inset-0 transition-opacity duration-[1500ms] ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroScene active={active} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
