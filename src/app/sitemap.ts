import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { HOME_PATH, LOCALES } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Beide Sprachfassungen mit gegenseitigem hreflang-Verweis.
// Impressum & Datenschutz sind bewusst "noindex" und fehlen deshalb hier. Der Blog ist enthalten.
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, absolute(HOME_PATH[locale])]));

  const pages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: absolute(HOME_PATH[locale]),
    lastModified: new Date("2026-10-26"),
    changeFrequency: "monthly" as const,
    priority: locale === "de" ? 1 : 0.8,
    alternates: { languages },
  }));

  // Leistungsseiten (nur Deutsch)
  pages.push({
    url: absolute("/seo-aachen"),
    lastModified: new Date("2026-11-05"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  });

  // Blog (nur Deutsch, Inhalte kommen von Soro)
  pages.push({
    url: absolute("/blog"),
    lastModified: new Date("2026-10-27"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  });

  // Jeder Blog-Artikel mit eigener Adresse
  for (const post of getAllPosts()) {
    pages.push({
      url: absolute(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    });
  }

  return pages;
}
