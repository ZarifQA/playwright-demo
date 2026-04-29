import { test } from "@playwright/test";

test("hover Action", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to hover section
  await page.locator("//h2[text()='Hover Menu']").scrollIntoViewIfNeeded();

  // hover over the element
  await page.hover("div.menu");

  // wait for 2 seconds to observe the submenu  revealing
  await page.waitForTimeout(2000);

  // Click on the revealed submenu item
  await page.click("#submenuItem");

  // move mouse away to hide the submenu
  await page.mouse.move(0, 0);

  // wait for 2 seconds to observe the submenu hiding
  await page.waitForTimeout(2000);
});
