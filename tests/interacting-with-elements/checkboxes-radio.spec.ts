import { test } from "@playwright/test";

test("Checkbox and Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //checking a checkbox
  await page.check("div.checkbox-group input[value='Option 1']");

  //   // Wait for 2 seconds to observe the checked state
  await page.waitForTimeout(2000);

  //   //unchecking a checkbox
  await page.uncheck("div.checkbox-group input[value='Option 1']");

  //   // Select a radio button
  await page.getByRole("radio", { name: "Choice A" }).check();
});
