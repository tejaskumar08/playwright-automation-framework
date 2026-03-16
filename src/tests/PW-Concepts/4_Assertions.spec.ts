import {test, expect} from '@playwright/test';
test.describe('This is test block', ()=>{
    test('Assertions', async({page})=>{
        await page.locator('//input[@type="file"]').fill('TejasKumarK')
        
        //Assertion related to page
        expect(page).toHaveScreenshot();
        expect(page).toHaveTitle('Home | Dashboard');
        expect(page).toHaveURL('/homePage');

        //Assertions related to element
        expect(await page.getByText("sign out")).toBeAttached();
        expect(await page.getByText("sign out")).toBeChecked();
        expect(await page.getByText("sign out")).toBeEditable();
        expect(await page.getByText("sign out")).toBeEmpty();
        expect(await page.getByText("sign out")).toBeEnabled();
        expect(await page.getByText("sign out")).toBeFocused();
        expect(await page.getByText("sign out")).toBeHidden();
        expect(await page.getByText("sign out")).toBeInViewport();
        expect(await page.getByText("sign out")).toBeNull();
        expect(await page.getByText("sign out")).toBeUndefined();
        expect(await page.getByText("sign out")).toBeVisible();
        expect(await page.getByText("sign out")).toContainClass('signUp');
        expect(await page.getByText("sign out")).toContainText('Sign Up Here')
        expect(await page.getByText("sign out")).toHaveAccessibleDescription('User sign up')
        expect(await page.getByText("sign out")).toHaveAccessibleErrorMessage('sign up is mandatory')
        expect(await page.getByText("sign out")).toHaveAccessibleName('All user sign up')
        expect(await page.getByText("sign out")).toHaveAttribute('enabled')
        expect(await page.getByText("sign out")).toHaveCSS('warning-color', '#e9b90a')
        expect(await page.getByText("sign out")).toHaveClass('form-submit-button');
        expect(await page.getByText("sign out")).toHaveCount(3);
        expect(await page.getByText("sign out")).toHaveId('username-required');
        expect(await page.getByText("sign out")).toHaveRole('presentation')
        expect(await page.getByText("sign out")).toHaveScreenshot('./screenshots/img1.png');
        expect(await page.getByText("sign out")).toHaveText('Pick an account');
        expect(await page.getByText("sign out")).toHaveValue('North America'); //To get the input value input[formcontrolname="configName"]
        expect(await page.getByText("sign out")).toHaveValues(['Keys Only', 'config & keys', 'Keys only'])
    })    
});