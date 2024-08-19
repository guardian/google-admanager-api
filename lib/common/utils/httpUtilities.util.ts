import type { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import axios from "axios";
import { ArgumentNullException } from "../handlers";

/**
 * Utility class for various HTTP tasks.
 */
export class HttpUtilities {
  static buildRequest(
    url: string,
    method: Method | string,
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    if (config == null) {
      throw new ArgumentNullException("config");
    }

    config.method = method;
    config.url = url;
    config.responseType = "stream";

    return axios.request(config);
  }
}
