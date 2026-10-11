import { mkdirSync, writeFileSync, cpSync, rmSync } from "node:fs";
import { buildEmbeds } from "./embed.mjs";
import { pages } from "../src/pages.mjs";
const SITE_URL = (process.env.SITE_URL || "https://ha2mad.github.io/pk-salary-tools/").replace(/\/?$/, "/");
const out = "dist";
rmSync(out, { recursive: true, force: true });
mkdirSync(out + "/assets", { recursive: true });
cpSync("site/assets", out + "/assets", { recursive: true });
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
for (const p of pages) {
  const depth = p.path.split("/").filter(Boolean).length;
  const root = depth ? "../".repeat(depth) : "./";
  const url = SITE_URL + p.path;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="${root}assets/style.css">
${p.script ? `<link rel="stylesheet" href="${root}assets/tools.css">` : ""}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header><div class="wrap"><a class="brand" href="${root}">Pakistan Salary Tools</a>
<nav aria-label="Main"><ul>
<li><a href="${root}tools/salary-tax-calculator/">Salary Tax</a></li>
<li><a href="${root}tools/salary-increment-calculator/">Increment</a></li>
<li><a href="${root}tools/zakat-calculator/">Zakat</a></li>
<li><a href="${root}about/">About</a></li>
</ul></nav></div></header>
<main id="main" class="wrap">
${p.body}
</main>
<footer><div class="wrap"><nav aria-label="Footer"><ul>
<li><a href="${root}about/">About</a></li><li><a href="${root}contact/">Contact</a></li>
<li><a href="${root}privacy-policy/">Privacy Policy</a></li><li><a href="${root}disclaimer/">Disclaimer</a></li>
</ul></nav><p>Estimates only, not tax advice. Not affiliated with FBR.</p></div></footer>
${p.script ? `<script type="module" src="${root}assets/${p.script}"></script>` : ""}
</body>
</html>
`;
  mkdirSync(out + "/" + p.path, { recursive: true });
  writeFileSync(out + "/" + p.path + "index.html", html);
}
const today = new Date().toISOString().slice(0, 10);
writeFileSync(out + "/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`);
writeFileSync(out + "/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
writeFileSync(out + "/404.html", `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found</title></head><body><main><h1>Page not found</h1><p><a href="${SITE_URL}">Go to the home page</a></p></main></body></html>\n`);
buildEmbeds(out, SITE_URL);
console.log("Built", pages.length, "pages for", SITE_URL);
