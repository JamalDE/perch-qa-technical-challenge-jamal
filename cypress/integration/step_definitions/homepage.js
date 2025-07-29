import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

When("I click on sort button", () => {
    HomePage.clickSortButton();
});

Then("Products should be sorted based on price acendingly", () => {
    HomePage.verifyProductSortAssending();
});

When("I click on sort button for descending", () => {
    HomePage.clickSortButton();
})

Then("Products should be sorted based on price descendingly", ()=> {
    HomePage.verifyProductSortDescending();
})


