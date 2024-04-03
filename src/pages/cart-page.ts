import { BasePage } from './base-page';
import { BrowserContext, Page } from '@playwright/test';

export class CartPage extends BasePage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public get elements() {
    return {
        cartBoltTShirtDescription: this.page. getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' })  
    };
  }

  async getCartBoltTShirtDescription() {
     return this.elements.cartBoltTShirtDescription.textContent();
  }

}