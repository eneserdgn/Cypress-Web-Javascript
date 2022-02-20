import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const signUp = require("../../pageMethods/signUp")
const loginPage = require("../../pageMethods/loginPage")

Given('user is on signUp page', () => {
    loginPage
        .goLogin("isparta")
        .clickSignupButton()
    signUp.checkTitle("Üye, Kayıt Ol - Yemek Sepeti")
})
When('user enters email {string} on SignUp Page', (mail) => {
    signUp.typeEmailSignUpPage(mail)
});
When('user clicks SignUp Button on SignUp Page', () => {
    signUp.clickSignUpButtonOnSignUpPage()
});
Then('user should see false mail message {string}', (message) => {
    signUp.checkFalseMailMessage(message)
});