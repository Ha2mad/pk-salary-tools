// Pakistan salaried income tax, Division I Part I First Schedule, ITO 2001.
// Tax year 2026 (1 Jul 2025 - 30 Jun 2026), as amended by Finance Act 2025.
export const TAX_YEARS = {
  "2026": {
    label: "Tax Year 2026 (July 2025 - June 2026)",
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

export function computeTax(annualIncome, year = "2026") {
  const cfg = TAX_YEARS[year];
  if (!cfg) throw new Error("Unknown tax year: " + year);
  const income = Number(annualIncome);
  if (!Number.isFinite(income) || income < 0) throw new Error("Income must be a non-negative number");
  const slab = cfg.slabs.find((s) => income <= s.upTo);
  const idx = cfg.slabs.indexOf(slab);
  const baseTax = slab.base + (income - slab.from) * slab.rate;
  const surcharge = income > cfg.surchargeThreshold ? baseTax * cfg.surchargeRate : 0;
  const total = Math.round(baseTax + surcharge);
  return {
    annualIncome: income,
    slabIndex: idx,
    slab,
    baseTax: Math.round(baseTax),
    surcharge: Math.round(surcharge),
    annualTax: total,
    monthlyTax: Math.round(total / 12),
    annualTakeHome: income - total,
    monthlyTakeHome: Math.round((income - total) / 12),
    effectiveRate: income > 0 ? total / income : 0,
    marginalRate: slab.rate * (income > cfg.surchargeThreshold ? 1 + cfg.surchargeRate : 1)
  };
}

export function breakdown(annualIncome, year = "2026") {
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
