# AdSense plan (Blogger front end + GitHub Pages tool site)

Status labels: VERIFIED = checked against a cited source on 2026-10-11. UNVERIFIED = from experience or community reports; check before relying on it. ESTIMATE = a guess.

## 1. Why Blogger
- AdSense requires you to own the site and be able to edit its HTML (VERIFIED: support.google.com/adsense/answer/91205). A github.io subfolder doesn't give us that. Blogger is an AdSense host partner, and sign-up goes through Blogger → Earnings (VERIFIED: support.google.com/adsense/answer/9724).
- Cost: Rs 0 on *.blogspot.com. A custom domain is optional and would cost money, so it's not part of this plan.

## 2. Blogger setup (USER: needs Hammad's Google account; ~30 min)
1. blogger.com → New blog. Title "Pakistan Salary Tools". Address e.g. pksalarytools.blogspot.com (availability UNVERIFIED).
2. Settings: language English; time zone Karachi; HTTPS redirect on; meta description on; custom robots.txt off (defaults are fine); crawlers and indexing on.
3. Theme: Contempo or Essential (responsive). Remove unused gadgets.
4. Add the Pages listed in §4. Add the menu (Home, three tools, About, Contact, Privacy).
5. Publish the 3 tool posts (§3), then at least 10–15 supporting articles (§3b).
6. Settings → Earnings → Sign up for AdSense (option shown when the blog is eligible; exact conditions UNVERIFIED).

## 3. Post structure for each tool (original content, 900–1,500 words each)
Template:
1. H1 with the year (e.g. "Salary Tax Calculator Pakistan 2025-26").
2. 2–3 sentence intro: what it does and that nothing leaves the browser.
3. The embed snippet (paste from https://ha2mad.github.io/pk-salary-tools/embed/<tool>.snippet.html in HTML view).
4. "How it's calculated", with a worked example in our own words.
5. Table (slabs / nisab values) with sources and links (FBR circular, ICMA card).
6. 3 worked examples at common salaries (computed with our tool, not copied).
7. FAQ (5–6 real questions from "People also ask", answered in our own words).
8. Disclaimer + "last reviewed" date + link to the GitHub source.

Tool posts:
- Salary Tax Calculator 2025-26: slabs, 9% surcharge, medical allowance exemption, note on the FBR printed figures (345k/615k).
- Salary Increment Calculator: share of a raise you keep, reverse calculation, the surcharge cliff at Rs 10M (our own finding).
- Zakat Calculator: silver vs gold nisab, tola/gram conversion, what counts as zakatable, bank Zakat deduction on 1 Ramadan and the CZ-50 declaration (CZ-50 details UNVERIFIED; cite an official source before publishing).

### 3b. Supporting articles (original, each linking to a tool)
"Tax on Rs 100,000 salary in Pakistan 2025-26", "Tax on Rs 150,000/200,000/300,000 salary" (one post per salary level, each with its own worked example), "What changed in salary tax 2024-25 vs 2025-26", "How to read your salary slip", "How to file a return on IRIS as a salaried person" (screenshots must be our own), "Is my bonus taxed?", "Zakat on gold jewellery: views explained", "Tola to gram". Avoid near-duplicate thin posts.

## 4. Required pages
About (who runs it, why, how accuracy is kept), Contact (Blogger contact form gadget or email), Privacy Policy (must mention Google/third-party cookies and the opt-out at adssettings.google.com; adapt our site's policy), Disclaimer (not tax/religious advice), Terms (optional).

## 5. Search Console (USER: Google sign-in)
- Blogger blogs are usually verified in Search Console automatically for the owner's account (UNVERIFIED). Add the property and submit /sitemap.xml.
- Also add the GitHub Pages site as a URL-prefix property https://ha2mad.github.io/pk-salary-tools/ (verify with an HTML meta tag. We can add that to the build; the user only needs to send the token string, which is not a secret) and submit its sitemap.
- Choose the canonical home: duplicate tool pages on both sites can compete. Plan: Blogger posts are the main articles; the github.io pages host the tools and link to the Blogger posts.

## 6. Eligibility checklist
- [ ] Applicant 18+ (VERIFIED requirement, answer/9724)
- [ ] Original, useful content; no thin or copied posts (VERIFIED requirement)
- [ ] Site complies with the AdSense Program policies (VERIFIED requirement)
- [ ] Privacy Policy, About and Contact pages present (common practice; not formally listed, UNVERIFIED as a hard rule)
- [ ] Navigation works on mobile; no broken links
- [ ] Enough content: ESTIMATE 15–30 quality posts. Google publishes no minimum.
- [ ] Some organic traffic before applying (UNVERIFIED: no official minimum)
- [ ] Site review takes a few days, sometimes 2–4 weeks (VERIFIED, answer/12169212)
- [ ] Payment: Pakistan payee address verified with a PIN letter at a balance threshold (UNVERIFIED for current rules)

## 7. EU/UK consent message
- Google requires a Google-certified CMP for showing ads to EEA, UK and Swiss users (UNVERIFIED in this session; see Google's EU user consent policy and AdSense "Privacy & messaging").
- Plan: AdSense → Privacy & messaging → European regulations → create a GDPR message with the 3-choice option (Consent / Do not consent / Manage options), and publish it for the blogspot site. This is Google's own certified CMP and costs nothing.
- Blogger also shows its own EU cookie notice; keep it.
- Traffic is mostly from Pakistan (ESTIMATE), but the message is still required for any EEA visitors.

## 8. Realistic timeline (ESTIMATE)
- Week 1 (now): tools live on github.io, Blogger created, 3 tool posts + required pages.
- Weeks 2–6: 2–3 supporting posts per week, Search Console indexing, first organic visits.
- Week 4–8: apply when there are ~20 solid posts and steady indexed traffic. Review takes days to weeks.
- If rejected (common for new sites: "low value content"), improve and reapply after 2–4 weeks.
- Earnings: a few dollars a month at first is realistic (ESTIMATE). Pakistani traffic pays a low rate per 1,000 views.
- Yearly: update the slabs right after the Finance Act each June/July. This is the big traffic window for searches.

## 9. Things only the user can do
Create the Blogger blog; sign up for AdSense; add Search Console properties; set up the GDPR message; tax/payment info; and personal-identity verification.
