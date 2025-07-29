Feature: Shopping Cart Management
  Scenario: Updating product quantity
    Given I have a product in my cart
    When I change the quantity to "3"
    Then the total should update accordingly

  Scenario: Removing a product
    Given I have multiple products in my cart
    When I click "Remove" on one
    Then it should no longer appear in the cart