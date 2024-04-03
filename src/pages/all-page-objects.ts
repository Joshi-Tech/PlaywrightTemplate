import { BasePage } from './base-page';
import { LoginPage } from './login-page';
import { ProductPage } from './products-page';
import { CartPage } from './cart-page';
import { Page, BrowserContext } from '@playwright/test';

export class AllPageObjects {
  basePage: BasePage;
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;

  constructor(public page: Page, public context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.loginPage = new LoginPage(page, context);
    this.productPage = new ProductPage(page, context);
    this.cartPage = new CartPage(page, context);
  }
}
