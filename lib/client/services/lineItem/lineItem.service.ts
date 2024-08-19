import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { LineItemAction } from './lineItem.action';
import type { LineItem, LineItemPage } from './lineItem.type';
import type { LineItemServiceOperations } from './lineItemService.interface';

export class LineItemService implements LineItemServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createLineItems(lineItems: LineItem[]): Promise<LineItem[]> {
    return this._client.createLineItems({ lineItems });
  }

  async getLineItemsByStatement(filterStatement: Statement): Promise<LineItemPage> {
    return this._client.getLineItemsByStatement({
      filterStatement,
    });
  }

  async performLineItemAction(lineItemAction: LineItemAction, filterStatement: Statement): Promise<UpdateResult> {
    return this._client.performLineItemAction({
      lineItemAction: {
        attributes: {
          'xsi:type': lineItemAction.constructor.name,
        },
        ...lineItemAction.buildAttributes(),
      },
      filterStatement,
    });
  }

  async updateLineItems(lineItems: LineItem[]): Promise<LineItem[]> {
    return this._client.updateLineItems({ lineItems });
  }
}
