import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { CreativeReviewAction } from './creativeReview.action';
import type { CreativeReviewPage } from './creativeReview.type';
import type { CreativeReviewServiceOperations } from './creativeReviewService.interface';

export class CreativeReviewService implements CreativeReviewServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getCreativeReviewsByStatement(filterStatement: Statement): Promise<CreativeReviewPage> {
    return this._client.getCreativeReviewsByStatement({
      filterStatement,
    });
  }

  async performCreativeReviewAction(
    creativeReviewAction: CreativeReviewAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performCreativeReviewAction({
      creativeReviewAction: {
        attributes: {
          'xsi:type': creativeReviewAction.constructor.name,
        },
      },
      filterStatement,
    });
  }
}
