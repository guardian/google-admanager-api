import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { DaiAuthenticationKeyAction } from "./daiAuthenticationKey.action";
import type {
  DaiAuthenticationKey,
  DaiAuthenticationKeyPage,
} from "./daiAuthenticationKey.type";
import type { DaiAuthenticationKeyServiceOperations } from "./daiAuthenticationKeyService.interface";

export class DaiAuthenticationKeyService
  implements DaiAuthenticationKeyServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createDaiAuthenticationKeys(
    daiAuthenticationKeys: Partial<DaiAuthenticationKey>[],
  ): Promise<DaiAuthenticationKey[]> {
    return this._client.createDaiAuthenticationKeys({ daiAuthenticationKeys });
  }

  async getDaiAuthenticationKeysByStatement(
    filterStatement: Statement,
  ): Promise<DaiAuthenticationKeyPage> {
    return this._client.getDaiAuthenticationKeysByStatement({
      filterStatement,
    });
  }

  async performDaiAuthenticationKeyAction(
    daiAuthenticationKeyAction: DaiAuthenticationKeyAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performDaiAuthenticationKeyAction({
      daiAuthenticationKeyAction: {
        attributes: {
          "xsi:type": daiAuthenticationKeyAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateDaiAuthenticationKeys(
    daiAuthenticationKeys: DaiAuthenticationKey[],
  ): Promise<DaiAuthenticationKey[]> {
    return this._client.updateDaiAuthenticationKeys({ daiAuthenticationKeys });
  }
}
