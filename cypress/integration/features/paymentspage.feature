Feature: Payment Details
  
Scenario: Submitting with valid credit card info
    Given I am on the payment page
    When I enter a valid card number, expiration date, and name
    And I click Pay
    Then I should be redirected to the success page

Scenario: Invalid credit card number
    Given I am on the payment page
    When I enter "1234567890123456" as card number
    And I click on Place Order
    Then I should see an error message