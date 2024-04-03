import { BasePage } from './base-page';
import { BrowserContext, Page } from '@playwright/test';

export class LoginPage extends BasePage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public get elements() {
    return {
      userNameInput: this.page.getByPlaceholder('Username'),
      passwordInput: this.page.getByPlaceholder('Password'),
      loginButton: this.page.getByText('login')
    };
  }

  async login(userName:string, password:string) {
    await this.elements.userNameInput.type(userName);
    await this.elements.passwordInput.type(password);
    await this.elements.loginButton.click();
  }

}
