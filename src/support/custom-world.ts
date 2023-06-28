import { AllPageObjects } from '../pages/all-page-objects';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';

export interface ICustomWorld extends World {
  debug: boolean;
  mobileFlag: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  allPageObjects?: AllPageObjects;
  testName?: string;
  startTime?: Date;
  playwrightOptions?: PlaywrightTestOptions;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
  mobileFlag = false;
}

setWorldConstructor(CustomWorld);
