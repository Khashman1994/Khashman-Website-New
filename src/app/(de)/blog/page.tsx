import Image from "next/image";
import Link from "next/link";
import { formatDate, getAllPosts, readingTime } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Tipps und Neuigkeiten rund um Webdesign, Local SEO und Datenschutz für Selbstständige, Handwerker und KMU in Aachen.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [first, ...rest] = posts;

  return (
    // force-light: Der Blog wird immer im hellen Design gezeigt, unabhängig vom gewählten Modus (globals.css)
    <section className="force-light mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
      <p className="text-sm text-fg/60">Blog</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Webseiten, die <span className="font-serif font-normal italic text-accent-soft">Anfragen</span> bringen
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-fg/60">
        Praxiswissen zu Webdesign, Local SEO und Datenschutz für Selbstständige, Handwerker und kleine Unternehmen in Aachen.
      </p>

      {first && (
        <Link href={`/blog/${first.slug}`} className="group mt-14 grid gap-8 rounded-3xl border border-fg/10 p-4 transition-colors hover:border-fg/25 md:grid-cols-2 md:p-6">
          {first.image && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src={first.image} alt="" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
            </div>
          )}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-fg/60">
              <time dateTime={first.date}>{formatDate(first.date)}</time> · {readingTime(first.body)} Min. Lesezeit
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">{first.title}</h2>
            <p className="mt-4 text-fg/60">{first.description}</p>
            <span className="mt-6 font-medium text-accent-soft">Artikel lesen →</span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-3xl border border-fg/10 p-4 transition-colors hover:border-fg/25">
                {post.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
                  </div>
                )}
                <p className="mt-5 text-sm text-fg/60">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post.body)} Min.
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm text-fg/60">{post.description}</p>
                <span className="mt-5 text-sm font-medium text-accent-soft">Weiterlesen →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && <p className="mt-14 text-fg/60">Bald gibt es hier die ersten Artikel.</p>}
    </section>
  );
}
