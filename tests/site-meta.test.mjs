import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { pages } from "../src/pages.mjs";
import { sitemapXml, pageLastmod } from "../scripts/sitemap.mjs";

const SITE = "https://ha2mad.github.io/pk-salary-tools/";

// Content last-modified dates from page data / git history of each page, not the build clock.
const EXPECTED_LASTMOD = {
  "": "2026-10-26",
  "tools/salary-tax-calculator/": "2026-10-22",
  "tools/salary-increment-calculator/": "2026-10-19",
  "tools/zakat-calculator/": "2026-10-26",
  "guides/income-tax-on-monthly-salary-2026-27/": "2026-10-15",
  "guides/gross-salary-for-take-home-pay-2026-27/": "2026-10-19",
  "guides/tax-on-bonus-2026-27/": "2026-10-22",
  "guides/zakat-tax-deduction-salaried-2026-27/": "2026-10-26",
  "about/": "2026-10-11",
  "contact/": "2026-10-13",
  "privacy-policy/": "2026-10-13",
  "disclaimer/": "2026-10-11",
};

test("sitemap lists every public page with its own lastmod", () => {
  assert.deepEqual(pages.map((p) => p.path).sort(), Object.keys(EXPECTED_LASTMOD).sort());
  for (const page of pages) {
    assert.equal(pageLastmod(page), EXPECTED_LASTMOD[page.path]);
  }
  const xml = sitemapXml(pages, SITE);
  const urls = [...xml.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod><\/url>/g)];
  assert.equal(urls.length, pages.length);
  const found = new Map(urls.map(([, loc, lastmod]) => [loc, lastmod]));
  for (const page of pages) {
    assert.equal(found.get(SITE + page.path), EXPECTED_LASTMOD[page.path]);
  }
  assert.equal(found.size, pages.length);
  assert.doesNotMatch(xml, /embed\//);
  assert.doesNotMatch(xml, /404/);
});

const SITE_VERIFICATION = '<meta name="google-site-verification" content="jcVUv44wAOh-0-9kzhFpILEmYd6vCqKxorakSvpIDOU" />';

test("built sitemap matches the generator and the homepage head has the Search Console tag", () => {
  execFileSync("node", ["scripts/build.mjs"], { env: { ...process.env, SITE_URL: SITE } });
  const built = readFileSync("dist/sitemap.xml", "utf8");
  assert.equal(built, sitemapXml(pages, SITE));
  const home = readFileSync("dist/index.html", "utf8");
  const head = home.slice(home.indexOf("<head>"), home.indexOf("</head>"));
  assert.ok(head.includes(SITE_VERIFICATION));
  assert.doesNotMatch(head, /<!-- google-site-verification/);
  const about = readFileSync("dist/about/index.html", "utf8");
  const aboutHead = about.slice(about.indexOf("<head>"), about.indexOf("</head>"));
  assert.doesNotMatch(aboutHead, /google-site-verification/);
});
