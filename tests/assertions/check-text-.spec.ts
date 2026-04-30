import { test, expect } from "@playwright/test";

test("Check element Text", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // verify the text content of the paragraph IN THE TEXT SECTION

  const textSectionParagraph = await page
    .locator("#textParagraph")
    .textContent();

  expect(textSectionParagraph).toContain("sample text");

  /// Welcome Git

  // second git change
});
