import { Then } from "@cucumber/cucumber";
import { CartPage } from "../pages/cartPage";
import { expect } from '@playwright/test';

Then("Users add an item to cart and checks that is visible", async function () {
    let cartPage = new CartPage(this.page);
    await this.page.locator(cartPage.addToCartButtonLocator).click();
    await this.page.locator(cartPage.shoppingCartLocator).click();
    await expect(this.page.locator(cartPage.inventoryItemLocator)).toBeVisible();
});