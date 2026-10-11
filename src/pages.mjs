const REPO = "https://github.com/Ha2mad/pk-salary-tools";
const UPDATED = "2026-10-11";
export const pages = [
{ path: "", title: "Pakistan Salary Tools – Free Salary Tax, Increment & Zakat Calculators",
  description: "Free, accurate, privacy-friendly calculators for Pakistani salaried people: FBR salary tax 2025-26, increment take-home and Zakat.",
  body: `<h1>Free salary &amp; money calculators for Pakistan</h1>
<p>Simple tools that run entirely in your browser. Nothing you type is sent anywhere. Every tax figure links to its official source and shows the full working.</p>
<ul class="cards">
<li><h2><a href="tools/salary-tax-calculator/">Salary Tax Calculator 2025-26</a></h2><p>Monthly and annual income tax, take-home pay, and a slab-by-slab breakdown using the FBR rates for Tax Year 2026.</p></li>
<li><h2><a href="tools/salary-increment-calculator/">Salary Increment Calculator</a></h2><p>See how much of a raise you actually keep after tax. <em>Coming soon.</em></p></li>
<li><h2><a href="tools/zakat-calculator/">Zakat Calculator</a></h2><p>Work out Zakat on cash, gold, silver and other assets. <em>Coming soon.</em></p></li>
</ul>
<h2>Why use these tools?</h2>
<p>Several popular Pakistani tax calculators still show the <em>previous</em> year's slab rates. We check our rates against the FBR's own circular and tax rate cards, and show the source on every page.</p>`},
{ path: "tools/salary-tax-calculator/", title: "Salary Tax Calculator Pakistan 2025-26 (Tax Year 2026) – FBR Slabs",
  description: "Calculate income tax on your salary in Pakistan for 2025-26 using FBR slab rates. Monthly deduction, take-home pay and slab-by-slab working.",
  script: "salary-tax.js",
  body: `<h1>Salary Tax Calculator Pakistan 2025-26</h1>
<p>Enter your gross taxable salary to estimate income tax under the salaried-person rates for Tax Year 2026 (1 July 2025 – 30 June 2026).</p>
<form id="tax-form" novalidate>
<label for="amount">Gross taxable salary (Rs)</label>
<input id="amount" name="amount" type="number" inputmode="numeric" min="0" step="1" required aria-describedby="amount-help">
<small id="amount-help">Use the taxable amount from your salary slip. Exempt items such as medical allowance up to 10% of basic salary should be left out.</small>
<label for="period">This amount is</label>
<select id="period" name="period"><option value="monthly">Monthly</option><option value="annual">Annual</option></select>
<label for="year">Tax year</label>
<select id="year" name="year"><option value="2026">Tax Year 2026 (2025-26)</option></select>
<button type="submit">Calculate tax</button>
</form>
<section id="result" tabindex="-1" aria-live="polite"></section>
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
{ path: "tools/salary-increment-calculator/", title: "Salary Increment Calculator Pakistan – Take-home After Tax", description: "See how a salary raise changes your take-home pay after Pakistani income tax. Coming soon.",
  body: `<h1>Salary Increment Calculator</h1><p>This tool is under construction. It will show how much of a raise you keep after tax, and the gross salary you need to reach a target take-home pay.</p><p>For now, try the <a href="../salary-tax-calculator/">Salary Tax Calculator</a>.</p>`},
{ path: "tools/zakat-calculator/", title: "Zakat Calculator Pakistan – Cash, Gold & Silver", description: "Calculate Zakat on your savings, gold, silver and other assets. Coming soon.",
  body: `<h1>Zakat Calculator</h1><p>This tool is under construction. You'll enter today's gold or silver price for the nisab threshold, and the tool will calculate Zakat at 2.5% on eligible assets after liabilities.</p><p>For now, try the <a href="../salary-tax-calculator/">Salary Tax Calculator</a>.</p>`},
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
