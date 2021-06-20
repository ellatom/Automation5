import DemoForm from "../support/pages/DemoForm.Page";

describe('Request demo of walkme-workstation', () => {
    let newDemo;
    
    beforeEach(() => {
        cy.visit('/');
        newDemo = new DemoForm();
        newDemo.clickOnDemoRequestBtn();
    })
  
    it('Positive flow submit form for new customer was successful', () => {
        newDemo.enterFirstName();
        newDemo.enterLastName();
        newDemo.enterEmail();
        newDemo.enterCompany();
        newDemo.enterPhone();
        newDemo.isCustomerExistDropdown();//new customer
        newDemo.clickSubmitForm();
    })
    //TBD add negative flow...
})
