import { BasePage } from './base-page';
import { expect, BrowserContext, Page } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public get elements() {
    return {
      techAcademyLink: this.page.getByRole('link', { name: 'Tech Academy' }).nth(0),
      contactLink: this.page.getByRole('link', { name: 'Contact' }).nth(0),
      consultantServicesLink: this.page.getByText('Consultancy Services').nth(0),
      qualityEngineeringLink: this.page.getByText('Quality Engineering').nth(0),
    };
  }

  async clickTechAcademyLink() {
    await this.elements.techAcademyLink.click();
  }
  
  async checkTechAcademyPageTitle() {
    await this.clickTechAcademyLink();
    await expect(this.page).toHaveTitle('Tech Academy - Ten10');
  }

  async clickContactLink() {
    await this.elements.contactLink.click();
  }

  async checkContactPageTitle() {
    await this.clickContactLink();
    await expect(this.page).toHaveTitle('Contact - Ten10');
  }

  async clickConsultantServicesLink() {
    await this.elements.consultantServicesLink.click();
  }
  async clickQualityEngineeringLink() {
    await this.elements.qualityEngineeringLink.click();
  }

  async getGualityEngineeringLink() {
  this.clickConsultantServicesLink();
    await this.elements.qualityEngineeringLink.click();
  }
  async checkQualityEngineeringPageTitle() {
    await this.clickQualityEngineeringLink();
    await expect(this.page).toHaveTitle('Contact-Ten10');
  }
}
