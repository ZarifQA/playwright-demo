import { test } from "@playwright/test";

test("getByPlaceholder()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Email").fill("Za03@gmail.com");
  await page.getByPlaceholder("Password").fill("zaza");
});
