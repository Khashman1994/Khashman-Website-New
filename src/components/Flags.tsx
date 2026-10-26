// Flaggen als SVG statt Emoji: Windows zeigt Flaggen-Emojis nur als Buchstaben ("DE", "US") an.

type FlagProps = { className?: string };

export function FlagDE({ className }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 5 3" aria-hidden="true">
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

const US_STRIPES = Array.from({ length: 13 }, (_, i) => i);
// Vereinfachtes Sternenfeld – in Icon-Größe sind 50 Sterne ohnehin nicht erkennbar
const US_STARS = [
  [1, 1], [3, 1], [5, 1], [7, 1],
  [2, 2.2], [4, 2.2], [6, 2.2],
  [1, 3.4], [3, 3.4], [5, 3.4], [7, 3.4],
  [2, 4.6], [4, 4.6], [6, 4.6],
  [1, 5.8], [3, 5.8], [5, 5.8], [7, 5.8],
];

export function FlagUS({ className }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 19 13" aria-hidden="true">
      {US_STRIPES.map((i) => (
        <rect key={i} width="19" height="1" y={i} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      <rect width="7.6" height="7" fill="#3C3B6E" />
      {US_STARS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x * 0.95} cy={y} r="0.32" fill="#FFFFFF" />
      ))}
    </svg>
  );
}
