import {Page, expect} from '@playwright/test' 

export default class HomePage {
   
     private readonly serviceIcon = 'Service'
     private readonly accountsIcon = 'Accounts'
    constructor(private page: Page){
    }
    
    async verifyServiceIconVisible(){
         await expect(await this.page.getByTitle(this.serviceIcon)).toBeVisible({timeout:5000});
         await expect(await this.page.getByRole("link", {name: this.accountsIcon})).toBeVisible();
    }
}