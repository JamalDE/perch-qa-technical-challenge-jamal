class PaymentPage {
  elements = {
    cardHolderNameField: () => cy.get('#cardHolder'),
    cardNumberField: () => cy.get('#cardNumber'),
    expiryField: () => cy.get('#expiryDate'),
    cvvField: () => cy.get('#cvv'),
    payButton: () => cy.get('[data-testid="complete-payment"'),
    successIcon: () => cy.get('.success-icon'),
    errorMessage: () => cy.get('.error-message'),
    orderId: () => cy.get('[data-testid="order-number"]')

  };

  visit() {
    cy.visit('/checkout/payment');
  }

  fillValidPaymentDetails() {
    this.elements.cardHolderNameField().type('John Doe');
    this.elements.cardNumberField().type('4111111111111111');
    this.elements.expiryField().type('12/30');             
    this.elements.cvvField().type('321');
  }

  clickPay() {
    this.elements.payButton().click();
  }

  fillInvalidPaymentDetails(){
    this.elements.cardHolderNameField().type('392939');
    this.elements.cardNumberField().type('invalidNumber');
    this.elements.expiryField().type('invalidFormat');             
    this.elements.cvvField().type('hello');
  }

  verifyPaymentSuccess(){
      this.elements.successIcon().should('be.visible');
  }

  enterInvalidCardNumber(){
    this.elements.cardNumberField().type('123456789');
  }

  verifyErrorMessage(){
    this.elements.errorMessage().should('be.visible');
  }
}

export default new PaymentPage();
