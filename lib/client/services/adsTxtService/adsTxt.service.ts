import type { Client } from "soap";
import type { AdsTxtServiceOperations } from "./adsTxtService.interface";

export class AdsTxtService implements AdsTxtServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  getMcmSupplyChainDiagnosticsDownloadUrl(): Promise<string> {
    return this._client.getMcmSupplyChainDiagnosticsDownloadUrl();
  }
}
