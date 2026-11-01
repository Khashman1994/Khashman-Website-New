import "server-only";
import fs from "node:fs";
import path from "node:path";

/* Blog ohne externen Dienst: Jeder Artikel ist eine Markdown-Datei in content/blog/.
   Neuer Artikel = neue Datei mit diesem Kopf (Frontmatter):

   ---
   title: Titel des Artikels
   description: Ein Satz für Google und die Übersicht (ca. 150 Zeichen)
   date: 2026-11-01
   image: /blog/dateiname.webp      (optional, Bild in public/blog/)
   ---

   Danach der Text: "## Überschrift", "### Unterüberschrift", Absätze,
   Listen mit "- ", **fett** und [Linktext](https://…). Der Dateiname ist die Adresse:
   content/blog/mein-artikel.md → /blog/mein-artikel */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, z. B. 2026-10-31
  image?: string;
  body: string; // Markdown
};

const DIR = path.join(process.cwd(), "content", "blog");

function parse(file: string): BlogPost {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Blog-Datei ohne Frontmatter: ${file}`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title ?? "",
    description: meta.description ?? "",
    date: meta.date ?? "",
    image: meta.image || undefined,
    body: match[2].trim(),
  };
}

/** Alle Artikel, neueste zuerst */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parse)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

/** Lesezeit in Minuten (ca. 200 Wörter pro Minute) */
export function readingTime(markdown: string) {
  return Math.max(1, Math.round(markdown.split(/\s+/).length / 200));
}

/* ---------- Kleines Markdown → HTML (nur was der Blog braucht) ---------- */

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inline(s: string) {
  return escape(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, href: string) => {
      const safe = /^(https?:\/\/|\/|#|mailto:)/.test(href) ? href : "#";
      const external = /^https?:\/\//.test(safe) && !safe.includes("khashman-webdesign.de");
      return `<a href="${safe}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
    });
}

/** Überschriften bekommen eine id, damit das Inhaltsverzeichnis dorthin springen kann */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function markdownToHtml(md: string) {
  const out: string[] = [];
  let list: string[] = [];
  let para: string[] = [];
  const flushList = () => {
    if (list.length) out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
    list = [];
  };
  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  };
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
    } else if (line.startsWith("### ")) {
      flushPara();
      flushList();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      flushPara();
      flushList();
      const text = line.slice(3);
      out.push(`<h2 id="${slugify(text)}">${inline(text)}</h2>`);
    } else if (/^[-*] /.test(line)) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return out.join("\n");
}

/** Die H2-Überschriften eines Artikels für das Inhaltsverzeichnis */
export function headings(md: string) {
  return md
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.slice(3).trim();
      return { id: slugify(text), text };
    });
}
