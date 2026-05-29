import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const siteDir = path.resolve(process.cwd(), '_site');

function normalizeHref(href) {
  return href?.replace(/^\/omspa\//, '').split('#')[0];
}

test('build output exists', async () => {
  expect(fs.existsSync(path.join(siteDir, 'index.html'))).toBeTruthy();
  expect(fs.existsSync(path.join(siteDir, 'list-of-strategies.html'))).toBeTruthy();
  expect(fs.existsSync(path.join(siteDir, 'list-of-patterns.html'))).toBeTruthy();
});

test('single strategy page renders correctly', async ({ page }) => {
  await page.goto('discovering-new-strategies-and-patterns.html');
  await expect(page).toHaveTitle(/Discovering new strategies and patterns/i);
  await expect(page.locator('main')).toContainText('Discovering new strategies and patterns');
  await expect(page.locator('a', { hasText: 'Strategies for building object models' })).toBeVisible();
});

test('single pattern page renders correctly', async ({ page }) => {
  await page.goto('patterns-for-building-object-models.html');
  await expect(page).toHaveTitle(/Patterns for building object models/i);
  await expect(page.locator('main h1')).toContainText(/Patterns for building object models/i);
  await expect(page.locator('a', { hasText: 'List of patterns' })).toBeVisible();
});

test('list-of-strategies page contains valid strategy links', async ({ page }) => {
  await page.goto('list-of-strategies.html');
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((els) =>
    [...new Set(els.map((el) => el.getAttribute('href')).filter(Boolean))]
  );

  const htmlHrefs = hrefs
    .map((href) => normalizeHref(href))
    .filter((href) => href && href.endsWith('.html') && href !== '');

  expect(htmlHrefs.length).toBeGreaterThan(20);
  htmlHrefs.forEach((href) => {
    expect(fs.existsSync(path.join(siteDir, href))).toBeTruthy();
  });

  await expect(page.locator('text=Activities and Model Components').first()).toBeVisible();
  await expect(page.locator('text=Discovering new strategies and patterns').first()).toBeVisible();
});

test('list-of-patterns page contains valid pattern links', async ({ page }) => {
  await page.goto('list-of-patterns.html');
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((els) =>
    [...new Set(els.map((el) => el.getAttribute('href')).filter(Boolean))]
  );

  const htmlHrefs = hrefs
    .map((href) => normalizeHref(href))
    .filter((href) => href && href.endsWith('.html') && href !== '');

  expect(htmlHrefs.length).toBeGreaterThan(10);
  htmlHrefs.forEach((href) => {
    expect(fs.existsSync(path.join(siteDir, href))).toBeTruthy();
  });

  await expect(page.locator('text=Patt#1.')).toBeVisible();
  await expect(page.locator('text=Patterns for building object models')).toBeVisible();
});
