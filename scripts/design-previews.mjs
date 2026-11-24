import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer-core';

const executablePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
].filter(Boolean).find(existsSync);
if (!executablePath) throw new Error('Define CHROME_PATH con un navegador Chromium instalado.');

const base = process.env.PORTFOLIO_AUDIT_URL ?? 'http://127.0.0.1:4173/MyPortfolio/';
const output = 'public/design-previews';
mkdirSync(output, { recursive: true });
const browser = await puppeteer.launch({ executablePath, headless: true });
const results = [];
try {
  for (const design of ['actual', 'modulo', 'orbita', 'signal']) {
    const page = await browser.newPage();
    for (const [device, width, height] of [['desktop', 1280, 800], ['phone', 390, 844]]) {
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.goto(`${base}${design === 'actual' ? '#/' : `#/disenos/${design}?capture`}`, { waitUntil: 'networkidle0' });
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map((image) => image.decode().catch(() => {})));
        window.scrollTo(0, 0);
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      });
      const file = join(output, `${design}-${device}.png`);
      await page.screenshot({ path: file, fullPage: true });
      const measurements = await page.evaluate(() => ({
        width: innerWidth,
        overflow: document.documentElement.scrollWidth > innerWidth,
        actionBottom: Math.round(document.querySelector('.project-cta').getBoundingClientRect().bottom),
        columns: getComputedStyle(document.querySelector('.mosaic, .modulo-grid, .orbita-hero, .signal-grid')).gridTemplateColumns.split(' ').length,
      }));
      results.push({ design, device, file, ...measurements });
    }
    await page.close();
  }
  console.log(JSON.stringify(results, null, 2));
  if (results.some((result) => result.overflow)) process.exitCode = 1;
} finally {
  await browser.close();
}
