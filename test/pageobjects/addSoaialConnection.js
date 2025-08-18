import Page from "./page";

class AddSocialConnection extends Page {
    async addSocialConnection() {
        // Wait for the "Add Social Connection" button to be visible
        const addSocialBtn = await $('//button[text()="Add Social Connection"]');
        await addSocialBtn.waitForDisplayed({ timeout: 10000 });
    
        // Click the "Add Social Connection" button
        await addSocialBtn.click();
    
        // Wait for the input field to be visible
        const socialInput = await $('//input[@name="social_name"]');
        await socialInput.waitForDisplayed({ timeout: 5000 });
    
        // Type into the input
        await socialInput.setValue('New Social Connection');
    
        // Click the submit button
        const submitBtn = await $('//button[text()="Submit"]');
        await submitBtn.click();
    
        // Wait for confirmation message
        const confirmationMessage = await $('//*[text()="Social connection added successfully"]');
        await confirmationMessage.waitForDisplayed({ timeout: 10000 });
    }
    }