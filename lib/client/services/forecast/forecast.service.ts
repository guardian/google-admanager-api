import type { Client } from 'soap';
import type {
  AvailabilityForecast,
  AvailabilityForecastOptions,
  DeliveryForecast,
  DeliveryForecastOptions,
  ProspectiveLineItem,
  TrafficDataRequest,
  TrafficDataResponse,
} from './forecast.type';
import type { ForecastServiceOperations } from './forecastService.interface';

export class ForecastService implements ForecastServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }
  getAvailabilityForecast(
    lineItem: ProspectiveLineItem,
    forecastOptions: AvailabilityForecastOptions,
  ): Promise<AvailabilityForecast> {
    return this._client.getAvailabilityForecast({ lineItem, forecastOptions });
  }

  getAvailabilityForecastById(
    lineItemId: number,
    forecastOptions: AvailabilityForecastOptions,
  ): Promise<AvailabilityForecast> {
    return this._client.getAvailabilityForecastById({
      lineItemId,
      forecastOptions,
    });
  }

  getDeliveryForecast(
    lineItems: ProspectiveLineItem[],
    forecastOptions: DeliveryForecastOptions,
  ): Promise<DeliveryForecast> {
    return this._client.getDeliveryForecast({ lineItems, forecastOptions });
  }

  getDeliveryForecastByIds(lineItemIds: number[], forecastOptions: DeliveryForecastOptions): Promise<DeliveryForecast> {
    return this._client.getDeliveryForecastByIds({
      lineItemIds,
      forecastOptions,
    });
  }

  getTrafficData(trafficDataRequest: TrafficDataRequest): Promise<TrafficDataResponse> {
    return this._client.getTrafficData({ trafficDataRequest });
  }
}
