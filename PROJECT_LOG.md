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
