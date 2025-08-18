import page from './page.js';

class AddBanner extends page {
    async addBanner() {
        // Wait for the "Add Banner" button to be visible
        const addBannerBtn = await $('//button[text()="Add Banner"]');
        await addBannerBtn.waitForDisplayed({ timeout: 10000 });

        // Click the "Add Banner" button
        await addBannerBtn.click();

        // Wait for the input field to be visible
        const bannerInput = await $('//input[@name="banner_image"]');
        await bannerInput.waitForDisplayed({ timeout: 5000 });

        // Upload the banner image
        await bannerInput.setValue('/path/to/your/banner/image.jpg');

        // Click the submit button
        const submitBtn = await $('//button[text()="Submit"]');
        await submitBtn.click();

        // Wait for confirmation message
        const confirmationMessage = await $('//*[text()="Banner added successfully"]');
        await confirmationMessage.waitForDisplayed({ timeout: 10000 });
    }
}