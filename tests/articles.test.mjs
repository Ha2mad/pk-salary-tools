import { test } from "node:test";
import assert from "node:assert/strict";
import { computeTax } from "../site/assets/tax.js";
import { articles } from "../src/articles.mjs";
const rs = (n) => "Rs " + Math.round(n).toLocaleString("en-US");
const body = articles.find((a) => a.path.startsWith("guides/income-tax-on-monthly-salary")).body;
const rows = [...body.matchAll(/<tr><td>(Rs [\d,]+)<\/td>(.*?)<\/tr>/g)];
test("monthly tax table matches calculator logic (Tax Year 2027)", () => {
  const main = rows.filter(([, , rest]) => (rest.match(/<td>/g) || []).length === 5);
  assert.equal(main.length, 12);
  for (const [, m, rest] of main) {
    const monthly = Number(m.replace(/\D/g, ""));
    const r = computeTax(monthly * 12, "2027");
    const cells = [...rest.matchAll(/<td>(.*?)<\/td>/g)].map((x) => x[1]);
    assert.equal(cells[0], rs(monthly * 12));
    assert.equal(cells[1], rs(r.monthlyTax));
    assert.equal(cells[2], rs(r.monthlyTakeHome));
    assert.equal(cells[3], r.effectiveRate === 0 ? "0%" : (r.effectiveRate * 100).toFixed(2) + "%");
    assert.equal(cells[4], Math.round(r.marginalRate * 100) + "%");
  }
});
test("comparison table matches calculator logic (2026 vs 2027)", () => {
  const cmp = rows.filter(([, , rest]) => (rest.match(/<td>/g) || []).length === 3);
  assert.equal(cmp.length, 8);
  for (const [, m, rest] of cmp) {
    const monthly = Number(m.replace(/\D/g, ""));
    const a = computeTax(monthly * 12, "2026").monthlyTax, b = computeTax(monthly * 12, "2027").monthlyTax;
    const cells = [...rest.matchAll(/<td>(.*?)<\/td>/g)].map((x) => x[1]);
    assert.deepEqual(cells, [rs(a), rs(b), rs(a - b)]);
  }
});
test("worked example: Rs 300,000/month", () => {
  assert.equal(computeTax(3600000, "2027").annualTax, 416000);
  assert.match(body, /Rs 316,000 \+ Rs 100,000 = Rs 416,000/);
});
