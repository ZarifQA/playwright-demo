import { test } from "@playwright/test";

test("hover Action", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // focus on the input field
  await page.click("#keyboardInput");

  // type text using keybooard
  const text = "Hello, Playwright!";
  await page.keyboard.type(text, { delay: 100 });
  await page.waitForTimeout(2000);

  // press enter key
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  // press backspace
  for (let i = 0; i < text.length; i++) {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(100);
  }
});
