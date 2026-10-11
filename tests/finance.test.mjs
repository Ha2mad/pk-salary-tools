import { test } from "node:test";
import assert from "node:assert/strict";
import { incrementImpact, grossForNet, computeZakat, NISAB_SILVER_GRAMS, NISAB_GOLD_GRAMS } from "../site/assets/finance.js";
import { computeTax } from "../site/assets/tax.js";

test("increment within the tax-free band keeps 100%", () => {
  const r = incrementImpact(40000, 10);
  assert.equal(r.newMonthly, 44000);
  assert.equal(r.monthlyNetGain, 4000);
  assert.equal(r.keptShare, 1);
});
test("increment across slabs: 100k -> 150k monthly", () => {
  const r = incrementImpact(100000, 50);
  assert.equal(r.before.annualTax, 6000);
  assert.equal(r.after.annualTax, 72000);
  assert.equal(r.monthlyNetGain, Math.round((600000 - 66000) / 12));
  assert.ok(r.keptShare > 0.88 && r.keptShare < 0.9);
});
test("zero raise", () => { const r = incrementImpact(200000, 0); assert.equal(r.monthlyNetGain, 0); assert.equal(r.keptShare, 1); });
test("pay cut is allowed", () => { assert.ok(incrementImpact(200000, -10).monthlyNetGain < 0); });
test("increment rejects bad input", () => {
  assert.throws(() => incrementImpact(-1, 10)); assert.throws(() => incrementImpact(1000, -101)); assert.throws(() => incrementImpact("x", 5));
});
test("grossForNet: tax-free target returns same amount", () => assert.equal(grossForNet(500000), 500000));
test("grossForNet finds minimal gross", () => {
  for (const target of [1000000, 1728000, 3000000, 6000000, 9000000]) {
    const g = grossForNet(target);
    assert.ok(g - computeTax(g).annualTax >= target, `net at ${g} below ${target}`);
    assert.ok(g - 1 - computeTax(g - 1).annualTax < target, `${g} not minimal for ${target}`);
  }
});
test("grossForNet: 1,728,000 net needs 1,800,000 gross", () => assert.equal(grossForNet(1728000), 1800000));
test("grossForNet rejects negative", () => assert.throws(() => grossForNet(-5)));

test("zakat due above silver nisab", () => {
  const r = computeZakat({ cash: 200000, bank: 300000, silverPricePerGram: 300 });
  assert.equal(r.nisab, NISAB_SILVER_GRAMS * 300);
  assert.equal(r.due, true);
  assert.equal(r.zakat, 12500);
});
test("zakat not due below nisab", () => {
  const r = computeZakat({ cash: 100000, silverPricePerGram: 300 });
  assert.equal(r.due, false); assert.equal(r.zakat, 0);
});
test("exactly at nisab is due", () => {
  const nisab = NISAB_SILVER_GRAMS * 250;
  assert.equal(computeZakat({ cash: nisab, silverPricePerGram: 250 }).due, true);
});
test("gold basis, gold valued, liabilities deducted", () => {
  const r = computeZakat({ goldGrams: 100, goldPricePerGram: 30000, cash: 500000, liabilities: 1000000, nisabBasis: "gold" });
  assert.equal(r.goldValue, 3000000);
  assert.equal(r.net, 2500000);
  assert.equal(r.nisab, NISAB_GOLD_GRAMS * 30000);
  assert.equal(r.due, false);
});
test("liabilities exceeding assets give zero net", () => {
  const r = computeZakat({ cash: 100, liabilities: 1000, silverPricePerGram: 300 });
  assert.equal(r.net, 0); assert.equal(r.zakat, 0);
});
test("unknown nisab price means not due", () => assert.equal(computeZakat({ cash: 1e7 }).due, false));
test("zakat rejects bad input", () => {
  assert.throws(() => computeZakat({ cash: -1 })); assert.throws(() => computeZakat({ nisabBasis: "copper" }));
});
