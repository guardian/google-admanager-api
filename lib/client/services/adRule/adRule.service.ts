import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { AdRuleAction } from "./adRule.action";
import type {
  AdRule,
  AdRulePage,
  BreakTemplate,
  BreakTemplatePage,
} from "./adRule.type";
import type { AdRuleServiceOperations } from "./adRuleService.interface";
import type { AdSpot, AdSpotPage } from "./adSpot.type";

export class AdRuleService implements AdRuleServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  createAdRules(adRules: Array<Partial<AdRule>>): Promise<AdRule[]> {
    return this._client.createAdRules({ adRules });
  }

  createAdSpots(adSports: Array<Partial<AdSpot>>): Promise<AdSpot[]> {
    return this._client.createAdSpots({ adSports });
  }

  createBreakTemplates(
    breakTemplate: Array<Partial<BreakTemplate>>,
  ): Promise<BreakTemplate[]> {
    return this._client.createBreakTemplates({ breakTemplate });
  }

  getAdRulesByStatement(statement: Statement): Promise<AdRulePage> {
    return this._client.getAdRulesByStatement({
      statement,
    });
  }

  getAdSpotsByStatement(filterStatement: Statement): Promise<AdSpotPage> {
    return this._client.getAdSpotsByStatement({
      filterStatement,
    });
  }

  getBreakTemplatesByStatement(
    filterStatement: Statement,
  ): Promise<BreakTemplatePage> {
    return this._client.getBreakTemplatesByStatement({
      filterStatement,
    });
  }

  performAdRuleAction(
    adRuleAction: AdRuleAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performAdRuleAction({
      adRuleAction: {
        attributes: {
          "xsi:type": adRuleAction.constructor.name,
        },
      },
      filterStatement,
    });
  }

  updateAdRules(adRules: AdRule[]): Promise<AdRule[]> {
    return this._client.updateAdRules({ adRules });
  }

  updateAdSpots(adSports: AdSpot[]): Promise<AdSpot[]> {
    return this._client.updateAdSpots({ adSports });
  }

  updateBreakTemplates(
    breakTemplate: BreakTemplate[],
  ): Promise<BreakTemplate[]> {
    return this._client.updateBreakTemplates({ breakTemplate });
  }
}
