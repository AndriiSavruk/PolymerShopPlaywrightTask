import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SectionPage extends BasePage {
    public readonly shopItem: Locator;

    constructor(page: Page) {
        super(page);

        this.shopItem = page.locator('shop-list-item');
    }

    async clickOnShopItem(i: number): Promise<void> {
        const items: Array<Locator> = await this.shopItem.all();
        await super.clickElement(items[i]);
    }

}