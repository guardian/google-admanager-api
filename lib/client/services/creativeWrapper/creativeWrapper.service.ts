import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { CreativeWrapperAction } from "./creativeWrapper.action";
import type {
  CreativeWrapper,
  CreativeWrapperPage,
} from "./creativeWrapper.type";
import type { CreativeWrapperServiceOperations } from "./creativeWrapperService.interface";

export class CreativeWrapperService
  implements CreativeWrapperServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createCreativeWrappers(
    creativeWrappers: Array<Partial<CreativeWrapper>>,
  ): Promise<CreativeWrapper[]> {
    return this._client.createCreativeWrappers({ creativeWrappers });
  }

  async getCreativeWrappersByStatement(
    filterStatement: Statement,
  ): Promise<CreativeWrapperPage> {
    return this._client.getCreativeWrappersByStatement({
      filterStatement,
    });
  }

  async performCreativeWrapperAction(
    creativeWrapperAction: CreativeWrapperAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performCreativeWrapperAction({
      creativeWrapperAction: {
        attributes: {
          "xsi:type": creativeWrapperAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateCreativeWrappers(
    creativeWrappers: CreativeWrapper[],
  ): Promise<CreativeWrapper[]> {
    return this._client.updateCreativeWrappers({ creativeWrappers });
  }
}
