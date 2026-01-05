// lib/clientMarkdown.ts
import { marked } from 'marked';

export async function getProjectDescriptionHtml(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`No se pudo cargar ${url}`);
  }
  const text = await res.text();
  return marked.parse(text);
}
