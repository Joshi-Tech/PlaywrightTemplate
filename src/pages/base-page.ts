import {config} from '../support/config';
import {BrowserContext, Page} from '@playwright/test';
import {join} from 'path';

export class BasePage {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    public async goto(optionalUrl?: string) {
        const pageToGoTo = optionalUrl ? config.BASE_URL + optionalUrl : config.BASE_URL;
        await this.page.goto(pageToGoTo);
    }

    public screenshot(name: string) {
        return this.page.screenshot({path: join('screenshots', `${name}.png`)});
    }

    public getTitle() {
        return this.page.title();
    }

    async waitForTitleTextToAppear(titleText: string) {
        await this.page
            .locator('.page-title .lines', {hasText: titleText})
            .waitFor({state: 'visible'});
    }

}
