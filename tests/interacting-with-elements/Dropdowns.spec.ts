import { test } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  // select Blue from dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  // wait for 2 seconds to observe the selected option
  await page.waitForTimeout(2000);

  // select Red from Dropdown
  await page.selectOption("#dropdownMenu", "Red");

  // wait for 2 seconds to observe the selected option
  await page.waitForTimeout(2000);

  //select Green from Dropdown
  await page.selectOption("#dropdownMenu", "Green");

  // wait for 2 seconds to observe the selected option
  await page.waitForTimeout(2000);
});
