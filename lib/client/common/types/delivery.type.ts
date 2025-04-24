import { array, type Describe, number, object } from "superstruct";

/**
 * Indicates the delivery performance of the LineItem.
 */
export type DeliveryIndicator = {
  /**
   * How much the LineItem was expected to deliver as a percentage of LineItem.primaryGoal.
   */
  expectedDeliveryPercentage: number;
  /**
   * How much the line item actually delivered as a percentage of LineItem.primaryGoal.
   */
  actualDeliveryPercentage: number;
};

/**
 * Represents a DeliveryIndicator struct.
 */
export const DeliveryIndicatorStruct: Describe<DeliveryIndicator> = object({
  expectedDeliveryPercentage: number(),
  actualDeliveryPercentage: number(),
});

/**
 * Holds the number of clicks or impressions, determined by LineItem.costType, delivered for a single line item for the last 7 days
 */
export type DeliveryData = {
  /**
   *  Clicks or impressions delivered for the last 7 days.
   */
  units: number[];
};

/**
 * Represents a DeliveryData struct.
 */
export const DeliveryDataStruct: Describe<DeliveryData> = object({
  units: array(number()),
});
