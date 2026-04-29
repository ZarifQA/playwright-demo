import { test, expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // grab the selector for the Text Section header
  const selector = page.locator("//h2[text()='Text Section']");

  // Assert that the element is visible
  const isTextSectionHeaderVisible = await selector.isVisible();

  expect(isTextSectionHeaderVisible).toBeTruthy();
});
