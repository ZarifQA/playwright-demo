import { test } from "@playwright/test";

test("fill-typing", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // filling input fields
  await page.fill("#username", "zarif");

  // Typing input fields
  await page
    .locator("#email")
    .pressSequentially("zarif@gmail.com", { delay: 300 });
});
