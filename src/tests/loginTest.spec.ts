import {expect, test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const authFile = 'config/auth.json'


test.describe('Login Test Suite', ()=>{
    test('Login test', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateToApp();
        await loginPage.loginToApp('tejasqualitrix@gmail.com', 'Tejas@4646');
        await page.context().storageState({path: authFile})
        console.log('Auth info is saved')
    });

    test.skip('Login using saved auth info', async({ browser })=>{
        const context = await browser.newContext({storageState: authFile});
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await page.goto("https://orgfarm-38abd48598-dev-ed.develop.lightning.force.com/lightning/page/home");
        await expect(await page.getByRole("link", {name: "Accounts"})).toBeVisible();
        homePage.verifyServiceIconVisible();
        console.log("User is in home using the saved auth info");
    });

});
