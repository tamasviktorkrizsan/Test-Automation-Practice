import LoginPage from "../po/pages/login.page";


describe("saucedemo", () => {

  beforeEach(async () => {

    await browser.url(process.env.URL);

  })


  it('(UC-3) Test Login form with credentials by passing Username & Password', async () => {


    // GIVEN & WHEN: Type credentials & Click on Login

    await LoginPage.login(process.env.USER,process.env.PASSWORD);

    const elem = await $$('div.app_logo');


    // THEN: validate the title “Swag Labs” in the dashboard

    await expect(elem).toHaveText('Swag Labs');


  })


})
