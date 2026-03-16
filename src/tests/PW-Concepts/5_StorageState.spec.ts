import {test, expect, chromium} from '@playwright/test';
test.describe('This is test block', ()=>{
    test('Storage state', async({page})=>{
        const browser = await chromium.launch({headless:false})
        const context = await browser.newContext();
        await page.goto('https://practice.expandtesting.com/');
        await page.waitForLoadState('networkidle');
        await page.locator('#username').fill('Tejaskumar')
        await page.locator('#password').fill('Tejas');
        await page.locator('#login').click();
        await context.storageState({path:'./config/auth.json'});
    })

    test('Use storage state', async()=>{
        const browser = await chromium.launch({headless:false})
        const context = await browser.newContext({storageState:'./config/auth.json'});   
        const page = await context.newPage();
        await page.goto('https://practice.expandtesting.com/');
    })
})