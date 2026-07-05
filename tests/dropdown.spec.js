import {test} from '@playwright/test';
test('dropdown handling',async({page})=>{
    await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
    await page.click('[data-target="simple-dropdown"]');
    await page.click('#simple-dropdown');
    await page.locator('[value="option1"]');
    await page.waitForTimeout(4000);
})
