import { test, expect } from "@playwright/test";

test("Combining assertions", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Locate the button outpout element
  const element = page.locator("#buttonOutput");

  // perform multiple assertions on the element
  await expect(element).toBeVisible();
  expect(await element.textContent()).toBeFalsy();
  await expect(element).toHaveClass(/output/);
});
