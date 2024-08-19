import type { Client } from 'soap';
import type { Statement } from '../../../common/types';
import type { ResultSet } from './publisherQueryLanguage.type';
import type { PublisherQueryLanguageServiceOperations } from './publisherQueryLanguageService.interface';

export class PublisherQueryLanguageService implements PublisherQueryLanguageServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async select(selectStatement: Statement): Promise<ResultSet> {
    return this._client.select({
      selectStatement,
    });
  }
}
