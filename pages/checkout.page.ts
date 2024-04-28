import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutPage extends BasePage {
    public readonly emailField: Locator;
    public readonly phoneField: Locator;
    public readonly addressField: Locator;
    public readonly cityField: Locator;
    public readonly stateField: Locator;
    public readonly zipField: Locator;
    public readonly countryField: Locator;
    public readonly cardHolderNameField: Locator;
    public readonly cardNumberField: Locator;
    public readonly expiryMonthField: Locator;
    public readonly expiryYearField: Locator;
    public readonly CardCVVField: Locator;
    public readonly placeOrderBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.emailField = page.getByPlaceholder('Email');
        this.phoneField = page.getByPlaceholder('Phone Number');
        this.addressField = page.getByRole('textbox', { name: 'Address Shipping Address' });
        this.cityField = page.getByRole('textbox', { name: 'City Shipping Address' });
        this.stateField = page.getByRole('textbox', { name: 'State/Province Shipping' });
        this.zipField = page.getByRole('textbox', { name: 'Zip/Postal Code Shipping' });
        this.countryField = page.locator('#shipCountry');
        this.cardHolderNameField = page.getByPlaceholder('Cardholder Name');
        this.cardNumberField = page.getByPlaceholder('Card Number');
        this.expiryMonthField = page.getByLabel('Expiry month');
        this.expiryYearField = page.getByLabel('Expiry year');
        this.CardCVVField = page.getByPlaceholder('CVV');
        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' });
    }

    async clickOnPlaceOrdertBtn(): Promise<void> {
        await super.clickElement(this.placeOrderBtn);
    }

    async fillInEmailField(value: string): Promise<void> {
        await super.setValue(this.emailField,value);
    }

    async fillInPhoneField(value: string): Promise<void> {
        await super.setValue(this.phoneField,value);
    }

    async fillInAddressField(value: string): Promise<void> {
        await super.setValue(this.addressField,value);
    }

    async fillInCityField(value: string): Promise<void> {
        await super.setValue(this.cityField,value);
    }

    async fillInStateField(value: string): Promise<void> {
        await super.setValue(this.stateField,value);
    }

    async fillInZipField(value: string): Promise<void> {
        await super.setValue(this.zipField,value);
    }

    async selectCountry(value: string): Promise<void> {
        await this.countryField.selectOption(value);
    }

    async fillInCardHolderNameField(value: string): Promise<void> {
        await super.setValue(this.cardHolderNameField,value);
    }

    async fillInCardNumberField(value: string): Promise<void> {
        await super.setValue(this.cardNumberField,value);
    }

    async selectExpiryMonth(value: string): Promise<void> {
        await this.expiryMonthField.selectOption(value);
    }

    async selectExpiryYear(value: string): Promise<void> {
        await this.expiryYearField.selectOption(value);
    }

    async fillInCardCVVField(value: string): Promise<void> {
        await super.setValue(this.CardCVVField,value);
    }
}