import { icons } from "./icons.mjs";
import { articles } from "./articles.mjs";
const REPO = "https://github.com/Ha2mad/pk-salary-tools";
const UPDATED = "2026-10-13";
// Sitemap lastmod uses `updated` on these pages, or `published` on a guide. Bump that date when the page changes.
export const pages = [
{ path: "", home: true, updated: "2026-10-26", title: "Pakistan Salary Tools – Free Salary Tax, Increment & Zakat Calculators",
  description: "Free, accurate, privacy-friendly calculators for Pakistani salaried people: FBR salary tax 2026-27, increment take-home and Zakat.",
  body: `<section class="hero"><div class="wrap">
<span class="eyebrow">${icons.bolt} Updated for Tax Year 2027 (2026-27)</span>
<h1>Know your real take-home pay in seconds</h1>
<p class="lead">Free salary tax, raise and Zakat calculators for Pakistan, checked against the FBR's own figures. Every calculation runs in your browser, so nothing you type is sent anywhere.</p>
<div class="cta-row"><a class="btn btn-primary" href="{{root}}tools/salary-tax-calculator/">Calculate my salary tax ${icons.arrow}</a><a class="btn btn-ghost" href="#tools">See all tools</a></div>
<ul class="trust"><li>${icons.shield} Private: no data leaves your device</li><li>${icons.doc} Sources cited on every page</li><li>${icons.bolt} Free, no sign-up</li></ul>
</div></section>
<section class="section" id="tools"><div class="wrap">
<div class="section-head"><h2>Calculators</h2><p class="lead">Three focused tools for the money questions salaried Pakistanis ask most.</p></div>
<ul class="cards">
<li class="card"><span class="icon">${icons.calc}</span><h3><a href="{{root}}tools/salary-tax-calculator/">Salary Tax Calculator 2026-27</a></h3><p>Monthly and annual income tax, take-home pay and a slab-by-slab breakdown using the FBR rates for Tax Year 2027.</p><span class="more">Open calculator →</span></li>
<li class="card"><span class="icon">${icons.trend}</span><h3><a href="{{root}}tools/salary-increment-calculator/">Salary Increment Calculator</a></h3><p>See how much of a raise you actually keep after tax, or find the gross salary you need for a target take-home pay.</p><span class="more">Open calculator →</span></li>
<li class="card"><span class="icon">${icons.coins}</span><h3><a href="{{root}}tools/zakat-calculator/">Zakat Calculator</a></h3><p>Work out Zakat on cash, gold, silver, investments and business stock, using today's metal prices and the nisab you follow.</p><span class="more">Open calculator →</span></li>
</ul></div></section>
<section class="section" style="padding-top:0"><div class="wrap">
<div class="section-head"><h2>Guides</h2></div>
<ul class="cards">
<li class="card"><span class="icon">${icons.doc}</span><h3><a href="{{root}}guides/income-tax-on-monthly-salary-2026-27/">Income tax on monthly salary 2026-27</a></h3><p>A ready table of monthly tax and take-home pay from Rs 50,000 to Rs 1,000,000, with last year's figures for comparison.</p><span class="more">Read the guide →</span></li>
<li class="card"><span class="icon">${icons.trend}</span><h3><a href="{{root}}guides/gross-salary-for-take-home-pay-2026-27/">Gross salary for your take-home pay</a></h3><p>The gross monthly salary you need to take home Rs 50,000 to Rs 500,000 after tax in 2026-27, with the formula and a worked example.</p><span class="more">Read the guide →</span></li>
<li class="card"><span class="icon">${icons.coins}</span><h3><a href="{{root}}guides/tax-on-bonus-2026-27/">Tax on your bonus 2026-27</a></h3><p>How much tax comes off a one-month or two-month bonus, why it's taxed at your top slab rate, and what you actually keep.</p><span class="more">Read the guide →</span></li>
<li class="card"><span class="icon">${icons.shield}</span><h3><a href="{{root}}guides/zakat-tax-deduction-salaried-2026-27/">Does Zakat reduce your tax?</a></h3><p>When Zakat counts as a deductible allowance under section 60, how much tax it saves at each salary level in 2026-27, and how to claim it.</p><span class="more">Read the guide →</span></li>
</ul></div></section>
<section class="section" style="padding-top:0"><div class="wrap">
<div class="section-head"><h2>Why trust these numbers?</h2></div>
<div class="features">
<div class="feature"><span class="icon">${icons.doc}</span><h3>Current, sourced rates</h3><p>Rates follow Finance Act 2026: FBR Circular 02 of 2026-27 and the Tax Year 2027 withholding rate card, with links on the calculator page.</p></div>
<div class="feature"><span class="icon">${icons.calc}</span><h3>Shows its working</h3><p>See exactly which slab you're in and how each rupee of tax is worked out, with no black box.</p></div>
<div class="feature"><span class="icon">${icons.shield}</span><h3>Open and tested</h3><p>The calculation code is <a href="https://github.com/Ha2mad/pk-salary-tools" rel="noopener">open source</a> and checked by automated tests on every change.</p></div>
</div></div></section>`},
{ path: "tools/salary-tax-calculator/", updated: "2026-10-22", eyebrow: "Free calculator", title: "Salary Tax Calculator Pakistan 2026-27 (Tax Year 2027) – FBR Slabs",
  description: "Calculate income tax on your salary in Pakistan for 2026-27 using FBR slab rates. Monthly deduction, take-home pay and slab-by-slab working.",
  script: "page-tax.js",
  body: `<h1>Salary Tax Calculator Pakistan 2026-27</h1>
<p class="lead">Enter your gross taxable salary to estimate income tax under the salaried-person rates for Tax Year 2027 (1 July 2026 – 30 June 2027), as set by the Finance Act 2026.</p>
<div id="tool"></div>
<noscript><p>This calculator needs JavaScript.</p></noscript>
<h2>Salaried tax slabs for 2026-27</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Annual taxable income</th><th scope="col">Tax</th></tr></thead><tbody>
<tr><td>Up to Rs 600,000</td><td>0%</td></tr>
<tr><td>Rs 600,001 – 1,200,000</td><td>1% of the amount above Rs 600,000</td></tr>
<tr><td>Rs 1,200,001 – 2,200,000</td><td>Rs 6,000 + 11% of the amount above Rs 1,200,000</td></tr>
<tr><td>Rs 2,200,001 – 3,200,000</td><td>Rs 116,000 + 20% of the amount above Rs 2,200,000</td></tr>
<tr><td>Rs 3,200,001 – 4,100,000</td><td>Rs 316,000 + 25% of the amount above Rs 3,200,000</td></tr>
<tr><td>Rs 4,100,001 – 5,600,000</td><td>Rs 541,000 + 29% of the amount above Rs 4,100,000</td></tr>
<tr><td>Rs 5,600,001 – 7,000,000</td><td>Rs 976,000 + 32% of the amount above Rs 5,600,000</td></tr>
<tr><td>Above Rs 7,000,000</td><td>Rs 1,424,000 + 35% of the amount above Rs 7,000,000</td></tr>
</tbody></table></div>
<p>No surcharge applies to salary in Tax Year 2027. The Finance Act 2026 amended section 4AB so that, where income is chargeable under the head Salary, no surcharge is payable. In Tax Year 2026 a 9% surcharge was added to the whole salary-tax bill once taxable income exceeded Rs 10 million. A 10% surcharge still applies to non-salary income of individuals and associations of persons above that threshold. This calculator covers salary only.</p>
<h2>Sources</h2>
<ul>
<li><a href="https://senate.gov.pk/uploads/documents/1782733238_492.pdf" rel="noopener">Finance Act, 2026</a> (Gazette of Pakistan, Extraordinary, Part I, 26 June 2026): substitutes the table in clause (2) of Division I of Part I of the First Schedule, and replaces the salaried limb of section 4AB with "no surcharge shall be payable"</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202698139527880CircularNo.2of2026-27.pdf" rel="noopener">FBR Income Tax Circular No. 02 of 2026-27</a> (8 September 2026; explains the rate relief and the withdrawal of the 9% salaried surcharge)</li>
<li><a href="https://download1.fbr.gov.pk/Docs/202681113864992WithholdingTaxRatesCard2027.pdf" rel="noopener">FBR Withholding Tax Rate Card for Tax Year 2027</a> (updated to 30 June 2026; section 149 salary rates). Index: <a href="https://fbr.gov.pk/withholding-taxes-rate-card/174298/174301" rel="noopener">FBR withholding rate cards</a></li>
</ul>
<p class="note">The fixed amounts follow from the band below them: 1% of Rs 600,000 is Rs 6,000; Rs 6,000 + 11% of Rs 1,000,000 is Rs 116,000; Rs 116,000 + 20% of Rs 1,000,000 is Rs 316,000; Rs 316,000 + 25% of Rs 900,000 is Rs 541,000; Rs 541,000 + 29% of Rs 1,500,000 is Rs 976,000; Rs 976,000 + 32% of Rs 1,400,000 is Rs 1,424,000. The Gazette, the circular and the withholding card all use these figures.</p>
<h2>What changed from Tax Year 2026 (2025-26)</h2>
<div class="table-scroll"><table><thead><tr><th scope="col">Annual taxable income</th><th scope="col">Tax Year 2026</th><th scope="col">Tax Year 2027</th></tr></thead><tbody>
<tr><td>Up to Rs 600,000</td><td>0%</td><td>0%</td></tr>
<tr><td>Rs 600,001 – 1,200,000</td><td>1% above Rs 600,000</td><td>1% above Rs 600,000</td></tr>
<tr><td>Rs 1,200,001 – 2,200,000</td><td>Rs 6,000 + 11%</td><td>Rs 6,000 + 11%</td></tr>
<tr><td>Rs 2,200,001 – 3,200,000</td><td>Rs 116,000 + 23%</td><td>Rs 116,000 + 20%</td></tr>
<tr><td>Rs 3,200,001 – 4,100,000</td><td>Rs 346,000 + 30%</td><td>Rs 316,000 + 25%</td></tr>
<tr><td>Rs 4,100,001 – 5,600,000</td><td>Rs 616,000 + 35% (one band from Rs 4,100,001 up)</td><td>Rs 541,000 + 29%</td></tr>
<tr><td>Rs 5,600,001 – 7,000,000</td><td>Rs 616,000 + 35%</td><td>Rs 976,000 + 32%</td></tr>
<tr><td>Above Rs 7,000,000</td><td>Rs 616,000 + 35%, plus 9% surcharge above Rs 10 million</td><td>Rs 1,424,000 + 35%, no salaried surcharge</td></tr>
</tbody></table></div>
<p>An annual salary of Rs 2,400,000 is taxed at Rs 156,000 in Tax Year 2027 (Rs 116,000 + 20% × Rs 200,000). In Tax Year 2026 the same salary was Rs 162,000 (Rs 116,000 + 23% × Rs 200,000).</p>
<p class="note">Tax Year 2026 comparison figures use fixed amounts of Rs 346,000 and Rs 616,000. FBR Circular 01 of 2025-26 prints Rs 345,000 and Rs 615,000 for those two slabs. Those printed numbers don't follow from the band below (116,000 + 23% × 1,000,000 = 346,000). Rs 346,000 and Rs 616,000 keep that year's slabs continuous and match the <a href="https://www.icmainternational.com/News_Pdf/Tax_Rate_Card_for_Tax_Year_2025_26.pdf" rel="noopener">ICMA rate card for 2025-26</a>. The difference is Rs 1,000 a year at most. See <a href="https://download1.fbr.gov.pk/Docs/2025841183918948CircularNo01of2025-26IncomeTax.pdf" rel="noopener">FBR Circular No. 01 of 2025-26</a>.</p>
<h2>How the calculation works</h2>
<p>Pakistan taxes salary progressively. Your income is placed in a slab: you pay that slab's fixed amount plus its percentage on the part of your income above the slab's lower limit. For example, an annual salary of Rs 1,800,000 is in the third slab: Rs 6,000 + 11% × Rs 600,000 = Rs 72,000 a year (Rs 6,000 a month). A salary of Rs 2,400,000 is in the fourth slab: Rs 116,000 + 20% × Rs 200,000 = Rs 156,000 a year (Rs 13,000 a month).</p>
<p>Want a quick look-up instead? See our <a href="../../guides/income-tax-on-monthly-salary-2026-27/">table of monthly tax for salaries from Rs 50,000 to Rs 1,000,000</a>. Getting a bonus? See <a href="../../guides/tax-on-bonus-2026-27/">how much tax comes off a bonus in 2026-27</a>.</p>
<p class="note">This is an estimate, not tax advice. Your actual tax depends on allowances, tax credits, other income and tax already withheld. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
{ path: "tools/salary-increment-calculator/", updated: "2026-10-19", eyebrow: "Free calculator", title: "Salary Increment Calculator Pakistan 2026-27 – Take-home After Tax",
  description: "See how much of a salary raise you keep after Pakistani income tax for 2026-27, or find the gross salary needed for a target take-home pay.",
  script: "page-increment.js",
  body: `<h1>Salary Increment Calculator (Tax Year 2027)</h1>
<p>A 20% raise doesn't mean 20% more take-home pay. Because Pakistan's salary tax is progressive, part of every increment goes to tax. Some raises also push part of your income into a higher slab. This calculator shows the real effect, using the FBR salaried rates for 2026-27.</p>
<div id="tool"></div><noscript><p>This calculator needs JavaScript.</p></noscript>
<h2>How it works</h2>
<p>We work out the annual tax on your current salary and on your new salary, then compare take-home pay. The "share you keep" is extra take-home divided by extra gross pay. The reverse calculator searches for the lowest gross salary whose take-home after tax reaches your target.</p>
<p>Planning around a job offer? See our <a href="../../guides/gross-salary-for-take-home-pay-2026-27/">table of the gross salary needed for take-home pay from Rs 50,000 to Rs 500,000 a month</a>.</p>
<h2>Will a raise ever lower my take-home?</h2>
<p>No. Each slab only taxes the part of your income above its lower limit, so a raise always increases take-home pay. Only the extra rupees are taxed at the higher rate. In Tax Year 2026 a 9% surcharge applied to the whole tax bill once taxable income exceeded Rs 10 million, and take-home could dip just above that line. The Finance Act 2026 withdrew that surcharge for salary, so there is no such dip in 2026-27.</p>
<p class="note">This is an estimate, not tax advice. See the <a href="../salary-tax-calculator/">slab table and sources</a> and our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
{ path: "tools/zakat-calculator/", updated: "2026-10-26", eyebrow: "Free calculator", title: "Zakat Calculator Pakistan – Cash, Gold, Silver & Savings",
  description: "Free Zakat calculator for Pakistan. Enter today's gold or silver price per tola and your assets to work out Zakat at 2.5%.",
  script: "page-zakat.js",
  body: `<h1>Zakat Calculator</h1>
<p>Work out Zakat on your savings, gold, silver, investments and business stock. Enter today's metal prices per tola from a local bullion market. We don't fetch prices automatically, so you stay in control of the figures.</p>
<div id="tool"></div><noscript><p>This calculator needs JavaScript.</p></noscript>
<h2>How it works</h2>
<ul>
<li><strong>Nisab:</strong> 52.5 tola (612.36 g) of silver or 7.5 tola (87.48 g) of gold. Many scholars in Pakistan advise the silver nisab because it is lower and so covers more people. You can choose either.</li>
<li><strong>Rate:</strong> 2.5% of net zakatable wealth (assets minus debts due now), if that is at or above the nisab and has been held for a full lunar year.</li>
<li><strong>1 tola</strong> = 11.664 grams.</li>
</ul>
<p>Things like your home, car and household items for personal use are generally not zakatable. Rules differ between schools of thought, especially for jewellery that is worn, so please check with a scholar you trust.</p>
<p class="note">Note: banks in Pakistan may deduct Zakat automatically from some savings accounts on the 1st of Ramadan, unless you've filed a declaration (CZ-50). Take any amount already deducted into account.</p>
<p>Zakat deducted by your bank can also lower your income tax. See <a href="../../guides/zakat-tax-deduction-salaried-2026-27/">whether Zakat is deductible from income tax and how much it saves</a>.</p>
<p class="note">This calculator gives an estimate for guidance only. It is not a religious ruling. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
...articles,
{ path: "about/", updated: "2026-10-11", title: "About – Pakistan Salary Tools", description: "Who builds Pakistan Salary Tools and how we keep our calculators accurate.",
  body: `<h1>About</h1><p>Pakistan Salary Tools is an independent project. We make free, simple calculators for salaried people in Pakistan. We are not affiliated with the FBR or any government body.</p><h2>How we keep it accurate</h2><ul><li>We take rates from official FBR documents and widely used professional rate cards, and link to them.</li><li>The calculation code is open source and covered by automated tests.</li><li>We review the rates after every Finance Act.</li></ul><p>Source code: <a href="${REPO}" rel="noopener">GitHub</a>.</p>`},
{ path: "contact/", updated: "2026-10-13", title: "Contact – Pakistan Salary Tools", description: "How to report a mistake or suggest a new calculator.",
  body: `<h1>Contact</h1><p>Email: <a href="mailto:hammaduddin54@gmail.com">hammaduddin54@gmail.com</a></p><p>Found a mistake or want a new calculator? Please <a href="${REPO}/issues" rel="noopener">open an issue on GitHub</a>. Please don't post personal financial details there, because issues are public.</p>`},
{ path: "privacy-policy/", updated: "2026-10-13", title: "Privacy Policy – Pakistan Salary Tools", description: "How Pakistan Salary Tools handles your data.",
  body: `<h1>Privacy Policy</h1><p><small>Last updated: ${UPDATED}</small></p>
<h2>Calculator inputs</h2><p>All calculations run in your browser. The figures you enter are never sent to us or stored by us.</p>
<h2>Hosting logs</h2><p>Our hosting provider (currently GitHub Pages) may log technical data such as IP addresses for security and operations. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub's privacy statement</a>.</p>
<h2>Cookies and advertising</h2><p>We don't currently use cookies, analytics or ads. If we add advertising, such as Google AdSense, later, third-party vendors including Google may use cookies to serve ads based on your earlier visits to this and other sites. You can opt out of personalised advertising at <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a>. We'll update this policy before any such change, and we'll ask for consent where the law requires it.</p>
<h2>Contact</h2><p>See our <a href="../contact/">contact page</a>.</p>`},
{ path: "disclaimer/", updated: "2026-10-11", title: "Disclaimer – Pakistan Salary Tools", description: "Our calculators give estimates, not professional tax or religious advice.",
  body: `<h1>Disclaimer</h1><p>The calculators on this site give estimates for general information only. They are not tax, legal, financial or religious advice. Tax law changes, and your own situation may include allowances, credits or other income that we don't model. Check important figures with the FBR, a qualified tax adviser or a scholar, as appropriate. We are not affiliated with the Federal Board of Revenue.</p>`}
];
