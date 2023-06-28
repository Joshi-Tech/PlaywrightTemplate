import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { error } from 'console';
import { expect } from '@playwright/test';

Given(/^I am on the Ten10 homepage$/, async function (this: ICustomWorld) {
  await this.allPageObjects!.basePage.goto();
});

When(/^I click (.+)$/, async function (this: ICustomWorld, link) {
  switch (link) {
    case 'Tech Academy':
      await this.allPageObjects!.homePage.clickTechAcademyLink();
      break;
    case 'Contact':
      await this.allPageObjects!.homePage.clickContactLink();
      break;
    case 'Quality Engineering':
      await this.allPageObjects!.homePage.clickQualityEngineeringLink();
      break;
    default:
      throw error(`Unable to click link: ${link}`);
  }
});

Then(/^The title matches '(.+)'$/, async function (this: ICustomWorld, expectedTitle: string) {
  await expect(this.page!).toHaveTitle(expectedTitle);
});
