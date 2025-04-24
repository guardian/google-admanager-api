import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { CompanyAction } from "./company.action";
import type { Company, CompanyPage } from "./company.type";
import type { CompanyServiceOperations } from "./companyService.interface";

export class CompanyService implements CompanyServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createCompanies(companies: Array<Partial<Company>>): Promise<Company[]> {
    return this._client.createCompanies({ companies });
  }

  async getCompaniesByStatement(
    filterStatement: Statement,
  ): Promise<CompanyPage> {
    return this._client.getCompaniesByStatement({
      filterStatement,
    });
  }

  async performCompanyAction(
    companyAction: CompanyAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    console.log(companyAction.constructor.name);

    return this._client.performCompanyAction({
      companyAction: {
        attributes: {
          "xsi:type": companyAction.constructor.name,
        },
        ...companyAction.buildAttributes(),
      },
      statement: filterStatement,
    });
  }

  async updateCompanies(companies: Company[]): Promise<Company[]> {
    return this._client.updateCompanies({ companies });
  }
}
