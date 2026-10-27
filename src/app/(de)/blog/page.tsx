import Script from "next/script";

export const metadata = {
  title: "Blog | Khashman Webdesign",
  description: "Tipps und Neuigkeiten rund um Webdesign für KMU und Gründer.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="mb-12 text-5xl font-semibold tracking-tight">Blog</h1>
      <div id="soro-blog" />
      <Script
        src="https://app.trysoro.com/api/embed/5323da2a-5529-4d90-8f34-a9a29aa89df9"
        strategy="afterInteractive"
      />
    </section>
  );
}