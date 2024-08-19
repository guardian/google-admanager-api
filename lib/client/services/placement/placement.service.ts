import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { PlacementAction } from './placement.action';
import type { Placement, PlacementPage } from './placement.type';
import type { PlacementServiceOperations } from './placementService.interface';

export class PlacementService implements PlacementServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createPlacements(placements: Placement[]): Promise<Placement[]> {
    return this._client.createPlacements({ placements });
  }

  async getPlacementsByStatement(filterStatement: Statement): Promise<PlacementPage> {
    return this._client.getPlacementsByStatement({
      filterStatement,
    });
  }

  async performPlacementAction(placementAction: PlacementAction, filterStatement: Statement): Promise<UpdateResult> {
    return this._client.performPlacementAction({
      placementAction: {
        attributes: {
          'xsi:type': placementAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async updatePlacements(placements: Placement[]): Promise<Placement[]> {
    return this._client.updatePlacements({ placements });
  }
}
