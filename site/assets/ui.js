import { computeTax, breakdown, formatPKR } from "./tax.js";
import { incrementImpact, grossForNet, computeZakat, TOLA_GRAMS } from "./finance.js";

const pct = (x) => (x * 100).toFixed(2) + "%";
const field = (id, label, extra = "") => `<label for="${id}">${label}</label><input id="${id}" name="${id}" type="number" inputmode="decimal" min="0" step="any" ${extra}>`;
const val = (f, k) => f.elements.namedItem(k).value;
const num = (f, k) => (val(f, k) === "" ? 0 : Number(val(f, k)));
const err = (out, msg) => { out.innerHTML = `<p class="pkst-error" role="alert">${msg}</p>`; };
let uid = 0;

export function mountTax(root) {
  const p = "pkst" + (++uid) + "-";
  root.innerHTML = `<form class="pkst-form" novalidate>
  ${field(p + "amount", "Gross taxable salary (Rs)", 'required')}
  <label for="${p}period">This amount is</label>
  <select id="${p}period" name="${p}period"><option value="monthly">Monthly</option><option value="annual">Annual</option></select>
  <button type="submit">Calculate tax</button></form><div class="pkst-result" tabindex="-1" aria-live="polite"></div>`;
  const f = root.querySelector("form"), out = root.querySelector(".pkst-result");
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = val(f, p + "amount"), amount = Number(raw);
    if (raw === "" || !Number.isFinite(amount) || amount < 0) return err(out, "Please enter a valid salary (0 or more).");
    const annual = val(f, p + "period") === "monthly" ? amount * 12 : amount;
    const r = computeTax(annual);
    const rows = breakdown(annual).map((b) => `<tr><td>${formatPKR(b.from)} – ${b.to === Infinity ? "above" : formatPKR(b.to)}</td><td>${(b.rate * 100).toFixed(0)}%</td><td>${formatPKR(b.taxable)}</td><td>${formatPKR(b.tax)}</td></tr>`).join("");
    out.innerHTML = `<h2>Your estimate (Tax Year 2026)</h2><dl class="pkst-summary">
    <div><dt>Annual taxable salary</dt><dd>${formatPKR(annual)}</dd></div>
    <div><dt>Annual income tax</dt><dd>${formatPKR(r.annualTax)}</dd></div>
    <div><dt>Monthly tax deduction</dt><dd>${formatPKR(r.monthlyTax)}</dd></div>
    <div><dt>Monthly take-home</dt><dd>${formatPKR(r.monthlyTakeHome)}</dd></div>
    <div><dt>Effective rate</dt><dd>${pct(r.effectiveRate)}</dd></div>
    <div><dt>Marginal rate</dt><dd>${pct(r.marginalRate)}</dd></div></dl>
    ${r.surcharge ? `<p>Includes 9% surcharge of ${formatPKR(r.surcharge)} (taxable income above Rs 10 million).</p>` : ""}
    <table class="pkst-table"><caption>Slab-by-slab breakdown</caption><thead><tr><th scope="col">Band</th><th scope="col">Rate</th><th scope="col">Income in band</th><th scope="col">Tax</th></tr></thead><tbody>${rows}</tbody></table>`;
    out.focus();
  });
}

export function mountIncrement(root) {
  const p = "pkst" + (++uid) + "-";
  root.innerHTML = `<form class="pkst-form" data-mode="raise" novalidate><h2>How much of my raise do I keep?</h2>
  ${field(p + "cur", "Current gross monthly salary (Rs)", "required")}
  ${field(p + "raise", "Raise (%)", 'required min="-100"')}
  <button type="submit">Calculate</button></form><div class="pkst-result" tabindex="-1" aria-live="polite"></div>
  <form class="pkst-form" data-mode="reverse" novalidate><h2>What gross salary do I need?</h2>
  ${field(p + "target", "Target monthly take-home (Rs)", "required")}
  <button type="submit">Find gross salary</button></form><div class="pkst-result" tabindex="-1" aria-live="polite"></div>`;
  const [f1, f2] = root.querySelectorAll("form"), [o1, o2] = root.querySelectorAll(".pkst-result");
  f1.addEventListener("submit", (e) => {
    e.preventDefault();
    if (val(f1, p + "cur") === "" || val(f1, p + "raise") === "") return err(o1, "Please enter your salary and raise percentage.");
    let r; try { r = incrementImpact(num(f1, p + "cur"), num(f1, p + "raise")); } catch (x) { return err(o1, x.message); }
    o1.innerHTML = `<dl class="pkst-summary">
    <div><dt>New gross monthly</dt><dd>${formatPKR(r.newMonthly)}</dd></div>
    <div><dt>Take-home before</dt><dd>${formatPKR(r.before.monthlyTakeHome)}</dd></div>
    <div><dt>Take-home after</dt><dd>${formatPKR(r.after.monthlyTakeHome)}</dd></div>
    <div><dt>Extra gross / month</dt><dd>${formatPKR(r.monthlyGrossGain)}</dd></div>
    <div><dt>Extra take-home / month</dt><dd>${formatPKR(r.monthlyNetGain)}</dd></div>
    <div><dt>Share of raise you keep</dt><dd>${pct(r.keptShare)}</dd></div></dl>`;
    o1.focus();
  });
  f2.addEventListener("submit", (e) => {
    e.preventDefault();
    if (val(f2, p + "target") === "") return err(o2, "Please enter a target take-home amount.");
    let g; try { g = grossForNet(num(f2, p + "target") * 12); } catch (x) { return err(o2, x.message); }
    const r = computeTax(g);
    o2.innerHTML = `<dl class="pkst-summary">
    <div><dt>Gross monthly needed</dt><dd>${formatPKR(g / 12)}</dd></div>
    <div><dt>Gross annual needed</dt><dd>${formatPKR(g)}</dd></div>
    <div><dt>Monthly tax at that salary</dt><dd>${formatPKR(r.monthlyTax)}</dd></div></dl>`;
    o2.focus();
  });
}

export function mountZakat(root) {
  const p = "pkst" + (++uid) + "-";
  root.innerHTML = `<form class="pkst-form" novalidate>
  <fieldset><legend>Today's metal prices (check a local bullion rate)</legend>
  ${field(p + "gp", "Gold price per tola (Rs)")}${field(p + "sp", "Silver price per tola (Rs)")}</fieldset>
  <fieldset><legend>Your assets</legend>
  ${field(p + "cash", "Cash in hand (Rs)")}${field(p + "bank", "Bank balances (Rs)")}
  ${field(p + "gg", "Gold you own (tola)")}${field(p + "sg", "Silver you own (tola)")}
  ${field(p + "inv", "Shares, funds, savings certificates (Rs)")}${field(p + "biz", "Business stock for sale (Rs)")}
  ${field(p + "rec", "Money owed to you and likely to be repaid (Rs)")}</fieldset>
  <fieldset><legend>Deductions</legend>${field(p + "liab", "Debts and bills due now (Rs)")}</fieldset>
  <label for="${p}basis">Nisab based on</label>
  <select id="${p}basis" name="${p}basis"><option value="silver">Silver (52.5 tola, the common practice in Pakistan)</option><option value="gold">Gold (7.5 tola)</option></select>
  <button type="submit">Calculate Zakat</button></form><div class="pkst-result" tabindex="-1" aria-live="polite"></div>`;
  const f = root.querySelector("form"), out = root.querySelector(".pkst-result");
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const basis = val(f, p + "basis");
    const priceKey = basis === "gold" ? p + "gp" : p + "sp";
    if (!(num(f, priceKey) > 0)) return err(out, `Please enter today's ${basis} price to work out the nisab.`);
    let r;
    try {
      r = computeZakat({ cash: num(f, p + "cash"), bank: num(f, p + "bank"),
        goldGrams: num(f, p + "gg") * TOLA_GRAMS, goldPricePerGram: num(f, p + "gp") / TOLA_GRAMS,
        silverGrams: num(f, p + "sg") * TOLA_GRAMS, silverPricePerGram: num(f, p + "sp") / TOLA_GRAMS,
        investments: num(f, p + "inv"), businessGoods: num(f, p + "biz"), receivables: num(f, p + "rec"),
        liabilities: num(f, p + "liab"), nisabBasis: basis });
    } catch (x) { return err(out, "Please enter only positive numbers. " + x.message); }
    if (num(f, p + "gg") > 0 && !(num(f, p + "gp") > 0)) return err(out, "Please enter the gold price so your gold can be valued.");
    if (num(f, p + "sg") > 0 && !(num(f, p + "sp") > 0)) return err(out, "Please enter the silver price so your silver can be valued.");
    out.innerHTML = `<dl class="pkst-summary">
    <div><dt>Total zakatable assets</dt><dd>${formatPKR(r.assets)}</dd></div>
    <div><dt>Net after debts</dt><dd>${formatPKR(r.net)}</dd></div>
    <div><dt>Nisab (${basis})</dt><dd>${formatPKR(r.nisab)}</dd></div>
    <div><dt>Zakat due (2.5%)</dt><dd>${formatPKR(r.zakat)}</dd></div></dl>
    <p>${r.due ? "Your net wealth is at or above the nisab. Zakat is due once a full lunar year (hawl) has passed on it." : "Your net wealth is below the nisab, so no Zakat is due on this calculation."}</p>`;
    out.focus();
  });
}
