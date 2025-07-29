
class AddressPage {
  elements = {
    firstNameField: () => cy.get('#firstName'),
    emailField: () => cy.get('#email'),
    phonefField: () => cy.get('#phone'),
    streetAddress: () => cy.get('#street'),
    cityField: () => cy.get('#city'),
    stateField: () => cy.get('#state'),
    zipCodeField: () => cy.get('#zipCode'),
    countryField: () => cy.get('#country'),
    continueToPaymentButton: () => cy.get('[data-testid="continue-to-payment"]'),
    phoneErrorMessage: ()=> cy.get('.error-message')

  };


  visit() {
    cy.visit('/checkout/address');
  }

  fillFormWithValidData(data) {

    this.elements.firstNameField().type(data.name);
    this.elements.emailField().type(data.email);
    this.elements.phonefField().type(data.phone);
    this.elements.streetAddress().type(data.street);
    this.elements.cityField().type(data.city);
    this.elements.stateField().type(data.street);
    this.elements.zipCodeField().type(data.zipCode);
    this.elements.countryField().type(data.country);

  }


  fillFormWithInValidData(data) {

    this.elements.firstNameField().type(data.name);
    this.elements.emailField().type(data.email);
    this.elements.phonefField().type(data.invalidPhone);
    this.elements.streetAddress().type(data.street);
    this.elements.cityField().type(data.city);
    this.elements.stateField().type(data.street);
    this.elements.zipCodeField().type(data.zipCode);
    this.elements.countryField().type(data.country);

  }

  clickContinue() {
    this.elements.continueToPaymentButton().click();
  }

  verifyUrlLinkPayment(){
    cy.url().should('not.include', '/checkout/payment');
  }

    verifyPhoneValidationError() {
    this.elements.phoneErrorMessage().should('be.visible')
      .and('contain', 'Phone number must be 10-15 digits'); // message may vary
  }

  

}

export default new AddressPage();
