// Internal link and asset checker for dist/ (no network).
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })("dist");
let bad = 0;
const BASE = new URL(process.env.SITE_URL || "https://ha2mad.github.io/pk-salary-tools/").pathname;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    const clean = url.split("#")[0].split("?")[0];
    if (clean.startsWith("/") && !clean.startsWith(BASE)) { console.error(`Link outside base path in ${f}: ${url}`); bad++; continue; }
    let target = clean.startsWith("/") ? resolve("dist", clean.slice(BASE.length)) : resolve(dirname(f), clean);
    if (clean.endsWith("/") || url === "./" || existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
    if (!existsSync(target)) { console.error(`Broken link in ${f}: ${url}`); bad++; }
  }
}
console.log(`Checked ${files.length} pages, ${bad} broken internal links`);
process.exit(bad ? 1 : 0);
