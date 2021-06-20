import DemoForm from "../support/pages/DemoForm.Page";

describe('Request demo of walkme-workstation', () => {
    let newDemo;
    
    beforeEach(() => {
        cy.visit('/');
        newDemo = new DemoForm();
    })
  
    it('Positive flow submit form for new customer was successful after click on submit form button', () => {

        newDemo.clickOnDemoRequestBtn();
        newDemo.titleAvailable();
        newDemo.enterFirstName();
        newDemo.enterLastName();
        newDemo.enterEmail();
        newDemo.enterCompany();
        newDemo.enterPhone();
        newDemo.isCustomerExistDropdown();//new customer
        newDemo.clickSubmitForm();
    })
    it('Positive flow submit form for new customer was successful after click on get workstation button', () => {

        newDemo.clickOngetWorkStationBtn();
        newDemo.titleAvailable();
    })
    //TBD add negative flow...
})
