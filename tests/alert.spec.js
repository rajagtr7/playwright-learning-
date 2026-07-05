import {test} from '@playwright/test';
test('alert',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//simple alerts 
page.on('dialog',(dialog)=>{
    dialog.accept();
    console.log(dialog.type());
    console.log(dialog.message());
});
await page.click('[onclick="jsAlert()"]');
await page.waitForTimeout(2000);
})
// js alerts 
test('alerts',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('daialog',(dialog)=>{
            console.log(dialog.type());
            console.log(dialog.message());
            
            if(dialog.type()=='alert'){
                dialog.accept();
            }else if(dialog.type()=='confirm'){
                dialog.dismiss();
            }else if(dialog.type()=='prompt'){
                dialog.accept('hello this raja ');
            }

        });
        await page.click('[onclick="jsPrompt()"]');
        await page.waitForTimeout(2000);
})
// dom alerts   
test('dom alerts',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    try{
        await page.waitForSelector('[class="xkp9Hl ZvCKfk"]',{timeout:5000});
        await page.click('[class="xkp9Hl ZvCKfk"]');
    }catch{
            conssole.log('no alert found')
    }
    await page.waitForTimeout(2000);
    })