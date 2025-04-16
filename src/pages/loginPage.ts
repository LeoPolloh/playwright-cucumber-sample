import { baseUrl, routes } from "../config/urlConfig";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  async navigateTo(pageName: string): Promise<void> {
    const path = routes[pageName];

    if (!path) {
      throw new Error(`Route "${pageName}" non definita in urlConfig`);
    }
    await this.page.goto(`${baseUrl}${path}`);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
}
