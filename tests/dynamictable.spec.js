import { test } from '@playwright/test';

test('dynatable', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  const rows = page.locator('.rt-tbody .rt-tr-group');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).textContent();
    console.log(rowText);

    if (rowText?.includes('Gentry')) {
      await rows.nth(i).locator('#edit-record-3').click();
      await page.getByPlaceholder('Salary').fill('35000');
      await page.locator('#submit').click();
      await page.waitForTimeout(2000);
      break;
    }
  }
  await page.locator('#addNewRecordButton').click();
  await page.locator('#firstName').fill('Raja');
  await page.locator('#lastName').fill('K');
  await page.locator('#userEmail').fill('rajagtr7@gmail.com');  
  await page.locator('#age').fill('25');
  await page.locator('#salary').fill('25000');
  await page.locator('#department').fill('QA');
  await page.locator('#submit').click();
  await page.waitForTimeout(2000);
});