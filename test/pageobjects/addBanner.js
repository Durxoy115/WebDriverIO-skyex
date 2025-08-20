import page from './page.js';

class AddBanner extends page {
    async addBanner() {
        const adminSettingBtn = await $('//*[text()="Admin Setting"]');
        await adminSettingBtn.waitForDisplayed({ timeout: 10000 });
    
        // Click "Admin Setting"
        await adminSettingBtn.click();
    
        const domainListBtn = await $(
          '//div[@class="cursor-pointer"]//img[@alt="Domain List"]'
        );
        await domainListBtn.waitForDisplayed({ timeout: 10000 });
    
        // Click "Admin Setting"
        await domainListBtn.click();
    
        // Wait for the "Add Manu" button to be visible
        const addManuBtn = await $('(//img[@alt="add_banner"])[1]');
        await addManuBtn.waitForDisplayed({ timeout: 10000 });
    
        // Click the "Add Manu" button
        await addManuBtn.click();
    
        // Wait for the input field to be visible
        const manuInput = await $('//input[@name="title"]');
        await manuInput.waitForDisplayed({ timeout: 5000 });
    
        // Type into the input
        await manuInput.setValue("New Banner");

        // Wait for the input field to be visible
        const bannerSubTitle = await $('//input[@name="sub_title"]');
        await bannerSubTitle.waitForDisplayed({ timeout: 5000 });
        // Type into the input
        await bannerSubTitle.setValue("New Banner Subtitle");

        const bannerDescription = await $('//input[@name="description"]');
        await bannerDescription.waitForDisplayed({ timeout: 5000 });
        // Type into the input
        await bannerDescription.setValue("New Banner Description");

        await browser.pause(40000);

        const bannerAltText = await $('//input[@name="alt_text"]');
        await bannerAltText.waitForDisplayed({ timeout: 5000 });
        // Type into the input
        await bannerAltText.setValue("New Banner Image");

        const checkbox = await $('//input[@name="is_home"]');
        await checkbox.waitForDisplayed({ timeout: 5000 });
        // Check the checkbox
        await checkbox.click();
        const checkboxLogin = await $('//input[@name="is_login"]');
        await checkboxLogin.waitForDisplayed({ timeout: 5000 });
        // Check the checkbox
        await checkboxLogin.click();
        const checkboxSoccer = await $('//input[@name="is_soccer"]');
        await checkboxSoccer.waitForDisplayed({ timeout: 5000 });
        // Check the checkbox
        await checkboxSoccer.click();
       
        //Click the confirm button
        const confirmBtn = await $('//button[text()="Create"]');
        await confirmBtn.waitForDisplayed({ timeout: 5000 });
        await confirmBtn.click();
    }
}
export default new AddBanner();