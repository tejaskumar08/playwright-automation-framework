import {test} from "@playwright/test";
import * as dotenv from 'dotenv';

test('test env file', async({page})=>{        
    console.log('username -', process.env.user);
    console.log('password -', process.env.password);
});
  
