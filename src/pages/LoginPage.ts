import {Page, expect} from '@playwright/test';

export default class LoginPage
 {
    private readonly username =  '#username'
    private readonly password =  '#password'
    private readonly loginBtn = '#Login'
    private readonly service = 'h1>span[title=Service]'
   

    constructor(private page: Page){
    }

    async navigateToApp(){
        await this.page.goto('https://login.salesforce.com/');
        await expect(this.page, 'Could not verify Url').toHaveURL(/login/);
        await expect(this.page, 'Could not verify title').toHaveTitle('Login | Salesforce');
        await expect(this.page.getByAltText('Salesforce'), 'Logo not visible').toBeVisible();
    }

    async loginToApp(user:string, pass:string){
        await this.page.locator(this.username).fill(user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
        await this.page.waitForTimeout(10000);
        await this.page.waitForTimeout(10000);
        //await this.page.context().storageState({path: './config/auth.json'});
    }

    async navigateToHome(){
        //Without login directly go to home page using stored session info
        await this.page.goto("https://orgfarm-38abd48598-dev-ed.develop.lightning.force.com/lightning/page/home");
    }
 
    



}