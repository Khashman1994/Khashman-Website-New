import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import en from "@/lib/dictionaries/en";

export const alt = en.meta.ogImageAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("en");
}
