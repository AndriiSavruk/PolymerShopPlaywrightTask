import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SuccessPage extends BasePage {
    public readonly heading: Locator;

    constructor(page: Page) {
        super(page);

        this.heading = page.locator('header.iron-selected > h1');
    }

    async getTitleOfHeading(): Promise<string> {
        const text = super.getTextOfElement(this.heading);
        return text || '';
    }
}