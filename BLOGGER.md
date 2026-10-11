# Embedding the calculators in Blogger
1. Run `npm run build`. The snippets are in `dist/embed/{tax,increment,zakat}.snippet.html` (after deploy they're also at `<site>/embed/...`).
2. In Blogger: New post → switch to **HTML view** → paste the entire snippet → write the article text around it → publish.
3. Each snippet is self-contained: one div, one style and one script, with no external files or network calls. Class names use the `pkst-` prefix so they won't clash with the theme. More than one widget on a page is fine.
4. Don't switch the post back to Compose view after pasting; Blogger may rewrite the script.
