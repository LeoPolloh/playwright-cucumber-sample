import { BasePage } from './basePage';

export class CartPage extends BasePage {
    addToCartButtonLocator = '[data-test="add-to-cart-sauce-labs-backpack"]';
    shoppingCartLocator = '[data-test="shopping-cart-link"]'
    inventoryItemLocator = '[data-test="inventory-item"]'
}