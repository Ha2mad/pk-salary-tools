# Pakistan Salary Tools

Live site: https://ha2mad.github.io/pk-salary-tools/

- [Salary tax calculator](https://ha2mad.github.io/pk-salary-tools/tools/salary-tax-calculator/)
- [Salary increment calculator](https://ha2mad.github.io/pk-salary-tools/tools/salary-increment-calculator/)
- [Zakat calculator](https://ha2mad.github.io/pk-salary-tools/tools/zakat-calculator/)

Free, client-side calculators for salaried people in Pakistan. It's a static site with no backend, no paid APIs, and no tracking.

- `site/assets/`: CSS and JS (the tax logic is in `tax.js`)
- `src/pages.mjs`: page content; `scripts/build.mjs` builds everything into `dist/`
- `npm run ci`: build, lint (ESLint + html-validate), unit tests, internal link check

## Hosting
`dist/` is plain static output, so any static host works.
- GitHub Pages: `.github/workflows/ci.yml` deploys only after every check passes on `main`.
- Cloudflare Pages: build command `npm ci && npm run build`, output dir `dist`, env var `SITE_URL=https://<your-domain>/`.

## AdSense readiness

Checklist before applying for Google AdSense. Do not add ad code or analytics here until this list is done and the privacy policy is updated.

- [ ] **ads.txt at the domain root.** Google fetches `https://<your-domain>/ads.txt`. This site is published at `https://ha2mad.github.io/pk-salary-tools/`, so a file in the repo is served at `https://ha2mad.github.io/pk-salary-tools/ads.txt`. That subpath is not the domain root, so it cannot satisfy ads.txt.
- [ ] **Custom domain.** A domain you control (Cloudflare Pages or another static host, with `SITE_URL` set to that origin) can serve `ads.txt` at the root.
- [ ] **Identity verification.** The AdSense account holder must verify their identity.
- [ ] **Address verification.** The payee address must be verified, including the PIN Google sends when it asks for one.
- [ ] **Content.** Home, every tool, every guide, about, and contact are original, useful, and linked, with no thin or copied pages.
- [ ] **Privacy policy.** The privacy policy, about page, and contact page are published. Update the privacy policy before any advertising is added.

## Tax data
Tax Year 2027 (FY 2026-27) salaried rates are the default. They come from the Finance Act 2026 (Gazette, 26 June 2026), FBR Income Tax Circular No. 02 of 2026-27, and the FBR Withholding Tax Rate Card for Tax Year 2027. Tax Year 2026 rates remain in `site/assets/tax.js` for comparison: fixed amounts Rs 346,000 and Rs 616,000 (continuous with the bands below; Circular 01 of 2025-26 prints 345,000 / 615,000) and the 9% section 4AB surcharge above Rs 10 million. Salary has no surcharge in Tax Year 2027.
