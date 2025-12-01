import LoginPage from '../pages/LoginPage';
import { testLP } from '../utils/Fixture';
import { test  } from '../utils/Fixture';

testLP('login page custom fixture only for login', async({loginPage})=>{
    await loginPage.navigateToHome();
})

test('base test fixture', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToHome();
})