# Pakistan Salary Tools

Free, client-side calculators for salaried people in Pakistan. It's a static site with no backend, no paid APIs, and no tracking.

**Live:** https://ha2mad.github.io/pk-salary-tools/

Tools: [Salary tax calculator](https://ha2mad.github.io/pk-salary-tools/tools/salary-tax-calculator/) · [Salary increment calculator](https://ha2mad.github.io/pk-salary-tools/tools/salary-increment-calculator/) · [Zakat calculator](https://ha2mad.github.io/pk-salary-tools/tools/zakat-calculator/)

- `site/assets/`: CSS and JS (the tax logic is in `tax.js`)
- `src/pages.mjs`: page content; `scripts/build.mjs` builds everything into `dist/`
- `npm run ci`: build, lint (ESLint + html-validate), unit tests, internal link check

## Hosting
`dist/` is plain static output, so any static host works.
- GitHub Pages: `.github/workflows/ci.yml` deploys only after every check passes on `main`.
- Cloudflare Pages: build command `npm ci && npm run build`, output dir `dist`, env var `SITE_URL=https://<your-domain>/`.

## Tax data
Tax Year 2026 rates come from FBR Income Tax Circular No. 01 of 2025-26 and the ICMA rate card.
