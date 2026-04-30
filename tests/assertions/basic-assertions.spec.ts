import { test, expect } from "@playwright/test";

test("truthy and fashy values", async () => {
  const a = true;
  const b = false;

  expect(a).toBeTruthy();
  expect(b).toBeFalsy();
});

test("equality checks", async () => {
  const num = 10;
  const str = "Hello";

  expect(num).toBe(10);
  expect(str).toBe("Hello");
});

test("comparison checks", async () => {
  const score = 85;

  expect(score).toBeGreaterThan(80);
  expect(score).toBeLessThan(90);
  expect(score).toBeGreaterThanOrEqual(85);
  expect(score).toBeLessThanOrEqual(40);
});
