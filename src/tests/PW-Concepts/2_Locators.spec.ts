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

    test("Waits", async({page})=>{
        //waitFor method
        await page.locator('#username').waitFor({state:"attached"});
        await page.locator('#username').waitFor({state: "detached"});
        await page.locator('#username').waitFor({state:"visible"});
        await page.locator('#username').waitFor({state:"hidden"});

        //waitForLoadState function
        await page.waitForLoadState('domcontentloaded');
        await page.waitForLoadState('networkidle');
        await page.waitForLoadState('load');

        //waitForRequest function
        await page.waitForRequest("https://key.manager.com/api/na/configmgr/configurationtemplates");
        await page.waitForRequest((request)=> 
        request.url() ==="https://test.key.com/api/na/configmgr/byteAddress");

        //waitForResponse function
        const responsePromise = await page.waitForResponse('https://test.key.com/api/na/configmgr/permissions');
        const resposnePromise = await page.waitForResponse(response => 
            response.status() === 200 &&
            response.request().method() === 'GET'
        )
        const response = await responsePromise;
        
        //waitForSelector function
        await page.waitForSelector('Setup/Keys');

        //waitForTimeout function - NOT RECOMMENDED TO USE 
        await page.waitForTimeout(5000);

        //waitForURL function
        await page.waitForURL('https://key.manager.com/ConfigurationManager/create-configuration');
        
    })
})