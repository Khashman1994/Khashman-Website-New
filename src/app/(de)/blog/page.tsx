import SoroEmbed from "@/components/SoroEmbed";
import { getDictionary } from "@/lib/i18n";

export const metadata = {
  title: "Blog | Khashman Webdesign",
  description: "Tipps und Neuigkeiten rund um Webdesign für KMU und Gründer.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    // force-light: Der Blog wird immer im hellen Design gezeigt, unabhängig vom gewählten Modus (globals.css)
    <section className="force-light mx-auto max-w-6xl px-6 py-24">
      <h1 className="mb-12 text-5xl font-semibold tracking-tight">Blog</h1>
      {/* Soro wird erst nach Zustimmung geladen (Banner / Platzhalter) */}
      <SoroEmbed t={getDictionary("de").cookie} />
    </section>
  );
}
