import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given(/^I am on the homepage$/, async function (this: ICustomWorld) {
  await this.allPageObjects!.basePage.goto();
});

When(/^I log in$/, async function (this: ICustomWorld) {
  await this.allPageObjects!.loginPage.login(
    this.allPageObjects!.basePage.standardUser,
    this.allPageObjects!.basePage.password,
  );
});

Then(/^the "(.+)" table is present$/, async function (this: ICustomWorld, expected) {
  expect(await this.allPageObjects!.productPage.getProductsText()).toContain(expected);
});
