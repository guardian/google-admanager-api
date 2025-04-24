import type { Client } from "soap";
import type { Statement } from "../../../common/types";
import type { Contact, ContactPage } from "./contact.type";
import type { ContactServiceOperations } from "./contactService.interface";

export class ContactService implements ContactServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createContacts(contacts: Partial<Contact>[]): Promise<Contact[]> {
    return this._client.createContacts({ contacts });
  }

  async getContactsByStatement(statement: Statement): Promise<ContactPage> {
    return this._client.getContactsByStatement({
      statement,
    });
  }

  async updateContacts(contacts: Contact[]): Promise<Contact[]> {
    return this._client.updateContacts({ contacts });
  }
}
