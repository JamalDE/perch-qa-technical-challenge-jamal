Bug#1:
---------------------------------------------------------------------------------
Bug Report: Incorrect Price Sorting on Product Listing Page
Module: Product Listing Page
Environment: QA
Browser: Chrome
Tester: Jamal
Date: 30 July 2025

Steps to Reproduce:
Navigate to the Product Listing page.

Observe the initial product prices.

Click the Price Filter and choose Ascending order.

Observe the product prices and their order.

Click the Price Filter again and choose Descending order.

Observe the product prices and their order.

Expected Behavior:
When sorting Price: Ascending, the products should be ordered from lowest to highest price.

Example: 79 → 149 → 199

When sorting Price: Descending, the products should be ordered from highest to lowest price.

Example: 199 → 149 → 79

Actual Behavior:
Ascending Filter Result:

1st Product Price: 79

2nd Product Price: 199

3rd Product Price: 149

Incorrect order: 199 appears before 149

Descending Filter Result:

1st Product Price: 149

2nd Product Price: 199

3rd Product Price: 79

Incorrect order: 149 appears before 199

Impact:
Affects user experience and trust in sorting functionality.

May mislead users into believing lower/higher priced products are not available.

Suggested Fix:
Verify the sorting logic in the frontend code.

Ensure the product list is being sorted based on numerical values, not strings or incorrect keys.


Improvements:
Add filtering options (category).
Show number of items in each sort/filter state.



Bug#2:
---------------------------------------------------------------------------------

Bug Report: Incorrect Total Amount Displayed in Order History
Module: Order History
Environment: QA
Browser/App: Chrome
Tester: Jamal
Date: 30 July 2025

Steps to Reproduce:
Login as a registered user.

Purchase a product priced at $3 with a quantity of 3 units.

Navigate to the Order History page.

Locate the corresponding order and review the Total Amount shown.

Expected Behavior:
The Total Amount should correctly reflect the product of unit price × quantity.

For a $3 item bought in a quantity of 3, the total should be $9.

Actual Behavior:
The Total Amount displayed is only $3, which reflects only the unit price, not accounting for quantity.

Impact:
Displays incorrect financial information to users.

May lead to user confusion, support queries, and loss of trust in the billing accuracy.

Affects financial reporting and invoicing accuracy if the same value is used elsewhere.

Suggested Fix:
Ensure that the total amount is calculated as:
Total = Unit Price × Quantity

Review the logic in both the backend calculation and frontend display layers.

Bug#3:
---------------------------------------------------------------------------------
Bug Report
Title:
Checkout and Payment pages accessible directly via URL without adding items to cart

Severity:
High

Environment: qa

App Version: qa

Platform: Web

Browser: Chrome

OS: Windows

Date Reported: 30 July 2025

Tester: Jamal

Precondition:
User is logged in (if required)
No item is added to the cart

Steps to Reproduce:

Open the application and log in (if required).

In the browser address bar, manually enter the checkout URL (e.g., /checkout) or payment URL (e.g., https:/checkout/payment).

Press Enter to load the page.

Expected Result:
User should be redirected to the cart page or home page with a message like "Your cart is empty" or "You need to add items before checking out."

Actual Result:
User is allowed to access the checkout and payment screens directly, even when the cart is empty or no purchase process has been initiated.

Impact:

Users can bypass key steps like product selection and cart review.

This may lead to errors during payment or order creation.

It exposes potential vulnerabilities in access control and flow validation logic.

Recommendation:

Add backend validation to block access to checkout/payment pages if the cart is empty.

Implement proper redirects and error handling for unauthorized access.


Improvement:
---------------------------------------------------------------------------------
Design Inconsistency on Product Details Page:

There is alot of white space present vertically between description and quantity.
Quanity selection should not be a dropdown fixed value, it limits the user. Input field is better.

