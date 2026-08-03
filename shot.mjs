import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await page.goto('http://localhost:3000/product', { waitUntil: 'networkidle' });
const el = await page.locator('text=Evidence, Reporting').first();
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: 'C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-Documents-software-loctiva-marketing/c05d6acb-63e3-40f0-b9b4-e1bf4639cdb7/scratchpad/evidence-desktop.png' });

const mobile = await browser.newPage({ viewport: { width: 390, height: 1600 } });
await mobile.goto('http://localhost:3000/product', { waitUntil: 'networkidle' });
const elm = await mobile.locator('text=Evidence, Reporting').first();
await elm.scrollIntoViewIfNeeded();
await mobile.waitForTimeout(700);
await mobile.screenshot({ path: 'C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-Documents-software-loctiva-marketing/c05d6acb-63e3-40f0-b9b4-e1bf4639cdb7/scratchpad/evidence-mobile.png' });

await browser.close();
