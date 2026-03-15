import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content", "services");

export async function getMarkdownContent(filename: string) {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = await fs.readFile(filePath, "utf-8");
  const { content, data: frontmatter } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    content: processed.toString(),
    frontmatter,
  };
}
