# Pakistan Salary Tools

Free, client-side calculators for salaried people in Pakistan. It's a static site with no backend, no paid APIs, and no tracking.

- `site/assets/`: CSS and JS (the tax logic is in `tax.js`)
- `src/pages.mjs`: page content; `scripts/build.mjs` builds everything into `dist/`
- `npm run ci`: build, lint (ESLint + html-validate), unit tests, internal link check

## Hosting
`dist/` is plain static output, so any static host works.
- GitHub Pages: `.github/workflows/ci.yml` deploys only after every check passes on `main`.
- Cloudflare Pages: build command `npm ci && npm run build`, output dir `dist`, env var `SITE_URL=https://<your-domain>/`.

## Tax data
Tax Year 2027 (FY 2026-27) salaried rates are the default. They come from the Finance Act 2026 (Gazette, 26 June 2026), FBR Income Tax Circular No. 02 of 2026-27, and the FBR Withholding Tax Rate Card for Tax Year 2027. Tax Year 2026 rates remain in `site/assets/tax.js` for comparison: fixed amounts Rs 346,000 and Rs 616,000 (continuous with the bands below; Circular 01 of 2025-26 prints 345,000 / 615,000) and the 9% section 4AB surcharge above Rs 10 million. Salary has no surcharge in Tax Year 2027.
