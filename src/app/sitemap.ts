import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Impressum & Datenschutz sind bewusst "noindex" und fehlen deshalb hier
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
