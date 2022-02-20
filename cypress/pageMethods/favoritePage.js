class favoritePage {
    elements = {
        btnList_tabs: () => cy.get(".nav.nav-tabs>li>a"),
        txt_EmptyMessageOnTab: () => cy.get("#favorites span"),
        btn_Menu: () => cy.get("#user-info"),
        btnList_MenuOptions: () => cy.get(".ys-userSettings li a"),
        txt_EmptyMessageOnFavoritePage: () => cy.get("#favorites p"),
        btn_ListRestaurant: () => cy.get(".list-restaurant"),
        btn_PopupClose: () => cy.get("#cboxClose", {timeout: 10000}),
        btn_Restaurants: () => cy.get("#super-restaurants a>span"),
        btn_AddFavorite: () => cy.get(".ys-icons.ys-icons-grayStar"),
        txt_RestaurantName: () => cy.get(".restaurant-name b"),
        btn_Delete: () => cy.get(".delete-favourites"),
    }

    /**
     *
     * @param tab
     * @returns {favoritePage}
     */
    clickTab(tab) {
        this.elements.btnList_tabs().contains(tab).should("be.visible").click()
        return this
    }

    /**
     *
     * @param emptyMessage
     * @returns {favoritePage}
     */
    checkEmptyMessageOnTab(emptyMessage) {
        this.elements.txt_EmptyMessageOnTab().should("contain.text", emptyMessage)
        return this
    }

    /**
     *
     * @returns {favoritePage}
     */
    clickMenu() {
        this.elements.btn_Menu().should("be.visible").click()
        return this
    }

    /**
     *
     * @param menu
     * @returns {favoritePage}
     */
    clickMenuOption(menu) {
        this.elements.btnList_MenuOptions().contains(menu).should("be.visible").click()
        return this
    }

    /**
     *
     * @param emptyMessage
     * @returns {favoritePage}
     */
    checkEmptyMessageOnFavoritePage(emptyMessage) {
        this.elements.txt_EmptyMessageOnFavoritePage().should("contain.text", emptyMessage)
        return this
    }

    /**
     *
     * @returns {favoritePage}
     */
    clickListRestaurant() {
        this.elements.btn_ListRestaurant().should("be.visible").click()
        return this
    }

    /**
     *
     * @returns {favoritePage}
     */
    clickPopupClose() {
        try {
            this.elements.btn_PopupClose().should('be.visible').click();
        } catch (e) {
        }
        return this
    }

    /**
     *
     * @param restaurant
     * @returns {favoritePage}
     */
    clickRestaurant(restaurant) {
        this.elements.btn_Restaurants().contains(restaurant).should("be.visible").click()
        return this
    }

    /**
     *
     * @returns {favoritePage}
     */
    clickAddFavorite() {
        this.elements.btn_AddFavorite().should("be.visible").click()
        return this
    }

    /**
     *
     * @param restaurant
     * @returns {favoritePage}
     */
    checkRestaurantOnFavoritePage(restaurant) {
        this.elements.txt_RestaurantName().contains(restaurant).should("be.visible");
        return this
    }

    /**
     *
     * @param restaurant
     * @returns {favoritePage}
     */
    clickCheckRestaurantOnFavoritePage(restaurant) {
        this.elements.txt_RestaurantName().contains(restaurant).should("be.visible")
            .parents(".favorite-item").children("input").click()
        return this
    }

    /**
     *
     * @returns {favoritePage}
     */
    clickDelete() {
        this.elements.btn_Delete().should("be.visible").click();
        return this
    }
}

module.exports = new favoritePage();