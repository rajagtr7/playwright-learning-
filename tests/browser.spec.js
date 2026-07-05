import { test, chromium } from '@playwright/test';

test('Browser Handling', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: './videos/',
    },
  });
  const page = await context.newPage();
  await page.goto('https://www.amazon.in/');
//   await page.waitForTimeout(5000);
  await page.screenshot({ path: './amazon.png' });
  const page2 = await context.newPage();
  await page2.goto('https://www.flipkart.com/');   
//   await page.waitForTimeout(5000);
  await page2.screenshot({ path: './flipkart.png' });
  
  const  browser2 =await chromium.launch();
  const context2 = await browser.newContext({
    recordVideo: {
      dir: './videos/',
    },
  });
  const page3 = await context2.newPage();
  await page3.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page3.screenshot({path: './orangehrm.png'});

  const page4 =await context2.newPage();
  await page4.goto("https://www.facebook.com/");
  await page4.screenshot({path: './facebook.png'});
  await browser.close();
});
   