import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).click();
  await page
    .getByLabel("Search", { exact: true })
    .fill("step by step Automation");
  await page.keyboard.press("Enter");
  await page
    .getByRole("link", {
      name:
        "Automation Step by Step: NEVER STOP LEARNING Automation Step by Step https://automationstepbystep.com"
    })
    .click();
  await expect(page).toHaveURL("https://automationstepbystep.com/");
});
