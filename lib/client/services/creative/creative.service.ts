import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { CreativeAction } from "./creative.action";
import type { Creative, CreativePage } from "./creative.type";
import type { CreativeServiceOperations } from "./creativeService.interface";

export class CreativeService implements CreativeServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createCreatives(creatives: Partial<Creative>[]): Promise<Creative[]> {
    return this._client.createCreatives({ creatives });
  }

  async getCreativesByStatement(
    filterStatement: Statement,
  ): Promise<CreativePage> {
    return this._client.getCreativesByStatement({
      filterStatement,
    });
  }

  async performCreativeAction(
    creativeAction: CreativeAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performCreativeAction({
      creativeAction: {
        attributes: {
          "xsi:type": creativeAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateCreatives(creatives: Creative[]): Promise<Creative[]> {
    return this._client.updateCreatives({ creatives });
  }
}
