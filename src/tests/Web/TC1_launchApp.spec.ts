import {test, expect} from '@playwright/test';
import HomePage  from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

test('launch salesforce app', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToApp();
})