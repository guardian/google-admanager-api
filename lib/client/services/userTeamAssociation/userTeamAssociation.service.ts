import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { UserTeamAssociationAction } from "./userTeamAssociation.action";
import type {
  UserTeamAssociation,
  UserTeamAssociationPage,
} from "./userTeamAssociation.type";
import type { UserTeamAssociationServiceOperations } from "./userTeamAssociationService.interface";

export class UserTeamAssociationService
  implements UserTeamAssociationServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createUserTeamAssociations(
    userTeamAssociations: Array<Partial<UserTeamAssociation>>,
  ): Promise<UserTeamAssociation[]> {
    return this._client.createUserTeamAssociations({ userTeamAssociations });
  }

  async getUserTeamAssociationsByStatement(
    filterStatement: Statement,
  ): Promise<UserTeamAssociationPage> {
    return this._client.getUserTeamAssociationsByStatement({
      filterStatement,
    });
  }

  async performUserTeamAssociationAction(
    userTeamAssociationAction: UserTeamAssociationAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performUserTeamAssociationAction({
      userTeamAssociationAction: {
        attributes: {
          "xsi:type": userTeamAssociationAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateUserTeamAssociations(
    userTeamAssociations: UserTeamAssociation[],
  ): Promise<UserTeamAssociation[]> {
    return this._client.updateUserTeamAssociations({ userTeamAssociations });
  }
}
