import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type {
  TargetingPreset,
  TargetingPresetPage,
} from "./targetingPresent.type";
import type { TargetingPresetServiceOperations } from "./targetingPresentService.interface";

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

  async createTargetingPresets(
    targetingPresets: TargetingPreset[],
  ): Promise<TargetingPreset[]> {
    return this._client.createTargetingPresets({ targetingPresets });
  }
}
