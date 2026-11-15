import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost, headings, markdownToHtml, readingTime } from "@/lib/blog";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Alle Artikel werden beim Build statisch erzeugt; die Seite darf kurz auf params warten
export const instant = false;

export function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug, "en");
  if (!post) return {};
  const path = `/en/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: path,
      languages: post.translationOf
        ? { de: `/blog/${post.translationOf}`, en: path, "x-default": `/blog/${post.translationOf}` }
        : undefined,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: path,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostEnglishPage({ params }: Props) {
  const post = getPost((await params).slug, "en");
  if (!post) notFound();

  const toc = headings(post.body);
  const others = getAllPosts("en").filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.image ? `${SITE.url}${post.image}` : undefined,
    url: `${SITE.url}/en/blog/${post.slug}`,
    inLanguage: "en",
    author: { "@type": "Person", name: SITE.owner, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#business` },
  };

  return (
    <article className="force-light mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Link href="/en/blog" className="text-sm text-fg/60 transition-colors hover:text-fg">
        ← All articles
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="text-sm text-fg/60">
          <time dateTime={post.date}>{formatDate(post.date, "en")}</time> · {readingTime(post.body)} min read · by {SITE.owner}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-fg/60">{post.description}</p>
      </header>

      {post.image && (
        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-3xl">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
        </div>
      )}

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div
          className="max-w-[68ch] text-lg leading-relaxed text-fg/75 [&_a]:text-accent-soft [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg md:[&_h2]:text-3xl [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-fg [&_li]:mb-2 [&_p]:mb-5 [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
        />

        {toc.length > 2 && (
          <nav aria-label="Contents" className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-fg/10 p-5">
              <p className="text-sm font-semibold">Contents</p>
              <ol className="mt-3 space-y-2 text-sm text-fg/60">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="transition-colors hover:text-fg">{h.text}</a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}
      </div>

      {/* Abschluss mit Kontakt */}
      <aside className="mt-16 rounded-3xl bg-ink-800 p-8 md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Want to put this into practice?</h2>
        <p className="mt-3 max-w-xl text-fg/60">In a free initial call we look together at what your website and business need. Fixed price, no small print.</p>
        <Link href="/en#kontakt" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-fg px-6 font-medium text-ink-950 transition-colors hover:bg-accent hover:text-white">
          Book a free consultation
        </Link>
        <p className="mt-6 text-sm text-fg/60">
          More about my services: <Link href="/en/ai-automation" className="text-accent-soft underline-offset-4 hover:underline">AI automation</Link>
          {" · "}
          <Link href="/en/web-design-aachen" className="text-accent-soft underline-offset-4 hover:underline">Web design in Aachen</Link>
          {" · "}
          <Link href="/en/seo-aachen" className="text-accent-soft underline-offset-4 hover:underline">SEO in Aachen</Link>
        </p>
      </aside>

      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">More articles</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/en/blog/${p.slug}`} className="block h-full rounded-2xl border border-fg/10 p-5 transition-colors hover:border-fg/25">
                  <p className="text-sm text-fg/60">{formatDate(p.date, "en")}</p>
                  <p className="mt-2 font-semibold">{p.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
