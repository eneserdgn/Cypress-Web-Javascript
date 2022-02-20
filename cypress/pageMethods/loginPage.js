class loginPage {
    elements = {
        title: () => cy.title(),
        box_Email: () => cy.get("#UserName"),
        box_Password: () => cy.get("#password"),
        btn_Login: () => cy.get("#ys-fastlogin-button"),
        txt_PopupMessage: () => cy.get(".ys-xl.inner strong"),
        btn_SignUp: () => cy.get(".ys-userSettings a"),
        txt_EmptyMail: () => cy.get('[data-cv-field="UserName"]'),
        txt_EmptyPassword: () => cy.get('[data-cv-field="Password"]'),
        txt_Name: () => cy.get("#ysUserName"),
        btn_PopupClose: () => cy.get(".modal-header-close"),
    }

    /**
     *
     * @param country
     * @returns {loginPage}
     */
    goLogin(country) {
        cy.visit('/' + country)
        return this
    }

    /**
     *
     * @param title
     * @returns {loginPage}
     */
    checkTitle(title) {
        this.elements.title().should('eq', title)
        return this
    }

    /**
     *
     * @param mail
     * @returns {loginPage}
     */
    typeEmail(mail) {
        this.elements.box_Email().should("be.visible").clear().type(mail)
        return this
    }

    /**
     *
     * @param pass
     * @returns {loginPage}
     */
    typePassword(pass) {
        this.elements.box_Password().should("be.visible").clear().type(pass)
        return this
    }

    /**
     *
     * @returns {loginPage}
     */
    clickLogin() {
        this.elements.btn_Login().should("be.visible").click()
        return this
    }

    /**
     *
     * @param message
     * @returns {loginPage}
     */
    checkEmptyMailMessage(message) {
        this.elements.txt_EmptyMail().should("contain.text", message)
        return this
    }

    /**
     *
     * @param message
     * @returns {loginPage}
     */
    checkEmptyPasswordMessage(message) {
        this.elements.txt_EmptyPassword().should("contain.text", message)
        return this
    }

    /**
     *
     * @param message
     * @returns {loginPage}
     */
    checkPopupMessage(message) {
        this.elements.txt_PopupMessage().should("contain.text", message)
        return this
    }

    /**
     *
     * @returns {loginPage}
     */
    clickSignupButton() {
        this.elements.btn_SignUp().should("be.visible").click()
        return this
    }

    /**
     *
     * @returns {loginPage}
     */
    clickPopupClose() {
        this.elements.btn_PopupClose().should("be.visible").click()
        return this
    }

    /**
     *
     * @param name
     * @returns {loginPage}
     */
    checkName(name) {
        this.elements.txt_Name().should("contain.text", name)
        return this
    }

}

module.exports = new loginPage();