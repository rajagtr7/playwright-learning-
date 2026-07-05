import {test} from '@playwright/test'
test('file_upload',async({page})=>{
    await page.goto('https://demoqa.com/upload-downloadd');
    await page.setinputFiles('#uploadFile','/amazon.png');
    await page.setinputFiles('#uploadFiles',[]);
    await page.waitForTimeout(2000);

    // upload file
    await page.setinputFiles('#uploadFiles','"C:/Users/ksraj/Downloads/www.1TamilMV.army - ONE PIECE (2026) S02 EP (01-08) - 1080p - HQ HDRip - [Tamil + Telugu + Hindi + Eng] - (DD+5.1 - 192Kbps).torrent"');
    
    // upload multiple files
    await page.setinputFiles('#fileField',['"C:/Users/ksraj/Downloads/www.1TamilMV.army - Karuppu Pulsar (2026) Tamil HQ HDRip - 1080p - x264- (DD5.1 - 512Kbps & AAC) - 2.7GB.mkv.torrent"']);
    await page.waitForTimeout(2000);
    
    // download file
    await page.goto("https://demoqa.com/upload-download");
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton')
    ]);
    await download.saveAs('C:/Users/ksraj/Downloads/sampleFile.jpeg');
});
