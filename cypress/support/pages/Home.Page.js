
let pageElements = require('../locators/Home.locators');

class Home {

    clickOnDemoRequestBtn() {
        cy.clickOnBtnByText(pageElements.FORM_TITLE_TEXT);
        this.checkSuccesfulNavigation();
        cy.confirmTextExist(pageElements.FORM_TITLE,pageElements.FORM_TITLE_TEXT);
    }
    checkSuccesfulNavigation() {//move to api requests
        cy.intercept({
            method: 'POST',
            url: 'https://staging-ec.walkme.com/event/tell'
        }).as('demoForm');

        cy.wait('@demoForm').then(demoForm => {
            expect(demoForm.response.statusCode).to.eq(200)
            expect(demoForm.response.body).to.eq('ok');
            // cy.log(demoForm.response.body);
        });
        // cy.wait('@demoForm').its('response.statusCode').should('eq',200);
        // cy.screenshot('Navigation to form was successful');
    }

    clickOngetWorkStationBtn() {
        cy.clickOnBtnByText('Get Workstation');
        cy.confirmTextExist(pageElements.FORM_TITLE,pageElements.FORM_TITLE_TEXT);
    }
}

module.exports = Home;