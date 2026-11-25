import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const executablePath = [process.env.CHROME_PATH, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/chromium'].filter(Boolean).find(existsSync);
if (!executablePath) throw new Error('Define CHROME_PATH con la ruta de un navegador Chromium.');
const base = process.env.EXPLORATION_URL ?? 'http://127.0.0.1:4173/MyPortfolio/';
const out = 'public/exploration-previews';
await mkdir(out, { recursive: true });
await mkdir('.hallmark/exploration', { recursive: true });
const browser = await puppeteer.launch({ headless: true, executablePath });
try {
  const page = await browser.newPage();
  for (const slug of ['actual', 'archivo', 'escena', 'carta']) {
    for (const [size, width, height] of [['desktop', 1280, 800], ['phone', 390, 844]]) {
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      const route = slug === 'actual' ? '#/custom' : `#/explorar/${slug}?capture`;
      await page.goto(base + route, { waitUntil: 'networkidle0' });
      await page.evaluate(async () => { await document.fonts.ready; window.scrollTo(0, 0); await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))); });
      await page.screenshot({ path: `${out}/${slug}-${size}.png` });
      if (slug !== 'actual') await page.screenshot({ path: `.hallmark/exploration/${slug}-${size}-full.png`, fullPage: true });
      console.log(`${slug} ${width}px: ${await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth ? 'sin desbordamiento' : 'REVISAR desbordamiento')}`);
    }
  }
} finally {
  await browser.close();
}
