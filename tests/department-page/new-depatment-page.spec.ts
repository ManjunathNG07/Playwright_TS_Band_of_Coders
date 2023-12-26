import{test} from "@playwright/test"; 
import data from"../../TestData/department-data/new_department-data.json";
import LoginPage from "../../PageObjects/Login-page";
import NewDepartmentPage from "../../PageObjects/Home-page/new-department-page";

test("verify user should able to create new Department",async({page})=>{
    const loginPage= new LoginPage(page);
     const newDepartmentPage=new NewDepartmentPage(page);
    await loginPage.goToLoginPage(data.url);
    await loginPage.enterEmailAddress(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickOnSignInButton();
    await newDepartmentPage.clickOnNewDepartmentButton();
    await newDepartmentPage.enterDepartmentName(data.departmentName);
    await newDepartmentPage.clickOnSaveButton();
    await newDepartmentPage.verifyNewDepartmentIsCreated();

    
})