import { test } from "@playwright/test";

test("getByLabel()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByLabel("Email").fill("Za03@gmail.com");
  await page.getByLabel("Password").fill("zaza");
});
