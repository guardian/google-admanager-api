import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { SamSession } from "./streamActivityMonitor.type";
import type { StreamActivityMonitorServiceOperations } from "./streamActivityMonitorService.interface";

export class StreamActivityMonitorService
  implements StreamActivityMonitorServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getSamSessionsByStatement(statement: Statement): Promise<SamSession[]> {
    return this._client.getSamSessionsByStatement({
      statement,
    });
  }

  async registerSessionsForMonitoring(sessionIds: string[]): Promise<string[]> {
    return this._client.registerSessionsForMonitoring({ sessionIds });
  }
}
