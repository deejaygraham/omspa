import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const patterns = JSON.parse(readFileSync(resolve('src/_data/patterns.json'), 'utf-8'));
const strategies = JSON.parse(readFileSync(resolve('src/_data/strategies.json'), 'utf-8'));

// Maps each category listing page to the top-level tag used in strategies.json
const CATEGORY_PAGES = [
  { url: 'list-of-strategies-activities-and-model-components.html',           category: 'activities and model components' },
  { url: 'list-of-strategies-identifying-system-purpose-and-features.html',   category: 'identifying purpose and features' },
  { url: 'list-of-strategies-selecting-objects.html',                         category: 'selecting objects' },
  { url: 'list-of-strategies-establishing-responsibilities.html',             category: 'establishing responsibilities' },
  { url: 'list-of-strategies-working-out-dynamics-with-scenarios.html',       category: 'working out dynamics with scenarios' },
  { url: 'list-of-strategies-discovering-new-strategies-and-patterns.html',   category: 'discovery' },
];

// Collect text of all links on the page matching a regex, trimmed.
async function getMatchingLinkLabels(page, pattern) {
  const texts = await page.getByRole('link').allTextContents();
  return texts.map(t => t.trim()).filter(t => pattern.test(t));
}

test('list-of-patterns.html lists exactly the 31 patterns', async ({ page }) => {
  await page.goto('list-of-patterns.html');
  const labels = await getMatchingLinkLabels(page, /^Patt#\d+\.$/);
  const expected = patterns.map(p => `${p.id}.`);

  for (const label of expected) {
    expect(labels, `${label} missing from list-of-patterns`).toContain(label);
  }
  expect(labels).toHaveLength(patterns.length);
});

test('list-of-strategies.html lists exactly all strategies', async ({ page }) => {
  await page.goto('list-of-strategies.html');
  const labels = await getMatchingLinkLabels(page, /^Str#\w+\.$/);
  const expected = strategies.map(s => `${s.id}.`);

  for (const label of expected) {
    expect(labels, `${label} missing from list-of-strategies`).toContain(label);
  }
  expect(labels).toHaveLength(strategies.length);
});

for (const { url, category } of CATEGORY_PAGES) {
  const expected = strategies.filter(s => s.tags[0] === category);

  test(`${url} lists exactly strategies tagged "${category}"`, async ({ page }) => {
    await page.goto(url);
    const labels = await getMatchingLinkLabels(page, /^Str#\w+\.$/);
    const expectedLabels = expected.map(s => `${s.id}.`);

    for (const label of expectedLabels) {
      expect(labels, `${label} missing from ${url}`).toContain(label);
    }
    expect(labels).toHaveLength(expected.length);
  });
}
