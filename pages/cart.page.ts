import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    public readonly checkoutBtn: Locator;
    public readonly shopCartItem: Locator;
    public readonly shopCartItemTitle: Locator;
    public readonly shopCartItemSize: Locator;
    public readonly cartBtn: Locator;
    public readonly totalSum: Locator;

    constructor(page: Page) {
        super(page);

        this.checkoutBtn = page.getByRole('link', { name: 'Checkout' });
        this.shopCartItem = page.locator('shop-cart-item');
        this.shopCartItemTitle = page.locator('div.name > a');
        this.shopCartItemSize = page.locator('div.size > span');
        this.cartBtn = page.locator('div.cart-btn-container');
        this.totalSum = page.locator('span.subtotal');
    }

    async clickOnCheckOuttBtn(): Promise<void> {
        await super.clickElement(this.checkoutBtn);
    }

    async getTitleOfCartItem(i: number): Promise<string> {
        const items: Array<Locator> = await this.shopCartItemTitle.all();
        const text = super.getTextOfElement(items[i]);
        return text || '';
    }

    async getSizeOfCartItem(i: number): Promise<string> {
        const items: Array<Locator> = await this.shopCartItemSize.all();
        const text = super.getTextOfElement(items[i]);
        return text || '';
    }

    async getTextCartBtn(): Promise<string> {
        const text = super.getTextOfElement(this.cartBtn);
        return text || '';
    }

    async getTotalSum(): Promise<number> {
        const priceText = super.getTextOfElement(this.totalSum);
        const price = parseFloat((await priceText).slice(1));
        return price;
    }
}