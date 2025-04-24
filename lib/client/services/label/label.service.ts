import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { LabelAction } from "./label.action";
import type { LabelServiceOperations } from "./label.interface";
import type { Label, LabelPage } from "./label.type";

export class LabelService implements LabelServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createLabels(labels: Partial<Label>[]): Promise<Label[]> {
    return this._client.createLabels({ labels });
  }

  async getLabelsByStatement(filterStatement: Statement): Promise<LabelPage> {
    return this._client.getLabelsByStatement({
      filterStatement,
    });
  }

  async performLabelAction(
    labelAction: LabelAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performLabelAction({
      labelAction: {
        attributes: {
          "xsi:type": labelAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateLabels(labels: Label[]): Promise<Label[]> {
    return this._client.updateLabels({ labels });
  }
}
