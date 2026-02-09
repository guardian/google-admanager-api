import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { LineItemTemplatePage } from "./lineItemTemplate.type";
import type { LineItemTemplateServiceOperations } from "./lineItemTemplateService.interface";

export class LineItemTemplateService implements LineItemTemplateServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getLineItemTemplatesByStatement(
    filterStatement: Statement,
  ): Promise<LineItemTemplatePage> {
    return this._client.getLineItemTemplatesByStatement({
      filterStatement,
    });
  }
}
