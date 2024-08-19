import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { LineItemCreativeAssociationAction } from "./lineItemCreativeAssociation.action";
import type {
  CreativeNativeStylePreview,
  CreativePushOptions,
  LineItemCreativeAssociation,
  LineItemCreativeAssociationPage,
} from "./lineItemCreativeAssociation.type";
import type { LineItemCreativeAssociationServiceOperations } from "./lineItemCreativeAssociationService.interface";

export class LineItemCreativeAssociationService
  implements LineItemCreativeAssociationServiceOperations
{
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createLineItemCreativeAssociations(
    lineItemCreativeAssociations: LineItemCreativeAssociation[],
  ): Promise<LineItemCreativeAssociation[]> {
    return this._client.createLineItemCreativeAssociations({
      lineItemCreativeAssociations,
    });
  }

  async getPreviewUrl(
    lineItemId: number,
    creativeId: number,
    siteUrl: string,
  ): Promise<string> {
    return this._client.getPreviewUrl({
      lineItemId,
      creativeId,
      siteUrl,
    });
  }

  async getPreviewUrlsForNativeStyles(
    lineItemId: number,
    creativeId: number,
    siteUrl: string,
  ): Promise<CreativeNativeStylePreview[]> {
    return this._client.getPreviewUrlsForNativeStyles({
      lineItemId,
      creativeId,
      siteUrl,
    });
  }

  async getLineItemCreativeAssociationsByStatement(
    filterStatement: Statement,
  ): Promise<LineItemCreativeAssociationPage> {
    return this._client.getLineItemCreativeAssociationsByStatement({
      filterStatement,
    });
  }

  async performLineItemCreativeAssociationAction(
    lineItemCreativeAssociationAction: LineItemCreativeAssociationAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performLineItemCreativeAssociationAction({
      lineItemCreativeAssociationAction: {
        attributes: {
          "xsi:type": lineItemCreativeAssociationAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  async pushCreativeToDevices(
    filterStatement: Statement,
    options: CreativePushOptions,
  ): Promise<UpdateResult> {
    return this._client.pushCreativeToDevices({
      filterStatement,
      options,
    });
  }

  async updateLineItemCreativeAssociations(
    lineItemCreativeAssociations: LineItemCreativeAssociation[],
  ): Promise<LineItemCreativeAssociation[]> {
    return this._client.updateLineItemCreativeAssociations({
      lineItemCreativeAssociations,
    });
  }
}
