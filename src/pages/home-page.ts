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
      consultantServicesLink: this.page.getByRole('link', { name: 'Consultancy Services ' }),
      qualityEngineeringLink: this.page.getByText('Quality Engineering').nth(1)
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

  async hoverConsultantServicesLink() {
    await this.elements.consultantServicesLink.hover();
  }
  
  async clickQualityEngineeringLink() {
    await this.hoverConsultantServicesLink();
    await this.elements.qualityEngineeringLink.click();
  }

  async checkQualityEngineeringPageTitle() {
    await this.clickQualityEngineeringLink();
    await expect(this.page).toHaveTitle('Contact-Ten10');
  }
}
