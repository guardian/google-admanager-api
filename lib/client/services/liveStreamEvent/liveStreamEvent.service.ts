import type { Client } from 'soap';
import type { Statement, UpdateResult } from '../../../common/types';
import type { LiveStreamEventAction } from './liveStreamEvent.action';
import type { LiveStreamEvent, LiveStreamEventPage, Slate, SlateAction, SlatePage } from './liveStreamEvent.type';
import type { LiveStreamEventServiceOperations } from './liveStreamEventService.interface';

export class LiveStreamEventService implements LiveStreamEventServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }
  createLiveStreamEvents(liveStreamEvents: LiveStreamEvent[]): Promise<LiveStreamEvent[]> {
    return this._client.createLiveStreamEvents({ liveStreamEvents });
  }

  createSlates(slates: Slate[]): Promise<Slate[]> {
    return this._client.createSlates({ slates });
  }

  getLiveStreamEventsByStatement(filterStatement: Statement): Promise<LiveStreamEventPage> {
    return this._client.getLiveStreamEventsByStatement({
      filterStatement,
    });
  }

  getSlatesByStatement(statement: Statement): Promise<SlatePage> {
    return this._client.getSlatesByStatement({
      statement,
    });
  }

  performLiveStreamEventAction(
    liveStreamEventAction: LiveStreamEventAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performLiveStreamEventAction({
      liveStreamEventAction: {
        attributes: {
          'xsi:type': liveStreamEventAction.constructor.name,
        },
      },
      filterStatement,
    });
  }
  performSlateAction(slateAction: SlateAction, filterStatement: Statement): Promise<UpdateResult> {
    return this._client.performSlateAction({
      slateAction: {
        attributes: {
          'xsi:type': slateAction,
        },
      },
      filterStatement,
    });
  }

  updateLiveStreamEvents(liveStreamEvents: LiveStreamEvent[]): Promise<LiveStreamEvent[]> {
    return this._client.updateLiveStreamEvents({ liveStreamEvents });
  }

  updateSlates(slates: Slate[]): Promise<Slate[]> {
    return this._client.updateSlates({ slates });
  }
}
