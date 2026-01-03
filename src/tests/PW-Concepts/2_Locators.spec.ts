import {test, expect} from '@playwright/test';

test.describe('This is test block', ()=>{
    test('Find Elements', async({page})=>{
        await page.goto('https://practice.expandtesting.com/')
        await page.getByAltText('Automation Tips').isVisible();
        await page.getByLabel('SUT').isVisible();
        await page.getByPlaceholder('Search an example...').isVisible();
        await page.getByRole('heading', {name:'Automation Testing Practice WebSite for QA and Developers'}).isVisible();
        await page.getByTestId('build-version').isVisible();
        await page.getByText('Buy us a coffee').isVisible();
        await page.getByTitle('Automation Testing Practice Website for QA and Developers | UI and API').isVisible();
    })

    test("handle", async({page})=>{
        await page.goto('https://practice.expandtesting.com/');
        await page.waitForLoadState('networkidle');
        await page.locator('#login').waitFor({state: 'attached', timeout : 5000});
        expect(await page.locator('#login')).toBeVisible({timeout:5000})
        
        //Test code 
        // await page.press('#profile','Tab')
        // expect.poll(async() =>{
        //   await page.locator('#loadingIcon');
        // }).
    })
})