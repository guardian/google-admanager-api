import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { CreativeTemplatePage } from "./creativeTemplate.type";
import type { CreativeTemplateServiceOperations } from "./creativeTemplateService.interface";

export class CreativeTemplateService
  implements CreativeTemplateServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getCreativeTemplatesByStatement(
    filterStatement: Statement,
  ): Promise<CreativeTemplatePage> {
    return this._client.getCreativeTemplatesByStatement({
      filterStatement,
    });
  }
}
