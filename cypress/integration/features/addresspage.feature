Feature: Address Form
  Scenario: Submitting with valid data
    Given I am on the address page
    When I fill out all fields with valid data
    And I click "Continue"
    Then I should be redirected to the payment page

  Scenario: Submitting with all empty fields
    Given I am on the address page
    When I click "Continue"
    Then I should not navigate to payments page


  Scenario: Submitting with invalid phone number
    Given I am on the address page
    When I fill out some fields with invalid data
    When I click "Continue"
    Then I should see error message
