const { $, expect } = require("@wdio/globals");
const Page = require("./page");

const errorLockedOutUser = (dynamicMessage) =>
  $(`//h3[text()="${dynamicMessage}"]`);

const element = {
  inputUsername: $("#user-name"),
  inputPassword: $("#password"),
  btnLogin: $("#login-button"),
  errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`),
};

class LoginPage extends Page {
  async login(username) {
    await element.inputUsername.waitForDisplayed({ timeout: 2500 });
    await element.inputUsername.setValue(username);
    await element.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    await element.btnLogin.click();
  }

  async validateLockedOutUserError(dynamicMessage) {
    await errorLockedOutUser(dynamicMessage).waitForDisplayed({
      timeout: 2500,
    });
    await expect(errorLockedOutUser(dynamicMessage)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
