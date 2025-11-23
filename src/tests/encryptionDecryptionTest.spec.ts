import {test, expect} from '@playwright/test';
import { decryption, encryption } from '../utils/CryptojsUtils';

test.describe('Encryption and Decryption Suite', ()=>{
    test('Encryption and Decryption of username', async()=>{
        var encryptedUn = await encryption(process.env.user);
        await decryption(encryptedUn);
    });

    test('Encryption and Decryption of password', async()=>{
        var encryptedPwd= await encryption(process.env.password);
        await decryption(encryptedPwd);
    })
})