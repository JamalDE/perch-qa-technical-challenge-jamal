import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import PaymentPage from '../../pages/PaymentsPage';

Given("I am on the payment page", () => {
  cy.visit("/checkout/payment");
  
});

When("I enter a valid card number, expiration date, and name", ()=>{
PaymentPage.fillValidPaymentDetails();
})

And('I click Pay', () => {
  PaymentPage.clickPay();
});

Then("I should be redirected to the success page", () => {
  PaymentPage.verifyPaymentSuccess();
});



Given("I am on the payment page", () => {
  cy.visit("/checkout/payment");
});

When('I enter "1234567890123456" as card number', ()=>{
    PaymentPage.enterInvalidCardNumber();
})

And('I click on Place Order', ()=> {
    PaymentPage.clickPay();
})

Then("I should see an error message", () => {
    PaymentPage.verifyErrorMessage();
});


