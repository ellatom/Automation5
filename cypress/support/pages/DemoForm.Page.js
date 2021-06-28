class DemoForm {
    getDemoFormPageElements() {
        return require('../locators/DemoForm.locators');
    }

    enterFirstName(firstName) {
            cy.get(this.getDemoFormPageElements().FIRST_NAME_INPUT)
                .click()
                .clear()
                .type(firstName)
                .should('have.value', firstName);
    }
    enterLastName(lastName) {
            cy.get(this.getDemoFormPageElements().LAST_NAME_INPUT)
                .click()
                .clear()
                .type(lastName)
                .should('have.value', lastName);
    }
    enterEmail(email) {
            cy.get(this.getDemoFormPageElements().EMAIL_INPUT)
                .click()
                .clear()
                .type(email)
                .should('have.value', email);
    }
    enterCompany(company) {
            cy.get(this.getDemoFormPageElements().COMPANY_INPUT)
                .click()
                .clear()
                .type(company)
                .should('have.value', company);
    }
    enterPhone(phone) {
            cy.get(this.getDemoFormPageElements().PHONE_INPUT)
                .click()
                .clear()
                .type(phone)
                .should('have.value', phone);
    }
    clickOnDemoRequestBtn() {
        cy.contains('Request a Demo').click();
        this.checkSuccesfulNavigation();
    }
    checkSuccesfulNavigation(){
        cy.intercept({
            method:'POST',
            url:'https://staging-ec.walkme.com/event/tell'
            }).as('demoForm');

        cy.wait('@demoForm').then(demoForm=>{
            expect(demoForm.response.statusCode).to.eq(200)
            expect(demoForm.response.body).to.eq('ok');
            });
        // cy.wait('@demoForm').its('response.statusCode').should('eq',200);
    }
    isCustomerExistDropdown() {
        cy.fixture('customer.json').then((customer) => {
            cy.get(this.getDemoFormPageElements().EXISTING_CUSTOMER_INPUT)
                .select(customer.customerExist)
                .should('have.value', customer.customerExist);
        });
    }
    clickSubmitForm() {
        cy.get('.elementor-field-type-submit > .elementor-button')
        .click();
        cy.get('.elementor-message.elementor-message-success').should('have.text','The form was sent successfully.')
    }
    clickOngetWorkStationBtn() {
        cy.contains('Get Workstation').click();
    }
    titleAvailable(){
    cy.get('.elementor-element-5f88730d > .elementor-widget-container > .elementor-heading-title')
    .should('have.text','Request a Demo');
    }

}

module.exports = DemoForm;