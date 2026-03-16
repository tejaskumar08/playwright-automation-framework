# SauceDemo Critical Workflow Manual Test Report

- **Scenario:** End-to-end user checkout flow on https://www.saucedemo.com (login, add to cart, checkout, order confirmation)
- **Test file:** `src/tests/Web/TC7_sauceDemo.spec.ts`
- **Screenshot:** `test-results/sauce-demo-final.png` (plus Playwright error-context screenshot on first failed run)

## Steps taken
1. Navigate to https://www.saucedemo.com.
2. Verify login form fields are visible.
3. Enter credentials `standard_user` / `secret_sauce` and click login.
4. Confirm URL is `/inventory.html` and products list is displayed.
5. Add the first inventory item to the cart.
6. Confirm cart badge displays `1`.
7. Open cart and assert one cart item present.
8. Click `Checkout`.
9. Fill in `firstName=John`, `lastName=Doe`, `postalCode=12345`.
10. Continue to checkout overview and click `Finish`.
11. Confirm final URL `/checkout-complete.html` and message `Thank you for your order!`.
12. Capture full-page screenshot for report.

## Outcome
- The workflow executed successfully with all key user scenarios covered.
- One initial assertion mismatch (case-sensitivity for the complete header text) was fixed from `THANK YOU FOR YOUR ORDER` to `Thank you for your order!`.
- Final assertion now passes and checkout confirmation is validated.

## Issues Found
- Minor text expectation mismatch in the script (corrected assertion string). No functional defects.

## Accessibility / UI notes
- Page elements had clear labels and form fields used standard HTML controls.
- Cart badge and button text are visible and actionable.

## Clean up
- Test completed and browser closed automatically by Playwright test runner.
