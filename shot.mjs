import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/product', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-Documents-software-loctiva-marketing/c05d6acb-63e3-40f0-b9b4-e1bf4639cdb7/scratchpad/product-hero-desktop.png' });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto('http://localhost:3000/product', { waitUntil: 'networkidle' });
await mobile.screenshot({ path: 'C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-Documents-software-loctiva-marketing/c05d6acb-63e3-40f0-b9b4-e1bf4639cdb7/scratchpad/product-hero-mobile.png' });

await browser.close();
