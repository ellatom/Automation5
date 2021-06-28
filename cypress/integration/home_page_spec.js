import Home from "../support/pages/Home.Page";

describe('Request demo of walkme-workstation', () => {
    
    let newHome;

    beforeEach(() => {
        cy.visit('/');
        newHome =new Home();
    })

    it('navigation from homepage to demoForm by clicking on request on demo was successful', () => {

        newHome.clickOnDemoRequestBtn();
    })

    it('navigation from homepage to demoForm by clicking on get workstation was successful', () => {        
        newHome.clickOngetWorkStationBtn();
    })

    // TBD add negative flow...
})
