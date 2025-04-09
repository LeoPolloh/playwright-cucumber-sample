import { Given, Then, After } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { expect } from "@playwright/test";

let page: Page;
let browser: Browser;

Given("User logins as standard user", async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForSelector("div:has-text('Sauce Labs Backpackcarry.')");
});

Then("User add the first item to the cart", async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
});

After(async () => {
  await browser.close();
});


