import { mkdirSync, writeFileSync, cpSync, rmSync, readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { buildEmbeds } from "./embed.mjs";
import { icons } from "../src/icons.mjs";
import { pages } from "../src/pages.mjs";
import { sitemapXml } from "./sitemap.mjs";
const SITE_URL = (process.env.SITE_URL || "https://ha2mad.github.io/pk-salary-tools/").replace(/\/?$/, "/");
const out = "dist";
rmSync(out, { recursive: true, force: true });
mkdirSync(out + "/assets", { recursive: true });
cpSync("site/assets", out + "/assets", { recursive: true });
// Cache busting: version every asset by content hash; absolute base path so URLs never depend on relative resolution.
const BASE = new URL(SITE_URL).pathname;
const hash = (f) => createHash("sha256").update(readFileSync("site/assets/" + f)).digest("hex").slice(0, 10);
const V = Object.fromEntries(readdirSync("site/assets").map((f) => [f, hash(f)]));
for (const f of readdirSync(out + "/assets").filter((f) => f.endsWith(".js"))) {
  const p = out + "/assets/" + f;
  writeFileSync(p, readFileSync(p, "utf8").replace(/from "\.\/([\w.-]+\.js)"/g, (m, dep) => `from "./${dep}?v=${V[dep]}"`));
}
const asset = (f) => `${BASE}assets/${f}?v=${V[f]}`;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
for (const p of pages) {
  const depth = p.path.split("/").filter(Boolean).length;
  const root = depth ? "../".repeat(depth) : "./";
  const url = SITE_URL + p.path;
  const cur = (href) => (p.path === href ? ' aria-current="page"' : "");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
${p.home ? '<meta name="google-site-verification" content="jcVUv44wAOh-0-9kzhFpILEmYd6vCqKxorakSvpIDOU" />\n' : ""}<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<meta name="theme-color" content="#075131">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="${asset("style.css")}">
${p.script ? `<link rel="stylesheet" href="${asset("tools.css")}">` : ""}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header"><div class="wrap">
<a class="brand" href="${root}"><span class="brand-mark">${icons.logo}</span>Pakistan Salary Tools</a>
<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">${icons.menu}<span>Menu</span></button>
<nav id="site-nav" class="site-nav" aria-label="Main"><ul class="nav-list">
<li><a href="${root}tools/salary-tax-calculator/"${cur("tools/salary-tax-calculator/")}>Salary Tax</a></li>
<li><a href="${root}tools/salary-increment-calculator/"${cur("tools/salary-increment-calculator/")}>Increment</a></li>
<li><a href="${root}tools/zakat-calculator/"${cur("tools/zakat-calculator/")}>Zakat</a></li>
<li><a href="${root}about/"${cur("about/")}>About</a></li>
</ul></nav></div></header>
<main id="main">
${p.home ? p.body.replaceAll("{{root}}", root) : `<div class="page"><div class="wrap"><div class="prose">${p.eyebrow ? `<span class="eyebrow">${p.eyebrow}</span>` : ""}${p.body}</div></div></div>`}
</main>
<footer class="site-footer"><div class="wrap">
<div><a class="brand" href="${root}"><span class="brand-mark">${icons.logo}</span>Pakistan Salary Tools</a>
<p>Free, private calculators for salaried people in Pakistan. Estimates only, not tax or religious advice. Not affiliated with the FBR.</p></div>
<nav aria-label="Footer"><ul>
<li><a href="${root}about/">About</a></li><li><a href="${root}contact/">Contact</a></li>
<li><a href="${root}privacy-policy/">Privacy Policy</a></li><li><a href="${root}disclaimer/">Disclaimer</a></li>
</ul><p>© ${new Date().getFullYear()} Pakistan Salary Tools</p></nav>
</div></footer>
<script type="module" src="${asset("nav.js")}"></script>
${p.script ? `<script type="module" src="${asset(p.script)}"></script>` : ""}
</body>
</html>
`;
  mkdirSync(out + "/" + p.path, { recursive: true });
  writeFileSync(out + "/" + p.path + "index.html", html);
}
writeFileSync(out + "/sitemap.xml", sitemapXml(pages, SITE_URL));
writeFileSync(out + "/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
writeFileSync(out + "/404.html", `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found</title></head><body><main><h1>Page not found</h1><p><a href="${SITE_URL}">Go to the home page</a></p></main></body></html>\n`);
buildEmbeds(out, SITE_URL);
console.log("Built", pages.length, "pages for", SITE_URL);
