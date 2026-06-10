import { test, expect } from '@playwright/test';

test.describe('search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('search input is visible on the home page', async ({ page }) => {
    await expect(page.locator('#search')).toBeVisible();
    await expect(page.locator('#search input[type="text"]')).toBeVisible();
  });

  test('typing a query returns results', async ({ page }) => {
    await page.locator('#search input[type="text"]').fill('transaction');

    const results = page.locator('.pagefind-ui__result');
    await expect(results.first()).toBeVisible({ timeout: 10_000 });
    await expect(results).toHaveCount(await results.count());
    expect(await results.count()).toBeGreaterThan(0);
  });

  test('results contain a clickable link that navigates to a matching page', async ({ page }) => {
    await page.locator('#search input[type="text"]').fill('Actor-Participant');

    const firstLink = page.locator('.pagefind-ui__result-link').first();
    await expect(firstLink).toBeVisible({ timeout: 10_000 });

    await firstLink.click();
    await expect(page).toHaveURL(/actor-participant/i);
    await expect(page.locator('main h1')).toBeVisible();
  });

  test('clearing the query removes results', async ({ page }) => {
    const input = page.locator('#search input[type="text"]');
    await input.fill('transaction');
    await expect(page.locator('.pagefind-ui__result').first()).toBeVisible({ timeout: 10_000 });

    await input.clear();
    await expect(page.locator('.pagefind-ui__result')).toHaveCount(0);
  });

  test('a query with no matches shows no results', async ({ page }) => {
    await page.locator('#search input[type="text"]').fill('zzznomatchxxx');

    // Results should not appear — wait briefly then assert absence.
    await page.waitForTimeout(1_500);
    await expect(page.locator('.pagefind-ui__result')).toHaveCount(0);
  });

  test('search is present on an interior page, not just the home page', async ({ page }) => {
    await page.goto('transaction-patterns.html');
    await expect(page.locator('#search input[type="text"]')).toBeVisible();

    await page.locator('#search input[type="text"]').fill('Actor-Participant');
    await expect(page.locator('.pagefind-ui__result').first()).toBeVisible({ timeout: 10_000 });
  });
});
