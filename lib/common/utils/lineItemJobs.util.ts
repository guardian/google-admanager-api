import { DateTime } from "../types";
import { LineItemJobs } from "../types/lineItemJobs.type";

/**
 * A utility class that allows you to build lineItemJobs objects from strings to be used in ad-manager-line-items-jobs repository.
 */
export class LineItemParser {
  /**
   * Converts the lineItems string to a LineItem objects
   * @param id The lineItem id.
   * @param orderId The lineItem order id.
   * @param name The lineItem name.
   * @param lineItemType The lineItem type.
   * @param startDateTime The lineItem start date time.
   * @param endDateTime The lineItem end date time.
   * @param status The lineItem status.
   * @param costType The lineItem cost type.
   * @param customTargeting The lineItem custom targeting.
   * @param geoTargeting The lineItem geo targeting.
   * @param deviceTargeting The lineItem device category targeting.
   * @param priority The lineItem priority.
   * @param deliveryGoal The lineItem delivery goal is a customised property for line items jobs
   * @param lastModified The lineItem last modified date time.
   * @returns A AdManager LineItemJobs object.
   */
  public fromString(
    id: string,
    orderId: string,
    name: string,
    lineItemType: string,
    startDateTime: string,
    endDateTime: string | null,
    status: string,
    costType: string,
    customTargeting: string | null,
    geoTargeting: string | null,
    deviceTargeting: string | null,
    priority: string,
    deliveryGoal: string,
    lastModified: string,
  ): LineItemJobs {
    const parsedId: number = JSON.parse(id);
    const parsedOrderId: number = JSON.parse(orderId);
    const parsedName: string = JSON.parse(name);
    const parsedLineItemType: LineItemJobs["lineItemType"] =
      JSON.parse(lineItemType);
    const parsedStartDateTime: DateTime = JSON.parse(startDateTime);
    const parsedEndDateTime: DateTime | undefined = endDateTime
      ? JSON.parse(endDateTime)
      : undefined;
    const parsedStatus: LineItemJobs["status"] = JSON.parse(status);
    const parsedCostType: LineItemJobs["costType"] = JSON.parse(costType);
    const parsedCustomTargeting: LineItemJobs["customTargeting"] | undefined =
      customTargeting ? JSON.parse(customTargeting) : undefined;
    const parsedGeoTargeting: LineItemJobs["geoTargeting"] | undefined =
      geoTargeting ? JSON.parse(geoTargeting) : undefined;
    const parsedDeviceTargeting: LineItemJobs["deviceTargeting"] | undefined =
      deviceTargeting ? JSON.parse(deviceTargeting) : undefined;
    const parsedPriority: number = JSON.parse(priority);
    const parsedDeliveryGoal: LineItemJobs["deliveryGoal"] =
      JSON.parse(deliveryGoal);
    const parsedLastModified: DateTime = JSON.parse(lastModified);
    return {
      id: parsedId,
      orderId: parsedOrderId,
      name: parsedName,
      lineItemType: parsedLineItemType,
      startDateTime: parsedStartDateTime,
      endDateTime: parsedEndDateTime,
      status: parsedStatus,
      costType: parsedCostType,
      customTargeting: parsedCustomTargeting,
      geoTargeting: parsedGeoTargeting,
      deviceTargeting: parsedDeviceTargeting,
      priority: parsedPriority,
      deliveryGoal: parsedDeliveryGoal,
      lastModified: parsedLastModified,
    };
  }
}
