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


  CartPage.addMultipleItemsInCart();
});

When('I click {string} on one', (buttonText) => {
  CartPage.removeFirstProduct();
});

Then('it should no longer appear in the cart', () => {
  CartPage.verifyCartItemCount(1);
});
