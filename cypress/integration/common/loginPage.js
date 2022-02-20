import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const loginPage = require("../../pageMethods/loginPage")

Given('user is on login page', () => {
    loginPage
        .goLogin("isparta")
        .checkTitle("Isparta Online Yemek Siparişi, Paket Servis - Yemek Sepeti")
})
When('user enters email {string}', (mail) => {
    loginPage.typeEmail(mail)
})
When('user enters password {string}', (password) => {
    loginPage.typePassword(password)
})
When('user clicks on Login button', () => {
    loginPage.clickLogin()
})
Then('user should see popup message {string}', (popupMessage) => {
    loginPage.checkPopupMessage(popupMessage)
})
When('user click SignUp', () => {
    loginPage.clickSignupButton()
});
Then('user should see empty mail message {string}', (message) => {
    loginPage.checkEmptyMailMessage(message)
});
Then('user should see empty password message {string}', (message) => {
    loginPage.checkEmptyPasswordMessage(message)
});
When('user clicks popup close button', () => {
    loginPage.clickPopupClose()
});
Then('user should see name {string}', (name) => {
    loginPage.checkName(name)
});
Given('user is logged in {string} and {string}', (mail, password) => {
    loginPage
        .goLogin("/isparta")
        .typeEmail(mail)
        .typePassword(password)
        .clickLogin()
        .clickPopupClose()
});