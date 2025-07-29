Feature: Product Page Details

Scenario: User can view product details
  Given I click on product from homepage
  Then I should see the product name product price and product description

Scenario: User is able to select quanity from product details page and add to cart
   Given I click on product from homepage
   Then Product quantity dropdown should be visible
   And User can select the quantity
   Then click on add to cart button
   Then same quanity should appear on cart page
