// Post-deploy check: every page in the live sitemap and every asset it references must return 200 with the right content type.
const SITE_URL = (process.env.SITE_URL || "https://ha2mad.github.io/pk-salary-tools/").replace(/\/?$/, "/");
const expected = { ".css": "text/css", ".js": "javascript" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  for (let i = 0; i < 4; i++) {
    try { const r = await fetch(url, { headers: { "Cache-Control": "no-cache" } }); if (r.status < 500) return r; } catch { /* retry */ }
    await sleep(3000 * (i + 1));
  }
  return fetch(url);
}
const sm = await (await get(SITE_URL + "sitemap.xml")).text();
const pages = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!pages.length) { console.error("No pages in sitemap"); process.exit(1); }
const assets = new Set(); let bad = 0;
for (const page of pages) {
  const r = await get(page);
  if (r.status !== 200) { console.error(`PAGE ${r.status} ${page}`); bad++; continue; }
  const html = await r.text();
  for (const [, u] of html.matchAll(/<(?:link[^>]+rel="stylesheet"[^>]*href|script[^>]+src)="([^"]+)"/g)) assets.add(new URL(u, page).href);
  if (!/rel="stylesheet"/.test(html)) { console.error(`No stylesheet on ${page}`); bad++; }
}
for (const a of assets) {
  const r = await get(a), ct = r.headers.get("content-type") || "";
  const ext = new URL(a).pathname.match(/\.\w+$/)?.[0];
  const ok = r.status === 200 && (!expected[ext] || ct.includes(expected[ext]));
  if (ok && ext === ".js") for (const [, dep] of (await r.text()).matchAll(/from "([^"]+)"/g)) assets.add(new URL(dep, a).href);
  console.log(`${ok ? "OK " : "BAD"} ${r.status} ${ct} ${a}`);
  if (!ok) bad++;
}
console.log(`${pages.length} pages, ${assets.size} assets, ${bad} problems`);
process.exit(bad ? 1 : 0);
