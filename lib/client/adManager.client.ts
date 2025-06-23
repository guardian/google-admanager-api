import type { SACredential } from "../auth";
import type { SERVICE_MAP } from "../common/constants";
import {
  DEFAULT_APPLICATION_NAME,
  DEFAULT_API_VERSION,
} from "../common/constants";
import type { ImportClass } from "../common/types";
import { GoogleSoapService } from "./googleSoap.service";

export class AdManagerClient {
  private networkCode: number;
  private credential: SACredential;
  protected applicationName: string;
  protected apiVersion: string;
  logRequests = true;
  logResponses = true;

  constructor(
    networkCode: number,
    credential: SACredential,
    applicationName?: string,
    apiVersion?: string,
  ) {
    this.networkCode = networkCode;
    this.credential = credential;
    this.applicationName = applicationName || DEFAULT_APPLICATION_NAME;
    this.apiVersion = apiVersion || DEFAULT_API_VERSION;
  }

  async getService<T extends keyof typeof SERVICE_MAP>(
    serviceName: T,
  ): Promise<ImportClass<typeof SERVICE_MAP, T>> {
    try {
      const token = await this.credential.getToken();

      if (!token) {
        throw new Error("Token is not available");
      }

      return await new GoogleSoapService<T>(serviceName, {
        networkCode: this.networkCode,
        token: token,
        applicationName: this.applicationName,
        apiVersion: this.apiVersion,
      }).createClient(this.logRequests, this.logResponses);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
