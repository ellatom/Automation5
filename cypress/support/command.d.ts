declare namespace Cypress {
    interface Chainable {
        /**
        /* Insert input
        *@example
        * cy.typeInput('input data','locator')
        */
        typeInput()
        /**
        /* Choose option from dropdown 
        *@example
        * cy.chooseDropDownOption('drop down option','locator')
        */
        chooseDropDownOption()
        /**
        /* Click on button by locator
        *@example
        * cy.clickOnBtnByLocator('locator')
        */
        clickOnBtnByLocator()
        /**
        /* Click on button by text
        *@example
        * cy.clickOnBtnByText('text')
        */
        clickOnBtnByText()

        /* Confirm text exist
        *@example
        * cy.confirmTextExist('locator', 'expectedText')
        */
        confirmTextExist()
    }
}