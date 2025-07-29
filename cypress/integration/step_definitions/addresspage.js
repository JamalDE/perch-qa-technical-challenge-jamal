import AddressPage from '../../pages/AddressPage';

Given('I am on the address page', () => {
  AddressPage.visit('/checkout/address');
});

When('I fill out all fields with valid data', () => {
    cy.fixture('addressData').then((data) => {
  AddressPage.fillFormWithValidData(data);
    });
});

When('I click {string}', (btnLabel) => {
  AddressPage.clickContinue();
});

Then('I should be redirected to the payment page', () => {
  cy.url().should('include', '/checkout/payment');
});

When('I click Continue', () => {
    AddressPage.clickContinue();
})

Then('I should not navigate to payments page', ()=>{
    AddressPage.verifyUrlLinkPayment();
})

When('I fill out some fields with invalid data', ()=>{
    cy.fixture('addressData').then((data) => {
    AddressPage.fillFormWithInValidData(data);
    });
})

Then('I should see error message', ()=> {
    AddressPage.verifyPhoneValidationError();
})
