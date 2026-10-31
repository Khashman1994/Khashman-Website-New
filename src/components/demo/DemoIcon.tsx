import type { DemoIcon as IconName } from "@/lib/demo-sites";

// Strich-Icons im 24er-Raster für die Beispiel-Websites
const PATHS: Record<IconName, string> = {
  brush: "M18 3l3 3-9.5 9.5-3-3L18 3zM8.5 12.5l3 3c0 2.5-2 4.5-4.5 4.5H3c1-1 1.5-2.5 1.5-4 0-1.9 1.6-3.5 4-3.5z",
  car: "M5 17h14M3 13l2-6a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 6v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4zM3 13h18M7 15h.01M17 15h.01",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z",
  stethoscope: "M6 3v6a5 5 0 0 0 10 0V3M6 3H4M16 3h2M11 14v2a5 5 0 0 0 10 0v-2M21 12a2 2 0 1 0 0 .01",
  activity: "M3 12h4l3-8 4 16 3-8h4",
  file: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zM14 3v6h6M8 13h8M8 17h5",
  scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5 5-2z",
  utensils: "M5 3v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M7 3v18M17 21V3c-2.2 0-4 2.7-4 6v5h4",
  bed: "M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-8v6M7 12h.01",
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.1 7.9L20 20M8.1 16.1L20 4",
  dumbbell: "M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12",
  bag: "M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 0 1 6 0v2",
  home: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6",
};

export default function DemoIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
