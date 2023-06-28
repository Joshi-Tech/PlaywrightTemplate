import { BasePage } from './base-page';
import { HomePage } from './home-page';
import { Page, BrowserContext } from '@playwright/test';

export class AllPageObjects {
  basePage: BasePage;
  homePage: HomePage;

  constructor(public page: Page, public context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.homePage = new HomePage(page, context);
  }
}
