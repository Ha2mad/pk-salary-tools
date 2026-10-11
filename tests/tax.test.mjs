import { test } from "node:test";
import assert from "node:assert/strict";
import { computeTax, breakdown } from "../site/assets/tax.js";

const cases = [
  [0, 0], [600000, 0], [600001, 0], [1200000, 6000], [1800000, 72000],
  [2200000, 116000], [3200000, 346000], [4100000, 616000], [5000000, 931000],
  [10000000, 2681000],
  [12000000, Math.round((616000 + 0.35 * 7900000) * 1.09)]
];
for (const [inc, tax] of cases) {
  test(`annual ${inc} -> tax ${tax}`, () => assert.equal(computeTax(inc).annualTax, tax));
}

test("slabs are continuous at every boundary", () => {
  for (const b of [600000, 1200000, 2200000, 3200000, 4100000]) {
    const below = computeTax(b).annualTax, above = computeTax(b + 1).annualTax;
    assert.ok(above - below >= 0 && above - below <= 1, `jump at ${b}: ${below} -> ${above}`);
  }
});

test("tax is monotonic non-decreasing", () => {
  let prev = -1;
  for (let i = 0; i <= 15000000; i += 25000) { const t = computeTax(i).annualTax; assert.ok(t >= prev); prev = t; }
});

test("breakdown sums to base tax", () => {
  for (const inc of [750000, 1800000, 3500000, 6000000]) {
    const sum = breakdown(inc).reduce((a, b) => a + b.tax, 0);
    assert.equal(Math.round(sum), computeTax(inc).baseTax);
  }
});

test("monthly figures and rates", () => {
  const r = computeTax(1800000);
  assert.equal(r.monthlyTax, 6000);
  assert.equal(r.monthlyTakeHome, 144000);
  assert.equal(r.marginalRate, 0.11);
  assert.ok(Math.abs(r.effectiveRate - 0.04) < 1e-9);
});

test("surcharge only above 10M", () => {
  assert.equal(computeTax(10000000).surcharge, 0);
  assert.ok(computeTax(10000001).surcharge > 0);
});

test("rejects invalid input", () => {
  assert.throws(() => computeTax(-1));
  assert.throws(() => computeTax("abc"));
  assert.throws(() => computeTax(100, "1999"));
});
