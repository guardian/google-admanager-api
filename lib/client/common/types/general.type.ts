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
  type AccountStatus,
  type DeclarationType,
  type DelegationStatus,
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
  approvedDelegationType: DelegationType;
  proposedDelegationType: DelegationType;
  status: DelegationStatus;
  accountStatus: AccountStatus;
  childNetworkCode: string;
  sellerId: string;
  proposedRevenueShareMillipercent: number;
  onboardingTasks: OnboardingTask[];
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
 * Represents the dimensions of an {@link https://developers.google.com/ad-manager/api/reference/v202405/InventoryService.AdUnit AdUnit},
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/ForecastService.LineItem LineItem} or
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeService.Creative Creative}.
 *
 * For interstitial size (out-of-page), native, ignored and fluid size,
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/DaiEncodingProfileService.Size Size} must be 1x1.
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
 * The value of a {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField CustomField} for a particular entity.
 */
export type BaseCustomFieldValue = CustomFieldValue | DropDownCustomFieldValue;

/**
 * The value of a {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField CustomField}
 * that does not have a {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField#dataType CustomField.dataType}
 * of {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType#DROP_DOWN CustomFieldDataType.DROP_DOWN}.
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
   * {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField#dataType CustomField.dataType}
   * of the **CustomField** that this conforms to.
   *
   * | {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType CustomFieldDataType} | {@link https://developers.google.com/ad-manager/api/reference/v202405/OrderService.Value Value} type            |
   * | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType#STRING STRING}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202405/OrderService.TextValue TextValue}        |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType#NUMBER NUMBER}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202405/OrderService.NumberValue NumberValue}    |
   * | {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType#TOGGLE TOGGLE}       | 	{@link https://developers.google.com/ad-manager/api/reference/v202405/OrderService.BooleanValue BooleanValue}  |
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
 * A {@link https://developers.google.com/ad-manager/api/reference/v202405/OrderService.CustomFieldValue CustomFieldValue} for a
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField CustomField} that has a
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomField#dataType CustomField.dataType} of
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldDataType#DROP_DOWN CustomFieldDataType.DROP_DOWN}
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
   * The {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldOption#id ID}
   * of the {@link https://developers.google.com/ad-manager/api/reference/v202405/CustomFieldService.CustomFieldOption CustomFieldOption} for this value.
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
 * {@link https://developers.google.com/ad-manager/api/reference/v202405/ForecastService.LineItem LineItem} in a specified time period.
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
 * Defines the criteria a {@link https://developers.google.com/ad-manager/api/reference/v202405/LineItemService.LineItem LineItem} needs to satisfy to meet its delivery goal.
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
