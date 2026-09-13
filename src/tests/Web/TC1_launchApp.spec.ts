import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import {logger} from '../../utils/LoggerUtils'

test('launch Orange HRM app', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToApp();
    logger.info("Successfully navigated to app")
})