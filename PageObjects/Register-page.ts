import { Locator, Page, expect } from "@playwright/test";

export default class RegisterPage {
    readonly page: Page;
    readonly registerButton: Locator;
    readonly fullNameLocator: Locator;
    readonly emailLocator: Locator;
    readonly passwordLocator: Locator;
    readonly signupButton: Locator;
    readonly verifyRegister: Locator;
    readonly expectedEmail: string;
    readonly randomString: string;
    readonly expectedFullName: string;


    constructor(page: Page, user: string) {
        this.page = page;
        this.registerButton = page.locator("//button[.=' Register']");
        this.fullNameLocator = page.locator("#fullName");
        this.emailLocator = page.locator("#email-address");
        this.passwordLocator = page.locator('#password');
        this.signupButton = page.locator('//button[.="Sign Up"]');
        this.verifyRegister = page.locator("//button[.='Go Back to Log In']");


        this.randomString = `${Math.random().toString().slice(2, 5)}`;
        this.expectedFullName = `${user}${this.randomString}${'vtest'}`;
        this.expectedEmail = `${user}${this.randomString}${'@gmail.com'}`;

    }

    async goToLoginPage(url: string) {
        await this.page.waitForLoadState("load");
        await this.page.goto(url);
        await this.page.waitForLoadState("load");
    }

    async clickOnRegisterButton() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.registerButton.click();
    }

    async enterFullName(fullName: string) {
        await this.fullNameLocator.fill(this.expectedFullName);
    }

    async enterEmailAddress(email: string) {
        await this.emailLocator.fill(this.expectedEmail);
    }

    async enterPassword(password: string) {
        await this.passwordLocator.fill(password);
    }

    async clickOnSignUpButton() {
        await this.signupButton.click();
    }

    async verifyRegistration() {
        await expect(this.verifyRegister).toBeTruthy();
        await this.verifyRegister.click();
    }
}