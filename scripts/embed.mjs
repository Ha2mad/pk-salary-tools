// Builds self-contained, copy-paste snippets (one <div>, one <style>, one <script>) for Blogger posts.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const strip = (f) => readFileSync("site/assets/" + f, "utf8")
  .split("\n").filter((l) => !/^\s*import\s/.test(l)).join("\n").replace(/^export\s+/gm, "");
export const TOOLS = { tax: "mountTax", increment: "mountIncrement", zakat: "mountZakat" };
export function embedSnippet(tool, siteUrl) {
  const fn = TOOLS[tool];
  if (!fn) throw new Error("Unknown tool " + tool);
  const id = "pkst-embed-" + tool;
  const css = readFileSync("site/assets/tools.css", "utf8");
  const js = [strip("tax.js"), strip("finance.js"), strip("ui.js")].join("\n");
  return `<!-- Pakistan Salary Tools: ${tool} calculator. Paste into Blogger in HTML view. Source: ${siteUrl} -->
<div id="${id}"><noscript>This calculator needs JavaScript.</noscript></div>
<style>${css}</style>
<script>
(function () {
${js}
${fn}(document.getElementById("${id}"));
})();
</script>
`;
}
export function buildEmbeds(out, siteUrl) {
  mkdirSync(out + "/embed", { recursive: true });
  for (const t of Object.keys(TOOLS)) {
    const snip = embedSnippet(t, siteUrl);
    writeFileSync(`${out}/embed/${t}.snippet.html`, snip);
    writeFileSync(`${out}/embed/${t}-demo.html`, `<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Embed demo: ${t}</title><meta name="robots" content="noindex"></head><body><main>\n${snip}</main></body></html>\n`);
  }
}
