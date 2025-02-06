import { GoogleAuth } from "google-auth-library";
import { SCOPE } from "../common/constants";
import type { Credential } from "./interfaces";

export class GoogleSAFileCredential implements Credential {
  private _keyFile: string;
  protected auth?: GoogleAuth;

  /**
   *
   * @param keyFile Path to a .json, .pem, or .p12 key file
   */
  constructor(keyFile: string) {
    if (!keyFile) {
      throw new Error("'keyFile' must be set when using service account flow.");
    }

    this._keyFile = keyFile;

    this.build();
  }

  private async build() {
    this.auth = new GoogleAuth({
      keyFile: this._keyFile,
      scopes: SCOPE,
    });
  }

  async getToken() {
    return await this.auth?.getAccessToken();
  }
}
