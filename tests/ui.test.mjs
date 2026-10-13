import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
const dom = new JSDOM("<!DOCTYPE html><body></body>");
globalThis.document = dom.window.document;
const { mountTax, mountIncrement, mountZakat } = await import("../site/assets/ui.js");
const submit = (f) => f.dispatchEvent(new dom.window.Event("submit", { cancelable: true }));
const setv = (root, suffix, v) => { root.querySelector(`[id$="-${suffix}"]`).value = String(v); };

test("tax UI shows monthly tax for 150,000/month", () => {
  const el = document.createElement("div"); document.body.append(el); mountTax(el);
  setv(el, "amount", 150000); submit(el.querySelector("form"));
  assert.match(el.textContent, /Monthly tax deduction\s*Rs 6,000/);
  assert.match(el.textContent, /Tax Year 2027/);
  assert.doesNotMatch(el.textContent, /surcharge/);
});
test("tax UI shows Rs 264,500 monthly tax on Rs 1,000,000 with no surcharge", () => {
  const el = document.createElement("div"); document.body.append(el); mountTax(el);
  setv(el, "amount", 1000000); submit(el.querySelector("form"));
  assert.match(el.textContent, /Monthly tax deduction\s*Rs 264,500/);
  assert.match(el.textContent, /Annual income tax\s*Rs 3,174,000/);
  assert.doesNotMatch(el.textContent, /surcharge/);
});
test("tax UI shows error on empty input", () => {
  const el = document.createElement("div"); document.body.append(el); mountTax(el);
  submit(el.querySelector("form"));
  assert.ok(el.querySelector("[role=alert]"));
});
test("increment UI and reverse UI render", () => {
  const el = document.createElement("div"); document.body.append(el); mountIncrement(el);
  setv(el, "cur", 100000); setv(el, "raise", 50); submit(el.querySelectorAll("form")[0]);
  assert.match(el.textContent, /New gross monthly\s*Rs 150,000/);
  setv(el, "target", 144000); submit(el.querySelectorAll("form")[1]);
  assert.match(el.textContent, /Gross monthly needed\s*Rs 150,000/);
});
test("zakat UI requires nisab price then computes", () => {
  const el = document.createElement("div"); document.body.append(el); mountZakat(el);
  setv(el, "cash", 500000); submit(el.querySelector("form"));
  assert.ok(el.querySelector("[role=alert]"));
  setv(el, "sp", 3500); submit(el.querySelector("form"));
  assert.match(el.textContent, /Zakat due \(2\.5%\)\s*Rs 12,500/);
});
test("two widgets on one page have unique ids", () => {
  const a = document.createElement("div"), b = document.createElement("div"); document.body.append(a, b);
  mountTax(a); mountTax(b);
  const ids = [...document.querySelectorAll("[id]")].map((n) => n.id);
  assert.equal(new Set(ids).size, ids.length);
});
