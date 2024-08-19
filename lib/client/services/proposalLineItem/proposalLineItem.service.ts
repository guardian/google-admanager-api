import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { ProposalLineItemAction } from './proposalLineItem.action';
import type { ProposalLineItem, ProposalLineItemMakegoodInfo, ProposalLineItemPage } from './proposalLineItem.type';
import type { ProposalLineItemServiceOperations } from './proposalLineItemService.interface';

export class ProposalLineItemService implements ProposalLineItemServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createMakegoods(makegoodInfos: ProposalLineItemMakegoodInfo[]): Promise<ProposalLineItem[]> {
    return this._client.createMakegoods({ makegoodInfos });
  }

  async createProposalLineItems(proposalLineItems: ProposalLineItem[]): Promise<ProposalLineItem[]> {
    return this._client.createProposalLineItems({ proposalLineItems });
  }

  async getProposalLineItemsByStatement(filterStatement: Statement): Promise<ProposalLineItemPage> {
    return this._client.getProposalLineItemsByStatement({
      filterStatement,
    });
  }

  async performProposalLineItemAction(
    proposalLineItemAction: ProposalLineItemAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performProposalLineItemAction({
      proposalLineItemAction: {
        attributes: {
          'xsi:type': proposalLineItemAction.constructor.name,
        },
        ...proposalLineItemAction.buildAttributes(),
      },
      filterStatement,
    });
  }

  async updateProposalLineItems(proposalLineItems: ProposalLineItem[]): Promise<ProposalLineItem[]> {
    return this._client.updateProposalLineItems({ proposalLineItems });
  }
}
