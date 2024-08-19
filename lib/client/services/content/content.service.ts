import type { Client } from 'soap';
import type { Statement } from '../../../common/types';
import type { ContentPage } from './content.type';
import type { ContentServiceOperations } from './contentService.interface';

export class ContentService implements ContentServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getContentByStatement(statement: Statement): Promise<ContentPage> {
    return this._client.getContentByStatement({
      statement,
    });
  }
}
