import Page from './page.js';
class BalanceTransfer extends Page {
 async transferBalance() {

    // Wait for the "Transfer Balance" button to be visible
    const transferBalanceBtn = await $("(//img[@alt='transaction'])[1]");
    await transferBalanceBtn.waitForDisplayed({ timeout: 30000 });

    // Click the "Transfer Balance" button
    await transferBalanceBtn.click();

    // Wait for the input fields to be visible
    const selectDeposit = await $("//button[text()='D']");
    await selectDeposit.waitForDisplayed({ timeout: 5000 });
    await selectDeposit.click();
    
   const inputAmount = await $("//input[@name='amount']");
    await inputAmount.waitForDisplayed({ timeout: 5000 });
    await inputAmount.setValue("100");

    const inputRemarks = await $("//input[@name='remark']");
    await inputRemarks.waitForDisplayed({ timeout: 5000 });
    await inputRemarks.setValue("Test Transfer");



   const inputPassword = await $("//input[@name='request_password']");
    await inputPassword.waitForDisplayed({ timeout: 5000 });
    await inputPassword.setValue("12345678");

    // Click the submit button
    const submitBtn = await $('//*[text()="Confirm"]');
    await submitBtn.click();

    // Wait for confirmation message
    const confirmationMessage = await $('//*[text()="Amount Transfer Successfully"]');
    await confirmationMessage.waitForDisplayed({ timeout: 10000 });



    //Widrawal

      // Wait for the "Transfer Balance" button to be visible
      const transferBalanceBtnWdrw = await $("(//img[@alt='transaction'])[1]");
      await transferBalanceBtnWdrw.waitForDisplayed({ timeout: 30000 });
  
      // Click the "Transfer Balance" button
      await transferBalanceBtnWdrw.click();
    const selectWithdraw = await $("//button[text()='W']");
    await selectWithdraw.waitForDisplayed({ timeout: 5000 });
    await selectWithdraw.click(); 

    const inputWithdrawAmount = await $("//input[@name='amount']");
    await inputWithdrawAmount.waitForDisplayed({ timeout: 5000 });
    await inputWithdrawAmount.setValue("50");
    const inputWithdrawRemarks = await $("//input[@name='remark']");
    await inputWithdrawRemarks.waitForDisplayed({ timeout: 5000 });
    await inputWithdrawRemarks.setValue("Test Withdraw");
    const inputWithdrawPassword = await $("//input[@name='request_password']");
    await inputWithdrawPassword.waitForDisplayed({ timeout: 5000 });
    await inputWithdrawPassword.setValue("12345678");
    // Click the submit button for withdrawal
    const submitWithdrawBtn = await $('//*[text()="Confirm"]');
    await submitWithdrawBtn.click();
    // Wait for confirmation message for withdrawal
    const withdrawalConfirmationMessage = await $('//*[text()="Amount Withdraw Successfully"]');
  }
}
export default new BalanceTransfer();