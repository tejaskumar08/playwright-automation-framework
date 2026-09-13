import {test, expect} from '@playwright/test';

test.describe('API Mocking, Monitoring and Intercepting', ()=>{

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

    test("API monitoring", async({page, request})=>{
        const targetUrl = /\/configmgr\/v1\/configurations\//;
        
        await page.on("request", (request)=>{
            if(targetUrl.test(request.url()))
            console.log('headers', request.headers)
            console.log('request', request.method, request.postData, request.url)
        })

        await page.on("response", (response)=>{
            console.log('response status', response.status)
            console.log('response body', response.body, response.json, response.text, response.headers)
        })

        await page.on("console", (msg)=>{
            console.log('logs --', msg.text())
        })

        await page.on("dialog", (dialog)=> {
            console.log('accept --', dialog.accept())
            console.log('dismiss --', dialog.dismiss())
            console.log('message --', dialog.message())
            console.log('type of dialog  --', dialog.type());
        })
    })
})
