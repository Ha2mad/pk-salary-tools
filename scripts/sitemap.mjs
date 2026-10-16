// lastmod comes from each page's `updated` or `published` date (YYYY-MM-DD).
// A rebuild must not stamp every URL with today's date.
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function pageLastmod(page) {
  const date = page.updated || page.published;
  if (typeof date !== "string" || !ISO_DATE.test(date)) {
    throw new Error(`Missing lastmod for /${page.path || ""}: set updated or published to YYYY-MM-DD`);
  }
  return date;
}

const xml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function sitemapXml(pages, siteUrl) {
  const base = String(siteUrl).replace(/\/?$/, "/");
  const urls = pages.map((p) => `  <url><loc>${xml(base + p.path)}</loc><lastmod>${pageLastmod(p)}</lastmod></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
