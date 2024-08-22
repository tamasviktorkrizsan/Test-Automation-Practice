import { Key } from 'webdriverio';
import LoginPage from "../po/pages/login.page";


describe("saucedemo", () => {

  beforeEach(async () => {

    await browser.url(process.env.URL);

  })


  it('(UC-1) Test Login form with empty credentials', async () => {


    // GIVEN: Type any credentials into "Username" and "Password" fields

    await $("//input[@id = 'password']").setValue(process.env.USER);

    await $("//input[@id = 'user-name']").setValue(process.env.PASSWORD);

    // Clear the inputs

    await $("//input[@id = 'password']");

    await browser.keys([Key.Ctrl,Key.Backspace]);


    await $("//input[@id = 'user-name']");

    await browser.keys([Key.Ctrl,Key.Backspace]);


    // WHEN: Hit the "Login" button

    await $("//input[@id = 'login-button']").click();


    //THEN: Check the error messages: "Username is required"

    await LoginPage.checkErrorMessage('Epic sadface: Username is required');

  })

})
