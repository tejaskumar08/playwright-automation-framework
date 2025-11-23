import {expect, test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import * as dotenv from 'dotenv';

const authFile = 'config/auth.json'

test.describe('Login Test Suite', ()=>{
    test('Login test', async({page})=>{
        //creating the new object of login page 
        const loginPage = new LoginPage(page);

        //Navigate to the app
        await loginPage.navigateToApp();
        
        //Reading the credentials from .env file 
        await loginPage.loginToApp(process.env.user!, process.env.password!); // ! tells it is not NULL value
        
        //Use storageState function to store login session info 
        await page.context().storageState({path: authFile})
        console.log('Auth info is saved')
    });

    test.skip('Login using saved auth info', async({ browser })=>{
         //Use storageState function to use login session info 
        const context = await browser.newContext({storageState: authFile});
        const page = await context.newPage();
        const homePage = new HomePage(page);
        
        //Without login directly go to home page using stored session info
        await page.goto("https://orgfarm-38abd48598-dev-ed.develop.lightning.force.com/lightning/page/home");
        
        //Assertions in home page 
        await expect(await page.getByRole("link", {name: "Accounts"})).toBeVisible();
        homePage.verifyServiceIconVisible();
        
        console.log("User is in home using the saved auth info");
    });

    test('test env file', async()=>{
        console.log(process.env.user!);
        console.log(process.env.password!);
    })
});
