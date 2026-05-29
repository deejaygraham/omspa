import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const siteDir = path.resolve(process.cwd(), '_site');

test('build output exists', async () => {
  expect(fs.existsSync(path.join(siteDir, 'index.html'))).toBeTruthy();
  const htmlPages = fs.readdirSync(siteDir).filter((name) => name.endsWith('.html') && name !== 'index.html');
  expect(htmlPages.length).toBeGreaterThan(0);
});

test('homepage renders with handbook title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Contents|Strategies and Patterns Handbook/i);
  await expect(page.locator('h1').first()).toContainText('Strategies and Patterns Handbook');
  await expect(page.locator('a', { hasText: 'List of strategies' })).toBeVisible();
});

test('sample article page loads and has an internal link', async ({ page }) => {
  await page.goto('/');
  const sampleLink = page.locator('a', { hasText: 'List of strategies' }).first();
  await expect(sampleLink).toHaveCount(1);

  const href = await sampleLink.getAttribute('href');
  expect(href).toMatch(/\.html$/);
  expect(fs.existsSync(path.join(siteDir, href?.replace(/^\//, '') ?? ''))).toBeTruthy();

  await page.goto(href || '/');
  await expect(page.locator('body')).toContainText('List of strategies');
  await expect(page.locator('a', { hasText: /Activities and Model Components/ })).toBeVisible();
});

test('image assets are accessible from the built site', async ({ page }) => {
  await page.goto('/');
  const image = page.locator('img[src^="/img/"]');
  await expect(image).toHaveCount(1);
  await expect(image.first()).toBeVisible();
});
