import { test, expect } from "@playwright/test";

test("Check element count", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // count the numbor of buttons on the page
  const buttonCount = await page.locator("button").count();
  expect(buttonCount).toBeGreaterThan(4);

  // count the number of fruit option in the search option list

  const fruitsCount = await page.locator("ul[id='searchOptioins'] li").count();

  expect(fruitsCount).toBe(5);
});
