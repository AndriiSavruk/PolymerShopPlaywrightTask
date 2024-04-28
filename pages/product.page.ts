import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
    public readonly chooseSize: Locator;
    public readonly chooseQuantity: Locator;
    public readonly addToCartBtn: Locator;
    public readonly viewCartBtn: Locator;
    public readonly productTitle: Locator;
    public readonly productPrice: Locator;
    

    constructor(page: Page) {
        super(page);

        this.chooseSize = page.getByLabel('Size');
        this.chooseQuantity = page.getByLabel('Quantity');
        this.addToCartBtn = page.getByLabel('Add this item to cart');
        this.viewCartBtn = page.getByRole('link', { name: 'View Cart' });
        this.productTitle = page.locator('div.detail > h1');
        this.productPrice = page.locator('div.price');
    }

    async selectSize(sz: string): Promise<void> {
        await this.chooseSize.selectOption(sz);
    }

    async selectQuantity(num: string): Promise<void> {
        await this.chooseQuantity.selectOption(num);
    }

    async clickOnAddToCartBtn(): Promise<void> {
        await super.clickElement(this.addToCartBtn);
    }

    async clickViewCartBtn(): Promise<void> {
        await super.clickElement(this.viewCartBtn);
    }

    async getTitleOfProduct(): Promise<string> {
        const text = super.getTextOfElement(this.productTitle);
        return text || '';
    }

    async getProductPrice(): Promise<number> {
        const priceText = super.getTextOfElement(this.productPrice);
        const price = parseFloat((await priceText).slice(1));
        return price;
    }

   
}