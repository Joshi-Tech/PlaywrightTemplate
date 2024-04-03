import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { Then, When } from '@cucumber/cucumber';


When(/^I add the Sauce Labs Bolt T-Shirt to the cart$/, async function (this: ICustomWorld) {
  await this.allPageObjects!.productPage.clickAddBoltTShirtToCart()
});

Then(/^the inventory item name of "(.+)" should exist in the cart$/, async function (this:ICustomWorld, itemName) {
  await this.allPageObjects!.productPage.clickCartButton()
  const itemDescription = (await this.allPageObjects!.cartPage.getCartBoltTShirtDescription());
  expect(itemDescription).toEqual(itemName);
});