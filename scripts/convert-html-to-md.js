import fs from "fs-extra";
import path from "path";
import { globSync } from "glob";
import TurndownService from "turndown";
import { JSDOM } from "jsdom";

const archiveDir = path.resolve("original", "strpat_handbook_from_opsma_2e");
const outputDir = path.resolve("src", "pages");
const imgDir = path.resolve("src", "img");

const htmlFiles = globSync("*.htm*", { cwd: archiveDir, absolute: true });
await fs.ensureDir(outputDir);
await fs.ensureDir(imgDir);

function slugify(text) {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&[a-z0-9]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const pages = [];
const usedSlugs = new Set();

for (const filePath of htmlFiles) {
  const fileName = path.basename(filePath);
  if (/\.(gif|png|jpe?g|svg)$/i.test(fileName)) continue;

  const html = await fs.readFile(filePath, "utf8");
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const rawTitle = document.querySelector("title")?.textContent?.trim() || path.basename(filePath, path.extname(filePath));
  const title = rawTitle.replace(/'/g, "''");

  const baseName = path.basename(fileName, path.extname(fileName));
  let slug = baseName.toLowerCase() === "index" ? "index" : slugify(rawTitle) || baseName.toLowerCase();

  let uniqueSlug = slug;
  let suffix = 1;
  while (usedSlugs.has(uniqueSlug)) {
    suffix += 1;
    uniqueSlug = `${slug}-${suffix}`;
  }
  usedSlugs.add(uniqueSlug);

  pages.push({
    fileName,
    title,
    slug: uniqueSlug,
    permalink: `/${uniqueSlug}.html`,
    outputFile: `${uniqueSlug}.md`
  });
}

const fileMap = new Map();
for (const page of pages) {
  fileMap.set(page.fileName.toLowerCase(), page);
  fileMap.set(page.fileName.toLowerCase().replace(/\.html?$/i, ""), page);
}

const turndownService = new TurndownService({ headingStyle: "atx" });

turndownService.addRule("linkRewrite", {
  filter: ["a"],
  replacement(content, node) {
    const href = node.getAttribute("href");
    if (!href) return content;

    const cleaned = href.replace(/^\.\//, "").trim();
    const [hrefPath, ...hashParts] = cleaned.split("#");
    const hash = hashParts.length ? `#${hashParts.join("#")}` : "";
    const targetKey = hrefPath.toLowerCase();

    const targetPage = fileMap.get(targetKey) || fileMap.get(`${targetKey}.html`) || fileMap.get(`${targetKey}.htm`);
    if (targetPage) {
      return `[${content}](${targetPage.permalink}${hash})`;
    }

    return `[${content}](${cleaned})`;
  }
});

turndownService.addRule("imgRewrite", {
  filter: ["img"],
  replacement(content, node) {
    const src = node.getAttribute("src") || node.getAttribute("SRC");
    const alt = node.getAttribute("alt") || "";
    if (!src) return "";
    const filename = path.basename(src);
    const destPath = path.posix.join("/img", filename);
    return `![${alt}](${destPath})`;
  }
});

for (const filePath of htmlFiles) {
  const fileName = path.basename(filePath);
  if (fileName.startsWith("Strpat") && fileName.endsWith(".gif")) {
    continue;
  }

  const html = await fs.readFile(filePath, "utf8");
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const page = pages.find((item) => item.fileName === fileName);
  if (!page) {
    continue;
  }

  const body = document.querySelector("body");
  if (!body) {
    console.warn(`Skipping ${fileName}: no <body> found.`);
    continue;
  }

  const bodyHtml = body.innerHTML
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<p[^>]*>/gi, "<p>")
    .replace(/<font[^>]*>/gi, "")
    .replace(/<\/font>/gi, "")
    .replace(/<b>/gi, "<strong>")
    .replace(/<\/b>/gi, "</strong>")
    .replace(/<i>/gi, "<em>")
    .replace(/<\/i>/gi, "</em>");

  const markdown = turndownService.turndown(bodyHtml).trim();
  const outputFile = path.join(outputDir, page.outputFile);

  const frontmatter = `---\nlayout: base.njk\ntitle: '${page.title}'\npermalink: '${page.permalink}'\n---\n\n`;
  await fs.writeFile(outputFile, frontmatter + markdown + "\n", "utf8");
}

const imageFiles = globSync("*.{gif,png,jpg,jpeg,svg}", { cwd: archiveDir, absolute: true, nocase: true });
for (const imagePath of imageFiles) {
  const basename = path.basename(imagePath);
  const target = path.join(imgDir, basename);
  await fs.copy(imagePath, target);
}

console.log(`Converted ${htmlFiles.length} HTML pages and copied ${imageFiles.length} images.`);
