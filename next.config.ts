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
    ];
  },
  experimental: {
    // Zwei Root-Layouts (Deutsch/Englisch) → 404 kommt aus app/global-not-found.tsx
    globalNotFound: true,
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
