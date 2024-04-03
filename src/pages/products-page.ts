import { BasePage } from './base-page';
import { BrowserContext, Page } from '@playwright/test';

export class ProductPage extends BasePage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public get elements() {
    return {
      inventoryItemName: this.page.getByText('Sauce Labs Bolt T-Shirt'),
      addBoltTShirtToCartButton: this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
      cartButton: this.page.locator('.shopping_cart_badge'),
      productsText: this.page.getByText('Products')
    };
  }

  async clickAddBoltTShirtToCart() {
    await this.elements.addBoltTShirtToCartButton.click(); 
  }

  async clickCartButton() {
    await this.elements.cartButton.click();
  }

  async getProductsText() {
   return this.elements.productsText.textContent();
  }
}