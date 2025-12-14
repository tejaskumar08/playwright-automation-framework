import {test, expect} from '@playwright/test';

test('tc1', async({page})=>{
    await page.goto('https://login.salesforce.com');
    await expect(page, 'Could not verify Url').toHaveURL(/login/);
    await expect(page, 'Could not verify title').toHaveTitle('Login | Salesforce');
    await expect(page.getByAltText('Salesforce'), 'Logo not visible').toBeVisible();
})