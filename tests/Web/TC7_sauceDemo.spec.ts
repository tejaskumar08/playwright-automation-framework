import { test, expect } from '@playwright/test';

test.describe('SauceDemo critical e2e workflow', () => {
  test('standard user can login, add product, checkout, and confirm order', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // Login
    await expect(page.locator('input[data-test="username"]')).toBeVisible();
    await expect(page.locator('input[data-test="password"]')).toBeVisible();
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.click('input[data-test="login-button"]');

    // Validate products page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Add first product to cart
    const firstProduct = page.locator('.inventory_item').first();
    await expect(firstProduct).toBeVisible();
    const addButton = firstProduct.locator('button');
    await addButton.click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Open cart and verify item
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_item')).toHaveCount(1);

    // Checkout steps
    await page.click('button[data-test="checkout"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.fill('input[data-test="firstName"]', 'John');
    await page.fill('input[data-test="lastName"]', 'Doe');
    await page.fill('input[data-test="postalCode"]', '12345');
    await page.click('input[data-test="continue"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.click('button[data-test="finish"]');

    // Final confirmation
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');

    // Snapshot screenshot for report
    await page.screenshot({ path: 'test-results/sauce-demo-final.png', fullPage: true });
  });
});
