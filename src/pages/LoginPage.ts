import {Page, expect} from '@playwright/test';
import {LoginPageLocators} from '../locators/loginPageLocators'

export default class LoginPage
{
    constructor(private page: Page){
    }

    async navigateToApp(){
        //replacing salesforce app with orange hrm 
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await expect(this.page, "verify Url").toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(this.page, 'verify title').toHaveTitle('OrangeHRM');
        await expect(this.page.locator("//img[@alt='company-branding']"), 'Verify Logo').toBeVisible();
    }

    async loginToApp(user:string, pass:string){
        await this.page.locator(LoginPageLocators.username).fill(user);  //PWUtils.enterInputData(this.username, user, 5000);
        await this.page.fill(LoginPageLocators.password, pass);
        await this.page.click(LoginPageLocators.loginBtn);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        //await this.page.context().storageState({path: './config/auth.json'});
    }

    async navigateToHome(){
        //Without login directly go to home page using stored session info
        await this.page.goto("https://opensource-demo.orangehrmlive.com/", {timeout:30000});
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }
 
    



}