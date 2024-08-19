import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { SiteAction } from './site.action';
import type { Site, SitePage } from './site.type';
import type { SiteServiceOperations } from './siteService.interface';

export class SiteService implements SiteServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createSites(sites: Site[]): Promise<Site[]> {
    return this._client.createSites({ sites });
  }

  async getSitesByStatement(filterStatement: Statement): Promise<SitePage> {
    return this._client.getSitesByStatement({
      filterStatement,
    });
  }

  async performSiteAction(siteAction: SiteAction, filterStatement: Statement): Promise<UpdateResult> {
    return this._client.performSiteAction({
      siteAction: {
        attributes: {
          'xsi:type': siteAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updateSites(sites: Site[]): Promise<Site[]> {
    return this._client.updateSites({ sites });
  }
}
