import { Locator, Page } from "@playwright/test";

export class BasePage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(): Promise<void> {
        await this.page.setViewportSize({width:1536,height:824});
        await this.page.goto('', {
            waitUntil: "domcontentloaded",
            timeout: 60000,
          });
    }

    async clickElement(element: Locator): Promise<void> {
        await element.click();
    }

    async getTextOfElement(element: Locator): Promise<string> {
        const text = await element.textContent();
        return text || '';
    }

    async setValue(element: Locator, value: string): Promise<void> {
        await element.fill(value);
    }
}