import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { DaiEncodingProfileAction } from "./daiEncodingProfile.action";
import type {
  DaiEncodingProfile,
  DaiEncodingProfilePage,
} from "./daiEncodingProfile.type";
import type { DaiEncodingProfileServiceOperations } from "./daiEncodingProfileService.interface";

export class DaiEncodingProfileService
  implements DaiEncodingProfileServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createDaiEncodingProfiles(
    daiEncodingProfiles: Array<Partial<DaiEncodingProfile>>,
  ): Promise<DaiEncodingProfile[]> {
    return this._client.createDaiEncodingProfiles({ daiEncodingProfiles });
  }

  async getDaiEncodingProfilesByStatement(
    filterStatement: Statement,
  ): Promise<DaiEncodingProfilePage> {
    return this._client.getDaiEncodingProfilesByStatement({
      filterStatement,
    });
  }

  async performDaiEncodingProfileAction(
    daiEncodingProfileAction: DaiEncodingProfileAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performDaiEncodingProfileAction({
      daiEncodingProfileAction: {
        attributes: {
          "xsi:type": daiEncodingProfileAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateDaiEncodingProfiles(
    daiEncodingProfiles: DaiEncodingProfile[],
  ): Promise<DaiEncodingProfile[]> {
    return this._client.updateDaiEncodingProfiles({ daiEncodingProfiles });
  }
}
