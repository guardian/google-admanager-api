import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { ActivityGroup, ActivityGroupPage } from "./activityGroup.type";
import type { ActivityGroupServiceOperations } from "./activityGroupService.interface";

export class ActivityGroupService implements ActivityGroupServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createActivityGroups(
    activityGroups: Array<Partial<ActivityGroup>>,
  ): Promise<ActivityGroup[]> {
    return this._client.createActivityGroups({ activityGroups });
  }

  async getActivityGroupsByStatement(
    filterStatement: Statement,
  ): Promise<ActivityGroupPage> {
    return this._client.getActivityGroupsByStatement({
      filterStatement,
    });
  }

  async updateActivityGroups(
    activityGroups: ActivityGroup[],
  ): Promise<ActivityGroup[]> {
    return this._client.updateActivityGroups({ activityGroups });
  }
}
