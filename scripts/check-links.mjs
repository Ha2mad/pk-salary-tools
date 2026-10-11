// Internal link and asset checker for dist/ (no network).
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })("dist");
let bad = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    let target = resolve(dirname(f), url.split("#")[0]);
    if (url.endsWith("/") || url === "./" || existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
    if (!existsSync(target)) { console.error(`Broken link in ${f}: ${url}`); bad++; }
  }
}
console.log(`Checked ${files.length} pages, ${bad} broken internal links`);
process.exit(bad ? 1 : 0);
