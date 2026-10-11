import { computeTax, breakdown, formatPKR } from "./tax.js";
const form = document.getElementById("tax-form");
const out = document.getElementById("result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = Number(form.amount.value);
  const period = form.period.value;
  if (!Number.isFinite(amount) || amount < 0 || form.amount.value === "") {
    out.innerHTML = '<p class="error" role="alert">Please enter a valid salary (0 or more).</p>';
    return;
  }
  const annual = period === "monthly" ? amount * 12 : amount;
  const r = computeTax(annual, form.year.value);
  const rows = breakdown(annual, form.year.value).map((b) =>
    `<tr><td>${formatPKR(b.from)} – ${b.to === Infinity ? "above" : formatPKR(b.to)}</td><td>${(b.rate * 100).toFixed(0)}%</td><td>${formatPKR(b.taxable)}</td><td>${formatPKR(b.tax)}</td></tr>`).join("");
  out.innerHTML = `
    <h2>Your estimate</h2>
    <dl class="summary">
      <div><dt>Annual taxable salary</dt><dd>${formatPKR(annual)}</dd></div>
      <div><dt>Annual income tax</dt><dd>${formatPKR(r.annualTax)}</dd></div>
      <div><dt>Monthly tax deduction</dt><dd>${formatPKR(r.monthlyTax)}</dd></div>
      <div><dt>Monthly take-home</dt><dd>${formatPKR(r.monthlyTakeHome)}</dd></div>
      <div><dt>Effective rate</dt><dd>${(r.effectiveRate * 100).toFixed(2)}%</dd></div>
      <div><dt>Marginal rate</dt><dd>${(r.marginalRate * 100).toFixed(2)}%</dd></div>
    </dl>
    ${r.surcharge ? `<p>Includes 9% surcharge of ${formatPKR(r.surcharge)} (taxable income above Rs 10 million).</p>` : ""}
    <table><caption>Slab-by-slab breakdown</caption>
    <thead><tr><th scope="col">Band</th><th scope="col">Rate</th><th scope="col">Income in band</th><th scope="col">Tax</th></tr></thead>
    <tbody>${rows}</tbody></table>`;
  out.focus();
});
