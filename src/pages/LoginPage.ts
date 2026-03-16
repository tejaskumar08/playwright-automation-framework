import {Page, expect} from '@playwright/test';
import {PWUtils} from '../utils/PlaywrightUtils';
import {LoginPageLocators} from '../locators/loginPageLocators'

export default class LoginPage
 {
    constructor(private page: Page){
    }

    async navigateToApp(){
        await this.page.goto('https://login.salesforce.com/');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await expect(this.page, "verify Url").toHaveURL('https://login.salesforce.com/');
        await expect(this.page, 'verify title').toHaveTitle('Login | Salesforce');
        await expect(this.page.getByAltText('Salesforce'), 'Verify Logo').toBeVisible();
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
        await this.page.goto("https://orgfarm-38abd48598-dev-ed.develop.lightning.force.com/lightning/page/home", {timeout:30000});
    }
 
    



}