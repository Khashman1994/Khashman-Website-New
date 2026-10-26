import SiteShell from "@/components/SiteShell";
import { buildMetadata } from "@/lib/metadata";

// Root-Layout der deutschen Seiten (Hauptsprache, unter "/")
export const metadata = buildMetadata("de");
export { viewport } from "@/lib/metadata";

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="de">{children}</SiteShell>;
}
