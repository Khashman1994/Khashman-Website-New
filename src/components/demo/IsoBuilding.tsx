import type { SVGProps } from "react";

/* Isometrisches Hochhaus, das sich beim Laden aufbaut:
   Grundstück → Baukran → Rohbau Etage für Etage → Glasfassade mit Geschossbändern
   → Dach, Spiegelung, Schatten und Bäume → Kran verschwindet.
   Reines SVG + CSS-Animation: kein Video, kein 3D-Framework, wenige Kilobyte. */

type P3 = [number, number, number];

const S = 22; // Pixel pro Einheit
const FLOORS = 18;
const H = 0.45; // Etagenhöhe
const SLAB = 0.07; // sichtbares Deckenband
const PODIUM = 2; // Sockelgeschosse mit dunklem Glas
const X0 = 3.8;
const X1 = 6.2;
const TOP = FLOORS * H;

function iso([x, y, z]: P3): [number, number] {
  return [(x - y) * 0.866 * S, (x + y) * 0.5 * S - z * S];
}
function pts(...p: P3[]) {
  return p.map((q) => iso(q).map((v) => v.toFixed(1)).join(",")).join(" ");
}
function seg(a: P3, b: P3, props: SVGProps<SVGLineElement>, key?: string) {
  const [x1, y1] = iso(a);
  const [x2, y2] = iso(b);
  return <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} {...props} />;
}
/** Linke Fassade (y = X1) und rechte Fassade (x = X1) zwischen zwei Höhen */
const leftFace = (z0: number, z1: number) => pts([X0, X1, z0], [X1, X1, z0], [X1, X1, z1], [X0, X1, z1]);
const rightFace = (z0: number, z1: number) => pts([X1, X0, z0], [X1, X1, z0], [X1, X1, z1], [X1, X0, z1]);

const TREES: P3[] = [
  [1, 1.3, 0], [8.7, 1, 0], [1.3, 8.7, 0], [8.9, 8.9, 0], [0.9, 4.6, 0], [4.4, 9.1, 0], [9.1, 4.4, 0],
  [2.4, 9.3, 0], [9.3, 2.4, 0], [6.9, 9.2, 0], [9.2, 6.9, 0],
];
const BUSHES: P3[] = [[2.6, 7.6, 0], [3.2, 7.6, 0], [7.6, 2.6, 0], [7.6, 3.2, 0], [6.6, 7.6, 0], [7.6, 6.6, 0]];

const CSS = `
.ib-in{opacity:0;animation:ibIn .5s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d)}
.ib-fade{opacity:0;animation:ibFade .8s ease forwards;animation-delay:var(--d)}
.ib-pop{opacity:0;transform-box:fill-box;transform-origin:50% 100%;animation:ibPop .45s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:var(--d)}
.ib-crane{opacity:0;animation:ibIn .6s ease forwards var(--d),ibOut .7s ease forwards var(--d2)}
@keyframes ibIn{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
@keyframes ibFade{from{opacity:0}to{opacity:1}}
@keyframes ibOut{from{opacity:1}to{opacity:0}}
@keyframes ibPop{from{opacity:0;transform:scale(.2)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.ib-in,.ib-fade,.ib-pop{animation:none;opacity:1}.ib-crane{display:none}}
`;

const d = (s: number) => ({ ["--d" as string]: `${s.toFixed(2)}s` });

function Tree({ p, delay, r = 9 }: { p: P3; delay: number; r?: number }) {
  const [bx, by] = iso(p);
  return (
    <g className="ib-pop" style={d(delay)}>
      <ellipse cx={bx + 7} cy={by + 2} rx={r * 1.1} ry={r * 0.45} fill="#000" opacity="0.13" />
      <line x1={bx} y1={by} x2={bx} y2={by - r * 1.6} stroke="#6b4f36" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx={bx} cy={by - r * 2.3} r={r} fill="url(#ib-tree)" />
    </g>
  );
}

export default function IsoBuilding({ className = "" }: { className?: string }) {
  const floors = Array.from({ length: FLOORS }, (_, i) => i);
  const frameStart = 0.7;
  const frameEnd = frameStart + FLOORS * 0.1;
  const glassEnd = frameEnd + FLOORS * 0.07;
  const finish = glassEnd + 0.1;

  // Bäume hinter dem Turm müssen vor ihm gezeichnet werden
  const behind = (p: P3) => p[0] < X1 && p[1] < X1;
  const backTrees = TREES.filter(behind);
  const frontTrees = TREES.filter((p) => !behind(p));

  // Kran rechts hinter dem Turm
  const cx = 7.4;
  const cy = 3.0;
  const mastTop = TOP + 1.6;

  return (
    <svg viewBox="-235 -175 470 440" role="img" aria-label="Animierte Grafik: Ein Hochhaus wird auf einem Grundstück Etage für Etage gebaut" className={className}>
      <style>{CSS}</style>
      <defs>
        <linearGradient id="ib-glass-l" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f3f7fa" />
          <stop offset="0.55" stopColor="#d9e3ea" />
          <stop offset="1" stopColor="#c3d0da" />
        </linearGradient>
        <linearGradient id="ib-glass-r" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#a9b8c4" />
          <stop offset="1" stopColor="#8394a2" />
        </linearGradient>
        <linearGradient id="ib-lobby" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5d6b76" />
          <stop offset="1" stopColor="#3f4a53" />
        </linearGradient>
        <linearGradient id="ib-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ib-lawn" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#a9c287" />
          <stop offset="1" stopColor="#8eaa6b" />
        </linearGradient>
        <radialGradient id="ib-tree" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#8dbb6c" />
          <stop offset="0.6" stopColor="#5f9148" />
          <stop offset="1" stopColor="#3f6b33" />
        </radialGradient>
        <filter id="ib-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <clipPath id="ib-clip-l">
          <polygon points={leftFace(PODIUM * H, TOP)} />
        </clipPath>
        <clipPath id="ib-clip-r">
          <polygon points={rightFace(PODIUM * H, TOP)} />
        </clipPath>
      </defs>

      {/* Bodenschatten des Grundstücks */}
      <ellipse cx="0" cy="248" rx="185" ry="12" fill="#000" opacity="0.08" filter="url(#ib-blur)" />

      {/* Grundstück */}
      <g className="ib-in" style={d(0)}>
        <polygon points={pts([0, 10, 0], [10, 10, 0], [10, 10, -0.6], [0, 10, -0.6])} fill="#7a8a62" />
        <polygon points={pts([10, 0, 0], [10, 10, 0], [10, 10, -0.6], [10, 0, -0.6])} fill="#5f6e4a" />
        <polygon points={pts([0, 10, -0.15], [10, 10, -0.15], [10, 10, -0.6], [0, 10, -0.6])} fill="#8a7a64" opacity="0.6" />
        <polygon points={pts([0, 0, 0], [10, 0, 0], [10, 10, 0], [0, 10, 0])} fill="url(#ib-lawn)" />
        {/* Gepflasterter Platz mit Fugen */}
        <polygon points={pts([2.2, 2.2, 0], [7.8, 2.2, 0], [7.8, 7.8, 0], [2.2, 7.8, 0])} fill="#ece9e2" />
        {[2.9, 3.6, 4.3, 5, 5.7, 6.4, 7.1].map((v) => seg([v, 2.2, 0], [v, 7.8, 0], { stroke: "#dcd8cf", strokeWidth: 0.6 }, `px${v}`))}
        {[2.9, 3.6, 4.3, 5, 5.7, 6.4, 7.1].map((v) => seg([2.2, v, 0], [7.8, v, 0], { stroke: "#dcd8cf", strokeWidth: 0.6 }, `py${v}`))}
        <polygon points={pts([4.6, 7.8, 0], [5.4, 7.8, 0], [5.4, 10, 0], [4.6, 10, 0])} fill="#ece9e2" />
      </g>

      {/* Schatten des Turms (Licht von links oben) */}
      <g className="ib-fade" style={d(glassEnd - 0.4)}>
        <polygon
          points={pts([X1, X0, 0], [X1 + 3.4, X0 + 0.9, 0], [X1 + 3.4, X1 + 0.9, 0], [X1, X1, 0])}
          fill="#1d2a33"
          opacity="0.14"
          filter="url(#ib-blur)"
        />
      </g>

      {backTrees.map((p, i) => <Tree key={`bt${i}`} p={p} delay={finish + 0.1 + i * 0.05} />)}

      {/* Baukran – erscheint zu Baubeginn, verschwindet nach Fertigstellung */}
      <g className="ib-crane" style={{ ...d(0.25), ["--d2" as string]: `${finish + 0.4}s` }}>
        {seg([cx, cy, 0], [cx, cy, mastTop], { stroke: "#d9a521", strokeWidth: 3 })}
        {seg([cx + 0.15, cy, 0], [cx + 0.15, cy, mastTop], { stroke: "#b7861a", strokeWidth: 1.5 })}
        {seg([cx + 1.4, cy, mastTop], [cx - 5.2, cy, mastTop], { stroke: "#d9a521", strokeWidth: 2.4 })}
        {seg([cx, cy, mastTop + 0.9], [cx - 5.2, cy, mastTop], { stroke: "#b7861a", strokeWidth: 0.8 })}
        {seg([cx, cy, mastTop + 0.9], [cx + 1.4, cy, mastTop], { stroke: "#b7861a", strokeWidth: 0.8 })}
        <polygon points={pts([cx + 0.9, cy - 0.3, mastTop], [cx + 1.4, cy - 0.3, mastTop], [cx + 1.4, cy - 0.3, mastTop - 0.6], [cx + 0.9, cy - 0.3, mastTop - 0.6])} fill="#6b7178" />
        {seg([5, cy, mastTop], [5, cy, TOP + 0.5], { stroke: "#454b51", strokeWidth: 0.8 })}
        <polygon points={pts([4.8, cy, TOP + 0.5], [5.2, cy, TOP + 0.5], [5.2, cy, TOP + 0.3], [4.8, cy, TOP + 0.3])} fill="#454b51" />
      </g>

      {/* Rohbau: Betondecken und Stützen, Etage für Etage */}
      {floors.map((i) => {
        const z0 = i * H;
        const z1 = (i + 1) * H;
        const col = { stroke: "#8a9096", strokeWidth: 1.6, strokeLinecap: "round" as const };
        return (
          <g key={`fr${i}`} className="ib-in" style={d(frameStart + i * 0.1)}>
            <polygon points={pts([X0, X0, z1], [X1, X0, z1], [X1, X1, z1], [X0, X1, z1])} fill="#cfd2d4" />
            <polygon points={pts([X0, X1, z1 - SLAB], [X1, X1, z1 - SLAB], [X1, X1, z1], [X0, X1, z1])} fill="#b9bdc0" />
            <polygon points={pts([X1, X0, z1 - SLAB], [X1, X1, z1 - SLAB], [X1, X1, z1], [X1, X0, z1])} fill="#a3a8ac" />
            {seg([X0, X1, z0], [X0, X1, z1 - SLAB], col)}
            {seg([5, X1, z0], [5, X1, z1 - SLAB], col)}
            {seg([X1, X1, z0], [X1, X1, z1 - SLAB], col)}
            {seg([X1, 5, z0], [X1, 5, z1 - SLAB], col)}
            {seg([X1, X0, z0], [X1, X0, z1 - SLAB], col)}
          </g>
        );
      })}

      {/* Fassade: Sockel mit dunklem Glas, darüber Glasbänder mit weißen Geschossdecken */}
      {floors.map((i) => {
        const z0 = i * H;
        const z1 = (i + 1) * H;
        const lobby = i < PODIUM;
        const mull = { stroke: lobby ? "#2f383f" : "#ffffff", strokeWidth: 0.7, opacity: lobby ? 0.9 : 0.55 };
        const xs = [4.28, 4.76, 5.24, 5.72];
        return (
          <g key={`gl${i}`} className="ib-in" style={d(frameEnd + i * 0.07)}>
            <polygon points={leftFace(z0, z1 - SLAB)} fill={lobby ? "url(#ib-lobby)" : "url(#ib-glass-l)"} />
            <polygon points={rightFace(z0, z1 - SLAB)} fill={lobby ? "#3a444c" : "url(#ib-glass-r)"} />
            <polygon points={leftFace(z1 - SLAB, z1)} fill="#fbfbfa" />
            <polygon points={rightFace(z1 - SLAB, z1)} fill="#e4e6e8" />
            {xs.map((x) => seg([x, X1, z0], [x, X1, z1 - SLAB], mull, `l${x}`))}
            {xs.map((y) => seg([X1, y, z0], [X1, y, z1 - SLAB], mull, `r${y}`))}
          </g>
        );
      })}

      {/* Eingang mit Vordach */}
      <g className="ib-in" style={d(glassEnd)}>
        <polygon points={pts([4.6, X1, 0], [5.4, X1, 0], [5.4, X1, 0.62], [4.6, X1, 0.62])} fill="#e9eef2" opacity="0.85" />
        <polygon points={pts([4.4, X1, 0.7], [5.6, X1, 0.7], [5.6, X1 + 0.7, 0.7], [4.4, X1 + 0.7, 0.7])} fill="#f7f7f5" stroke="#cfd3d6" strokeWidth="0.6" />
      </g>

      {/* Dach mit Technikaufbau */}
      <g className="ib-in" style={d(glassEnd + 0.05)}>
        <polygon points={pts([X0, X0, TOP], [X1, X0, TOP], [X1, X1, TOP], [X0, X1, TOP])} fill="#f4f4f2" stroke="#d4d8db" strokeWidth="0.8" />
        <polygon points={pts([4.5, X1 - 0.6, TOP], [5.6, X1 - 0.6, TOP], [5.6, X1 - 0.6, TOP + 0.35], [4.5, X1 - 0.6, TOP + 0.35])} fill="#dfe3e6" />
        <polygon points={pts([5.6, 4.4, TOP], [5.6, X1 - 0.6, TOP], [5.6, X1 - 0.6, TOP + 0.35], [5.6, 4.4, TOP + 0.35])} fill="#c8ced3" />
        <polygon points={pts([4.5, 4.4, TOP + 0.35], [5.6, 4.4, TOP + 0.35], [5.6, X1 - 0.6, TOP + 0.35], [4.5, X1 - 0.6, TOP + 0.35])} fill="#eceff1" />
      </g>

      {/* Spiegelung, die einmal über die Glasfassade wandert */}
      <g className="ib-fade" style={d(glassEnd + 0.2)}>
        <g clipPath="url(#ib-clip-l)">
          <polygon points={pts([X0, X1, 1], [X0 + 0.9, X1, 1], [X0 + 2.2, X1, TOP], [X0 + 1.3, X1, TOP])} fill="url(#ib-shine)" opacity="0.7" />
        </g>
        <g clipPath="url(#ib-clip-r)">
          <polygon points={pts([X1, X0 + 0.4, 1], [X1, X0 + 0.9, 1], [X1, X0 + 1.9, TOP], [X1, X0 + 1.4, TOP])} fill="url(#ib-shine)" opacity="0.35" />
        </g>
      </g>

      {/* Büsche am Platzrand und Bäume */}
      {BUSHES.map((p, i) => {
        const [bx, by] = iso(p);
        return (
          <g key={`bu${i}`} className="ib-pop" style={d(finish + i * 0.04)}>
            <ellipse cx={bx} cy={by - 3} rx="7" ry="5" fill="url(#ib-tree)" />
          </g>
        );
      })}
      {frontTrees.map((p, i) => <Tree key={`ft${i}`} p={p} delay={finish + 0.25 + i * 0.05} />)}
    </svg>
  );
}
