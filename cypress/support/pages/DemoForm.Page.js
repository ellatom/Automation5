class DemoForm {
    getDemoFormPageElements() {
        return require('../locators/DemoForm.locators');
    }

    enterFirstName() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().FIRST_NAME_INPUT)
                .click()
                .clear()
                .type(customer.firstName)
                .should('have.value', customer.firstName);
        });
    }
    enterLastName() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().LAST_NAME_INPUT)
                .click()
                .clear()
                .type(customer.lastName)
                .should('have.value', customer.lastName);
        });
    }
    enterEmail() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().EMAIL_INPUT)
                .click()
                .clear()
                .type(customer.email)
                .should('have.value', customer.email);
        });
    }
    enterCompany() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().COMPANY_INPUT)
                .click()
                .clear()
                .type(customer.company)
                .should('have.value', customer.company);
        });
    }
    enterPhone(phone) {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().PHONE_INPUT)
                .click()
                .clear()
                .type(customer.phone)
                .should('have.value', customer.phone);
        });
    }
    clickOnDemoRequestBtn() {
        cy.contains('Request a Demo').click();
    }
    isCustomerExistDropdown() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().EXISTING_CUSTOMER_INPUT)
                .select(customer.customerExist)
                .should('have.value', customer.customerExist);
        });
    }
    clickSubmitForm() {
        cy.get('.elementor-field-group.elementor-column.elementor-field-type-submit.elementor-col-100.e-form__buttons')
        .click();
        cy.get('.elementor-message.elementor-message-success').should('have.text','The form was sent successfully.')
    }

}

module.exports = DemoForm;