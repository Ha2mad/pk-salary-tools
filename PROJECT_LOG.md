
## 2026-10-11 (Days 3–4)
- Commit author changed to Ha2mad <119964650+Ha2mad@users.noreply.github.com> (amended, never pushed). Remote origin = https://github.com/Ha2mad/pk-salary-tools.git (no credentials stored).
- BLOCKED: `git push` → 403 "Permission to Ha2mad/pk-salary-tools.git denied to Ha2mad". POST /repos/.../pages {build_type: workflow} → 403 "Resource not accessible by personal access token". The token can read repo metadata (the response header says it accepted metadata=read), so the repo is selected, but the token has no write access. Most likely Contents (and Pages/Workflows) are set to Read-only, not Read and write. Not pushed, not deployed; no CI run exists.
- Built: Salary Increment calculator (raise → kept share) plus reverse (target net → minimal gross, binary search); Zakat calculator (silver/gold nisab, user enters per-tola prices, liabilities, validation).
- Built: Blogger embeds. scripts/embed.mjs inlines tax/finance/ui JS and scoped CSS into one snippet per tool (dist/embed/*.snippet.html, plus demo pages). BLOGGER.md has the paste instructions.
- Tests: 41/41 pass (tax 17, finance 16, embed 3, jsdom UI 5). ESLint + html-validate clean; 15 pages, 0 broken internal links.
- Found: the 9% surcharge makes take-home pay drop just above Rs 10M (tax jumps ~Rs 241k). This is noted on the increment page.
