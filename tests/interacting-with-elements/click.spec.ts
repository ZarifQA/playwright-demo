import { test } from "@playwright/test";

test("Clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Single click
  await page.click("//button[text()='Login']");

  // Double click
  await page.dblclick("//span[@alt='toggle-switch']");
});
