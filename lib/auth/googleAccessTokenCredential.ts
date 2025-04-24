import type { Credential } from "./interfaces";

export class GoogleAccessTokenCredential implements Credential {
  private token: string;

  constructor(access_token: string) {
    this.token = access_token;
  }

  async getToken() {
    return this.token;
  }
}
