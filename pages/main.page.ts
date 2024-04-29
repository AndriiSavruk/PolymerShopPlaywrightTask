import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    public readonly mensOuterwearLink: Locator;
    public readonly ladiesOuterwearLink: Locator;
    
    constructor(page: Page) {
        super(page);

        this.mensOuterwearLink = page.locator('#tabContainer').getByRole('link', { name: 'Men\'s Outerwear' });
        this.ladiesOuterwearLink = page.locator('#tabContainer').getByRole('link', { name: "Ladies Outerwear" });
    }

     async clickOnMensOuterwearLink(): Promise<void> {
        await super.clickElement(this.mensOuterwearLink);
        await this.page.waitForTimeout(1000);
    }

    async clickOnLadiesOuterwearLink(): Promise<void> {
        await super.clickElement(this.ladiesOuterwearLink);
        await this.page.waitForTimeout(1000);
    }
    }
