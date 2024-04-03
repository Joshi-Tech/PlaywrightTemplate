import {LaunchOptions} from '@playwright/test';

const browserOptions: LaunchOptions = {
  slowMo: 0,
  headless: process.env.HEADLESS === '1' || false,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://www.saucedemo.com/',
  IMG_THRESHOLD: { threshold: 0.4 },
  TIMEOUT_EX_SMALL: 1000,
  TIMEOUT_SMALL: 5000,
  TIMEOUT_MED: 15000,
  TIMEOUT_LARGE: 60000,
};
