import {test} from '@playwright/test';

test('frame', async ({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    const frame =await page.frameLocator('[name="globalSqa"]');  
    await frame.locator('//img[@data-attactment-id="1980"]').click();
    await page.waitForTimeout(2000);
    await page.goBack();
    
   new file ==100 
     
    
});
