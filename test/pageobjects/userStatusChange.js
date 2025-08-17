import Page from './page.js';
class UserStatusChange extends Page {
    async changeUserStatus() {
        // Wait for the "User Status" button to be visible
        const userStatusBtn = await $("(//img[@alt='status'])[1]");
        await userStatusBtn.waitForDisplayed({ timeout: 30000 });

        // Click the "User Status" button
        await userStatusBtn.click();

        // Wait for the input field to be visible
        const inputField = await $("//img[@alt='Suspend']");
        await inputField.waitForDisplayed({ timeout: 5000 });
        await inputField.click();
              // Input assword
        const inputPassword = await $('//input[@name="request_password"]');
        await inputPassword.waitForDisplayed({ timeout: 5000 });
        await inputPassword.setValue("12345678");

        // Click the submit button
        const submitBtn = await $('//*[text()="Change"]');
        await submitBtn.click();

        // Wait for confirmation message
        const confirmationMessage = await $('//*[text()="User status changed successfully"]');
        await confirmationMessage.waitForDisplayed({ timeout: 10000 });
    }
}
export default new UserStatusChange();