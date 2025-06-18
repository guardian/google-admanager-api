import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { CreativeSet, CreativeSetPage } from "./creativeSet.type";
import type { CreativeSetServiceOperations } from "./creativeSetService.interface";

export class CreativeSetService implements CreativeSetServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createCreativeSet(
    creativeSet: Partial<CreativeSet>,
  ): Promise<CreativeSet> {
    return this._client.createCreativeSet({ creativeSet });
  }

  async getCreativeSetsByStatement(
    statement: Statement,
  ): Promise<CreativeSetPage> {
    return this._client.getCreativeSetsByStatement({
      filterStatement,
    });
  }

  async updateCreativeSet(creativeSet: CreativeSet): Promise<CreativeSet> {
    return this._client.updateCreativeSet({ creativeSet });
  }
}
