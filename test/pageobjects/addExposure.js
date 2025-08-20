import page from "./page";
class AddExposure extends page {
  async addExposure() {
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
    const addManuBtn = await $('(//img[@alt="add_exposure"])[1]');
    await addManuBtn.waitForDisplayed({ timeout: 10000 });

    // Click the "Add Manu" button
    await addManuBtn.click();

    // Wait for the input field to be visible
    const manuInput = await $('//input[@name="exposure_limit"]');
    await manuInput.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await manuInput.setValue("New");

    const commissionCharge = await $('//input[@name="commission_charge"]');
    await commissionCharge.waitForDisplayed({ timeout: 5000 });

    // Type into the input
    await commissionCharge.setValue("12");

    //password input
    const passwordInput = await $('//input[@name="request_password"]');
    await passwordInput.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await passwordInput.setValue("12345678");


    // Click the submit button
    const submitBtn = await $('//button[text()="Create"]');
    await submitBtn.click();

    await browser.pause(5000);
  }
}
export default new AddExposure();
