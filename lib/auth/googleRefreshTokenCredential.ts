import { OAuth2Client } from "google-auth-library";
import type { Credential } from "./interfaces";

export class GoogleRefreshTokenCredential implements Credential {
  private client: OAuth2Client;

  constructor(client_id: string, client_secret: string, refresh_token: string) {
    this.client = new OAuth2Client(client_id, client_secret);

    this.client.setCredentials({
      refresh_token,
    });
  }

  async getToken() {
    const { token } = await this.client.getAccessToken();

    return token;
  }
}
