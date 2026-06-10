import { test, expect } from '@playwright/test';
import { readdirSync } from 'fs';
import { resolve, relative } from 'path';

const ORIGIN = 'http://127.0.0.1:8080';
const BASE = '/omspa/';
const SITE_DIR = resolve(process.cwd(), '_site');
const SKIP_DIRS = new Set(['pagefind']);

function walkHtmlFiles(dir, root = dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) results.push(...walkHtmlFiles(full, root));
    } else if (entry.name.endsWith('.html')) {
      results.push(relative(root, full).replace(/\\/g, '/'));
    }
  }
  return results;
}

// Canonical key for a URL: strip fragment, normalise trailing slash on BASE.
function urlKey(url) {
  const stripped = url.split('#')[0];
  return stripped.endsWith(BASE.slice(0, -1)) ? stripped + '/' : stripped;
}

test('spider: no broken internal links, all deployed pages reachable from home', async ({ page }) => {
  test.setTimeout(180_000);

  const visited = new Set();
  const queue = [`${ORIGIN}${BASE}`];
  const broken = [];

  while (queue.length > 0) {
    const url = queue.shift();
    const key = urlKey(url);
    if (visited.has(key)) continue;
    visited.add(key);

    let response;
    try {
      response = await page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch (err) {
      broken.push({ url, status: 'error', detail: err.message });
      continue;
    }

    const status = response?.status() ?? 0;
    if (status >= 400) {
      broken.push({ url, status });
      continue;
    }

    // Record final URL after any redirect so both spellings count as visited.
    visited.add(urlKey(page.url()));

    const hrefs = await page.locator('a[href]').evaluateAll(
      els => els.map(el => el.href)
    );

    for (const href of hrefs) {
      const key = urlKey(href.split('#')[0]);
      if (!key.startsWith(ORIGIN + BASE)) continue;
      if (!visited.has(key)) queue.push(href.split('#')[0]);
    }
  }

  // Every HTML file in _site should be reachable from home.
  // Directory index files are served at the directory URL (without index.html).
  const unreachable = [];
  for (const rel of walkHtmlFiles(SITE_DIR)) {
    const isIndex = rel === 'index.html' || rel.endsWith('/index.html');
    const fileUrl = `${ORIGIN}${BASE}${rel}`;
    const dirUrl = isIndex
      ? `${ORIGIN}${BASE}${rel.replace(/index\.html$/, '')}`
      : fileUrl;

    if (!visited.has(urlKey(fileUrl)) && !visited.has(urlKey(dirUrl))) {
      unreachable.push(rel);
    }
  }

  expect(
    broken,
    `Broken links found:\n${broken.map(b => `  [${b.status}] ${b.url}`).join('\n')}`
  ).toHaveLength(0);

  expect(
    unreachable,
    `Pages not reachable from home:\n${unreachable.map(f => `  ${f}`).join('\n')}`
  ).toHaveLength(0);
});
