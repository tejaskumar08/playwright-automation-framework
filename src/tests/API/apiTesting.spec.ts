import {test, expect, chromium} from '@playwright/test';
import { promises } from 'dns';
import {APIResponse} from '@playwright/test'

test.describe('API testing suite with playwright', ()=>{
    
    test("GET api testing using existing POM page context", async({page})=>{
        const request = await page.request;
        const response = await request.get('https://swapi.dev/api/people/1/');
        console.log('----all response functions----')
        console.log('headers - ', response.headers);
        console.log('body - ',response.body);
        console.log('json - ',response.json)
        console.log('status - ',response.status) 
        console.log('statusText - ', response.statusText);
        console.log('url - ', response.url); 
        console.log('-------------------------------');
    })

    test("GET api testing by APIRequest context", async({playwright})=>{
        let response: APIResponse;
        const request = await playwright.request;
        const context = await request.newContext({baseURL: "https://swapi.dev/api/"});
        response = await context.get("planets/3/");
        console.log('planets response - ', response.status, 'body - ', response.body)  

        response = await context.get("starships/9/");
        console.log("starships response - ",response.body().toString());
    })

    test('POST api with request body', async({playwright})=>{
        const apiRequest = playwright.request;
        const context = await apiRequest.newContext({baseURL:"https://automationexercise.com"});
        const response = await context.post('/api/createAccount', {data:{ 
                name: "Test Playwright",
                email: "externalrcm@mailinator.com",
                password: "Test@123",
                title: 'Mr.',
                birth_date: "08",
                birth_month: "08",
                birth_year: "1998",
                firstname: "Test",
                lastname: "Playwright",
                company: "Alle",
                address1: "341",
                address2: "Carmel PA",
                country: "US",
                zipcode: "50032",
                state: "PA",
                city: "Carmel",
                mobile_number: "+1 9333344444"}
            })
        console.log('response - ', response.status)
        console.log('response - ', response.body)
        await expect(response).toBeOK;  
    })

    test.only('GET2 api with request body', async({playwright})=>{
        const reqContext = await playwright.request;
        const request =  await reqContext.newContext({baseURL: 'https://apichallenges.eviltester.com'});
        const response = await request.get('/simpleapi/items');//, {data: { "email": 'Vale@gmail.com', "password": 'Vale@4646'}})
        console.log("body - ",response.json);
        console.log("body1 - ",response.body.toString);
        console.log("body2 - ",response.status);
    })

})
