import { ICustomWorld } from '../custom-world';
import { config } from '../config';
import { AfterAll, Before, BeforeAll } from '@cucumber/cucumber';
import {
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  webkit,
  WebKitBrowser,
  BrowserContextOptions,
  devices,
} from '@playwright/test';
import { ensureDir } from 'fs-extra';

const tracesDir = 'traces';

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;

BeforeAll(async function () {
  switch (config.browser.trim()) {
    case 'firefox':
      browser = await firefox.launch(config.browserOptions);
      break;
    case 'ios':
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
  await ensureDir(tracesDir);
});

Before({ name: 'Setup Browser Context' }, async function (this: ICustomWorld) {
  // Set browser context
  let browserContextOptions: BrowserContextOptions;
  if (browser.browserType() === webkit) {
    browserContextOptions = { ...devices['iPhone 11'] };
    this.mobileFlag = true;
  } else {
    browserContextOptions = {
      acceptDownloads: true,
      recordVideo: process.env.PWVIDEO ? { dir: 'screenshots' } : undefined,
      viewport: { width: 1920, height: 1080 },
    };
  }
  this.context = await browser.newContext(browserContextOptions);
});

AfterAll(async function () {
  await browser.close();
});
