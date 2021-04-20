import { login } from "src/selectors/login";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public login = (username: string, password: string) => {
    this.inputUsername().setValue(username);
    this.inputPassword().setValue(password);
    this.btnSubmit().click();
  };

  /**
   * overwrite specifc options to adapt it to page object
   */
  public open = () => {
    return super.open("login");
  };

  private inputUsername = () => $(login.txt.username);
  private inputPassword = () => $(login.txt.password);
  private btnSubmit = () => $(login.btn.submit);
}

export default new LoginPage();
