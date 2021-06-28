let pageElements = require('../locators/DemoForm.locators');

class DemoForm {

    insertDetails(data) {
        cy.typeInput(data.firstName, pageElements.FIRST_NAME_INPUT);
        cy.typeInput(data.lastName, pageElements.LAST_NAME_INPUT);
        cy.typeInput(data.email, pageElements.EMAIL_INPUT);
        cy.typeInput(data.company, pageElements.COMPANY_INPUT);
        cy.typeInput(data.phone, pageElements.PHONE_INPUT);

        cy.chooseDropDownOption(data.customerExist, pageElements.EXISTING_CUSTOMER_INPUT);//new customer
    }

    clickSubmitForm() {
        cy.clickOnBtnByLocator(pageElements.SUBMIT_BTN);
        cy.confirmTextExist(pageElements.SUCCESSFUL_SUBMIT, pageElements.SUCCESSFUL_SUBMIT_TEXT);
    }
}

module.exports = DemoForm;