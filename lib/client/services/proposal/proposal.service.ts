import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { ProposalAction } from "./proposal.action";
import type {
  MarketplaceCommentPage,
  Proposal,
  ProposalPage,
} from "./proposal.type";
import type { ProposalServiceOperations } from "./proposalService.interface";

export class ProposalService implements ProposalServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createProposals(proposals: Array<Partial<Proposal>>): Promise<Proposal[]> {
    return this._client.createProposals({ proposals });
  }

  async getMarketplaceCommentsByStatement(
    filterStatement: Statement,
  ): Promise<MarketplaceCommentPage> {
    return this._client.getMarketplaceCommentsByStatement({
      filterStatement,
    });
  }

  async getProposalsByStatement(
    filterStatement: Statement,
  ): Promise<ProposalPage> {
    return this._client.getProposalsByStatement({
      filterStatement,
    });
  }

  async performProposalAction(
    proposalAction: ProposalAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performProposalAction({
      ProposalAction: {
        attributes: {
          "xsi:type": proposalAction.constructor.name,
        },
        ...proposalAction.buildAttributes(),
      },
      filterStatement,
    });
  }

  async updateProposals(proposals: Proposal[]): Promise<Proposal[]> {
    return this._client.updateProposals({ proposals });
  }
}
