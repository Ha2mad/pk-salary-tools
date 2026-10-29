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
<p><small>Published: 22 October 2026</small></p>`},
{ path: "guides/zakat-tax-deduction-salaried-2026-27/", eyebrow: "Guide", published: "2026-10-26",
  title: "Is Zakat Deductible from Income Tax in Pakistan? Salaried Guide 2026-27",
  description: "Zakat deducted by your bank under the Zakat and Ushr Ordinance reduces your taxable income (section 60, ITO 2001). See how much tax it saves on your salary in Tax Year 2027, with a table and a worked example.",
  body: `<h1>Does Zakat reduce your income tax in 2026-27?</h1>
<p class="lead">Yes, in one specific case. Zakat paid under the Zakat and Ushr Ordinance, 1980 (for example the Zakat your bank deducts from a savings account on the 1st of Ramazan) is a deductible allowance. It is subtracted from your income before tax is worked out, so it lowers your tax at your top slab rate. This guide shows how much that saves a salaried person in Tax Year 2027 (1 July 2026 – 30 June 2027). Every figure comes from the same code that runs our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>, using the salaried rates set by the Finance Act 2026.</p>
<h2>What the law says</h2>
<p>Section 60(1) of the Income Tax Ordinance 2001 says: "A person shall be entitled to a deductible allowance for the amount of any Zakat paid by the person in a tax year under the Zakat and Ushr Ordinance, 1980". Section 9 then defines taxable income as your total income "reduced (but not below zero) by the total of any deductible allowances". So the Zakat amount comes off your income, not off your tax.</p>
<p>Two limits are written into section 60:</p>
<ul>
<li>It does not apply to Zakat already taken into account under section 40(2), which covers Zakat deducted from certain other income.</li>
<li>Under section 60(3), any part of the allowance that can't be used in the year (because your income is already down to zero) is not refunded, carried forward or carried back.</li>
</ul>
<h2>Which Zakat counts?</h2>
<p>The section covers Zakat paid "under the Zakat and Ushr Ordinance, 1980". The common case for salaried people is Zakat deducted at source by a bank from a savings or deposit account, which the bank reports on a Zakat deduction certificate. On a plain reading, Zakat you give directly to family, the poor or a charity of your choice is not paid under that Ordinance, so it does not fall under section 60. (A donation to an approved charitable organisation can qualify for a separate tax credit under section 61, which has its own rules and limits.) If you are unsure whether a payment qualifies, ask a tax adviser before claiming it.</p>
<h2>How much tax Rs 50,000 of Zakat saves, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Yearly tax without the allowance</th><th scope="col">Yearly tax after deducting Rs 50,000 Zakat</th><th scope="col">Tax saved</th><th scope="col">Saving as a share of the Zakat</th></tr></thead><tbody>
<tr><td>Rs 50,000</td><td>Rs 0</td><td>Rs 0</td><td>Rs 0</td><td>0.0%</td></tr>
<tr><td>Rs 100,000</td><td>Rs 6,000</td><td>Rs 5,500</td><td>Rs 500</td><td>1.0%</td></tr>
<tr><td>Rs 150,000</td><td>Rs 72,000</td><td>Rs 66,500</td><td>Rs 5,500</td><td>11.0%</td></tr>
<tr><td>Rs 200,000</td><td>Rs 156,000</td><td>Rs 146,000</td><td>Rs 10,000</td><td>20.0%</td></tr>
<tr><td>Rs 250,000</td><td>Rs 276,000</td><td>Rs 266,000</td><td>Rs 10,000</td><td>20.0%</td></tr>
<tr><td>Rs 300,000</td><td>Rs 416,000</td><td>Rs 403,500</td><td>Rs 12,500</td><td>25.0%</td></tr>
<tr><td>Rs 500,000</td><td>Rs 1,104,000</td><td>Rs 1,088,000</td><td>Rs 16,000</td><td>32.0%</td></tr>
</tbody></table></div>
<p>The table assumes the same salary for all twelve months, that all of it is taxable, no other income, and Rs 50,000 of qualifying Zakat paid in the same tax year. At Rs 50,000 a month (Rs 600,000 a year) no tax is due, so the allowance saves nothing and, under section 60(3), the unused part is lost. Above that, the saving is your top slab rate times the Zakat amount.</p>
<h2>Worked example: Rs 200,000 a month with Rs 50,000 Zakat deducted</h2>
<ol>
<li>Yearly salary: Rs 200,000 × 12 = Rs 2,400,000. That is in the slab from Rs 2,200,001 to Rs 3,200,000, where tax is Rs 116,000 plus 20% of the amount above Rs 2,200,000.</li>
<li>Tax without the allowance: Rs 116,000 + 20% × Rs 200,000 = Rs 156,000.</li>
<li>Taxable income after the allowance: Rs 2,400,000 − Rs 50,000 = Rs 2,350,000.</li>
<li>Tax after the allowance: Rs 116,000 + 20% × Rs 150,000 = Rs 146,000.</li>
<li>Tax saved: Rs 156,000 − Rs 146,000 = Rs 10,000, which is 20% of the Zakat.</li>
</ol>
<h2>How do you claim it?</h2>
<p>Your employer deducts tax from your salary under section 149 of the Ordinance. That section lists adjustments for tax credits under sections 61 and 63, but it does not mention deductible allowances such as Zakat, so the monthly deduction from your pay will normally ignore it. The allowance is claimed when you file your annual income tax return: enter the Zakat paid in the deductible allowances part of the return and keep the bank's Zakat deduction certificate as evidence. If the tax withheld from your salary over the year turns out to be more than the tax due, the difference can be claimed as a refund through the return. Check the current return form on the FBR's IRIS portal for the exact field.</p>
<h2>Work out your own figures</h2>
<p>Enter your yearly salary in our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a> and note the tax. Then enter your yearly salary minus the Zakat deducted. The difference is roughly what the allowance saves you. To work out how much Zakat you owe in the first place, use our <a href="../../tools/zakat-calculator/">Zakat Calculator</a>.</p>
<p><a class="btn btn-primary" href="../../tools/salary-tax-calculator/">Calculate your salary tax</a></p>
<h2>Sources</h2>
<ul>
<li><a href="https://download1.fbr.gov.pk/Docs/2026724177725705IncomeTaxOrdinanace2001.pdf" rel="noopener">Income Tax Ordinance, 2001 (FBR, amended up to 30 June 2026)</a>: section 9 (taxable income), section 60 (Zakat), section 61 (charitable donations) and section 149 (tax withheld from salary)</li>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, 26 June 2026): salaried rate table in clause (2) of Division I, Part I, First Schedule</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026), paragraphs 7 and 8 (salaried rates and withdrawal of the 9% surcharge)</li>
</ul>
<p class="note">This guide gives estimates for general information only. It is not tax advice or a religious ruling. Whether a payment qualifies, and your actual tax, depend on your circumstances, other income, credits and the tax already withheld. Check important figures with the FBR or a qualified tax adviser. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Published: 26 October 2026</small></p>`},
{ path: "guides/tax-when-joining-or-changing-job-mid-year-2026-27/", eyebrow: "Guide", published: "2026-10-29",
  title: "Income Tax When You Join or Change a Job Mid-Year in Pakistan (2026-27)",
  description: "Started a job or switched employers partway through Tax Year 2027? Your salary tax is worked out on the salary you actually receive from July to June. See the tax for 9, 6 and 3 months of salary, and why a job switch can leave tax unpaid.",
  body: `<h1>Income tax when you join or change a job mid-year (2026-27)</h1>
<p class="lead">If you start a job in October, January or April, you don't pay tax as if you'd earned that salary for a full year. Pakistani salary tax is worked out on the salary you actually receive in the tax year, which runs from 1 July 2026 to 30 June 2027 (Tax Year 2027). This guide shows how much less tax that means, what can go wrong when you switch employers, and how to fix it. Every figure comes from the same code that runs our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>, using the salaried rates set by the Finance Act 2026.</p>
<h2>What the law says</h2>
<p>Section 12(1) of the Income Tax Ordinance 2001 says: "Any salary received by an employee in a tax year, other than salary that is exempt from tax under this Ordinance, shall be chargeable to tax in that year under the head 'Salary'". Section 74(1) defines the tax year as "a period of twelve months ending on the 30th day of June". So your taxable salary is what you receive between July and June, and the slab rates apply to that total.</p>
<p>Your employer deducts tax every month under section 149. It uses your "average rate of tax" on your "estimated income ... chargeable under the head 'Salary' for the tax year", and it must adjust for tax already withheld from you during the year and for any earlier excess deduction or shortfall.</p>
<h2>Tax for part of the year, Tax Year 2027</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Monthly salary</th><th scope="col">Full year (from 1 July)</th><th scope="col">Joined 1 October (9 months)</th><th scope="col">Joined 1 January (6 months)</th><th scope="col">Joined 1 April (3 months)</th></tr></thead><tbody>
<tr><td>Rs 100,000</td><td>Rs 6,000</td><td>Rs 3,000</td><td>Rs 0</td><td>Rs 0</td></tr>
<tr><td>Rs 150,000</td><td>Rs 72,000</td><td>Rs 22,500</td><td>Rs 3,000</td><td>Rs 0</td></tr>
<tr><td>Rs 200,000</td><td>Rs 156,000</td><td>Rs 72,000</td><td>Rs 6,000</td><td>Rs 0</td></tr>
<tr><td>Rs 300,000</td><td>Rs 416,000</td><td>Rs 216,000</td><td>Rs 72,000</td><td>Rs 3,000</td></tr>
<tr><td>Rs 500,000</td><td>Rs 1,104,000</td><td>Rs 657,000</td><td>Rs 276,000</td><td>Rs 39,000</td></tr>
</tbody></table></div>
<p>Each figure is the total tax for Tax Year 2027, assuming the same monthly salary for every month worked, that all of it is taxable, no other salary or income in the year and no tax credits. Because the first Rs 600,000 of the year is tax-free and the next slab is only 1%, a few months of salary often lands in the lowest slabs. That's why someone who joins in January at Rs 200,000 a month owes Rs 6,000 for the year, not half of Rs 156,000.</p>
<h2>Worked example: joining on 1 January 2027 at Rs 200,000 a month</h2>
<ol>
<li>Salary received in Tax Year 2027: Rs 200,000 × 6 = Rs 1,200,000.</li>
<li>That is in the slab from Rs 600,001 to Rs 1,200,000, taxed at 1% of the amount above Rs 600,000: 1% × Rs 600,000 = Rs 6,000 for the year.</li>
<li>Spread over the six months you're paid, that's Rs 6,000 ÷ 6 = Rs 1,000 a month.</li>
<li>If the payroll instead treated your salary as Rs 2,400,000 for a full year, it would deduct Rs 156,000 ÷ 12 = Rs 13,000 a month, or Rs 78,000 over six months. That is Rs 72,000 more than you owe. You can claim the excess back as a refund (section 170) when you file your return.</li>
</ol>
<h2>Changing jobs: why tax can fall short</h2>
<p>A job switch can go the other way. Each employer may estimate your salary only from what it pays you, so neither applies the higher slab rates that your combined salary reaches. Take someone paid Rs 150,000 a month from July to December by employer A, then Rs 250,000 a month from January to June by employer B:</p>
<ol>
<li>Employer A, expecting a full year at Rs 1,800,000, deducts Rs 72,000 ÷ 12 = Rs 6,000 a month. Over six months: Rs 6,000 × 6 = Rs 36,000.</li>
<li>Employer B, looking only at its own Rs 1,500,000, works out Rs 6,000 + 11% × Rs 300,000 = Rs 39,000 for the year.</li>
<li>Total withheld: Rs 36,000 + Rs 39,000 = Rs 75,000.</li>
<li>Actual salary for the year: Rs 900,000 + Rs 1,500,000 = Rs 2,400,000, so the tax due is Rs 116,000 + 20% × Rs 200,000 = Rs 156,000.</li>
<li>Shortfall: Rs 156,000 − Rs 75,000 = Rs 81,000, which you would have to pay with your return.</li>
</ol>
<p>To avoid that, give your new employer the salary and tax figures from your previous job (your old employer's salary and tax deduction certificate), so payroll can estimate the full year's salary and adjust for tax already withheld, as section 149 allows. If you joined mid-year with no earlier job, tell payroll your start date so it doesn't treat your salary as a full year.</p>
<h2>Work out your own figures</h2>
<p>Add up the salary you will actually receive from July to June (all employers together) and enter that yearly total in our <a href="../../tools/salary-tax-calculator/">Salary Tax Calculator</a>. The result is your tax for the year. Compare it with the tax shown on your payslips to see whether you're on track, short or due a refund.</p>
<p><a class="btn btn-primary" href="../../tools/salary-tax-calculator/">Calculate your salary tax</a></p>
<h2>Sources</h2>
<ul>
<li><a href="https://download1.fbr.gov.pk/Docs/2026724177725705IncomeTaxOrdinanace2001.pdf" rel="noopener">Income Tax Ordinance, 2001 (FBR, amended up to 30 June 2026)</a>: section 12(1) (salary received in a tax year), section 74(1) (tax year), section 149 (tax withheld from salary) and section 170 (refunds)</li>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, 26 June 2026): salaried rate table in clause (2) of Division I, Part I, First Schedule</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026), paragraphs 7 and 8 (salaried rates and withdrawal of the 9% surcharge)</li>
</ul>
<p class="note">This guide gives estimates for general information only. It is not tax advice. How your employer withholds tax, and your actual liability, depend on your allowances, credits, other income and the tax already withheld. Check important figures with the FBR or a qualified tax adviser. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Published: 29 October 2026</small></p>`}
];
