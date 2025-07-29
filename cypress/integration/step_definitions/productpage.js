import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductPage from '../../pages/ProductPage';
import HomePage from '../../pages/HomePage';
import ShoppingcartPage from '../../pages/CartPage';


When('I click on product from homepage', () => {
    HomePage.visit();
    ProductPage.clickOnProduct('2');
});

Then('I should see the product name product price and product description', () => {
    ProductPage.verifyProductName();
    ProductPage.verifyProductPrice();
    ProductPage.verifyProductDescription();
});

Then('Product quantity dropdown should be visible', () => {
    ProductPage.verifyQuantityDropdown();
})

And('User can select the quantity', ()=> {
    ProductPage.selectQuantity('1');
})

Then('click on add to cart button', ()=>{
    ProductPage.clickAddToCartButton();
})

Then('same quanity should appear on cart page', ()=>{
    ShoppingcartPage.verifyQuantity('1');
})



