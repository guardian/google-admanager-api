import {
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Describe,
} from "superstruct";
import { TimeUnitEnum, type TimeUnit } from "../../../common/enums";
import { ValueStruct, type Value } from "../../../common/types";
import {
  GoalTypeEnum,
  UnitTypeEnum,
  InvitationStatus,
  type AccountStatus,
  type DeclarationType,
  type DelegationType,
  type GoalType,
  type OnboardingTask,
  type UnitType,
} from "../enums";

/**
 * Represents a set of declarations about what (if any) third party companies are associated with a given creative.
 *
 * This can be set at the network level, as a default for all creatives, or overridden for a particular creative.
 *
 */
export type ThirdPartyDataDeclaration = {
  declarationType: DeclarationType;
  thirdPartyCompanyIds: number[];
};

export type ChildPublisher = {
  /**
   * Type of delegation the parent has been approved to have over the child.
   * This field is read-only, and set to the proposed delegation type value proposedDelegationType upon approval by the child network.
   * The value remains null if the parent network has not been approved.
   */
  approvedDelegationType: DelegationType;
  /**
   * Type of delegation the parent has proposed to have over the child, pending approval of the child network.
   * Set the value of this field to the delegation type you intend this network to have over the child network.
   * Upon approval by the child network, its value is copied to approvedDelegationType, and proposedDelegationType is set to null.
   */
  proposedDelegationType: DelegationType;
  /**
   * Invitation status of the delegation relationship between parent and child. This field is read-only.
   */
  readonly invitationStatus: InvitationStatus;
  /**
   * Status of the child publisher's Ad Manager account based on ChildPublisher#status as well as Google's policy verification results.
   * This field is read-only.
   */
  readonly accountStatus: AccountStatus;
  /**
   * Network code of child network.
   */
  childNetworkCode: string;
  /**
   * The child publisher's seller ID, as specified in the parent publisher's sellers.json file.
   * This field is only relevant for Manage Inventory child publishers
   */
  sellerId: string;
  /**
   * The proposed revenue share that the parent publisher will receive in millipercentage (values 0 to 100000) for Manage Account proposals. For example, 15% is 15000 millipercent.
   * For updates, this field is read-only. Use company actions to propose new revenue share agreements for existing MCM children. This field is ignored for Manage Inventory proposals.
   */
  proposedRevenueShareMillipercent: number;
  /**
   * The child publisher's pending onboarding tasks.
   * This will only be populated if the child publisher's AccountStatus is PENDING_GOOGLE_APPROVAL.
   * This attribute is read-only.
   */
  readonly onboardingTasks: OnboardingTask[];
};

/**
 * Represents a money amount.
 */
export type Money = {
  /**
   * Three letter currency code in string format.
   */
  currencyCode: string;
  /**
   * Money values are always specified in terms of micros which are a millionth of the fundamental currency unit. For US dollars, $1 is 1,000,000 micros.
   */
  microAmount: number;
};

/**
 * Represents a Money struct.
 */
export const MoneyStruct: Describe<Money> = object({
  currencyCode: string(),
  microAmount: number(),
});

/**
 * Represents the dimensions of an {@link https://developers.google.com/ad-manager/api/reference/v202505/InventoryService.AdUnit AdUnit},
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem LineItem} or
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeService.Creative Creative}.
 *
 * For interstitial size (out-of-page), native, ignored and fluid size,
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/DaiEncodingProfileService.Size Size} must be 1x1.
 */
export type Size = {
  /**
   *  The width of the AdUnit, LineItem or Creative.
   */
  width: number;
  /**
   * The height of the AdUnit, LineItem or Creative.
   */
  height: number;
  /**
   * Whether this size represents an aspect ratio.
   */
  isAspectRatio: boolean;
};

/**
 * Represents a Size struct.
 */
export const SizeStruct: Describe<Size> = object({
  width: number(),
  height: number(),
  isAspectRatio: boolean(),
});

/**
 * The value of a {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField CustomField} for a particular entity.
 */
export type BaseCustomFieldValue = CustomFieldValue | DropDownCustomFieldValue;

/**
 * The value of a {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField CustomField}
 * that does not have a {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField#dataType CustomField.dataType}
 * of {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType#DROP_DOWN CustomFieldDataType.DROP_DOWN}.
 */
type CustomFieldValue = {
  /**
   * Id of the **CustomField** to which this value belongs. This attribute is required.
   */
  customFieldId: number;

  attributes: {
    "xsi:type": "CustomFieldValue";
  };
  /**
   * The value for this field. The appropriate type of **Value** is determined by the
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField#dataType CustomField.dataType}
   * of the **CustomField** that this conforms to.
   *
   * | {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType CustomFieldDataType} | {@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.Value Value} type            |
   * | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType#STRING STRING}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.TextValue TextValue}        |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType#NUMBER NUMBER}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.NumberValue NumberValue}    |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType#TOGGLE TOGGLE}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.BooleanValue BooleanValue}  |
   *
   */
  value: Value;
};

/**
 * Represents a CustomFieldValue struct.
 */
export const CustomFieldValueStruct: Describe<CustomFieldValue> = object({
  customFieldId: number(),
  attributes: object({ "xsi:type": literal("CustomFieldValue") }),
  value: ValueStruct,
});

/**
 * A {@link https://developers.google.com/ad-manager/api/reference/v202505/OrderService.CustomFieldValue CustomFieldValue} for a
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField CustomField} that has a
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomField#dataType CustomField.dataType} of
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldDataType#DROP_DOWN CustomFieldDataType.DROP_DOWN}
 */
type DropDownCustomFieldValue = {
  /**
   * Id of the **CustomField** to which this value belongs. This attribute is required.
   */
  customFieldId: number;

  attributes: {
    "xsi:type": "DropDownCustomFieldValue";
  };
  /**
   * The {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldOption#id ID}
   * of the {@link https://developers.google.com/ad-manager/api/reference/v202505/CustomFieldService.CustomFieldOption CustomFieldOption} for this value.
   */
  customFieldOptionId: number;
};

/**
 * Represents a DropDownCustomFieldValue struct.
 */
export const DropDownCustomFieldValueStruct: Describe<DropDownCustomFieldValue> =
  object({
    customFieldId: number(),
    attributes: object({ "xsi:type": literal("DropDownCustomFieldValue") }),
    customFieldOptionId: number(),
  });

/**
 * Represents a limit on the number of times a single viewer can be exposed to the same
 * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem LineItem} in a specified time period.
 */
export type FrequencyCap = {
  /**
   * The maximum number of impressions than can be served to a user within a specified time period.
   */
  maxImpressions: number;
  /**
   * The number of FrequencyCap#timeUnit to represent the total time period.
   */
  numTimeUnits: number;
  /**
   * The unit of time for specifying the time period.
   */
  timeUnit: TimeUnit;
};

/**
 * Represents a FrequencyCap struct.
 */
export const FrequencyCapStruct: Describe<FrequencyCap> = object({
  maxImpressions: number(),
  numTimeUnits: number(),
  timeUnit: TimeUnitEnum,
});

/**
 * Defines the criteria a {@link https://developers.google.com/ad-manager/api/reference/v202505/LineItemService.LineItem LineItem} needs to satisfy to meet its delivery goal.
 */
export type Goal = {
  /**
   * The type of the goal for the LineItem. It defines the period over which the goal for LineItem should be reached.
   */
  goalType: GoalType;
  /**
   * The type of the goal unit for the LineItem.
   */
  unitType: UnitType;
  /**
   * If this is a primary goal, it represents the number or percentage of impressions or clicks that will be reserved for the LineItem. If the line item is of type LineItemType.SPONSORSHIP, it represents the percentage of available impressions reserved. If the line item is of type LineItemType.BULK or LineItemType.PRICE_PRIORITY, it represents the number of remaining impressions reserved. If the line item is of type LineItemType.NETWORK or LineItemType.HOUSE, it represents the percentage of remaining impressions reserved.
   *
   * If this is a secondary goal, it represents the number of impressions or conversions that the line item will stop serving at if reached. For valid line item types, see LineItem.secondaryGoals.
   */
  units: number;
};

/**
 * Represents a Goal struct.
 */
export const GoalStruct: Describe<Goal> = object({
  goalType: GoalTypeEnum,
  unitType: UnitTypeEnum,
  units: number(),
});

//Superstruct weirdness means we can't use the Describe utility in here.
export const BaseCustomFieldValueStruct = union([
  CustomFieldValueStruct,
  DropDownCustomFieldValueStruct,
]);
