import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { TeamAction } from "./team.action";
import type { Team, TeamPage } from "./team.type";
import type { TeamServiceOperations } from "./teamService.interface";

export class TeamService implements TeamServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createTeams(teams: Partial<Team>[]): Promise<Team[]> {
    return this._client.createTeams({ teams });
  }

  async getTeamsByStatement(filterStatement: Statement): Promise<TeamPage> {
    return this._client.getTeamsByStatement({
      filterStatement,
    });
  }

  async performTeamAction(
    teamAction: TeamAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performTeamAction({
      teamAction: {
        attributes: {
          "xsi:type": teamAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateTeams(teams: Team[]): Promise<Team[]> {
    return this._client.updateTeams({ teams });
  }
}
