import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Content root: project's src/content (sibling of mcp-server)
const CONTENT_ROOT = join(__dirname, '..', '..', 'src', 'content');

export interface ContentEntry {
  path: string;      // e.g. "security/introduction"
  collection: string;
  slug: string;
  title: string;
  content: string;
}

function extractFrontmatter(content: string): { title?: string; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { body: content };
  const frontmatter = match[1];
  const body = match[2].trim();
  const titleMatch = frontmatter.match(/^title:\s*["']?([^"'\n]+)["']?/m);
  return {
    title: titleMatch ? titleMatch[1].trim() : undefined,
    body,
  };
}

function walkMarkdown(dir: string, basePath: string): ContentEntry[] {
  const entries: ContentEntry[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    const relativePath = basePath ? `${basePath}/${item}` : item;

    if (stat.isDirectory()) {
      entries.push(...walkMarkdown(fullPath, relativePath));
    } else if (item.endsWith('.md')) {
      const slug = item.replace(/\.md$/, '');
      const collection = basePath ? basePath.split('/')[0] : slug;
      const raw = readFileSync(fullPath, 'utf-8');
      const { title, body } = extractFrontmatter(raw);
      entries.push({
        path: relativePath.replace(/\.md$/, ''),
        collection: basePath ? basePath.split('/')[0] : slug,
        slug,
        title: title || slug,
        content: body,
      });
    }
  }

  return entries;
}

let cachedEntries: ContentEntry[] | null = null;

export function getAllContent(): ContentEntry[] {
  if (cachedEntries) return cachedEntries;
  try {
    cachedEntries = walkMarkdown(CONTENT_ROOT, '');
    return cachedEntries;
  } catch (err) {
    console.error('Failed to load content:', err);
    return [];
  }
}

export function getContentByPath(path: string): ContentEntry | null {
  const entries = getAllContent();
  const normalized = path
    .replace(/^site:\/\/nef\//, '')
    .replace(/^\//, '')
    .trim();
  return entries.find((e) => e.path === normalized || e.path.endsWith('/' + normalized)) ?? null;
}

export function searchContent(query: string): ContentEntry[] {
  const entries = getAllContent();
  const q = query.toLowerCase();
  return entries.filter((e) => e.content.toLowerCase().includes(q) || e.title.toLowerCase().includes(q));
}
