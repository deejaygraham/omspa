import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const siteDir = path.resolve(process.cwd(), '_site');

function normalizeHref(href) {
  return href?.replace(/^\/omspa\//, '').split('#')[0];
}

test('single strategy page renders correctly', async ({ page }) => {
  await page.goto('discovering-new-strategies-and-patterns.html');
  await expect(page).toHaveTitle(/Discovering new strategies and patterns/i);
  await expect(page.locator('main')).toContainText('Discovering new strategies and patterns');
  await expect(page.locator('a', { hasText: 'Strategies for building object models' })).toBeVisible();
});

test('pages expose semantic landmarks and keyboard navigation', async ({ page }) => {
  await page.goto('index.html');

  await expect(page.locator('header')).toHaveCount(1);
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toHaveCount(1);
  await expect(page.getByRole('search', { name: 'Site search' })).toHaveCount(1);
  await expect(page.locator('main > article')).toHaveCount(1);
  await expect(page.locator('footer')).toHaveCount(1);
  await expect(page.locator('time[datetime]')).toHaveCount(1);

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await skipLink.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('multi-level handbook navigation identifies the current page', async ({ page }) => {
  await page.goto('list-of-strategies-selecting-objects.html');

  const navigation = page.getByRole('navigation', { name: 'Handbook contents' });
  const currentLink = navigation.getByRole('link', { name: 'Selecting objects' });

  await expect(navigation).toBeVisible();
  await expect(currentLink).toHaveAttribute('aria-current', 'page');
  await expect(currentLink.locator('xpath=ancestor::details')).toHaveCount(2);
  await expect(currentLink.locator('xpath=ancestor::details[not(@open)]')).toHaveCount(0);

  const navigationBox = await navigation.boundingBox();
  const mainBox = await page.locator('main').boundingBox();
  expect(navigationBox?.x).toBeLessThan(mainBox?.x ?? 0);
});

test('handbook navigation stacks above content on narrow screens', async ({ page }) => {
  await page.setViewportSize({ width: 600, height: 800 });
  await page.goto('index.html');

  const navigationBox = await page.getByRole('navigation', { name: 'Handbook contents' }).boundingBox();
  const mainBox = await page.locator('main').boundingBox();
  expect(navigationBox?.y).toBeLessThan(mainBox?.y ?? 0);
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

  await expect(page.locator('main').getByText('Activities and Model Components').first()).toBeVisible();
  await expect(page.locator('main').getByText('Discovering new strategies and patterns').first()).toBeVisible();
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

  await expect(page.locator('main').getByText('Patt#1.')).toBeVisible();
  await expect(page.locator('main').getByText('Patterns for building object models')).toBeVisible();
});
