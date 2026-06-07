const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5174/');
  await new Promise(r => setTimeout(r, 2000)); // wait for animations
  await page.screenshot({ path: '/Users/moulisrivastava/.gemini/antigravity-ide/brain/4e4acb63-5f25-4bf9-918d-c98c7f450cef/hero_current.png' });
  
  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/Users/moulisrivastava/.gemini/antigravity-ide/brain/4e4acb63-5f25-4bf9-918d-c98c7f450cef/new_arrivals_current.png' });

  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/Users/moulisrivastava/.gemini/antigravity-ide/brain/4e4acb63-5f25-4bf9-918d-c98c7f450cef/top_rated_current.png' });
  
  await browser.close();
})();
