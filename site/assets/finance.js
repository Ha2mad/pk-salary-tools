import { computeTax } from "./tax.js";

// Salary increment: compare take-home before and after a raise.
export function incrementImpact(currentMonthly, raisePercent, year = "2026") {
  const cur = Number(currentMonthly), pct = Number(raisePercent);
  if (!Number.isFinite(cur) || cur < 0) throw new Error("Salary must be a non-negative number");
  if (!Number.isFinite(pct) || pct < -100) throw new Error("Raise percent must be a number >= -100");
  const newMonthly = cur * (1 + pct / 100);
  const before = computeTax(cur * 12, year), after = computeTax(newMonthly * 12, year);
  const grossGain = (newMonthly - cur) * 12;
  const netGain = after.annualTakeHome - before.annualTakeHome;
  return {
    newMonthly: Math.round(newMonthly),
    before, after,
    monthlyGrossGain: Math.round(grossGain / 12),
    monthlyNetGain: Math.round(netGain / 12),
    keptShare: grossGain > 0 ? netGain / grossGain : 1
  };
}

// Reverse: smallest annual gross whose take-home >= target annual net.
export function grossForNet(targetAnnualNet, year = "2026") {
  const t = Number(targetAnnualNet);
  if (!Number.isFinite(t) || t < 0) throw new Error("Target must be a non-negative number");
  const net = (g) => g - computeTax(g, year).annualTax;
  let lo = 0, hi = Math.max(1, t);
  while (net(hi) < t) hi *= 2;
  while (hi - lo > 1) { const mid = Math.floor((lo + hi) / 2); if (net(mid) >= t) hi = mid; else lo = mid; }
  return net(lo) >= t ? lo : hi;
}

// Zakat at 2.5% on net zakatable wealth if it reaches nisab.
export const ZAKAT_RATE = 0.025;
export const NISAB_GOLD_GRAMS = 87.48;   // 7.5 tola
export const NISAB_SILVER_GRAMS = 612.36; // 52.5 tola
export const TOLA_GRAMS = 11.664;

export function computeZakat({ cash = 0, bank = 0, goldGrams = 0, goldPricePerGram = 0, silverGrams = 0,
  silverPricePerGram = 0, investments = 0, businessGoods = 0, receivables = 0, liabilities = 0, nisabBasis = "silver" }) {
  const nums = { cash, bank, goldGrams, goldPricePerGram, silverGrams, silverPricePerGram, investments, businessGoods, receivables, liabilities };
  for (const [k, v] of Object.entries(nums)) if (!Number.isFinite(Number(v)) || Number(v) < 0) throw new Error(`${k} must be a non-negative number`);
  const n = Object.fromEntries(Object.entries(nums).map(([k, v]) => [k, Number(v)]));
  const goldValue = n.goldGrams * n.goldPricePerGram, silverValue = n.silverGrams * n.silverPricePerGram;
  const assets = n.cash + n.bank + goldValue + silverValue + n.investments + n.businessGoods + n.receivables;
  const net = Math.max(0, assets - n.liabilities);
  let nisab;
  if (nisabBasis === "gold") nisab = NISAB_GOLD_GRAMS * n.goldPricePerGram;
  else if (nisabBasis === "silver") nisab = NISAB_SILVER_GRAMS * n.silverPricePerGram;
  else throw new Error("nisabBasis must be 'gold' or 'silver'");
  const nisabKnown = nisab > 0;
  const due = nisabKnown && net >= nisab;
  return { goldValue, silverValue, assets, net, nisab, nisabKnown, due, zakat: due ? Math.round(net * ZAKAT_RATE) : 0 };
}
