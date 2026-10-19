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

import { grossForNet } from "../site/assets/finance.js";
const gbody = articles.find((a) => a.path.startsWith("guides/gross-salary-for-take-home-pay")).body;
const grows = [...gbody.matchAll(/<tr><td>(Rs [\d,]+)<\/td>(.*?)<\/tr>/g)];
const cellsOf = (rest) => [...rest.matchAll(/<td>(.*?)<\/td>/g)].map((x) => x[1]);
test("gross-for-net table matches the reverse calculator (Tax Year 2027)", () => {
  const main = grows.filter(([, , rest]) => (rest.match(/<td>/g) || []).length === 4);
  assert.equal(main.length, 9);
  for (const [, t, rest] of main) {
    const target = Number(t.replace(/\D/g, ""));
    const g = grossForNet(target * 12, "2027"), r = computeTax(g, "2027");
    assert.ok(r.annualTakeHome >= target * 12 && g - 1 - computeTax(g - 1, "2027").annualTax < target * 12);
    assert.deepEqual(cellsOf(rest), [rs(g / 12), rs(g), rs(r.monthlyTax), Math.round(r.marginalRate * 100) + "%"]);
  }
});
test("gross-for-net comparison matches calculator logic (2026 vs 2027)", () => {
  const cmp = grows.filter(([, , rest]) => (rest.match(/<td>/g) || []).length === 3);
  assert.equal(cmp.length, 4);
  for (const [, t, rest] of cmp) {
    const target = Number(t.replace(/\D/g, ""));
    const a = Math.round(grossForNet(target * 12, "2026") / 12), b = Math.round(grossForNet(target * 12, "2027") / 12);
    assert.deepEqual(cellsOf(rest), [rs(a), rs(b), rs(a - b)]);
  }
});
test("gross-for-net worked example: Rs 200,000/month take-home", () => {
  assert.equal(grossForNet(2400000, "2027"), 2595000);
  assert.equal(computeTax(2595000, "2027").annualTax, 195000);
  assert.match(gbody, /gross = Rs 2,595,000 a year/);
  assert.match(gbody, /Tax = Rs 116,000 \+ 20% × Rs 395,000 = Rs 195,000/);
});
