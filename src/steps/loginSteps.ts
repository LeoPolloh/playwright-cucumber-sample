import { Given } from '@cucumber/cucumber';
import { getCredentials } from '../support/credentialManager';
import { LoginPage } from '../pages/loginPage';


Given("User logins as {string} in {string} env", async function (userType, env) {
    let loginPage = new LoginPage(this.page)
    const credentials = getCredentials(env, userType);
    await loginPage.navigate(loginPage.baseUrl);
    await loginPage.login(credentials.username, credentials.password);
});
