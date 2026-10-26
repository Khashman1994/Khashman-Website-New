"use client";

import { useEffect } from "react";

// Weiches, träges Scrollen wie bei Award-Seiten – nur mit Maus/Trackpad.
// Auf Touch-Geräten scrollt das System ohnehin flüssig – dort wird Lenis gar nicht erst geladen.
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroy: (() => void) | undefined;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.15, anchors: { offset: -88 }, autoRaf: true });
      destroy = () => lenis.destroy();
    });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return null;
}
