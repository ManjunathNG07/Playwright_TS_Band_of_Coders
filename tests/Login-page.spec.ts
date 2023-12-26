import{test} from "@playwright/test"; 
import data from"../TestData/Register-data.json";
import LoginPage from "../PageObjects/Login-page";

test("verify user should able to login",async({page})=>{
    const loginPage= new LoginPage(page);
    await loginPage.goToLoginPage(data.url);
    await loginPage.enterEmailAddress(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickOnSignInButton();
    await loginPage.verifLoginSuccessfully ();
})