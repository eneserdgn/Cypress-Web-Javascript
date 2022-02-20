class signUp {
    elements = {
        title: () => cy.title(),
        box_EmailSignUp: () => cy.get("#inputEmail"),
        btn_SignUpOnSignUpPage: () => cy.get(".ys-btn.ys-btn-primary.ys-btn-xlg.ys-btn-block.register-button"),
        txt_FalseMail: () => cy.get('[data-cv-field="Email"]'),
    }

    /**
     *
     * @param title
     * @returns {signUp}
     */
    checkTitle(title) {
        this.elements.title().should('eq', title)
        return this
    }

    /**
     *
     * @param mail
     * @returns {signUp}
     */
    typeEmailSignUpPage(mail) {
        this.elements.box_EmailSignUp().should("be.visible").clear().type(mail)
        return this
    }

    /**
     *
     * @returns {signUp}
     */
    clickSignUpButtonOnSignUpPage() {
        this.elements.btn_SignUpOnSignUpPage().should("be.visible").click()
        return this
    }

    /**
     *
     * @param message
     * @returns {signUp}
     */
    checkFalseMailMessage(message) {
        this.elements.txt_FalseMail().should("contain.text", message)
        return this
    }

}

module.exports = new signUp();