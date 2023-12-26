import{test} from "@playwright/test"; 
import RegisterPage from "../PageObjects/Register-page";
import data from"../TestData/Register-data.json";

test("verify user is register Account",async({page})=>{
    const registerPage= new RegisterPage(page,data.user);
    await registerPage.goToLoginPage(data.url);
    await registerPage.clickOnRegisterButton();
    await registerPage.enterFullName(data.fullName);
    await registerPage.enterEmailAddress(data.email);
    await registerPage.enterPassword(data.password);
    await registerPage.clickOnSignUpButton();
    await registerPage.verifyRegistration();
})