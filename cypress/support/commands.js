// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeInput', (inputData, locator) => {
    cy.get(locator)
        .click()
        .clear()
        .type(inputData)
        .should('have.value', inputData);
});

Cypress.Commands.add('chooseDropDownOption', (option, locator) => {
    cy.get(locator)
        .select(option)
        .should('have.value', option);
});

Cypress.Commands.add('clickOnBtnByLocator', (locator) => {
    cy.get(locator)
        .click();
});

Cypress.Commands.add('clickOnBtnByText', (text) => {
    cy.contains(text).click();
});

Cypress.Commands.add('confirmTextExist',(locator, expectedText)=>{

    cy.get(locator).should('have.text',expectedText);
})

