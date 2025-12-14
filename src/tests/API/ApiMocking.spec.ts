import {test, expect} from '@playwright/test';

test.describe('API Mocking suite', ()=>{

    test('Mocking Request', async({page}) =>{
        await page.route('*/**/api/v1/fruits', async (route)=>{
            const json = [{name: 'berry', id : 22}];
            await route.fulfill({json});
        });
        //go to page 
        await page.goto('https://demo.playwright.dev/api-mocking');
        await expect(page.getByText('Berry')).toBeVisible();
        console.log('passed')
    });
    test('Mocking_Modidying Response', async({page})=>{
        await page.route('*/**/api/v1/fruits', async (route)=>{
            const response =  await route.fetch();
            const json = await response.json();
            json.push({ name: 'Custard', id: 100 });
            //Fetch response, patching custard to that
            await route.fulfill({response, json});
        })

        await page.goto('https://demo.playwright.dev/api-mocking')
        await expect(page.getByText('Custard', {exact:true})).toBeVisible();
    });
})
