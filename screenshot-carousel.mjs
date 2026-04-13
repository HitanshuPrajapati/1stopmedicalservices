import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 15000 });
await new Promise(r => setTimeout(r, 800));

// Scroll to testimonials section
await page.evaluate(() => document.getElementById('testimonials').scrollIntoView({ behavior: 'instant' }));
await new Promise(r => setTimeout(r, 600));

// Shot 1: initial centred state
await page.screenshot({ path: 'temporary screenshots/carousel-centred.png' });
console.log('centred saved');

// Shot 2: after advancing 3 cards right (simulate clicking next 3×)
await page.evaluate(() => {
  for (let i = 0; i < 3; i++) document.getElementById('tc-next').click();
});
await new Promise(r => setTimeout(r, 900));
await page.screenshot({ path: 'temporary screenshots/carousel-right3.png' });
console.log('right-3 saved');

// Shot 3: continue far right — past card 8, should wrap back
await page.evaluate(() => {
  for (let i = 0; i < 6; i++) document.getElementById('tc-next').click();
});
await new Promise(r => setTimeout(r, 900));
await page.screenshot({ path: 'temporary screenshots/carousel-wrap.png' });
console.log('wrap saved');

await browser.close();
