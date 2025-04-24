import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { Activity, ActivityPage } from "./activity.type";
import type { ActivityServiceOperations } from "./activityService.interface";

export class ActivityService implements ActivityServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createActivities(activities: Array<Partial<Activity>>): Promise<Activity[]> {
    return this._client.createActivities({ activities });
  }

  async getActivitiesByStatement(
    filterStatement: Statement,
  ): Promise<ActivityPage> {
    return this._client.getActivitiesByStatement({
      filterStatement,
    });
  }

  async updateActivities(activities: Activity[]): Promise<Activity[]> {
    return this._client.updateActivities({ activities });
  }
}
