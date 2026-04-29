import { test } from "@playwright/test";

test("Drag & Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to drag and drop section
  await page
    .locator("//h2[text()='Todo Drag & Drop']")
    .scrollIntoViewIfNeeded();

  // Get locators
  const FinishReportTodo = page.locator("//li[text()='Finish report']");
  const doneZone = page.locator("#doneList");

  // Drag and Drop using dragTo
  await FinishReportTodo.dragTo(doneZone);
  await page.waitForTimeout(2000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#doneList");
});
