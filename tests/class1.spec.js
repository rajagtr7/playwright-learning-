import { test, expect } from '@playwright/test';

// test('opening amazon', async ({ page }) => {
//     await page.goto('https://www.amazon.in/');
//     await expect(page).toHaveTitle(/Amazon/);
// })

test('opening flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.url();
  await page.title();
  await page.screenshot({ path: './flipkart.png' });
  await page.waitForTimeout(5000);
});