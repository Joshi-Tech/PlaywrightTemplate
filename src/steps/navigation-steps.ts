import {ICustomWorld} from '../support/custom-world';
import {Given, Then, When} from '@cucumber/cucumber';
import {error} from 'console';
import {expect} from "@playwright/test";

Given(/^I am on the Ten10 homepage$/, async function (this: ICustomWorld) {
  await this.allPageObjects!.basePage.goto();
});

When(/^I click on (.+)$/, async function (this: ICustomWorld, link) {
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

Then(/^the page title contains '(.+)'$/, async function (this: ICustomWorld, expectedTitle: string) {
  await this.allPageObjects!.basePage.waitForTitleTextToAppear(expectedTitle);
  await expect(await this.page!.title()).toContain(expectedTitle);
});

When('I click Quality Engineering of the list', async function () {
  await this.allPageObjects!.homePage.clickQualityEngineeringLink();
});

Then('the page title is', async function (this: ICustomWorld) {
  await this.allPageObjects!.homePage.checkQualityEngineeringPageTitle()
});