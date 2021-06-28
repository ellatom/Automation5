import DemoForm from "../support/pages/DemoForm.Page";

describe('Request demo of walkme-workstation', () => {
    
    let newDemo;
    let data;

    before(() => {
        cy.fixture('customer.json').then((customerData)=> {
            data = customerData;
        })
    })


    beforeEach(() => {
        cy.visit('/');
        newDemo = new DemoForm();
    })

    it('Positive flow submit form for new customer was successful after click on submit form button', () => {

        newDemo.clickOnDemoRequestBtn();
        newDemo.titleAvailable();
        newDemo.enterFirstName(data.firstName);
        newDemo.enterLastName(data.lastName);
        newDemo.enterEmail(data.email);
        newDemo.enterCompany(data.company);
        newDemo.enterPhone(data.phone);
        newDemo.isCustomerExistDropdown(data.customerExist);//new customer
        // newDemo.clickSubmitForm();
    })
    it('Positive flow submit form for new customer was successful after click on get workstation button', () => {

        newDemo.clickOngetWorkStationBtn();
        newDemo.titleAvailable();
    })
    // TBD add negative flow...
})
