Feature: Profile Page

Scenario: View user information
  Given I am on the homepage
  When I click the profile button from homepage
  Then I should see my user information

Scenario: View order history
  Given I have a product in my cart
  When I click on proceed to checkout button
  When I fill out all fields with valid data
  And I click "Continue"
  When I enter a valid card number, expiration date, and name
  And I click Pay
  When I click on view Orders
  Then I should see list of previous purchases with details