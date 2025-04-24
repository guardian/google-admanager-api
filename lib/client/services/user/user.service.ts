import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { UserAction } from "./user.action";
import type { Role, User, UserPage } from "./user.type";
import type { UserServiceOperations } from "./userService.interface";

export class UserService implements UserServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createUsers(users: Array<Partial<User>>): Promise<User[]> {
    return this._client.createUsers({ users });
  }

  async getAllRoles(): Promise<Role[]> {
    return this._client.getAllRolesAsync();
  }

  async getCurrentUser(): Promise<User> {
    return this._client.getCurrentUser();
  }

  async getUsersByStatement(filterStatement: Statement): Promise<UserPage> {
    return this._client.getUsersByStatement({
      filterStatement,
    });
  }

  async performUserAction(
    userAction: UserAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performUserAction({
      userAction: {
        attributes: {
          "xsi:type": userAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateUsers(users: User[]): Promise<User[]> {
    return this._client.updateUsers({ users });
  }
}
