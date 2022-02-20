import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const favoritePage = require("../../pageMethods/favoritePage")

When('user clicks {string} button on tabs', (tab) => {
    favoritePage.clickTab(tab)
});
Then('user should see empty tab message {string} on tab', (emptyMessage) => {
    favoritePage.checkEmptyMessageOnTab(emptyMessage)
});
When('user clicks menu', () => {
    favoritePage.clickMenu()
});
When('user clicks {string} button on menu', (menu) => {
    favoritePage.clickMenuOption(menu)
});
Then('user should see empty favorite message {string} on Favorite Page', (emptyMessage) => {
    favoritePage.checkEmptyMessageOnFavoritePage(emptyMessage)
});
When('user clicks list restaurants', () => {
    favoritePage
        .clickListRestaurant()
        .clickPopupClose()
});
When('user click {string} restaurant on Super Restaurant Tab', (restaurant) => {
    favoritePage.clickRestaurant(restaurant)
});
When('user click Add Favorite', () => {
    favoritePage.clickAddFavorite()
});
Then('user should see {string} restaurant on Favorite Page', (restaurant) => {
    favoritePage.checkRestaurantOnFavoritePage(restaurant)
});

When('user click check {string} restaurant on Favorite Page', (restaurant) => {
    favoritePage.clickCheckRestaurantOnFavoritePage(restaurant)
});
When('user click delete button', (restaurant) => {
    favoritePage.clickDelete()
});