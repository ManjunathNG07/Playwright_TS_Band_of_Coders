import { Locator, Page, expect } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly emailLocator: Locator;
    readonly passwordLocator: Locator;
    readonly signInButton: Locator;
    readonly verifyLogin: Locator;




    constructor(page: Page) {
        this.page = page;
        this.emailLocator = page.locator("#email-address");
        this.passwordLocator = page.locator('#password');
        this.signInButton = page.locator("//button[.=' Sign in']");
        this.verifyLogin = page.locator('//button[@aria-controls="menu-appbar"]').last();




    }


    async goToLoginPage(url: string) {
        await this.page.waitForLoadState("load");
        await this.page.goto(url);
        await this.page.waitForLoadState("load");
    }

    async enterEmailAddress(email: string) {
        await this.emailLocator.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordLocator.fill(password);
    }

    async clickOnSignInButton() {
        await this.signInButton.click();
    }

    async verifLoginSuccessfully() {

        await expect(this.verifyLogin).toBeTruthy();
    }
}