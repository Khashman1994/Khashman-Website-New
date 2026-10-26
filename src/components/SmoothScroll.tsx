"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Weiches, träges Scrollen wie bei Award-Seiten – nur mit Maus/Trackpad.
// Auf Touch-Geräten scrollt das System ohnehin flüssig; Lenis würde dort nur Rechenzeit kosten.
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -88 }, autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return null;
}
