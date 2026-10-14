import { test } from "node:test";
import assert from "node:assert/strict";
import { computeTax, breakdown, CURRENT_TAX_YEAR, TAX_YEARS } from "../site/assets/tax.js";

// Hand-worked from the Finance Act 2026 table:
// tax = fixed amount + rate × (income − band floor).
const cases2027 = [
  [0, 0],
  [600000, 0],
  [600001, 0],
  [1200000, 6000],
  [1800000, 72000],
  [2200000, 116000],
  [2400000, 156000],
  [3000000, 276000],
  [3200000, 316000],
  [3600000, 416000],
  [4100000, 541000],
  [4800000, 744000],
  [5600000, 976000],
  [6000000, 1104000],
  [7000000, 1424000],
  [7200000, 1494000],
  [10000000, 2474000],
  [12000000, 3174000]
];
for (const [inc, tax] of cases2027) {
  test(`TY2027 annual ${inc} -> tax ${tax}`, () => {
    assert.equal(computeTax(inc).annualTax, tax);
    assert.equal(computeTax(inc).year, CURRENT_TAX_YEAR);
    assert.equal(computeTax(inc).surcharge, 0);
  });
}

test("2027 fixed amounts equal tax at the previous boundary", () => {
  const slabs = TAX_YEARS["2027"].slabs;
  for (let i = 1; i < slabs.length; i++) {
    const prev = slabs[i - 1];
    const taxAtFloor = prev.base + (prev.upTo - prev.from) * prev.rate;
    assert.equal(taxAtFloor, slabs[i].base, `band starting at ${slabs[i].from}`);
  }
});

test("2027 slabs are continuous at every boundary, including Rs 10 million", () => {
  for (const b of [600000, 1200000, 2200000, 3200000, 4100000, 5600000, 7000000, 10000000]) {
    const below = computeTax(b), above = computeTax(b + 1);
    assert.ok(above.annualTax - below.annualTax >= 0 && above.annualTax - below.annualTax <= 1, `tax jump at ${b}: ${below.annualTax} -> ${above.annualTax}`);
    assert.ok(above.annualTakeHome >= below.annualTakeHome, `take-home fell at ${b}`);
  }
});

test("2027 tax is monotonic non-decreasing", () => {
  let prev = -1;
  for (let i = 0; i <= 15000000; i += 25000) {
    const t = computeTax(i).annualTax;
    assert.ok(t >= prev);
    prev = t;
  }
});

test("2027 breakdown sums to base tax", () => {
  for (const inc of [750000, 1800000, 3500000, 6000000, 8000000, 12000000]) {
    const sum = breakdown(inc).reduce((a, b) => a + b.tax, 0);
    assert.equal(Math.round(sum), computeTax(inc).baseTax);
  }
});

test("2027 monthly figures for Rs 150,000 and Rs 200,000", () => {
  const mid = computeTax(1800000);
  assert.equal(mid.monthlyTax, 6000);
  assert.equal(mid.monthlyTakeHome, 144000);
  assert.equal(mid.marginalRate, 0.11);
  assert.ok(Math.abs(mid.effectiveRate - 0.04) < 1e-9);
  const upper = computeTax(2400000);
  assert.equal(upper.monthlyTax, 13000);
  assert.equal(upper.marginalRate, 0.2);
  assert.equal(upper.annualTakeHome, 2244000);
});

test("2027 has no salaried surcharge above Rs 10 million", () => {
  const at = computeTax(10000000);
  const over = computeTax(12000000);
  assert.equal(at.surcharge, 0);
  assert.equal(over.surcharge, 0);
  assert.equal(over.marginalRate, 0.35);
  assert.equal(TAX_YEARS["2027"].surchargeRate, 0);
});

const cases2026 = [
  [0, 0], [600000, 0], [600001, 0], [1200000, 6000], [1800000, 72000],
  [2200000, 116000], [2400000, 162000], [3200000, 346000], [4100000, 616000],
  [5000000, 931000], [6000000, 1281000], [10000000, 2681000],
  [12000000, Math.round((616000 + 0.35 * 7900000) * 1.09)]
];
for (const [inc, tax] of cases2026) {
  test(`TY2026 annual ${inc} -> tax ${tax}`, () => assert.equal(computeTax(inc, "2026").annualTax, tax));
}

test("2026 surcharge only above Rs 10 million, and it can cut take-home", () => {
  assert.equal(computeTax(10000000, "2026").surcharge, 0);
  const over = computeTax(10000001, "2026");
  assert.ok(over.surcharge > 0);
  assert.ok(over.annualTakeHome < computeTax(10000000, "2026").annualTakeHome);
  assert.equal(over.marginalRate, 0.35 * 1.09);
});

test("rejects invalid input", () => {
  assert.throws(() => computeTax(-1));
  assert.throws(() => computeTax("abc"));
  assert.throws(() => computeTax(100, "1999"));
});
