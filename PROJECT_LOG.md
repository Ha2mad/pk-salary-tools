# Project Log

## 2026-10-11 (Day 1)
- Done: niche research, picked "Pakistan salary & personal-finance calculators", picked 3 tools (see research.md).
- Found: competitor calculators disagree on the 2025-26 slab figures (quality gap).
- Blockers: AdSense needs a domain I own (cost vs Rs 0 budget); GitHub Pages commercial-use gray area. Decision: the user chose Blogger for AdSense.

## 2026-10-11 (Day 2)
- Checked the slabs against FBR Circular 01/2025-26 (345k/615k vs 346k/616k discrepancy, see research.md).
- Built the static site: 8 pages, 404, sitemap.xml, robots.txt, canonical/OG meta, accessibility basics.
- Salary tax calculator finished, with 17 unit tests. CI/deploy workflow written (.github/workflows/ci.yml).
- Blocked at the time: no GitHub push tooling; the user then created the repo and a token.

## 2026-10-11 (Days 3–4)
- Commit author changed to Ha2mad <119964650+Ha2mad@users.noreply.github.com> (amended, never pushed). Remote origin = https://github.com/Ha2mad/pk-salary-tools.git (no credentials stored).
- BLOCKED: `git push` → 403 "Permission to Ha2mad/pk-salary-tools.git denied to Ha2mad". POST /repos/.../pages {build_type: workflow} → 403 "Resource not accessible by personal access token". The token can read repo metadata (the response header says it accepted metadata=read), so the repo is selected, but the token has no write access. Most likely Contents (and Pages/Workflows) are set to Read-only, not Read and write. Not pushed, not deployed; no CI run exists.
- Built: Salary Increment calculator (raise → kept share) plus reverse (target net → minimal gross, binary search); Zakat calculator (silver/gold nisab, user enters per-tola prices, liabilities, validation).
- Built: Blogger embeds. scripts/embed.mjs inlines tax/finance/ui JS and scoped CSS into one snippet per tool (dist/embed/*.snippet.html, plus demo pages). BLOGGER.md has the paste instructions.
- Tests: 41/41 pass (tax 17, finance 16, embed 3, jsdom UI 5). ESLint + html-validate clean; 15 pages, 0 broken internal links.
- Found: the 9% surcharge makes take-home pay drop just above Rs 10M (tax jumps ~Rs 241k). This is noted on the increment page.

## 2026-10-11 23:45 PKT (Day 4, deploy attempt)
- Push succeeded: main = affda77 at https://github.com/Ha2mad/pk-salary-tools
- CI run 38165043337: `check` job PASSED (npm ci, build, lint, 41 tests, internal links, lychee external links, Pages artifact). `deploy` job FAILED: "Failed to create deployment (status: 404) ... Ensure GitHub Pages has been enabled".
- POST /repos/Ha2mad/pk-salary-tools/pages {build_type: workflow} → 403 "Resource not accessible by personal access token". Turning on Pages for the first time appears to need more than the Pages permission (likely Administration: write), or a manual change in the repo settings.
- BLOCKED: the user needs to go to Settings → Pages → Source = "GitHub Actions", then re-run the workflow (or I re-run it).

## 2026-10-11 23:52 PKT (Day 4–6: LIVE)
- User set Pages Source = GitHub Actions. Pushed ee5db7e; CI run 38165378217 succeeded (check + deploy).
- LIVE: https://ha2mad.github.io/pk-salary-tools/
- Verified live: 8 pages + sitemap.xml (8 URLs) + robots.txt + 3 embed snippets + demo → HTTP 200; unknown path → 404.
- Live embed snippets run in jsdom with sample inputs: tax (150k/mo → Rs 6,000 monthly tax), increment (100k +50% → 150k; reverse 144k net → 150k gross), zakat (500k cash, silver Rs 3,500/tola → Rs 12,500). All PASS.
- Live page JS is byte-identical to the repo JS that the UI tests cover. No real-browser (visual) check yet.
- Note: robots.txt at /pk-salary-tools/robots.txt isn't the domain-root robots file, so crawlers ignore it. Submit the sitemap through Search Console instead (needs the user's Google account).

## 2026-10-11 ~23:55 PKT (Day 7: monitoring + AdSense plan)
- Added .github/workflows/uptime.yml: every 6h, checks every sitemap URL plus robots, sitemap and embeds; on failure it fails the run and opens or comments on an "uptime" issue (GITHUB_TOKEN, issues: write).
- Added .github/workflows/lighthouse.yml: weekly (Sun 07:41 PKT) plus manual; 4 URLs; results uploaded as artifacts; a11y < 0.9 = error, others warn.
- Added ADSENSE_PLAN.md (Blogger setup, post templates, pages, Search Console, checklist, GDPR CMP, timeline; with VERIFIED/UNVERIFIED/ESTIMATE labels).
- CI runs for cad5dc1 (38165492760) and 019fff2 (38165546443): success.
- Couldn't start the uptime/Lighthouse workflows manually: POST .../dispatches → 403 "Resource not accessible by personal access token" (needs the Actions: write permission). They'll run on their schedules (uptime: next 6h slot; Lighthouse: Sunday).

## 2026-10-12 ~00:20 PKT: Visual redesign (user feedback: "looks like 2010")
- New design system: system font stack, type scale with clamp(), deep green + neutral palette, sticky blurred header with mobile menu button (aria-expanded, Esc closes), hero with CTA + trust row, tool cards with inline SVG icons + hover lift, feature section, dark green footer, styled tables, amber focus rings, prefers-reduced-motion.
- Calculators: panels, labelled inputs with Rs/%/tola prefixes, custom select, prominent gradient result card, 2-column stat grid on mobile, breakdown table with total row. Blogger embeds use the same scoped .pkst CSS.
- Screenshots: /workspace/site-project/screens/ (before-*, after-*).
- 41/41 tests, lint and link check pass.

## 2026-10-12 ~00:10 PKT: "No CSS in real browser" investigation
- Live HTML referenced ./assets/style.css; the URL resolved correctly; HTTP 200, text/css, no CSP, no integrity attribute, all-lowercase filenames, /pk-salary-tools → 301 to the slash URL. Asset served with cache-control: max-age=600.
- Most likely cause: stale browser cache. The redesigned HTML loaded with the OLD cached style.css (same URL, cached up to 10 min). The old CSS has none of the new classes (.site-header, .menu-btn, .site-nav), which gives exactly the reported look: bare Menu button, visible nav, default links. Not reproducible headless (fresh cache). Not confirmed on the user's machine.
- Fix: content-hash cache busting (?v=<sha256-10>) on all CSS/JS URLs, including module imports inside the JS; absolute base-path URLs (/pk-salary-tools/assets/...) built from SITE_URL.
- New: scripts/check-deployed.mjs plus a CI `verify` job after deploy. Every sitemap page must be 200 and have a stylesheet; every CSS/JS (and the JS imports inside it) must be 200 with the correct content-type. Otherwise the run fails.
- 2026-10-12 00:15 PKT: Blogger content pack: blogger/ (3 tool posts with embeds, 3 articles, 4 pages, PASTE_GUIDE.md) → blogger.zip. Embeds in posts tested in jsdom: PASS.

## 2026-10-12 00:45 PKT: Blogger audit (https://pksalarytools.blogspot.com/)
- Feeds: 7 posts, 0 pages. Calculator posts are titled with their labels ("salary-tax-calculator", "Salary Tax, Calculators, Salary Increment", "Zakat, Calculators"). About/Disclaimer/Privacy Policy were published as posts; Contact, article-2 and article-3 are missing.
- All 3 calculators work live (headless Chrome via puppeteer-core with sample inputs: PASS, no JS errors). Screenshot: screens/blogger-tax-post-390.png
- article-1 still has the SALARY-TAX-POST-URL placeholder. /p/about|contact|privacy-policy|disclaimer.html → 404.
- Fixes need the user (no Blogger access from the box).

## 2026-10-15 10:35 PKT: Routine run (content + health check)
- Synced with remote main first (PR #2 had moved the calculator to Tax Year 2027 rates); rebased the unpushed Blogger-audit log commit on top.
- Re-checked Tax Year 2027 salaried slabs and the withdrawn 9% salaried surcharge against FBR Circular 02 of 2026-27 (paras 7 and 8) and the FBR WHT Rate Card 2027 (s.149): match tax.js.
- New guide: /guides/income-tax-on-monthly-salary-2026-27/ ("Income Tax on Monthly Salary in Pakistan 2026-27: Table from Rs 50,000 to Rs 1,000,000"). Monthly tax and take-home for 12 salary levels, 2025-26 comparison, worked example (Rs 300,000/month gives Rs 416,000/yr), sources, disclaimer. Linked from the home page (new Guides section) and the tax calculator page. Topic not covered by earlier Blogger articles (slabs explainer, nisab, salary slip).
- tests/articles.test.mjs recomputes every table cell from tax.js. 73/73 tests, lint, link check pass. Pushed 06bf1f5; CI run 38687185286 succeeded (check, deploy, verify).
- Health: all 9 sitemap URLs, sitemap.xml, robots.txt and the embed snippet return 200 on GitHub Pages; the guide is live. Blogger home, sitemap.xml, robots.txt and the feed return 200 (7 posts, 0 pages).
- PROBLEM: the live Blogger tax calculator post still runs Tax Year 2026 rates (23% slab, "2025-26" labels). It needs re-pasting from the current dist/embed/*.snippet.html. The 2025-26 slabs article is also outdated.
- PROBLEM: the Blogger email couldn't be sent from this routine run (no send tool for the bot inbox here). Body saved at ../blogger/posts/2026-10-15-income-tax-on-monthly-salary-2026-27.html; handed to the main assistant to send.

## 2026-10-19 10:30 PKT: Routine run (content + health check)
- Pulled remote main first (PRs #3: sitemap lastmod from page dates, Search Console meta tag; README live links).
- New guide: /guides/gross-salary-for-take-home-pay-2026-27/ ("Gross Salary Needed for Your Take-Home Pay in Pakistan 2026-27 (Rs 50,000 to Rs 500,000)"). Gross salary needed for 9 take-home targets (from grossForNet, the reverse calculator), worked example (Rs 200,000/month in hand needs Rs 2,595,000/yr gross, tax Rs 195,000), slab formula, 2025-26 comparison, offer checklist, sources (Finance Act 2026, FBR Circular 02 of 2026-27, WHT Rate Card 2027, Circular 01 of 2025-26), disclaimer. Linked from the home Guides section and the increment calculator page (both lastmod 2026-10-19). Topic not covered before (slabs explainer, nisab, salary slip, monthly tax table).
- tests/articles.test.mjs recomputes both new tables and the worked example from finance.js/tax.js. 75/75 tests, lint, link check pass. Pushed 3d22992; CI run 39204632964 succeeded (check, deploy, verify).
- Health: all 10 sitemap URLs, sitemap.xml, robots.txt and the tax embed return 200 on GitHub Pages; the new guide is live. Blogger home, sitemap.xml, robots.txt and feeds return 200 (still 7 posts, 0 pages).
- PROBLEM: the Blogger email again couldn't be sent from the routine run (no send tool for the bot inbox here, including in executor subagents). Body saved at ../blogger/posts/2026-10-19-gross-salary-for-take-home-pay-2026-27.html; handed to the main assistant to send.
- PROBLEM (still open): the Oct 15 guide never reached Blogger (no new post in the feed), and the three live Blogger calculators plus the slabs article still use Tax Year 2026 rates (23% slab, "2025-26" labels).

## 2026-10-22 10:35 PKT: Routine run (content + health check)
- Pulled remote main first (PR #4: lychee root-relative asset fix).
- New guide: /guides/tax-on-bonus-2026-27/ ("Tax on Bonus in Pakistan 2026-27: How Much of Your Bonus You Keep"). Bonus is salary under s.12(2)(a) ITO 2001 (checked in the FBR ordinance PDF amended to 30 June 2026); extra tax and share kept for one-month and two-month bonuses at 7 salary levels, slab-crossing note, worked example (Rs 200,000/month + Rs 200,000 bonus: extra tax Rs 40,000, keep 80%), s.149 bonus-month withholding explainer, 2025-26 comparison, sources, disclaimer. Linked from the home Guides section and the tax calculator page (both lastmod 2026-10-22). Topic not covered before.
- tests/articles.test.mjs recomputes all three bonus tables and the worked example from tax.js; site-meta lastmods updated. 78/78 tests, lint, link check pass. Pushed e63ea5f; CI run 39728153815 succeeded (check, deploy, verify).
- Health: all 11 sitemap URLs, sitemap.xml and robots.txt return 200 on GitHub Pages; the new guide is live. Blogger home, sitemap.xml, robots.txt and feeds return 200 (still 7 posts, 0 pages).
- PROBLEM: the Blogger email again couldn't be sent from the routine run (no send tool for the bot inbox in routine runs). Body saved at ../blogger/posts/2026-10-22-tax-on-bonus-2026-27.html; handed to the main assistant to send.
- PROBLEM (still open): the Oct 15 and Oct 19 guides never reached Blogger, and the live Blogger calculators plus the slabs article still use Tax Year 2026 rates.

## 2026-10-26 10:45 PKT: Routine run (content + health check)
- Pulled remote main first (no new commits since 403697e).
- New guide: /guides/zakat-tax-deduction-salaried-2026-27/ ("Is Zakat Deductible from Income Tax in Pakistan? Salaried Guide 2026-27"). Section 60 ITO 2001 deductible allowance for Zakat paid under the Zakat and Ushr Ordinance 1980 (quoted from the FBR ordinance PDF amended to 30 June 2026), s.9 taxable income, s.60(2)/(3) limits, which Zakat counts (bank deduction vs private Zakat; s.61 donation credit mentioned), tax saved by Rs 50,000 Zakat at 7 salary levels, worked example (Rs 200,000/month: tax Rs 156,000 to Rs 146,000, saves Rs 10,000), claiming via the return (s.149 lists only s.61/s.63 credit adjustments), sources, disclaimer. Linked from the home Guides section and the Zakat calculator page (both lastmod 2026-10-26). Topic not covered before.
- tests/articles.test.mjs recomputes the Zakat table and worked example from tax.js; site-meta lastmods updated. 80/80 tests, lint, link check pass. Pushed 755713a; CI run 40274428458 succeeded.
- Health: all 12 sitemap URLs, sitemap.xml and robots.txt return 200 on GitHub Pages; the new guide is live. Blogger home, sitemap.xml, robots.txt and feeds return 200 (still 7 posts, 0 pages).
- PROBLEM: the Blogger email again couldn't be sent from the routine run (no send tool for the bot inbox in routine runs). Body saved at ../blogger/posts/2026-10-26-zakat-tax-deduction-salaried-2026-27.html; handed to the main assistant to send.
- PROBLEM (still open): the Oct 15, 19 and 22 guides never reached Blogger, and the live Blogger calculators plus the slabs article still use Tax Year 2026 rates.
