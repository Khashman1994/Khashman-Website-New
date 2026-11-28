import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Alte Soro-Adressen (/blog?post=…) auf die neuen Artikelseiten umleiten
  async redirects() {
    return [
      {
        source: "/blog",
        has: [{ type: "query", key: "post", value: "(?<slug>[a-z0-9-]+)" }],
        destination: "/blog/:slug",
        permanent: true,
      },
      // Domain ohne www → www (Google hatte noch Seiten ohne www im Index)
      {
        source: "/:path*",
        has: [{ type: "host", value: "khashman-webdesign.de" }],
        destination: "https://www.khashman-webdesign.de/:path*",
        permanent: true,
      },
      // Alte Adressen der früheren HTML-Version der Website
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/datenschutz.html", destination: "/datenschutz", permanent: true },
      { source: "/impressum.html", destination: "/impressum", permanent: true },
    ];
  },
  // Sicherheits-Header für alle Seiten: Schutz vor Einbettung (Clickjacking),
  // MIME-Sniffing, unnötigen Browser-Rechten und erzwungenem HTTPS
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
        ],
      },
    ];
  },
  experimental: {
    // Zwei Root-Layouts (Deutsch/Englisch) → 404 kommt aus app/global-not-found.tsx
    globalNotFound: true,
    // Das (kleine) Tailwind-CSS direkt ins HTML einbetten: spart zwei blockierende Anfragen vor dem ersten
    // Rendern (PageSpeed schätzt ~520 ms für LCP). Nachteil: Wiederkehrende Besucher laden das CSS jedes Mal mit.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
