import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { TargetingPresetPage } from "./targetingPreset.type";
import type { TargetingPresetServiceOperations } from "./targetingPresetService.interface";

export class TargetingPresetService
  implements TargetingPresetServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }
  async getTargetingPresetsByStatement(
    filterStatement: Statement,
  ): Promise<TargetingPresetPage> {
    return this._client.getTargetingPresetsByStatement({
      filterStatement,
    });
  }

  async performTargetingPresetAction(
    targetingPresetAction: unknown, // FIXME
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performTargetingPresetAction(
      targetingPresetAction,
      filterStatement,
    );
  }
}
