import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import CartPage from '../../pages/CartPage';
import PaymentsPage from '../../pages/PaymentsPage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the profile button', () => {
    HomePage.verifyProfileButton();
});

When('I click the profile button from homepage', ()=>{
    HomePage.clickProfileButton();
});

Then('I should see my user information', ()=>{
    ProfilePage.verifyPersonalDetails();
})

And('I should see back button', ()=>{
    ProfilePage.verifyBackButtonPresent
})

When('I click on proceed to checkout button', ()=>{
    CartPage.clickProceedToCheckoutButton();
})

When('I click on view Orders', ()=>{
    ProfilePage.clickViewOrders();
})

When('I view my past orders', ()=>{
    ProfilePage.verifyOrderHistory();
})

Then('I should see list of previous purchases with details', ()=>{
    ProfilePage.verifyOrderHistory();
})

