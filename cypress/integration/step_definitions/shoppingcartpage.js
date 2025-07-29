import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I have a product in my cart', () => {
  cy.visit('/product/2');
  ProductPage.selectQuantity(2);
  ProductPage.clickAddToCartButton();
});

When('I change the quantity to {string}', (quantity) => {
  CartPage.changeQuantity(quantity);
});

Then('the total should update accordingly', () => {
  const quantity = 3;
  CartPage.calculateExpectedTotal(quantity).then((expectedTotal) => {
    CartPage.verifyTotalUpdated(expectedTotal);
  });
});

Given('I have multiple products in my cart', () => {

    
    /*
  cy.visit('/product/2');
  cy.get('[data-testid="add-to-cart"]').click();

  cy.visit('/product/3');
  cy.get('[data-testid="add-to-cart"]').click();

  cy.visit('/cart');
  */

  CartPage.addMultipleItemsInCart();
});

When('I click {string} on one', (buttonText) => {
//   cy.contains('[data-testid="cart-remove-button"]', buttonText).first().click();
  CartPage.removeFirstProduct();
});

Then('it should no longer appear in the cart', () => {
  CartPage.verifyCartItemCount(1);
});
