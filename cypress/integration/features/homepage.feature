Feature: Homepage Navigation

Scenario: User can navigate to the homepage
  Given I am on the homepage
  Then I should see the main content
  And I should see the full list of products


Scenario: User can sort products by price ascending
  When I click on sort button
  Then Products should be sorted based on price acendingly

Scenario: User can sort products by price descending
  When I click on sort button for descending
  Then Products should be sorted based on price descendingly

Scenario: User can navigate to product page by clicking on product
  When I click on product from homepage
  Then I should be navigated to product detail page

