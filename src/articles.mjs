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
<p><small>Published: 15 October 2026</small></p>`},
{ path: "guides/gross-salary-for-take-home-pay-2026-27/", eyebrow: "Guide", published: "2026-10-19",
  title: "Gross Salary Needed for Your Take-Home Pay in Pakistan 2026-27 (Rs 50,000 to Rs 500,000)",
  description: "What gross salary do you need to take home Rs 100,000, 150,000, 200,000 or 300,000 a month after income tax in Pakistan in Tax Year 2027? A ready table, the formula and a worked example.",
  body: `<h1>What gross salary gives you the take-home pay you want in 2026-27?</h1>
<p class="lead">Job offers in Pakistan are usually quoted as a gross salary, but what you plan your life around is the amount that reaches your bank account. If you know the take-home pay you need, the table below shows the gross monthly salary that gets you there after income tax in Tax Year 2027 (1 July 2026 – 30 June 2027). Every figure comes from the reverse calculator in our <a href="../../tools/salary-increment-calculator/">Salary Increment Calculator</a>, using the salaried rates set by the Finance Act 2026.</p>
<h2>Gross salary needed for each take-home amount, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Take-home you want (monthly)</th><th scope="col">Gross salary needed (monthly)</th><th scope="col">Gross salary needed (annual)</th><th scope="col">Monthly income tax</th><th scope="col">Rate on your next rupee</th></tr></thead><tbody>
<tr><td>Rs 50,000</td><td>Rs 50,000</td><td>Rs 600,000</td><td>Rs 0</td><td>0%</td></tr>
<tr><td>Rs 75,000</td><td>Rs 75,253</td><td>Rs 903,030</td><td>Rs 253</td><td>1%</td></tr>
<tr><td>Rs 100,000</td><td>Rs 100,562</td><td>Rs 1,206,742</td><td>Rs 562</td><td>11%</td></tr>
<tr><td>Rs 150,000</td><td>Rs 156,742</td><td>Rs 1,880,899</td><td>Rs 6,742</td><td>11%</td></tr>
<tr><td>Rs 200,000</td><td>Rs 216,250</td><td>Rs 2,595,000</td><td>Rs 16,250</td><td>20%</td></tr>
<tr><td>Rs 250,000</td><td>Rs 279,556</td><td>Rs 3,354,667</td><td>Rs 29,556</td><td>25%</td></tr>
<tr><td>Rs 300,000</td><td>Rs 346,479</td><td>Rs 4,157,746</td><td>Rs 46,479</td><td>29%</td></tr>
<tr><td>Rs 400,000</td><td>Rs 488,235</td><td>Rs 5,858,823</td><td>Rs 88,235</td><td>32%</td></tr>
<tr><td>Rs 500,000</td><td>Rs 637,692</td><td>Rs 7,652,307</td><td>Rs 137,692</td><td>35%</td></tr>
</tbody></table></div>
<p>The annual figure is the lowest whole-rupee yearly salary whose take-home after tax reaches twelve times your monthly target. Monthly figures are that annual amount divided by 12 and rounded to the nearest rupee. The table assumes the same salary all year, that all of it is taxable, and that you have no other income.</p>
<h2>Worked example: Rs 200,000 a month in hand</h2>
<ol>
<li>Yearly take-home you want: Rs 200,000 × 12 = Rs 2,400,000.</li>
<li>A gross salary a little above that will fall in the slab from Rs 2,200,001 to Rs 3,200,000, where tax is Rs 116,000 plus 20% of the amount above Rs 2,200,000.</li>
<li>In that slab, take-home = gross − Rs 116,000 − 20% × (gross − Rs 2,200,000), which simplifies to 80% of gross + Rs 324,000.</li>
<li>Set that equal to Rs 2,400,000: 80% of gross = Rs 2,076,000, so gross = Rs 2,595,000 a year.</li>
<li>Check: Rs 2,595,000 is inside the slab. Tax = Rs 116,000 + 20% × Rs 395,000 = Rs 195,000, and Rs 2,595,000 − Rs 195,000 = Rs 2,400,000.</li>
</ol>
<p>So you need a gross salary of about Rs 216,250 a month. About Rs 16,250 of that goes to income tax each month, and Rs 200,000 reaches you.</p>
<h2>The formula, for any target</h2>
<p>Inside one slab, tax is a fixed amount plus a rate on the part above the slab's lower limit. That gives:</p>
<p><strong>Gross = (target take-home + fixed amount − rate × lower limit) ÷ (1 − rate)</strong></p>
<p>Use yearly amounts. Pick the slab you think the gross will land in, work out the gross, and check it really falls inside that slab. If it doesn't, try the next slab up. The slabs for 2026-27 are on our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a> page. Or skip the algebra: the reverse calculator does this search for you.</p>
<h2>How this compares with 2025-26</h2>
<p>The Finance Act 2026 cut the salaried rates from the fourth slab upwards. So for take-home targets that need a gross salary above Rs 2,200,000 a year, the gross you need is now lower than in Tax Year 2026. For smaller targets nothing changed, because the first three slabs stayed the same.</p>
<div class="table-scroll"><table><thead><tr><th scope="col">Take-home you want (monthly)</th><th scope="col">Gross needed 2025-26</th><th scope="col">Gross needed 2026-27</th><th scope="col">Lower by</th></tr></thead><tbody>
<tr><td>Rs 150,000</td><td>Rs 156,742</td><td>Rs 156,742</td><td>Rs 0</td></tr>
<tr><td>Rs 200,000</td><td>Rs 217,532</td><td>Rs 216,250</td><td>Rs 1,282</td></tr>
<tr><td>Rs 300,000</td><td>Rs 356,538</td><td>Rs 346,479</td><td>Rs 10,059</td></tr>
<tr><td>Rs 500,000</td><td>Rs 664,231</td><td>Rs 637,692</td><td>Rs 26,539</td></tr>
</tbody></table></div>
<p class="note">The 2025-26 figures use fixed amounts of Rs 346,000 and Rs 616,000 for the two top slabs of that year, which keep the slabs continuous and match the ICMA rate card. FBR Circular 01 of 2025-26 prints Rs 345,000 and Rs 615,000. Details are on the <a href="../../tools/salary-tax-calculator/">calculator page</a>.</p>
<h2>Before you accept an offer</h2>
<ul>
<li><strong>Ask what the gross figure includes.</strong> A "package" can include items that aren't paid to you every month, such as an employer's provident fund contribution, a car or a yearly bonus. Compare offers on the monthly salary you will actually be paid.</li>
<li><strong>Income tax isn't the only deduction.</strong> Your own provident fund contribution, EOBI, loan repayments or other deductions on your payslip reduce what reaches your bank account. They aren't in this table.</li>
<li><strong>Not all pay may be taxable.</strong> If part of your salary is exempt, or you can claim tax credits, you pay less tax than shown here. Enter only your taxable salary in our calculators.</li>
<li><strong>Your employer deducts tax monthly.</strong> Under section 149 of the Income Tax Ordinance 2001, tax is withheld from each salary payment based on your estimated salary for the year, and is credited against your final liability when you file your return.</li>
</ul>
<p><a class="btn btn-primary" href="../../tools/salary-increment-calculator/">Find the gross salary for your exact target</a></p>
<h2>Sources</h2>
<ul>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, 26 June 2026): salaried rate table in clause (2) of Division I, Part I, First Schedule</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026), paragraph 7 (relief in salaried rates) and paragraph 8 (withdrawal of the 9% surcharge on salaried individuals)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202681113864992WithholdingTaxRatesCard2027.pdf" rel="noopener">FBR Withholding Tax Rate Card for Tax Year 2027</a>, section 149 (salary)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/2025841183918948CircularNo01of2025-26IncomeTax.pdf" rel="noopener">FBR Income Tax Circular No. 01 of 2025-26</a> (Tax Year 2026 rates used for the comparison)</li>
</ul>
<p class="note">This guide gives estimates for general information only. It is not tax or financial advice. Your actual tax depends on your allowances, credits, other income and the tax already withheld. Check important figures with the FBR or a qualified tax adviser. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Published: 19 October 2026</small></p>`},
{ path: "guides/tax-on-bonus-2026-27/", eyebrow: "Guide", published: "2026-10-22",
  title: "Tax on Bonus in Pakistan 2026-27: How Much of Your Bonus You Keep",
  description: "Is a bonus taxable in Pakistan? How much income tax comes off a one-month or two-month bonus in Tax Year 2027, with ready tables, a worked example and why your bonus month deduction looks so big.",
  body: `<h1>How much tax will you pay on your bonus in 2026-27?</h1>
<p class="lead">A bonus is salary in the eyes of the tax law, so it is taxed at the same slab rates as the rest of your pay. What surprises most people is how much of it goes: the bonus sits on top of your salary, so it is taxed at your highest slab rate, not your average rate. The tables below show the extra tax and what you keep for a one-month and a two-month bonus in Tax Year 2027 (1 July 2026 – 30 June 2027). Every figure comes from the same code that runs our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>, using the salaried rates set by the Finance Act 2026.</p>
<h2>Is a bonus taxable in Pakistan?</h2>
<p>Yes. Section 12(2)(a) of the Income Tax Ordinance 2001 defines salary to include "any pay, wages or other remuneration provided to an employee, including leave pay, payment in lieu of leave, overtime payment, bonus, commission, fees, gratuity or work condition supplements". So a performance bonus, an annual bonus or an Eid bonus paid by your employer is added to your salary for the year, unless a specific exemption in the Ordinance covers it.</p>
<h2>How the tax on a bonus is worked out</h2>
<p>The extra tax is simply the tax on your yearly salary <em>with</em> the bonus, minus the tax on your yearly salary <em>without</em> it. Because the bonus is the top slice of your income, it is taxed at the rate of your highest slab, and part of it can spill into the next slab up.</p>
<h2>Tax on a one-month bonus, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Bonus</th><th scope="col">Extra tax on the bonus</th><th scope="col">Bonus you keep</th><th scope="col">Share you keep</th></tr></thead><tbody>
<tr><td>Rs 100,000</td><td>Rs 100,000</td><td>Rs 11,000</td><td>Rs 89,000</td><td>89.0%</td></tr>
<tr><td>Rs 150,000</td><td>Rs 150,000</td><td>Rs 16,500</td><td>Rs 133,500</td><td>89.0%</td></tr>
<tr><td>Rs 200,000</td><td>Rs 200,000</td><td>Rs 40,000</td><td>Rs 160,000</td><td>80.0%</td></tr>
<tr><td>Rs 250,000</td><td>Rs 250,000</td><td>Rs 52,500</td><td>Rs 197,500</td><td>79.0%</td></tr>
<tr><td>Rs 300,000</td><td>Rs 300,000</td><td>Rs 75,000</td><td>Rs 225,000</td><td>75.0%</td></tr>
<tr><td>Rs 400,000</td><td>Rs 400,000</td><td>Rs 116,000</td><td>Rs 284,000</td><td>71.0%</td></tr>
<tr><td>Rs 500,000</td><td>Rs 500,000</td><td>Rs 160,000</td><td>Rs 340,000</td><td>68.0%</td></tr>
</tbody></table></div>
<h2>Tax on a two-month bonus, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Bonus</th><th scope="col">Extra tax on the bonus</th><th scope="col">Bonus you keep</th><th scope="col">Share you keep</th></tr></thead><tbody>
<tr><td>Rs 100,000</td><td>Rs 200,000</td><td>Rs 22,000</td><td>Rs 178,000</td><td>89.0%</td></tr>
<tr><td>Rs 150,000</td><td>Rs 300,000</td><td>Rs 33,000</td><td>Rs 267,000</td><td>89.0%</td></tr>
<tr><td>Rs 200,000</td><td>Rs 400,000</td><td>Rs 80,000</td><td>Rs 320,000</td><td>80.0%</td></tr>
<tr><td>Rs 250,000</td><td>Rs 500,000</td><td>Rs 115,000</td><td>Rs 385,000</td><td>77.0%</td></tr>
<tr><td>Rs 300,000</td><td>Rs 600,000</td><td>Rs 154,000</td><td>Rs 446,000</td><td>74.3%</td></tr>
<tr><td>Rs 400,000</td><td>Rs 800,000</td><td>Rs 232,000</td><td>Rs 568,000</td><td>71.0%</td></tr>
<tr><td>Rs 500,000</td><td>Rs 1,000,000</td><td>Rs 320,000</td><td>Rs 680,000</td><td>68.0%</td></tr>
</tbody></table></div>
<p>Both tables assume the same monthly salary for all twelve months, that all of it is taxable, and that the bonus is paid in the same tax year. Notice that at Rs 250,000 and Rs 300,000 a month, a two-month bonus keeps a slightly smaller share than a one-month bonus. That is because the bigger bonus pushes part of it into the next slab (25% and 29% respectively).</p>
<h2>Worked example: Rs 200,000 a month with a one-month bonus</h2>
<ol>
<li>Salary without the bonus: Rs 200,000 × 12 = Rs 2,400,000 a year. That is in the slab from Rs 2,200,001 to Rs 3,200,000, where tax is Rs 116,000 plus 20% of the amount above Rs 2,200,000.</li>
<li>Tax without the bonus: Rs 116,000 + 20% × Rs 200,000 = Rs 156,000.</li>
<li>Salary with a Rs 200,000 bonus: Rs 2,600,000, still inside the same slab.</li>
<li>Tax with the bonus: Rs 116,000 + 20% × Rs 400,000 = Rs 196,000.</li>
<li>Extra tax on the bonus: Rs 196,000 − Rs 156,000 = Rs 40,000, so you keep Rs 160,000 of the Rs 200,000 bonus (80%).</li>
</ol>
<p>Your overall effective rate for the year goes from 6.50% to about 7.54%, but the bonus itself is taxed at 20%. That is why a bonus feels more heavily taxed than your monthly pay.</p>
<h2>Why the deduction in your bonus month can look huge</h2>
<p>Under section 149 of the Income Tax Ordinance, your employer deducts tax from each payment at your average rate, worked out on your estimated salary for the whole year. When a bonus is paid, the employer usually raises its estimate of your yearly salary and recovers the extra tax, so the deduction in that month (or over the remaining months) can be much bigger than usual. How it is spread depends on your employer's payroll. It doesn't change the total: what is deducted over the year is credited against your actual tax when you file your return, and any excess can be claimed back.</p>
<h2>How this compares with 2025-26</h2>
<p>The Finance Act 2026 cut the salaried rates from the fourth slab upwards (from 23% to 20% in the slab above Rs 2,200,000, for example). So if your salary plus bonus goes above Rs 2,200,000 a year, you now pay less tax on the same bonus than in Tax Year 2026. Below that, nothing changed. Here is the extra tax on a two-month bonus in both years:</p>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Extra tax 2025-26</th><th scope="col">Extra tax 2026-27</th><th scope="col">Lower by</th></tr></thead><tbody>
<tr><td>Rs 100,000</td><td>Rs 22,000</td><td>Rs 22,000</td><td>Rs 0</td></tr>
<tr><td>Rs 150,000</td><td>Rs 33,000</td><td>Rs 33,000</td><td>Rs 0</td></tr>
<tr><td>Rs 200,000</td><td>Rs 92,000</td><td>Rs 80,000</td><td>Rs 12,000</td></tr>
<tr><td>Rs 300,000</td><td>Rs 185,000</td><td>Rs 154,000</td><td>Rs 31,000</td></tr>
<tr><td>Rs 500,000</td><td>Rs 350,000</td><td>Rs 320,000</td><td>Rs 30,000</td></tr>
</tbody></table></div>
<p class="note">The 2025-26 figures use fixed amounts of Rs 346,000 and Rs 616,000 for the two top slabs of that year, which keep the slabs continuous and match the ICMA rate card. FBR Circular 01 of 2025-26 prints Rs 345,000 and Rs 615,000. Details are on the <a href="../../tools/salary-tax-calculator/">calculator page</a>.</p>
<h2>Work out the tax on your own bonus</h2>
<p>Enter your yearly salary in our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>, note the tax, then enter your yearly salary plus the bonus. The difference is the tax on your bonus. Our <a href="../../tools/salary-increment-calculator/">Salary Increment Calculator</a> does the same for a pay raise, including raises that cross a slab.</p>
<p><a class="btn btn-primary" href="../../tools/salary-tax-calculator/">Calculate tax with your bonus</a></p>
<h2>Sources</h2>
<ul>
<li><a href="https://download1.fbr.gov.pk/Docs/2026724177725705IncomeTaxOrdinanace2001.pdf" rel="noopener">Income Tax Ordinance, 2001 (FBR, amended up to 30 June 2026)</a>: section 12(2)(a) (bonus is salary) and section 149 (tax withheld from salary)</li>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, 26 June 2026): salaried rate table in clause (2) of Division I, Part I, First Schedule</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026), paragraphs 7 and 8 (salaried rates and withdrawal of the 9% surcharge)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/2025841183918948CircularNo01of2025-26IncomeTax.pdf" rel="noopener">FBR Income Tax Circular No. 01 of 2025-26</a> (Tax Year 2026 rates used for the comparison)</li>
</ul>
<p class="note">This guide gives estimates for general information only. It is not tax advice. Your actual tax depends on your allowances, credits, other income, any exemptions and the tax already withheld. Check important figures with the FBR or a qualified tax adviser. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Published: 22 October 2026</small></p>`}
];
