import type { DateTime, PageResult } from "../../../common/types";
import type {
  AppliedLabel,
  BaseCustomFieldValue,
  Money,
} from "../../common/types";
import type { OrderStatus } from "./order.enum";

/**
 * An **`Order`** represents a grouping of individual {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem LineItem}
 * objects, each of which fulfill an ad request from a particular advertiser.
 */
export type Order = {
  /**
   * The unique ID of the **Order**. This value is readonly and is assigned by Google.
   */
  id: number;
  /**
   * The name of the **Order**. This value is required to create an order and has a maximum length of 255 characters.
   */
  name: string;
  /**
   * The date and time at which the **Order** and its associated line items are eligible to begin serving.
   * This attribute is readonly and is derived from the line item of the order which has the earliest
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem#startDateTime LineItem.startDateTime}.
   */
  startDateTime: DateTime;
  /**
   * The date and time at which the **Order** and its associated line items stop being served.
   * This attribute is readonly and is derived from the line item of the order which has the latest
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem#endDateTime LineItem.endDateTime}.
   */
  endDateTime: DateTime;
  /**
   * Specifies whether or not the **Order** has an unlimited end date.
   * This attribute is readonly and is true if any of the order's line items has
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem#unlimitedEndDateTime LineItem.unlimitedEndDateTime} set to true.
   */
  unlimitedEndDateTime: boolean;
  /**
   * The status of the **Order**. This attribute is read-only.
   */
  status: OrderStatus;
  /**
   * The archival status of the **Order**. This attribute is readonly.
   */
  isArchived: boolean;

  /**
   * Provides any additional notes that may annotate the **Order**. This attribute is optional and has a maximum length of 65,535 characters.
   */
  notes: string;

  /**
   * An arbitrary ID to associate to the **Order**, which can be used as a key to an external system. This value is optional.
   */
  externalOrderId: number;

  /**
   * The purchase order number for the **Order**. This value is optional and has a maximum length of 63 characters.
   */
  poNumber: string;

  /**
   * The ISO currency code for the currency used by the **Order**. This value is read-only and is the network's currency code.
   */
  currencyCode: string;

  /**
   * The unique ID of the {@link https://developers.google.com/ad-manager/api/reference/v202505/CompanyService.Company Company},
   * which is of type {@link https://developers.google.com/ad-manager/api/reference/v202505/CompanyService.Company.Type#ADVERTISER Company.Type.ADVERTISER},
   * to which this order belongs. This attribute is required.
   */
  advertiserId: number;

  /**
   * List of IDs for advertiser contacts of the order.
   */
  advertiserContactIds: number[];

  /**
   * The unique ID of the {@link https://developers.google.com/ad-manager/api/reference/v202505/CompanyService.Company Company},
   * which is of type {@link https://developers.google.com/ad-manager/api/reference/v202505/CompanyService.Company.Type#AGENCY Company.Type.AGENCY},
   * with which this order is associated. This attribute is optional.
   */
  agencyId: number;

  /**
   * List of IDs for agency contacts of the order.
   */
  agencyContactIds: number[];

  /**
   * The unique ID of the {@link https://developers.google.com/ad-manager/api/reference/v202505/UserService.User User} who created the **Order** on behalf of the advertiser. This value is readonly and is assigned by Google.
   */
  creatorId: number;

  /**
   * The unique ID of the {@link https://developers.google.com/ad-manager/api/reference/v202505/UserService.User User} responsible for trafficking the **Order**. This value is required for creating an order.
   */
  traffickerId: number;

  /**
   * The IDs of the secondary traffickers associated with the order. This value is optional.
   */
  secondaryTraffickerIds: number[];

  /**
   * The unique ID of the {@link https://developers.google.com/ad-manager/api/reference/v202505/UserService.User User} responsible for the sales of the **Order**. This value is optional.
   */
  salespersonId: number;

  /**
   * The IDs of the secondary salespeople associated with the order. This value is optional.
   */
  secondarySalespersonIds: number[];

  /**
   * Total impressions delivered for all line items of this **Order**. This value is read-only and is assigned by Google.
   */
  totalImpressionsDelivered: number;

  /**
   * Total clicks delivered for all line items of this **Order**. This value is read-only and is assigned by Google.
   */
  totalClicksDelivered: number;

  /**
   * Total viewable impressions delivered for all line items of this **Order**.
   * This value is read-only and is assigned by Google.
   * Starting in v201705, this will be null when the order does not have line items trafficked against a viewable impressions goal.
   */
  totalViewableImpressionsDelivered: number;

  /**
   * Total budget for all line items of this **Order**.
   * This value is a readonly field assigned by Google and is calculated from the associated
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem#costPerUnit LineItem.costPerUnit} values.
   */
  totalBudget: Money;

  /**
   * The set of labels applied directly to this order.
   */
  appliedLabels?: AppliedLabel[];

  /**
   * Contains the set of labels applied directly to the order as well as those inherited from the company that owns the order.
   * If a label has been negated, only the negated label is returned. This field is readonly and is assigned by Google.
   */
  effectiveAppliedLabels?: AppliedLabel[];

  /**
   * The application which modified this order. This attribute is read only and is assigned by Google.
   */
  lastModifiedByApp: string;

  /**
   * Specifies whether or not the **Order** is a programmatic order. This value is optional and defaults to false.
   */
  isProgrammatic: boolean;

  /**
   * The IDs of all teams that this order is on directly.
   */
  appliedTeamIds: number[];

  /**
   * The date and time this order was last modified.
   */
  lastModifiedDateTime: DateTime;

  /**
   * The values of the custom fields associated with this order.
   */
  customFieldValues: BaseCustomFieldValue[];
};

/**
 * Captures a page of {@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.Order Order} objects.
 */
export type OrderPage = PageResult<Order>;
