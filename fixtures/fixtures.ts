import { test as base } from '@playwright/test';
import { MainPage } from "../pages/main.page";
import { SectionPage } from '../pages/section.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { SuccessPage } from '../pages/success.page';

type MyFixtures = {
    mainPage: MainPage;
    sectionPage: SectionPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    successPage: SuccessPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await use( new MainPage(page));
    },
    sectionPage: async ({ page }, use) => {
        await use( new SectionPage(page));
    },
    productPage: async ({ page }, use) => {
        await use( new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use( new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use( new CheckoutPage(page));
    },
    successPage: async ({ page }, use) => {
        await use( new SuccessPage(page));
    } 
    });

export { expect } from '@playwright/test';