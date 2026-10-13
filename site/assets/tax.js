// Pakistan salaried income tax, clause (2) of Division I, Part I, First Schedule, ITO 2001.
// Tax Year 2027 (1 Jul 2026 – 30 Jun 2027) is the default: Finance Act 2026
// (Gazette of Pakistan, Extraordinary, 26 June 2026), explained in FBR Income
// Tax Circular No. 02 of 2026-27 and the FBR Withholding Tax Rate Card for
// Tax Year 2027. Tax Year 2026 is kept for comparison only.
export const CURRENT_TAX_YEAR = "2027";

export const TAX_YEARS = {
  "2027": {
    label: "Tax Year 2027 (July 2026 – June 2027)",
    shortLabel: "Tax Year 2027",
    slabs: [
      { upTo: 600000, base: 0, rate: 0, from: 0 },
      { upTo: 1200000, base: 0, rate: 0.01, from: 600000 },
      { upTo: 2200000, base: 6000, rate: 0.11, from: 1200000 },
      { upTo: 3200000, base: 116000, rate: 0.20, from: 2200000 },
      { upTo: 4100000, base: 316000, rate: 0.25, from: 3200000 },
      { upTo: 5600000, base: 541000, rate: 0.29, from: 4100000 },
      { upTo: 7000000, base: 976000, rate: 0.32, from: 5600000 },
      { upTo: Infinity, base: 1424000, rate: 0.35, from: 7000000 }
    ],
    // Finance Act 2026: section 4AB proviso now says no surcharge is payable
    // where income is chargeable under the head Salary.
    surchargeThreshold: Infinity,
    surchargeRate: 0
  },
  "2026": {
    label: "Tax Year 2026 (July 2025 – June 2026)",
    shortLabel: "Tax Year 2026",
    // Fixed amounts Rs 346,000 and Rs 616,000 keep the slabs continuous.
    // FBR Circular 01 of 2025-26 prints Rs 345,000 and Rs 615,000; the ICMA
    // rate card and the arithmetic of the bands below match 346,000 / 616,000.
    slabs: [
      { upTo: 600000, base: 0, rate: 0, from: 0 },
      { upTo: 1200000, base: 0, rate: 0.01, from: 600000 },
      { upTo: 2200000, base: 6000, rate: 0.11, from: 1200000 },
      { upTo: 3200000, base: 116000, rate: 0.23, from: 2200000 },
      { upTo: 4100000, base: 346000, rate: 0.30, from: 3200000 },
      { upTo: Infinity, base: 616000, rate: 0.35, from: 4100000 }
    ],
    surchargeThreshold: 10000000,
    surchargeRate: 0.09
  }
};

export function computeTax(annualIncome, year = CURRENT_TAX_YEAR) {
  const cfg = TAX_YEARS[year];
  if (!cfg) throw new Error("Unknown tax year: " + year);
  const income = Number(annualIncome);
  if (!Number.isFinite(income) || income < 0) throw new Error("Income must be a non-negative number");
  const slab = cfg.slabs.find((s) => income <= s.upTo);
  const idx = cfg.slabs.indexOf(slab);
  const baseTax = slab.base + (income - slab.from) * slab.rate;
  const appliesSurcharge = cfg.surchargeRate > 0 && income > cfg.surchargeThreshold;
  const surcharge = appliesSurcharge ? baseTax * cfg.surchargeRate : 0;
  const total = Math.round(baseTax + surcharge);
  return {
    annualIncome: income,
    year,
    slabIndex: idx,
    slab,
    baseTax: Math.round(baseTax),
    surcharge: Math.round(surcharge),
    annualTax: total,
    monthlyTax: Math.round(total / 12),
    annualTakeHome: income - total,
    monthlyTakeHome: Math.round((income - total) / 12),
    effectiveRate: income > 0 ? total / income : 0,
    marginalRate: slab.rate * (appliesSurcharge ? 1 + cfg.surchargeRate : 1)
  };
}

export function breakdown(annualIncome, year = CURRENT_TAX_YEAR) {
  const { slabs } = TAX_YEARS[year];
  const out = [];
  for (const s of slabs) {
    if (annualIncome <= s.from) break;
    const top = Math.min(annualIncome, s.upTo);
    out.push({ from: s.from, to: s.upTo, rate: s.rate, taxable: top - s.from, tax: (top - s.from) * s.rate });
  }
  return out;
}

export const formatPKR = (n) => "Rs " + Math.round(n).toLocaleString("en-PK");
