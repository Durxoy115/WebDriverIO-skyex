import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class WhiteLvl extends Page {
  async addWhiteLvl() {
    // Wait until "Admin Setting" is visible
    // const adminSettingBtn = await $('//*[text()="Admin Setting"]');
    // await adminSettingBtn.waitForDisplayed({ timeout: 10000 });

    // // Click "Admin Setting"
    // await adminSettingBtn.click();

    // const domainListBtn = await $(
    //   '//div[@class="cursor-pointer"]//img[@alt="Domain List"]'
    // );
    // await domainListBtn.waitForDisplayed({ timeout: 10000 });

    // // Click "Admin Setting"
    // await domainListBtn.click();

    // const addDomainBtn = await $('//*[text()="Add Domain"]');
    // await addDomainBtn.waitForDisplayed({ timeout: 10000 });

    // // Click "Admin Setting"
    // await addDomainBtn.click();

    // // Wait for the input to be visible
    // const nameInput = await $('//input[@name="name"]');
    // await nameInput.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await nameInput.setValue("zgsch");


    // const userDomainInput = await $('//input[@name="user_domain"]');
    // await userDomainInput.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await userDomainInput.setValue("localhost:3099");

    // const userWebTittle = await $('//input[@name="user_web_title"]');
    // await userWebTittle.waitForDisplayed({ timeout: 5000 });
    // // Type into the input
    // await userWebTittle.setValue("zgsch");

    // const adminDomain = await $('//input[@name="admin_domain"]');
    // await adminDomain.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await adminDomain.setValue("Zay Global - User Portal");
    // const adminWebTittle = await $('//input[@name="admin_web_title"]');
    // await adminWebTittle.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await adminWebTittle.setValue("Zay Global - User Portal");
    // await browser.pause(20000);

    // const altText = await $('//input[@name="alt_text"]');
    // await altText.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await altText.setValue("Company Logo");
    // const Prefix = await $('//input[@name="prefix"]');
    // await Prefix.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await Prefix.setValue("zx");


    // const signupUrl = await $('//input[@name="sign_up_url"]');
    // await signupUrl.waitForDisplayed({ timeout: 5000 });

    // // Type into the input
    // await signupUrl.setValue("https://zayglobalsolutions.com/signup");

    // const clickOnCreateBtn = await $('//*[text()="Create"]');
    // await clickOnCreateBtn.waitForDisplayed({ timeout: 10000 });

    // // Click "Admin Setting"
    // await clickOnCreateBtn.click();
    // await browser.pause(5000); // wait for the page to load

    // await $('(//button[.//img[@alt="add_user"]])[1]').click();
    // // Wait for the input to be visible
    // const addEmail = await $('//input[@name="email"]');
    // await addEmail.waitForDisplayed({ timeout: 5000 });
    // // Type into the input
    // await addEmail.setValue('durjoy0@gmail.com');

    // const addUsername = await $('//input[@name="username"]');
    // await addUsername.waitForDisplayed({ timeout: 5000 });
    // // Type into the input
    // await addUsername.setValue('durjoy');

    // const addPassword = await $('//input[@name="password"]');
    // await addPassword.waitForDisplayed({ timeout: 5000 });
    // // Type into the input
    // await addPassword.setValue('Durjoy@123');

    // const addConfirmPassword = await $('//input[@name="confirm_password"]');
    // await addConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // // Type into the input
    // await addConfirmPassword.setValue('Durjoy@123');

    // const addUserBtn = await $('//*[text()="Create"]');
    // await addUserBtn.waitForDisplayed({ timeout: 10000 });
    // // Click "Admin Setting"
    // await addUserBtn.click();

    // // Wait for the success message to appear
    // const successMessage = await $('//*[text()="User created successfully."]');
    // await successMessage.waitForDisplayed({ timeout: 10000 });
    // // Verify the success message
    // const messageText = await successMessage.getText();
    // if (messageText === "User created successfully.") {
    //   console.log("User created successfully.");
    // } else {
    //   console.error("Failed to create user.");
    // }
  
    //Add Super Admin
    await $("//span[text()='lcwhitelevel01']").click();
    await $('//*[text()="Add Super Admin"]').click();


    const addsprEmail = await $('//input[@name="email"]');
    await addsprEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprEmail.setValue('durjoy00@gmail.com');

    const addsprUsername = await $('//input[@name="username"]');
    await addsprUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprUsername.setValue('durjoy001');

    const addSprPassword = await $('//input[@name="password"]');
    await addSprPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSprPassword.setValue('Durjoy@123');

    const addsprConfirmPassword = await $('//input[@name="confirm_password"]');
    await addsprConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addsprConfirmPassword.setValue('Durjoy@123');

    const addsprUserBtn = await $('//*[text()="Create"]');
    await addsprUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addsprUserBtn.click();


    //add admin
    await $("//span[text()='lcdurjoy00o']").click();
    await $('//*[text()="Add Admin"]').click();


    const addAdminEmail = await $('//input[@name="email"]');
    await addAdminEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addAdminEmail.setValue('durjoy0@gmail.com');

    const addAdminUsername = await $('//input[@name="username"]');
    await addAdminUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addAdminUsername.setValue('durjoy02');

    const addAdminPassword = await $('//input[@name="password"]');
    await addAdminPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addAdminPassword.setValue('Durjoy@123');

    const addAdminConfirmPassword = await $('//input[@name="confirm_password"]');
    await addAdminConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addAdminConfirmPassword.setValue('Durjoy@123');

    const addAdminUserBtn = await $('//*[text()="Create"]');
    await addAdminUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addAdminUserBtn.click();


    //Add Senior Super
    await $("//span[text()='lcqqq111']").click();
    await $('//*[text()="Add Senior Super"]').click();


    const addSsEmail = await $('//input[@name="email"]');
    await addSsEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSsEmail.setValue('durjoy0@gmail.com');

    const addSsUsername = await $('//input[@name="username"]');
    await addSsUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSsUsername.setValue('durjoy093');

    const addSsPassword = await $('//input[@name="password"]');
    await addSsPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSsPassword.setValue('Durjoy@123');

    const addSsConfirmPassword = await $('//input[@name="confirm_password"]');
    await addSsConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSsConfirmPassword.setValue('Durjoy@123');

    const addSsUserBtn = await $('//*[text()="Create"]');
    await addSsUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addSsUserBtn.click();


    //Add Super
    // await $("//span[text()='lcwhitelevel01']").click();
    await $('//*[text()="Add Super"]').click();


    const addSuperEmail = await $('//input[@name="email"]');
    await addSuperEmail.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSuperEmail.setValue('durjoy0@gmail.com');

    const addSuperUsername = await $('//input[@name="username"]');
    await addSuperUsername.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSuperUsername.setValue('durjoy082');

    const addSuperPassword = await $('//input[@name="password"]');
    await addSuperPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSuperPassword.setValue('Durjoy@123');

    const addSuperConfirmPassword = await $('//input[@name="confirm_password"]');
    await addSuperConfirmPassword.waitForDisplayed({ timeout: 5000 });
    // Type into the input
    await addSuperConfirmPassword.setValue('Durjoy@123');

    const addSuperUserBtn = await $('//*[text()="Create"]');
    await addSuperUserBtn.waitForDisplayed({ timeout: 10000 });
    // Click "Admin Setting"
    await addSuperUserBtn.click();
  }
}

export default new WhiteLvl();