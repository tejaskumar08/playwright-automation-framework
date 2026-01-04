import {Page, expect} from '@playwright/test' 

export default class HomePage {
   
     private readonly serviceIcon = 'Service'
     private readonly accountsIcon = 'Accounts'
     private readonly accountListBtn = 'Accounts List'
     private readonly newAccountBtn = 'New Account'

    constructor(private page: Page){
    }
    
    async verifyServiceIconVisible(){
         await expect(await this.page.getByTitle(this.serviceIcon)).toBeVisible({timeout:5000});
         await expect(await this.page.getByRole("link", {name: this.accountsIcon})).toBeVisible();
    }

    async createNewAccount(){
         await this.page.getByText(this.accountListBtn).click();
         await expect(await this.page.locator(this.newAccountBtn)).toBeAttached;
         await expect(await this.page.locator(this.newAccountBtn).waitFor({state:'visible'})).toEqual(true);
    }
}