import { test } from "@playwright/test";

test("locator()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("input[placeholder=`UserName`]").fill("test@gmail.com"); //CSS
  await page.locator("form input[placeholder=`Password`]").fill("password"); //CSS
  await page.locator("//button[test()=`Login`]").click(); //XPATH  WAY
});
