import SiteShell from "@/components/SiteShell";
import { buildMetadata } from "@/lib/metadata";

// Root-Layout der englischen Seiten (unter "/en") – eigenes Layout, damit <html lang="en"> stimmt
export const metadata = buildMetadata("en");
export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
