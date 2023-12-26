import { Locator, Page, expect } from "@playwright/test";

export default class NewDepartmentPage {
    readonly page: Page;
    newDepartmentLocator: Locator;
    departmentNameLocator: Locator;
    saveButton: Locator;
    verifyDepartment: Locator;
   
    
  


    constructor(page: Page) {
        this.page = page;
        this.newDepartmentLocator=page.locator("//button[.='New Department']");
        this.departmentNameLocator=page.locator('//input[@id=":r3:"]');
        this.saveButton=page.locator("//button[.='Save']").first();
        this.verifyDepartment=page.locator('[role="alert"]');
    }

    async clickOnNewDepartmentButton(){
        await this.newDepartmentLocator.click();
    }

    async enterDepartmentName(departmentName:string){
        await this.departmentNameLocator.fill(departmentName);
    }

    async clickOnSaveButton(){
        await this.saveButton.click();
    }

    async verifyNewDepartmentIsCreated(){
        await expect(this.verifyDepartment).toBeTruthy();
    }
}