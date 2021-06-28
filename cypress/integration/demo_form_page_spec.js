import Home from "../support/pages/Home.Page";
import DemoForm from "../support/pages/DemoForm.Page";

describe('Request demo of walkme-workstation', () => {
    
    let newHome;
    let newDemoForm;
    let data;

    before(() => {
        cy.fixture('customer.json').then((customerData)=> {
            data = customerData;
        })
    })

    beforeEach(() => {
        cy.visit('/');
        newHome =new Home();
        newDemoForm = new DemoForm();
    })

    it('Positive flow submit form for new customer was successful after click on submit form button', () => {

        newHome.clickOnDemoRequestBtn();
        newDemoForm.insertDetails(data);
        // newDemoForm.clickSubmitForm();
    })
    it('Positive flow submit form for new customer was successful after click on get workstation button', () => {

        newHome.clickOngetWorkStationBtn();
    })
    // TBD add negative flow...
})
