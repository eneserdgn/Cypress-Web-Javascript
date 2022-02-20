Cypress.Commands.add('login', (mail, password) => {
    cy.get("#UserName").type(mail)
    cy.get("#password").type(password)
    cy.get("#ys-fastlogin-button").click()
})
