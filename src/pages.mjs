const REPO = "https://github.com/Ha2mad/pk-salary-tools";
const UPDATED = "2026-10-11";
export const pages = [
{ path: "", title: "Pakistan Salary Tools – Free Salary Tax, Increment & Zakat Calculators",
  description: "Free, accurate, privacy-friendly calculators for Pakistani salaried people: FBR salary tax 2025-26, increment take-home and Zakat.",
  body: `<h1>Free salary &amp; money calculators for Pakistan</h1>
<p>Simple tools that run entirely in your browser. Nothing you type is sent anywhere. Every tax figure links to its official source and shows the full working.</p>
<ul class="cards">
<li><h2><a href="tools/salary-tax-calculator/">Salary Tax Calculator 2025-26</a></h2><p>Monthly and annual income tax, take-home pay, and a slab-by-slab breakdown using the FBR rates for Tax Year 2026.</p></li>
<li><h2><a href="tools/salary-increment-calculator/">Salary Increment Calculator</a></h2><p>See how much of a raise you actually keep after tax, or find the gross salary you need for a target take-home pay.</p></li>
<li><h2><a href="tools/zakat-calculator/">Zakat Calculator</a></h2><p>Work out Zakat on cash, gold, silver, investments and business stock, using today's metal prices.</p></li>
</ul>
<h2>Why use these tools?</h2>
<p>Several popular Pakistani tax calculators still show the <em>previous</em> year's slab rates. We check our rates against the FBR's own circular and tax rate cards, and show the source on every page.</p>`},
{ path: "tools/salary-tax-calculator/", title: "Salary Tax Calculator Pakistan 2025-26 (Tax Year 2026) – FBR Slabs",
  description: "Calculate income tax on your salary in Pakistan for 2025-26 using FBR slab rates. Monthly deduction, take-home pay and slab-by-slab working.",
  script: "page-tax.js",
  body: `<h1>Salary Tax Calculator Pakistan 2025-26</h1>
<p>Enter your gross taxable salary to estimate income tax under the salaried-person rates for Tax Year 2026 (1 July 2025 – 30 June 2026).</p>
<div id="tool"></div>
<noscript><p>This calculator needs JavaScript.</p></noscript>
<h2>Salaried tax slabs for 2025-26</h2>
<table><thead><tr><th scope="col">Annual taxable income</th><th scope="col">Tax</th></tr></thead><tbody>
<tr><td>Up to Rs 600,000</td><td>0%</td></tr>
<tr><td>Rs 600,001 – 1,200,000</td><td>1% of the amount above Rs 600,000</td></tr>
<tr><td>Rs 1,200,001 – 2,200,000</td><td>Rs 6,000 + 11% of the amount above Rs 1,200,000</td></tr>
<tr><td>Rs 2,200,001 – 3,200,000</td><td>Rs 116,000 + 23% of the amount above Rs 2,200,000</td></tr>
<tr><td>Rs 3,200,001 – 4,100,000</td><td>Rs 346,000 + 30% of the amount above Rs 3,200,000</td></tr>
<tr><td>Above Rs 4,100,000</td><td>Rs 616,000 + 35% of the amount above Rs 4,100,000</td></tr>
</tbody></table>
<p>A 9% surcharge applies to the tax when taxable income is above Rs 10 million (Section 4AB, as amended by Finance Act 2025).</p>
<h2>Sources</h2>
<ul>
<li><a href="https://download1.fbr.gov.pk/Docs/2025841183918948CircularNo01of2025-26IncomeTax.pdf" rel="noopener">FBR Income Tax Circular No. 01 of 2025-26</a> (explains the Finance Act 2025 changes)</li>
<li><a href="https://www.icmainternational.com/News_Pdf/Tax_Rate_Card_for_Tax_Year_2025_26.pdf" rel="noopener">ICMA Pakistan Tax Rate Card, Tax Year 2025-26</a></li>
</ul>
<p class="note">Note: the FBR circular prints the fixed amounts for the top two slabs as Rs 345,000 and Rs 615,000. Those numbers don't follow from the slabs below them (116,000 + 23% × 1,000,000 = 346,000). We use Rs 346,000 and Rs 616,000, which keep the slabs continuous and match the ICMA rate card. The difference is Rs 1,000 a year at most.</p>
<h2>How the calculation works</h2>
<p>Pakistan taxes salary progressively. Your income is placed in a slab: you pay that slab's fixed amount plus its percentage on the part of your income above the slab's lower limit. For example, an annual salary of Rs 1,800,000 is in the third slab: Rs 6,000 + 11% × Rs 600,000 = Rs 72,000 a year (Rs 6,000 a month).</p>
<p class="note">This is an estimate, not tax advice. Your actual tax depends on allowances, tax credits, other income and tax already withheld. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
{ path: "tools/salary-increment-calculator/", title: "Salary Increment Calculator Pakistan 2025-26 – Take-home After Tax",
  description: "See how much of a salary raise you keep after Pakistani income tax, or find the gross salary needed for a target take-home pay.",
  script: "page-increment.js",
  body: `<h1>Salary Increment Calculator (Tax Year 2026)</h1>
<p>A 20% raise doesn't mean 20% more take-home pay. Because Pakistan's salary tax is progressive, part of every increment goes to tax. Some raises also push part of your income into a higher slab. This calculator shows the real effect, using the FBR salaried rates for 2025-26.</p>
<div id="tool"></div><noscript><p>This calculator needs JavaScript.</p></noscript>
<h2>How it works</h2>
<p>We work out the annual tax on your current salary and on your new salary, then compare take-home pay. The "share you keep" is extra take-home divided by extra gross pay. The reverse calculator searches for the lowest gross salary whose take-home after tax reaches your target.</p>
<h2>Will a raise ever lower my take-home?</h2>
<p>No. Each slab only taxes the part of your income above its lower limit, so a raise always increases take-home pay. Only the extra rupees are taxed at the higher rate. (Above Rs 10 million, the 9% surcharge applies to all of your tax, which makes a small jump at that point.)</p>
<p class="note">This is an estimate, not tax advice. See the <a href="../salary-tax-calculator/">slab table and sources</a> and our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
{ path: "tools/zakat-calculator/", title: "Zakat Calculator Pakistan – Cash, Gold, Silver & Savings",
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
<p class="note">This calculator gives an estimate for guidance only. It is not a religious ruling. See our <a href="../../disclaimer/">disclaimer</a>.</p>
<p><small>Last reviewed: ${UPDATED}</small></p>`},
{ path: "about/", title: "About – Pakistan Salary Tools", description: "Who builds Pakistan Salary Tools and how we keep our calculators accurate.",
  body: `<h1>About</h1><p>Pakistan Salary Tools is an independent project. We make free, simple calculators for salaried people in Pakistan. We are not affiliated with the FBR or any government body.</p><h2>How we keep it accurate</h2><ul><li>We take rates from official FBR documents and widely used professional rate cards, and link to them.</li><li>The calculation code is open source and covered by automated tests.</li><li>We review the rates after every Finance Act.</li></ul><p>Source code: <a href="${REPO}" rel="noopener">GitHub</a>.</p>`},
{ path: "contact/", title: "Contact – Pakistan Salary Tools", description: "How to report a mistake or suggest a new calculator.",
  body: `<h1>Contact</h1><p>Found a mistake or want a new calculator? Please <a href="${REPO}/issues" rel="noopener">open an issue on GitHub</a>. Please don't post personal financial details there, because issues are public.</p>`},
{ path: "privacy-policy/", title: "Privacy Policy – Pakistan Salary Tools", description: "How Pakistan Salary Tools handles your data.",
  body: `<h1>Privacy Policy</h1><p><small>Last updated: ${UPDATED}</small></p>
<h2>Calculator inputs</h2><p>All calculations run in your browser. The figures you enter are never sent to us or stored by us.</p>
<h2>Hosting logs</h2><p>Our hosting provider (currently GitHub Pages) may log technical data such as IP addresses for security and operations. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub's privacy statement</a>.</p>
<h2>Cookies and advertising</h2><p>We don't currently use cookies, analytics or ads. If we add advertising, such as Google AdSense, later, third-party vendors including Google may use cookies to serve ads based on your earlier visits to this and other sites. You can opt out of personalised advertising at <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a>. We'll update this policy before any such change, and we'll ask for consent where the law requires it.</p>
<h2>Contact</h2><p>See our <a href="../contact/">contact page</a>.</p>`},
{ path: "disclaimer/", title: "Disclaimer – Pakistan Salary Tools", description: "Our calculators give estimates, not professional tax or religious advice.",
  body: `<h1>Disclaimer</h1><p>The calculators on this site give estimates for general information only. They are not tax, legal, financial or religious advice. Tax law changes, and your own situation may include allowances, credits or other income that we don't model. Check important figures with the FBR, a qualified tax adviser or a scholar, as appropriate. We are not affiliated with the Federal Board of Revenue.</p>`}
];
