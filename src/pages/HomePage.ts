import {Page, expect} from '@playwright/test' 

export default class HomePage {
   
     private readonly profileIcon = "img[class='oxd-userdropdown-img']"
     private readonly accountListBtn = 'Accounts List'
     private readonly newAccountBtn = 'New Account'

    constructor(private page: Page){
    }
    
    async verifyUserInfoVisible(){
         await expect(this.page.locator(this.profileIcon)).toBeVisible({timeout:5000});
         await expect(this.page.getByText("My Actions")).toBeVisible();
    }

    async createNewAccount(){
         await this.page.getByText(this.accountListBtn).click();
         await expect(await this.page.locator(this.newAccountBtn)).toBeAttached;
         await expect(await this.page.locator(this.newAccountBtn).waitFor({state:'visible'})).toEqual(true);
    }
}