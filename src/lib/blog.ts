// Blog system using Vite's import.meta.glob for auto-discovery.
// Drop any .md file into content/blog/ — it will be auto-discovered.

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  featuredImage?: string;
  readingTime: number;
  content: string;
};

// Vite raw-imports all markdown files at build time.
const postModules = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Simple YAML-like frontmatter parser (handles quoted and unquoted strings).
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const block = match[1];
  const content = match[2];
  const data: Record<string, string> = {};
  block.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key) data[key] = val;
  });
  return { data, content };
}

function parsePost(path: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(words / 220));
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    author: data.author || "JOT Wellness",
    category: data.category || "Insights",
    excerpt: data.excerpt || content.slice(0, 160).trim() + "…",
    featuredImage: data.featuredImage,
    readingTime,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(postModules)
    .map(([path, raw]) => parsePost(path, raw as string))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(getAllPosts().map((p) => p.category));
  return Array.from(cats);
}
