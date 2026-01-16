// tests/converter.test.js
import test from "node:test";
import assert from "node:assert/strict";

import { convert } from "../src/js/converter.js";

test("convert() multiplies amount by rate", () => {
  const amount = 100;
  const rate = 0.78;

  const result = convert(amount, rate);

  assert.equal(result, 78);
});
