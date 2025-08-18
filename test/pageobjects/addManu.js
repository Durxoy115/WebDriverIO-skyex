import page from "./page.js";

class AddManu extends page {
  async addManu() {
    // Wait until "Admin Setting" is visible
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
    const addManuBtn = await $('//img[@alt="add_menu_bar"]');
    await addManuBtn.waitForDisplayed({ timeout: 10000 });

    // Click the "Add Manu" button
    await addManuBtn.click();

    // Wait for the input field to be visible
    const manuInput = await $('//input[@name="title"]');
    await manuInput.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await manuInput.setValue("New");


    //upload menu image
    const manuImageInput = await $('//input[@name="image"]');
    await manuImageInput.waitForDisplayed({ timeout: 5000 });
    // Set the value for the image input
    await manuImageInput.setValue('/Mac_ssd/Users/Durjoy/Desktop/ss/menu.png'); 
    // Wait for the input field to be visible

    const altTextInput = await $('//input[@name="alt_text"]');
    await altTextInput.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await altTextInput.setValue("New Manu Image");
     const sortIdInput = await $('//input[@name="sort_id"]');
    await sortIdInput.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await sortIdInput.setValue("1");
    // Click the submit button
    const submitBtn = await $('//button[text()="Create"]');
    await submitBtn.click();
    await browser.pause(5000);
  }
}
