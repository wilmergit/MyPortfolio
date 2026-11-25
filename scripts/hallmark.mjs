import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { compileString } from 'sass';
import puppeteer from 'puppeteer-core';

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
const auditDir = join(process.cwd(), '.hallmark', 'audit');
const auditSnapshot = join(auditDir, 'portfolio.tsx');
const auditCss = join(auditDir, 'portfolio.css');
if (mode !== 'capture') {
  // sloplint does not parse SCSS. Audit the rendered original page against its
  // compiled styles, so focus, tokens and responsive rules are actually visible.
  await mkdir(auditDir, { recursive: true });
  const styles = ['src/global.scss', 'src/components/header/header.scss', 'src/components/intro/intro.scss', 'src/components/body/body.scss', 'src/components/experience/experience.scss'];
  const compiled = compileString(styles.map((path) => `@use "${path}";`).join('\n'), { loadPaths: [process.cwd()], style: 'expanded' });
  await writeFile(auditCss, compiled.css);
  const instance = await puppeteer.launch({ headless: true, executablePath: browser });
  try {
    const page = await instance.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluate(async () => { await document.fonts.ready; });
    const html = (await page.content()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<link\b(?=[^>]*rel="stylesheet")[^>]*>/gi, '').replace('</head>', '<link rel="stylesheet" href="./portfolio.css"></head>');
    // A framework snapshot supplies static markup without rendering a second,
    // file:// copy whose absolute Vite asset URLs would be broken.
    const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];
    if (!body) throw new Error('No se ha podido obtener el contenido renderizado.');
    const markup = body.replace(/\bclass=/g, 'className=').replace(/<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b([^>]*?)\s*\/?>/gi, '<$1$2 />');
    await writeFile(auditSnapshot, `import './portfolio.css';\nexport default function AuditSnapshot() { return (<>${markup}</>); }`);
  } finally {
    await instance.close();
  }
}
const args = mode === 'capture'
  ? ['capture.mjs', url, '--out', '.hallmark/previews', '--name', 'portfolio', '--sizes', 'laptop,tablet,phone', '--full', '--scale', '1']
  : ['sloplint.mjs', auditSnapshot, auditCss, '--genre', 'editorial', '--render', '--url', url, ...process.argv.slice(3)];
const result = spawnSync(process.execPath, [join(skill, 'scripts', args[0]), ...args.slice(1)], {
  stdio: 'inherit',
  env: { ...process.env, CHROME_PATH: browser, HALLMARK_PUPPETEER: process.cwd() },
});
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
