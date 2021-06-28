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
        newDemo.insertDetails(data);
        // newDemo.clickSubmitForm();
    })
    it('Positive flow submit form for new customer was successful after click on get workstation button', () => {

        newDemo.clickOngetWorkStationBtn();
        newDemo.titleAvailable();
    })
    // TBD add negative flow...
})
