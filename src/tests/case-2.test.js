import { Key } from 'webdriverio';
import LoginPage from "../po/pages/login.page";


describe("saucedemo", () => {

  beforeEach(async () => {

    await browser.url(process.env.URL);

  })


  it('(UC-2) Test Login form with credentials by passing Username', async () => {


    // GIVEN: Type any credentials in username

    await $('[name="user-name"]').setValue(process.env.USER);

    // Enter password

    await $('[name="password"]').setValue(process.env.PASSWORD);

    // Clear the "Password" input

    await browser.keys([Key.Ctrl,Key.Backspace]);


    // WHEN: Hit the "Login" button

    await $('[name="login-button"]').click();


    // THEN: Check the error messages: "Password is required"

    await LoginPage.checkErrorMessage('Epic sadface: Password is required');

  })


})
