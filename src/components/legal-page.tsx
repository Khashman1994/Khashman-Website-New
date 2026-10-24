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
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link href="/" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-display text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-2 border-b border-slate-200 pb-6 text-sm text-slate-500">{subtitle}</p>

      <div className="mt-8 leading-relaxed text-slate-600 [&_a]:text-blue-600 [&_a]:underline [&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_li]:mb-1 [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </article>
  );
}
