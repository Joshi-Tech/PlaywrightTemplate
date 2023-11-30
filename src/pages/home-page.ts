import { BasePage } from './base-page';
import { expect, BrowserContext, Page } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public get elements() {
    return {
      techAcademyLink: this.page.getByRole('link', { name: 'Tech Academy ' }),
      contactLink: this.page.locator('#menu-item-4956').getByRole('link', { name: 'Contact' }),
      consultantServicesLink: this.page.getByRole('link', { name: 'Consultancy Services ' }),
      qualityEngineeringLink: this.page.getByRole('link', { name: 'Quality Engineering'})
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
    await expect(this.page).toHaveTitle('Quality Engineering | Ten10');
  }
}
