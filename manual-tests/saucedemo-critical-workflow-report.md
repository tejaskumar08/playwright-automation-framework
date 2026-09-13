# Manual Test Cases for SauceDemo Critical Workflows

## Test Case 1: Login to SauceDemo
**Objective:** Verify that a user can log in with valid credentials.

**Steps:**
1. Navigate to https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the `Login` button.

**Expected Result:**
- The user is redirected to the Products page.
- The page title is "Swag Labs".

---

## Test Case 2: Add Item to Cart
**Objective:** Verify that a user can add an item to the cart.

**Steps:**
1. Log in to SauceDemo as `standard_user`.
2. On the Products page, click the `Add to cart` button for the "Sauce Labs Backpack".

**Expected Result:**
- The cart icon displays the number `1`.
- The "Add to cart" button changes to "Remove".

---

## Test Case 3: Logout from SauceDemo
**Objective:** Verify that a user can log out successfully.

**Steps:**
1. While logged in, click the menu button in the top-left corner.
2. Click the `Logout` link.

**Expected Result:**
- The user is redirected to the login page.
- The Username and Password fields are visible.

---

**Notes:**
- Ensure that the application state is reset before starting a new test.
- Use the provided credentials for testing.
