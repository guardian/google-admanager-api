import type { Client } from 'soap';
import type { Statement } from '../../../common/types';
import type { SuggestedAdUnitAction } from './suggestedAdUnit.action';
import type { SuggestedAdUnitPage, SuggestedAdUnitUpdateResult } from './suggestedAdUnit.type';
import type { SuggestedAdUnitServiceOperations } from './suggestedAdUnitService.interface';

export class SuggestedAdUnitService implements SuggestedAdUnitServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getSuggestedAdUnitsByStatement(filterStatement: Statement): Promise<SuggestedAdUnitPage> {
    return this._client.getSuggestedAdUnitsByStatement({
      filterStatement,
    });
  }

  async performSuggestedAdUnitAction(
    suggestedAdUnitAction: SuggestedAdUnitAction,
    filterStatement: Statement,
  ): Promise<SuggestedAdUnitUpdateResult> {
    return this._client.performSuggestedAdUnitAction({
      suggestedAdUnitAction: {
        attributes: {
          'xsi:type': suggestedAdUnitAction.constructor.name,
        },
      },
      filterStatement,
    });
  }
}
