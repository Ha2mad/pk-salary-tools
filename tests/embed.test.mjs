import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { embedSnippet, TOOLS } from "../scripts/embed.mjs";

for (const tool of Object.keys(TOOLS)) {
  test(`${tool} embed is self-contained`, () => {
    const s = embedSnippet(tool, "https://example.com/");
    assert.ok(!/\bimport\s|\bexport\s/.test(s), "no ES module syntax");
    assert.ok(!/<script[^>]+src=/.test(s), "no external scripts");
    assert.ok(!/<link\b/.test(s), "no external stylesheets");
    assert.equal((s.match(/<script>/g) || []).length, 1);
    const js = s.split("<script>")[1].split("</script>")[0];
    assert.doesNotThrow(() => new vm.Script(js), "script parses");
  });
}
