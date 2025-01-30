import { LineItem } from "../../client/services/lineItem/lineItem.type";
import { DateTime } from "./date.type";

/**
 * Represents a LineItem in ad-manager-line-items-jobs repository
 * we would be able to parse the data from the API for extra type safe parsing
 * check https://github.com/guardian/ad-manager-line-items-jobs/pull/13#discussion_r1926802813 for more details
 */
export type LineItemJobs = {
  id: number;
  orderId: number;
  name: string;
  lineItemType: LineItem["lineItemType"];
  startDateTime: DateTime;
  endDateTime?: DateTime;
  status: LineItem["status"];
  costType: LineItem["costType"];
  customTargeting?: LineItem["targeting"]["customTargeting"];
  geoTargeting?: LineItem["targeting"]["geoTargeting"];
  deviceTargeting?: LineItem["targeting"]["technologyTargeting"]["deviceCategoryTargeting"];
  priority: number;
  deliveryGoal: {
    type: LineItem["primaryGoal"]["unitType"];
    number: number;
  };
  lastModified: DateTime;
};
