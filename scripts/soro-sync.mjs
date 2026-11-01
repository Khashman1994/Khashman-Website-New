// Übernimmt neue Artikel aus Soro in content/blog/ (Markdown) und public/blog/ (Titelbild).
// Läuft täglich über .github/workflows/soro-sync.yml, bis das Soro-Abo endet.
// Manuell: node scripts/soro-sync.mjs
import fs from "node:fs";
import path from "node:path";

const TOKEN = "5323da2a-5529-4d90-8f34-a9a29aa89df9";
const API = "https://app.trysoro.com";
const LAST_DAY = "2026-11-16"; // danach macht das Skript nichts mehr
const ROOT = process.cwd();
const HEADERS = { "User-Agent": "Mozilla/5.0 (soro-sync; khashman-webdesign.de)", Referer: "https://www.khashman-webdesign.de/blog" };
const CONTENT = path.join(ROOT, "content", "blog");
const IMAGES = path.join(ROOT, "public", "blog");

if (new Date().toISOString().slice(0, 10) > LAST_DAY && !process.env.SORO_FORCE) {
  console.log(`Soro-Abo beendet (nach ${LAST_DAY}) – nichts zu tun.`);
  process.exit(0);
}

// Für Tests: SORO_EXPORT=pfad/zu/soro-blog-export.json liest aus einer gespeicherten Datei statt aus dem Netz
const exported = process.env.SORO_EXPORT ? JSON.parse(fs.readFileSync(process.env.SORO_EXPORT, "utf8")) : null;

async function getEmbed() {
  if (exported) return exported.embed;
  const res = await fetch(`${API}/api/embed/${TOKEN}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Soro-Liste nicht abrufbar: ${res.status}`);
  return res.text();
}
async function getContent(id) {
  if (exported) return exported.articles.find((a) => a.id === id)?.content ?? null;
  const res = await fetch(`${API}/api/embed/${TOKEN}/article/${id}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Artikel ${id} nicht abrufbar: ${res.status}`);
  return (await res.json()).content;
}
async function getImage(article) {
  if (exported) {
    const b64 = exported.articles.find((a) => a.id === article.id)?.image;
    return b64 ? Buffer.from(b64, "base64") : null;
  }
  if (!article.image) return null;
  const res = await fetch(article.image, { headers: HEADERS });
  return res.ok ? Buffer.from(await res.arrayBuffer()) : null;
}

/* ---------- HTML → Markdown (Soro nutzt nur h2, h3, p, ul/li, strong, a) ---------- */

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&");

function inline(s) {
  return decode(
    s
      .replace(/<(strong|b)>([\s\S]*?)<\/\1>/g, "**$2**")
      .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, text) => `[${text}](${href.replace("https://www.khashman-webdesign.de", "")})`)
      .replace(/<br\s*\/?>/g, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " "),
  ).trim();
}

function toMarkdown(html) {
  const out = [];
  for (const m of html.matchAll(/<(h2|h3|p|ul)[^>]*>([\s\S]*?)<\/\1>/g)) {
    const [, tag, inner] = m;
    if (tag === "h2") out.push(`## ${inline(inner)}`);
    else if (tag === "h3") out.push(`### ${inline(inner)}`);
    else if (tag === "p") {
      const t = inline(inner);
      if (t) out.push(t);
    } else out.push([...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((li) => `- ${inline(li[1])}`).join("\n"));
  }
  return out.join("\n\n") + "\n";
}

/* ---------- Ablauf ---------- */

const embed = await getEmbed();
const match = embed.match(/var SORO_ARTICLES = (\[[\s\S]*?\]);\s*\n/);
if (!match) throw new Error("Artikelliste im Soro-Skript nicht gefunden");
const articles = JSON.parse(match[1]);

fs.mkdirSync(CONTENT, { recursive: true });
fs.mkdirSync(IMAGES, { recursive: true });

let added = 0;
for (const a of articles) {
  const file = path.join(CONTENT, `${a.slug}.md`);
  if (fs.existsSync(file)) continue; // schon übernommen – nie überschreiben

  const html = await getContent(a.id);
  if (!html) {
    console.warn(`Übersprungen (kein Inhalt): ${a.slug}`);
    continue;
  }
  let imageLine = "";
  const image = await getImage(a);
  if (image) {
    fs.writeFileSync(path.join(IMAGES, `${a.slug}.webp`), image);
    imageLine = `image: /blog/${a.slug}.webp\n`;
  }
  const date = (a.isoDate ?? "").slice(0, 10) || new Date().toISOString().slice(0, 10);
  const clean = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
  fs.writeFileSync(
    file,
    `---\ntitle: ${clean(a.title)}\ndescription: ${clean(a.excerpt)}\ndate: ${date}\n${imageLine}---\n\n${toMarkdown(html)}`,
  );
  console.log(`Neu: ${a.slug}`);
  added++;
}
console.log(added ? `${added} neue(r) Artikel übernommen.` : "Keine neuen Artikel.");
