import {test, expect} from '@playwright/test'

test.describe('auth token', ()=>{

    let token:string;
    test.beforeAll('fetch auth token', async(playwright)=>{
        const request = await playwright.request ;
        const response = await request.post('https://www.dummyapp.com/login', {data: {username:"Tejas", password: "Tejas"}});
        const responseBody = await response.json();
        token =  responseBody.token();
    })

    test.use({
        storageState:'auth.json'
    })

    test.beforeEach('login using token', async({browser})=>{
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://www.dummyapp.com/");
       await page.evaluate(()=>{
            localStorage.setItem('token', token);
       })
       await page.reload();
    })

})