
let pageElements = require('../locators/DemoForm.locators');

class DemoForm {
    
    insertDetails(data)
    {
        this.typeInput(data.firstName,pageElements.FIRST_NAME_INPUT);
        this.typeInput(data.lastName,pageElements.LAST_NAME_INPUT);
        this.typeInput(data.email,pageElements.EMAIL_INPUT);
        this.typeInput(data.company,pageElements.COMPANY_INPUT);
        this.typeInput(data.phone,pageElements.PHONE_INPUT);
        this.isCustomerExistDropdown(data.customerExist);//new customer
    }
    typeInput(inputData,locator) {
            cy.get(locator)
                .click()
                .clear()
                .type(inputData)
                .should('have.value', inputData);
    }

    clickOnDemoRequestBtn() {
        cy.contains('Request a Demo').click();
        this.checkSuccesfulNavigation();
        this.titleAvailable();
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
            cy.get(pageElements.EXISTING_CUSTOMER_INPUT)
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