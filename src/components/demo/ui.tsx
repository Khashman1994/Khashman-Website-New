import DemoIcon from "@/components/demo/DemoIcon";
import type { DemoFont, DemoIcon as IconName } from "@/lib/demo-sites";

/* Gemeinsame Bausteine aller Beispiel-Layouts. Farben kommen immer aus den
   CSS-Variablen (--d-*), die DemoShell je nach Hell/Dunkel setzt. */

export const DISPLAY_FONT: Record<DemoFont, string> = {
  serif: "var(--font-fraunces), Georgia, serif",
  grotesk: "var(--font-bricolage), ui-sans-serif, system-ui, sans-serif",
  sans: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif",
};

export const display = "font-[family-name:var(--d-display)]";
export const serif = "font-[family-name:var(--font-fraunces)]";
export const muted = "text-[color:var(--d-muted)]";
export const ink = "text-[color:var(--d-ink)]";
export const accentText = "text-[color:var(--d-accent-text)]";
export const line = "border-[color:var(--d-line)]";
export const surface = "bg-[color:var(--d-surface)]";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--d-bg)]";

export const primaryBtn = `inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--d-accent)] px-6 font-semibold text-[color:var(--d-on-accent)] transition-opacity hover:opacity-90 ${focus}`;
export const ghostBtn = `inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--d-line)] px-6 font-semibold text-[color:var(--d-ink)] transition-colors hover:border-[color:var(--d-ink)] ${focus}`;
export const textLink = `inline-flex min-h-11 items-center gap-2 font-semibold ${accentText} underline-offset-4 hover:underline ${focus}`;

/** Platzhalter für ein echtes Foto: ruhige Farbfläche mit Icon und Bildunterschrift */
export function DemoPhoto({
  label,
  tone,
  icon,
  className = "",
}: {
  label: string;
  tone?: string;
  icon?: IconName;
  className?: string;
}) {
  const base = tone ?? "color-mix(in oklab, var(--d-accent) 22%, var(--d-surface))";
  return (
    <div
      role="img"
      aria-label={`Platzhalter für Foto: ${label}`}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 20% 15%, color-mix(in oklab, ${base} 55%, white), ${base} 60%, color-mix(in oklab, ${base} 75%, black))`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
        style={{ backgroundImage: "radial-gradient(#000 0.6px, transparent 0.6px)", backgroundSize: "5px 5px" }}
      />
      {icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <DemoIcon name={icon} className="h-14 w-14 text-black/25" />
        </div>
      )}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Foto: {label}
      </span>
    </div>
  );
}

export function DemoFooter({ name, domain }: { name: string; domain: string }) {
  return (
    <footer className={`border-t ${line}`}>
      <div className={`mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 ${muted}`}>
        <p>
          <span className={`font-semibold ${ink}`}>{name}</span> · {domain}
        </p>
        <p>Impressum · Datenschutz · Fiktiver Betrieb, Design von Khashman Webdesign</p>
      </div>
    </footer>
  );
}
