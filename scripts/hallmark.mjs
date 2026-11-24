import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const mode = process.argv[2];
const skill = [
  process.env.HALLMARK_HOME,
  join(homedir(), '.agents', 'skills', 'hallmark'),
  join(homedir(), '.codex', 'skills', 'hallmark'),
].filter(Boolean).find((path) => existsSync(join(path, 'scripts', 'capture.mjs')));
if (!skill) {
  console.error('No se encuentra Hallmark. Define HALLMARK_HOME con la carpeta de la skill.');
  process.exit(1);
}

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
].filter(Boolean).find(existsSync);
if (!browser) {
  console.error('No se encuentra un navegador Chromium. Define CHROME_PATH con su ejecutable.');
  process.exit(1);
}

const url = process.env.PORTFOLIO_AUDIT_URL ?? 'http://127.0.0.1:4173/MyPortfolio/';
const args = mode === 'capture'
  ? ['capture.mjs', url, '--out', '.hallmark/previews', '--name', 'portfolio', '--sizes', 'laptop,tablet,phone', '--full', '--scale', '1']
  : ['sloplint.mjs', 'src', 'index.html', '--genre', 'editorial', '--render', '--url', url];
const result = spawnSync(process.execPath, [join(skill, 'scripts', args[0]), ...args.slice(1)], {
  stdio: 'inherit',
  env: { ...process.env, CHROME_PATH: browser, HALLMARK_PUPPETEER: process.cwd() },
});
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
