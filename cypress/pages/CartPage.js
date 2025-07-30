
class CartPage {
  elements = {
    quantityDropdown: () => cy.get('#quantity-2'),
    productTotal: () => cy.get('[data-testid="subtotal"]'), // e.g., "$60.00"
    productPrice: () => cy.get('[data-testid="item-price-2"]'), // e.g., "$20.00"
    cartItems: () => cy.get('.cart-item'),
    removeButtons: () => cy.get('.remove-item'),
    productTitles: () => cy.get('.item-name'),
    continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
    proceedToCheckoutButton: () => cy.get('[data-testid="proceed-to-checkout"]')
  };

    verifyQuantity(expectedQuantity) {
        this.elements.quantityDropdown().should('have.value', expectedQuantity);
    }


  changeQuantity(quantity) {
    this.elements.quantityDropdown().select(quantity);
  }

  clickProceedToCheckoutButton(){
    this.elements.proceedToCheckoutButton().click();
  }

  verifyTotalUpdated(expectedTotal) {
    this.elements.productTotal().should('contain', expectedTotal);
  }

  calculateExpectedTotal(quantity) {
    return this.elements.productPrice().invoke('text').then((text) => {
      const unitPrice = parseFloat(text.replace('$', '').trim());
      const total = (unitPrice * quantity).toFixed(2);
      return `$${total}`;
    });
  }

  addMultipleItemsInCart(){
      cy.visit('/product/2');
  cy.get('[data-testid="add-to-cart"]').click();


  this.elements.continueShoppingButton().click();
  cy.get('[data-testid="view-product-3"]').click();
  cy.get('[data-testid="add-to-cart"]').click();

  }

  removeFirstProduct() {
    this.elements.removeButtons().first().click();
  }

  verifyProductIsRemoved(productName) {
    this.elements.productTitles().should('not.contain', productName);
  }

  verifyCartItemCount(expectedCount) {
    this.elements.cartItems().should('have.length', expectedCount);
  }

}

export default new CartPage();
