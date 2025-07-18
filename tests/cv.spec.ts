import { test, expect } from "@playwright/test";

test.describe("CV Page", () => {
  test("should display CV content", async ({ page }) => {
    await page.goto("http://localhost:5173/cv");

    await expect(page).toHaveTitle(/Daniel Giraldo - CV/i);
    await expect(page.locator("h1")).toContainText("Daniel Giraldo Chaverra");

    // Solución segura:
    await expect(page.getByRole("heading", { name: "Professional Summary" })).toBeVisible();
  });
});