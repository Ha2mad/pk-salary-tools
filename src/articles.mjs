// Long-form guides. Every figure in these tables comes from site/assets/tax.js
// (tests/articles.test.mjs recomputes them), so a rate change can't leave a guide stale silently.
export const articles = [
{ path: "guides/income-tax-on-monthly-salary-2026-27/", eyebrow: "Guide", published: "2026-10-15",
  title: "Income Tax on Monthly Salary in Pakistan 2026-27: Table from Rs 50,000 to Rs 1,000,000",
  description: "How much income tax is deducted from a monthly salary of Rs 50,000, 100,000, 150,000, 200,000, 300,000 or 500,000 in Pakistan in Tax Year 2027, with take-home pay and last year's figures.",
  body: `<h1>Income tax on your monthly salary in 2026-27: a ready table</h1>
<p class="lead">If you are paid between Rs 50,000 and Rs 1,000,000 a month, the table below shows roughly how much income tax comes off your salary each month in Tax Year 2027 (1 July 2026 – 30 June 2027) and what you take home. Every figure comes from the same code that runs our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>, using the salaried rates set by the Finance Act 2026.</p>
<h2>Monthly tax and take-home pay, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Annual salary</th><th scope="col">Monthly tax</th><th scope="col">Monthly take-home</th><th scope="col">Effective rate</th><th scope="col">Rate on your next rupee</th></tr></thead><tbody>
<tr><td>Rs 50,000</td><td>Rs 600,000</td><td>Rs 0</td><td>Rs 50,000</td><td>0%</td><td>0%</td></tr>
<tr><td>Rs 75,000</td><td>Rs 900,000</td><td>Rs 250</td><td>Rs 74,750</td><td>0.33%</td><td>1%</td></tr>
<tr><td>Rs 100,000</td><td>Rs 1,200,000</td><td>Rs 500</td><td>Rs 99,500</td><td>0.50%</td><td>1%</td></tr>
<tr><td>Rs 125,000</td><td>Rs 1,500,000</td><td>Rs 3,250</td><td>Rs 121,750</td><td>2.60%</td><td>11%</td></tr>
<tr><td>Rs 150,000</td><td>Rs 1,800,000</td><td>Rs 6,000</td><td>Rs 144,000</td><td>4.00%</td><td>11%</td></tr>
<tr><td>Rs 200,000</td><td>Rs 2,400,000</td><td>Rs 13,000</td><td>Rs 187,000</td><td>6.50%</td><td>20%</td></tr>
<tr><td>Rs 250,000</td><td>Rs 3,000,000</td><td>Rs 23,000</td><td>Rs 227,000</td><td>9.20%</td><td>20%</td></tr>
<tr><td>Rs 300,000</td><td>Rs 3,600,000</td><td>Rs 34,667</td><td>Rs 265,333</td><td>11.56%</td><td>25%</td></tr>
<tr><td>Rs 400,000</td><td>Rs 4,800,000</td><td>Rs 62,000</td><td>Rs 338,000</td><td>15.50%</td><td>29%</td></tr>
<tr><td>Rs 500,000</td><td>Rs 6,000,000</td><td>Rs 92,000</td><td>Rs 408,000</td><td>18.40%</td><td>32%</td></tr>
<tr><td>Rs 750,000</td><td>Rs 9,000,000</td><td>Rs 177,000</td><td>Rs 573,000</td><td>23.60%</td><td>35%</td></tr>
<tr><td>Rs 1,000,000</td><td>Rs 12,000,000</td><td>Rs 264,500</td><td>Rs 735,500</td><td>26.45%</td><td>35%</td></tr>
</tbody></table></div>
<p>The table assumes the same salary for all twelve months and that all of it is taxable. Monthly figures are the annual tax divided by 12 and rounded to the nearest rupee.</p>
<h2>Worked example: Rs 300,000 a month</h2>
<ol>
<li>Annual salary: Rs 300,000 × 12 = Rs 3,600,000.</li>
<li>That falls in the slab from Rs 3,200,001 to Rs 4,100,000, which is Rs 316,000 plus 25% of the amount above Rs 3,200,000.</li>
<li>The amount above Rs 3,200,000 is Rs 400,000, and 25% of that is Rs 100,000.</li>
<li>Annual tax: Rs 316,000 + Rs 100,000 = Rs 416,000.</li>
<li>Monthly tax: Rs 416,000 ÷ 12 = about Rs 34,667, so take-home is about Rs 265,333 a month.</li>
</ol>
<p>Your effective rate is 11.56% (Rs 416,000 out of Rs 3,600,000), even though the top rate you reach is 25%. The 25% only applies to the part of your salary above Rs 3,200,000 a year.</p>
<h2>Effective rate and the rate on your next rupee</h2>
<p>The effective rate is your total tax divided by your total salary. It is the honest answer to "what share of my pay goes to tax". The last column is the slab rate that applies to any extra rupee you earn, such as a raise or a bonus. At Rs 200,000 a month, for example, each extra rupee is taxed at 20%, so a Rs 10,000 monthly raise adds Rs 2,000 of tax and you keep Rs 8,000, provided the raise doesn't push you into the next slab. Our <a href="../../tools/salary-increment-calculator/">Salary Increment Calculator</a> works this out for any raise, including ones that cross a slab.</p>
<h2>How this compares with 2025-26</h2>
<p>The Finance Act 2026 cut the rates from the fourth slab upwards and added two new slabs, so anyone earning more than Rs 2,200,000 a year (about Rs 183,333 a month) pays less tax than in Tax Year 2026. Salaries up to that level pay exactly the same as last year, because the first three slabs did not change.</p>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Monthly tax 2025-26</th><th scope="col">Monthly tax 2026-27</th><th scope="col">Lower by</th></tr></thead><tbody>
<tr><td>Rs 150,000</td><td>Rs 6,000</td><td>Rs 6,000</td><td>Rs 0</td></tr>
<tr><td>Rs 200,000</td><td>Rs 13,500</td><td>Rs 13,000</td><td>Rs 500</td></tr>
<tr><td>Rs 250,000</td><td>Rs 25,000</td><td>Rs 23,000</td><td>Rs 2,000</td></tr>
<tr><td>Rs 300,000</td><td>Rs 38,833</td><td>Rs 34,667</td><td>Rs 4,166</td></tr>
<tr><td>Rs 400,000</td><td>Rs 71,750</td><td>Rs 62,000</td><td>Rs 9,750</td></tr>
<tr><td>Rs 500,000</td><td>Rs 106,750</td><td>Rs 92,000</td><td>Rs 14,750</td></tr>
<tr><td>Rs 750,000</td><td>Rs 194,250</td><td>Rs 177,000</td><td>Rs 17,250</td></tr>
<tr><td>Rs 1,000,000</td><td>Rs 307,108</td><td>Rs 264,500</td><td>Rs 42,608</td></tr>
</tbody></table></div>
<p>The big drop at Rs 1,000,000 a month is mostly the surcharge. In 2025-26 a 9% surcharge was added to the whole tax bill once salary passed Rs 10 million a year. The Finance Act 2026 withdrew that surcharge for salaried individuals, so it no longer applies in 2026-27.</p>
<p class="note">The 2025-26 figures use fixed amounts of Rs 346,000 and Rs 616,000 for the two top slabs of that year, which keep the slabs continuous and match the ICMA rate card. FBR Circular 01 of 2025-26 prints Rs 345,000 and Rs 615,000. The difference is at most Rs 1,000 a year. Details are on the <a href="../../tools/salary-tax-calculator/">calculator page</a>.</p>
<h2>Why your payslip might show a different number</h2>
<ul>
<li><strong>Not all pay is taxable.</strong> If part of your package is exempt, or you have deductible allowances or tax credits, your taxable salary is lower than your gross pay. Enter only your taxable salary in the calculator.</li>
<li><strong>Salary changes during the year.</strong> Your employer deducts tax each month under section 149 of the Income Tax Ordinance 2001, based on your estimated salary for the year. After a raise, bonus or arrears, the monthly deduction can change to catch up.</li>
<li><strong>Other income.</strong> Rent, business income or profit on savings is taxed separately and isn't in this table.</li>
<li><strong>Tax already deducted counts.</strong> The tax your employer deducts is credited against your final liability when you file your annual return.</li>
</ul>
<p><a class="btn btn-primary" href="../../tools/salary-tax-calculator/">Calculate tax on your exact salary</a></p>
<h2>Sources</h2>
<ul>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, 26 June 2026): new salaried rate table in clause (2) of Division I, Part I, First Schedule</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026), paragraph 7 (relief in salaried rates) and paragraph 8 (withdrawal of the 9% surcharge on salaried individuals)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202681113864992WithholdingTaxRatesCard2027.pdf" rel="noopener">FBR Withholding Tax Rate Card for Tax Year 2027</a>, section 149 (salary)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/2025841183918948CircularNo01of2025-26IncomeTax.pdf" rel="noopener">FBR Income Tax Circular No. 01 of 2025-26</a> (Tax Year 2026 rates used for the comparison)</li>
</ul>
<p class="note">This guide gives estimates for general information only. It is not tax advice. Your actual tax depends on your allowances, credits, other income and the tax already withheld. Check important figures with the FBR or a qualified tax adviser. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Published: 15 October 2026</small></p>`}
];
