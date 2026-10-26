import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import de from "@/lib/dictionaries/de";

export const alt = de.meta.ogImageAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("de");
}
