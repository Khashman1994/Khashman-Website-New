/* Isometrisches Hochhaus, das sich beim Laden aufbaut: erst das Grundstück,
   dann der Rohbau Etage für Etage, danach die Glasfassade, das Dach und die Bäume.
   Reines SVG + CSS-Animation: kein Video, kein 3D-Framework, wenige Kilobyte. */

import type { SVGProps } from "react";

const S = 24; // Pixel pro Einheit
const FLOORS = 14;
const H = 0.55; // Etagenhöhe
const T0 = 3.5; // Grundfläche des Turms
const T1 = 6.5;

function iso(x: number, y: number, z: number): [number, number] {
  return [(x - y) * 0.866 * S, (x + y) * 0.5 * S - z * S];
}
function pts(...p: [number, number, number][]) {
  return p.map(([x, y, z]) => iso(x, y, z).map((v) => v.toFixed(1)).join(",")).join(" ");
}
function line(a: [number, number, number], b: [number, number, number], props: SVGProps<SVGLineElement>, key?: string) {
  const [x1, y1] = iso(...a);
  const [x2, y2] = iso(...b);
  return <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} {...props} />;
}

const TREES: [number, number][] = [
  [1, 1.2], [8.8, 1], [1.2, 8.8], [9, 9], [1, 5], [5, 9.2], [9.2, 5], [2.6, 9.4], [9.4, 2.6],
];

const CSS = `
.iso-in{opacity:0;animation:isoIn .55s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d)}
.iso-pop{opacity:0;transform-box:fill-box;transform-origin:50% 100%;animation:isoPop .45s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:var(--d)}
@keyframes isoIn{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}
@keyframes isoPop{from{opacity:0;transform:scale(.2)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.iso-in,.iso-pop{animation:none;opacity:1}}
`;

// Bäume hinter dem Turm müssen vor ihm gezeichnet werden (Tiefe = x + y)
function Trees({ list, start }: { list: [number, number][]; start: number }) {
  return (
    <>
      {list.map(([x, y], i) => {
        const [bx, by] = iso(x, y, 0);
        return (
          <g key={`t-${x}-${y}`} className="iso-pop" style={{ ["--d" as string]: `${start + i * 0.06}s` }}>
            <line x1={bx} y1={by} x2={bx} y2={by - 16} stroke="#6b4f36" strokeWidth="2.5" />
            <circle cx={bx} cy={by - 22} r="9" fill="#5b8a46" />
            <circle cx={bx - 3} cy={by - 25} r="4" fill="#79a85e" />
          </g>
        );
      })}
    </>
  );
}

export default function IsoBuilding({ className = "" }: { className?: string }) {
  const floors = Array.from({ length: FLOORS }, (_, i) => i);
  const skeletonEnd = 0.4 + FLOORS * 0.11;
  const facadeEnd = skeletonEnd + FLOORS * 0.08;
  const top = FLOORS * H;
  const back = TREES.filter(([x, y]) => x + y < 2 * T1 - 1 && (x < T1 && y < T1));
  const front = TREES.filter((t) => !back.includes(t));

  return (
    <svg
      viewBox="-230 -150 460 420"
      role="img"
      aria-label="Animierte Grafik: Ein Hochhaus wird auf einem Grundstück Etage für Etage gebaut"
      className={className}
    >
      <style>{CSS}</style>
      <defs>
        <linearGradient id="iso-glass-l" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#eef3f6" />
          <stop offset="1" stopColor="#d7e1e8" />
        </linearGradient>
        <linearGradient id="iso-glass-r" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#b9c6d0" />
          <stop offset="1" stopColor="#9aa9b5" />
        </linearGradient>
      </defs>

      {/* Schatten */}
      <ellipse cx="0" cy="262" rx="170" ry="10" fill="#000" opacity="0.07" />

      {/* Grundstück */}
      <g className="iso-in" style={{ ["--d" as string]: "0s" }}>
        <polygon points={pts([0, 10, 0], [10, 10, 0], [10, 10, -0.5], [0, 10, -0.5])} fill="#6d7f55" />
        <polygon points={pts([10, 0, 0], [10, 10, 0], [10, 10, -0.5], [10, 0, -0.5])} fill="#56663f" />
        <polygon points={pts([0, 0, 0], [10, 0, 0], [10, 10, 0], [0, 10, 0])} fill="#9db67c" />
        <polygon points={pts([2.2, 2.2, 0], [7.8, 2.2, 0], [7.8, 7.8, 0], [2.2, 7.8, 0])} fill="#e9e6df" />
        <polygon points={pts([4.6, 7.8, 0], [5.4, 7.8, 0], [5.4, 10, 0], [4.6, 10, 0])} fill="#e9e6df" />
      </g>

      <Trees list={back} start={facadeEnd + 0.15} />

      {/* Rohbau: Decken und Stützen, Etage für Etage */}
      {floors.map((i) => {
        const z0 = i * H;
        const z1 = (i + 1) * H;
        const stroke = { stroke: "#7c848b", strokeWidth: 1.4, strokeLinecap: "round" as const };
        return (
          <g key={`sk-${i}`} className="iso-in" style={{ ["--d" as string]: `${0.4 + i * 0.11}s` }}>
            <polygon points={pts([T0, T0, z1], [T1, T0, z1], [T1, T1, z1], [T0, T1, z1])} fill="#c9cdd1" opacity="0.55" />
            {line([T0, T1, z0], [T0, T1, z1], stroke)}
            {line([T1, T1, z0], [T1, T1, z1], stroke)}
            {line([T1, T0, z0], [T1, T0, z1], stroke)}
            {line([5, T1, z0], [5, T1, z1], stroke)}
            {line([T1, 5, z0], [T1, 5, z1], stroke)}
            {line([T0, T1, z1], [T1, T1, z1], stroke)}
            {line([T1, T1, z1], [T1, T0, z1], stroke)}
          </g>
        );
      })}

      {/* Glasfassade */}
      {floors.map((i) => {
        const z0 = i * H;
        const z1 = (i + 1) * H;
        const mullion = { stroke: "#ffffff", strokeWidth: 0.8, opacity: 0.7 };
        return (
          <g key={`fa-${i}`} className="iso-in" style={{ ["--d" as string]: `${skeletonEnd + i * 0.08}s` }}>
            <polygon points={pts([T0, T1, z0], [T1, T1, z0], [T1, T1, z1], [T0, T1, z1])} fill="url(#iso-glass-l)" stroke="#f7f7f5" strokeWidth="1" />
            <polygon points={pts([T1, T0, z0], [T1, T1, z0], [T1, T1, z1], [T1, T0, z1])} fill="url(#iso-glass-r)" stroke="#e8eaec" strokeWidth="1" />
            {[4.1, 4.7, 5.3, 5.9].map((x) => line([x, T1, z0], [x, T1, z1], mullion, `l${x}`))}
            {[4.1, 4.7, 5.3, 5.9].map((y) => line([T1, y, z0], [T1, y, z1], mullion, `r${y}`))}
          </g>
        );
      })}

      {/* Dach */}
      <g className="iso-in" style={{ ["--d" as string]: `${facadeEnd}s` }}>
        <polygon points={pts([T0, T0, top], [T1, T0, top], [T1, T1, top], [T0, T1, top])} fill="#f4f4f2" stroke="#d6d9dc" />
        <polygon points={pts([4.3, 4.3, top], [5.7, 4.3, top], [5.7, 5.7, top], [4.3, 5.7, top])} fill="#dfe3e6" />
      </g>

      <Trees list={front} start={facadeEnd + 0.3} />
    </svg>
  );
}
