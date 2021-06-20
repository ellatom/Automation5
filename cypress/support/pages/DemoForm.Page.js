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
    clickOngetWorkStationBtn() {
        cy.contains('Get Workstation').click();
    }
    titleAvailable(){
    cy.get('#elementor-popup-modal-406522 > div.dialog-widget-content.dialog-lightbox-widget-content.animated > div.dialog-message.dialog-lightbox-message > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-5f88730d.elementor-widget.elementor-widget-heading > div > h2')
    .should('have.text','Request a Demo');
    }

}

module.exports = DemoForm;