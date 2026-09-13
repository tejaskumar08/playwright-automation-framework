import {test as base} from '@playwright/test';
import {expect as defaultExpect} from '@playwright/test';
import  LoginPage from '../pages/LoginPage';
import {Page} from '@playwright/test';

type customFixture = {
    page: Page;
}

export const test = base.extend<customFixture>({
    page: async({browser}, use) =>{
        const context = await browser.newContext();
        const page = await context.newPage();
        await use(page);
    }
})

export const expect = defaultExpect;


type loginPageFixture = {
    loginPage: LoginPage;
};

export const testLP = base.extend<loginPageFixture>({
    loginPage: async({browser}, use)=>{
        const context = await browser.newContext({storageState: 'config/auth.json'});
        const page = await context.newPage();
        await use(new LoginPage(page)); 
    }
})