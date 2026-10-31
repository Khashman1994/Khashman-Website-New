import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import DemoSite from "@/components/demo/DemoSite";
import { DEMO_SITES, getDemoSite } from "@/lib/demo-sites";

type Params = Promise<{ slug: string }>;

// Alle 14 Beispiele werden beim Build statisch erzeugt
export function generateStaticParams() {
  return DEMO_SITES.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const site = getDemoSite((await params).slug);
  if (!site) return {};
  return {
    title: `${site.name} – ${site.industry}`,
    description: `Fiktives Website-Beispiel für ${site.industry}: ${site.hero.text}`,
  };
}

// params erst innerhalb von <Suspense> lesen (Instant Navigation in Next 16).
// Weil alle Seiten vorgerendert sind, ist der Platzhalter praktisch nie zu sehen.
async function DemoContent({ params }: { params: Params }) {
  const site = getDemoSite((await params).slug);
  if (!site) notFound();
  return <DemoSite site={site} />;
}

export default function DemoPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DemoContent params={params} />
    </Suspense>
  );
}
