import Link from "next/link";

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pt-44">
      <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-3 border-b border-white/10 pb-6 text-sm text-white/40">{subtitle}</p>

      <div className="mt-8 leading-relaxed text-white/60 [&_a]:text-accent-soft [&_a]:underline [&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mb-1 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-white [&_li]:mb-1 [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </article>
  );
}
