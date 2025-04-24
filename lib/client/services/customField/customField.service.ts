import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { CustomFieldAction } from "./customField.action";
import type {
  CustomField,
  CustomFieldOption,
  CustomFieldPage,
} from "./customField.type";
import type { CustomFieldServiceOperations } from "./customFieldService.interface";

export class CustomFieldService implements CustomFieldServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createCustomFieldOptions(
    customFieldOptions: Partial<CustomFieldOption>[],
  ): Promise<CustomFieldOption[]> {
    return this._client.createCustomFieldOptions({ customFieldOptions });
  }

  async createCustomFields(
    customFields: Partial<CustomField>[],
  ): Promise<CustomField[]> {
    return this._client.createCustomFields({ customFields });
  }

  async getCustomFieldOption(
    customFieldOptionId: number,
  ): Promise<CustomFieldOption> {
    return this._client.getCustomFieldsByStatement({
      customFieldOptionId,
    });
  }

  async getCustomFieldsByStatement(
    filterStatement: Statement,
  ): Promise<CustomFieldPage> {
    return this._client.getCustomFieldsByStatement({
      filterStatement,
    });
  }

  async performCustomFieldAction(
    customFieldAction: CustomFieldAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performCustomFieldAction({
      customFieldAction: {
        attributes: {
          "xsi:type": customFieldAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateCustomFieldOptions(
    customFieldOptions: CustomFieldOption[],
  ): Promise<CustomFieldOption[]> {
    return this._client.updateCustomFields({ customFieldOptions });
  }

  async updateCustomFields(
    CustomFields: CustomField[],
  ): Promise<CustomField[]> {
    return this._client.updateCustomFields({ CustomFields });
  }
}
