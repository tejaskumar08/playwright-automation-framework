import {test, expect} from '@playwright/test';

test.beforeAll('This is before all', ()=>{
    console.log('This is before all')
})

test.beforeEach('This is before each', ()=>{
    console.log('This is before each')
})

test.describe('This is test suite', ()=>{
    test('this is TC1', async({page})=>{
        await page.goto('https://practice.expandtesting.com/')
    })
 
    test("this is TC2", async({page})=>{
        await page.goto('https://practice.expandtesting.com/');
    })    
})

test.afterEach('This is after each',()=>{
    console.log('This is after each')
})
test.afterAll('This is after all', ()=>{
    console.log('This is after all')
})