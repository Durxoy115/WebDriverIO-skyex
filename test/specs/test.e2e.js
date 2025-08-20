import LoginPage from "../pageobjects/login.page.js";
import WhiteLvl from "../pageobjects/addwhitelvl.js";
import BalanceTransfer from "../pageobjects/balancetransfer.js";
import UserStatusChange from "../pageobjects/userStatusChange.js";
import AddManu from "../pageobjects/addManu.js";
import AddBanner from "../pageobjects/addBanner.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("mvp1", "12345678");
  });
});
// describe('Add a white lvl', () => {
//     it('should add a wl', async () => {
//         await WhiteLvl.open()

//         await WhiteLvl.addWhiteLvl()

//     })
// })

// describe("Deposit Balance", () => {
//   it("should deposit amount", async () => {
//     await BalanceTransfer.open();

//     await BalanceTransfer.transferBalance();
//   });
// });

// describe("Change User Status", () => {
//   it("should change user status", async () => {
//     await UserStatusChange.open();
//     await UserStatusChange.changeUserStatus();
//   });
// });

//Add menu
// describe("Add Manu", () => {
//   it("should add manu", async () => {
//     await AddManu.open();
//     await AddManu.addManu();
//   });
// });

//Add banner
describe("Add Banner", () => {
  it("should add banner", async () => {
    await AddBanner.open();
    await AddBanner.addBanner();
  });
});

