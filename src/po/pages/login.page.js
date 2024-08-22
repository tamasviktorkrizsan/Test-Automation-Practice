class LoginPage{


  get userInput(){

    return $('[name="user-name"]');

  }


  get passwordInput(){

    return $('[name="password"]');

  }

  get loginButton(){

    return $('[name="login-button"]');

  }


  get errorMessage(){

    return $('[data-test="error"]');

  }


  async login(user,password){

    await this.userInput.setValue(user);

    await this.passwordInput.setValue(password);

    await this.loginButton.click();

  }

  async checkErrorMessage(message){

    await expect(this.errorMessage).toHaveText(message);

  }

}

module.exports = new LoginPage();
