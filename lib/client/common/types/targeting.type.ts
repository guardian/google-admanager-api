import {
  array,
  boolean,
  enums,
  literal,
  nullable,
  number,
  object,
  optional,
  string,
  type Describe,
} from "superstruct";
import { DayOfWeekEnum, type DayOfWeek } from "../../../common/enums";
import {
  DateTimeRangeStruct,
  TimeOfDayStruct,
  type DateTimeRange,
  type TimeOfDay,
} from "../../../common/types";
import {
  DeliveryTimeZoneEnum,
  RequestPlatformEnum,
  type DeliveryTimeZone,
  type RequestPlatform,
} from "../enums";
import {
  CustomCriteriaSetStruct,
  type CustomCriteriaSet,
} from "./customCriteria.type";
import {
  VideoPositionTargetingStruct,
  type VideoPositionTargeting,
} from "./videoPosition.type";
import { Size } from "./general.type";

/**
 * A {@link https://developers.google.com/ad-manager/api/reference/v202505/AdjustmentService.Location Location} represents a geographical entity that can be targeted.
 * If a location type is not available because of the API version you are using,
 * the location will be represented as just the base class, otherwise it will be sub-classed correctly.
 */
type Location = {
  /**
   * Uniquely identifies each **Location**.
   */
  id: number;
  /**
   * The location type for this geographical entity (ex. "COUNTRY", "CITY", "STATE", "COUNTY", etc.)
   */
  type: string;
  /**
   * The nearest location parent's ID for this geographical entity.
   */
  canonicalParentId?: number;
  /**
   * The localized name of the geographical entity.
   */
  displayName: string;
};

/**
 * Represents a Location struct.
 */
export const LocationStruct: Describe<Location> = object({
  id: number(),
  type: string(),
  canonicalParentId: optional(number()),
  displayName: string(),
});

/**
 * Provides line items the ability to target geographical locations. By default, line items target all countries and their subdivisions.
 * With geographical targeting, you can target line items to specific countries, regions, metro areas, and cities. You can also exclude the same.
 *
 * The following rules apply for geographical targeting:
 *
 * - You cannot target and exclude the same location.
 *
 * - You cannot target a child whose parent has been excluded. For example, if the state of Illinois has been excluded, then you cannot target Chicago.
 *
 * - You must not target a location if you are also targeting its parent.
 * For example, if you are targeting New York City, you must not have the state of New York as one of the targeted locations.
 *
 * - You cannot explicitly define inclusions or exclusions that are already implicit. For example, if you explicitly include California, you implicitly exclude all other states.
 * You therefore cannot explicitly exclude Florida, because it is already implicitly excluded.
 * Conversely if you explicitly exclude Florida, you cannot explicitly include California.
 */
export type GeoTargeting = {
  /**
   * The geographical locations being targeted by the LineItem.
   */
  targetedLocations?: Location[];

  /**
   * The geographical locations being excluded by the LineItem.
   */
  excludedLocations?: Location[];
};

/**
 * Represents a GeoTargeting struct.
 */
export const GeoTargetingStruct: Describe<GeoTargeting> = object({
  targetedLocations: optional(array(LocationStruct)),
  excludedLocations: optional(array(LocationStruct)),
});

/**
 * Represents targeted or excluded ad units.
 */
export type AdUnitTargeting = {
  /**
   * Included or excluded ad unit id.
   */
  adUnitId: string;
  /**
   * Whether or not all descendants are included (or excluded) as part of including (or excluding) this ad unit.
   * By default, the value is true which means targeting this ad unit will target all of its descendants.
   */
  includeDescendants: boolean;
};

/**
 * Represents an AdUnitTargeting struct.
 */
export const AdUnitTargetingStruct: Describe<AdUnitTargeting> = object({
  adUnitId: string(),
  includeDescendants: boolean(),
});

/**
 * A collection of targeted and excluded ad units and placements.
 */
export type InventoryTargeting = {
  /**
   * A list of targeted {@link https://developers.google.com/ad-manager/api/reference/v202505/AdjustmentService.AdUnitTargeting AdUnitTargeting}.
   */
  targetedAdUnits?: AdUnitTargeting[];

  /**
   * A list of excluded {@link https://developers.google.com/ad-manager/api/reference/v202505/AdjustmentService.AdUnitTargeting AdUnitTargeting}.
   */
  excludedAdUnits?: AdUnitTargeting[];

  /**
   * A list of targeted {@link https://developers.google.com/ad-manager/api/reference/v202505/PlacementService.Placement Placement} ids.
   */
  targetedPlacementIds?: number[];
};

/**
 * Represents an InventoryTargeting struct.
 */
export const InventoryTargetingStruct: Describe<InventoryTargeting> = object({
  targetedAdUnits: optional(array(AdUnitTargetingStruct)),
  excludedAdUnits: optional(array(AdUnitTargetingStruct)),
  targetedPlacementIds: optional(array(number())),
});

/**
 * DayPart represents a time-period within a day of the week which is targeted by a LineItem.
 */
export type DayPart = {
  /**
   * Day of the week the target applies to. This field is required.
   */
  dayOfWeek: DayOfWeek;

  /**
   * Represents the start time of the targeted period (inclusive).
   */
  startTime: TimeOfDay;

  /**
   * Represents the end time of the targeted period (exclusive).
   */
  endTime: TimeOfDay;
};

/**
 * Represents a DayPart struct.
 */
export const DayPartStruct: Describe<DayPart> = object({
  dayOfWeek: DayOfWeekEnum,
  startTime: TimeOfDayStruct,
  endTime: TimeOfDayStruct,
});

/**
 * Modify the delivery times of line items for particular days of the week. By default, line items are served at all days and times.
 */
export type DayPartTargeting = {
  /**
   * Specifies days of the week and times at which a **LineItem** will be delivered.
   *
   * If targeting all days and times, this value will be ignored.
   */
  dayParts: DayPart[];

  /**
   * Specifies the time zone to be used for delivering
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/ForecastService.LineItem LineItem} objects.
   * This attribute is optional and defaults to
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/AdjustmentService.DeliveryTimeZone#BROWSER DeliveryTimeZone.BROWSER}.
   *
   * Setting this has no effect if targeting all days and times.
   */
  timeZone: DeliveryTimeZone;
};

/**
 * Represents a DayPartTargeting struct.
 */
export const DayPartTargetingStruct: Describe<DayPartTargeting> = object({
  dayParts: array(DayPartStruct),
  timeZone: DeliveryTimeZoneEnum,
});

/**
 * Represents a technology entity that can be targeted.
 */
export type Technology = {
  attributes: {
    "xsi:type":
      | "DeviceCapability"
      | "BandwidthGroup"
      | "BrowserLanguage"
      | "DeviceCategory"
      | "DeviceManufacturer"
      | "MobileCarrier"
      | "OperatingSystem";
  };
  /**
   * The unique ID of the Technology. This value is required for all forms of TechnologyTargeting.
   */
  id: number;

  /**
   * The name of the technology being targeting. This value is read-only and is assigned by Google.
   */
  name: string;
};

/**
 * Represents an TechnologyAttributesValues enum in superstruct format.
 */

export const TechnologyAttributesValuesEnum = enums([
  "DeviceCapability",
  "BandwidthGroup",
  "BrowserLanguage",
  "DeviceCategory",
  "DeviceManufacturer",
  "MobileCarrier",
  "OperatingSystem",
]);

/**
 * Represents a Technology struct.
 */
export const TechnologyStruct: Describe<Technology> = object({
  attributes: object({
    "xsi:type": TechnologyAttributesValuesEnum,
  }),
  id: number(),
  name: string(),
});

/**
 * Represents bandwidth groups that are being targeted or excluded by the LineItem.
 */
export type BandwidthGroupTargeting = {
  /**
   * Indicates whether bandwidth groups should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * The bandwidth groups that are being targeted or excluded by the LineItem.
   */
  bandwidthGroups: Technology[];
};

/**
 * Represents a BandwidthGroupTargeting struct.
 */
export const BandwidthGroupTargetingStruct: Describe<BandwidthGroupTargeting> =
  object({
    isTargeted: boolean(),
    bandwidthGroups: array(TechnologyStruct),
  });

/**
 * Represents an internet browser. The id and name are suppose to be inherited from the Technology type.
 */
export type Browser = {
  attributes: {
    "xsi:type": "Browser";
  };
  id: number;
  name: string;
  majorVersion: string;
  minorVersion: string;
};

/**
 * Represents a Browser struct.
 */
export const BrowserStruct: Describe<Browser> = object({
  attributes: object({
    "xsi:type": literal("Browser"),
  }),
  id: number(),
  name: string(),
  majorVersion: string(),
  minorVersion: string(),
});

/**
 * Represents browsers that are being targeted or excluded by the LineItem.
 */
export type BrowserTargeting = {
  /**
   * Indicates whether browsers should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * Browsers that are being targeted or excluded by the LineItem.
   */
  browsers: Browser[];
};

/**
 * Represents a BrowserTargeting struct.
 */
export const BrowserTargetingStruct: Describe<BrowserTargeting> = object({
  isTargeted: boolean(),
  browsers: array(BrowserStruct),
});

/**
 * Represents browser languages that are being targeted or excluded by the LineItem.
 */
export type BrowserLanguageTargeting = {
  /**
   * Indicates whether browsers languages should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * Browser languages that are being targeted or excluded by the LineItem.
   */
  browserLanguages: Technology[];
};

/**
 * Represents a BrowserLanguageTargeting struct.
 */
export const BrowserLanguageTargetingStruct: Describe<BrowserLanguageTargeting> =
  object({
    isTargeted: boolean(),
    browserLanguages: array(TechnologyStruct),
  });

/**
 * Represents device capabilities that are being targeted or excluded by the LineItem.
 */
export type DeviceCapabilityTargeting = {
  /**
   * Device capabilities that are being targeted by the LineItem.
   */
  targetedDeviceCapabilities?: Technology[];

  /**
   * Device capabilities that are being excluded by the LineItem.
   */
  excludedDeviceCapabilities?: Technology[];
};

/**
 * Represents a DeviceCapabilityTargeting struct.
 */
export const DeviceCapabilityTargetingStruct: Describe<DeviceCapabilityTargeting> =
  object({
    targetedDeviceCapabilities: optional(array(TechnologyStruct)),
    excludedDeviceCapabilities: optional(array(TechnologyStruct)),
  });

/**
 * Represents device categories that are being targeted or excluded by the LineItem.
 */
export type DeviceCategoryTargeting = {
  /**
   * Device categories that are being targeted by the LineItem.
   */
  targetedDeviceCategories?: Technology[];

  /**
   * Device categories that are being excluded by the LineItem.
   */
  excludedDeviceCategories?: Technology[];
};

/**
 * Represents a DeviceCategoryTargeting struct.
 */
export const DeviceCategoryTargetingStruct: Describe<DeviceCategoryTargeting> =
  object({
    targetedDeviceCategories: optional(array(TechnologyStruct)),
    excludedDeviceCategories: optional(array(TechnologyStruct)),
  });

/**
 * Represents device manufacturer that are being targeted or excluded by the LineItem.
 */
export type DeviceManufacturerTargeting = {
  /**
   * Indicates whether device manufacturers should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * Device manufacturers that are being targeted or excluded by the LineItem.
   */
  deviceManufacturers: Technology[];
};

/**
 * Represents a DeviceManufacturerTargeting struct.
 */
export const DeviceManufacturerTargetingStruct: Describe<DeviceManufacturerTargeting> =
  object({
    isTargeted: boolean(),
    deviceManufacturers: array(TechnologyStruct),
  });

/**
 * Represents mobile carriers that are being targeted or excluded by the LineItem.
 */
export type MobileCarrierTargeting = {
  /**
   * Indicates whether mobile carriers should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * Mobile carriers that are being targeted or excluded by the LineItem.
   */
  mobileCarriers: Technology[];
};

/**
 * Represents a MobileCarrierTargeting struct.
 */
export const MobileCarrierTargetingStruct: Describe<MobileCarrierTargeting> =
  object({
    isTargeted: boolean(),
    mobileCarriers: array(TechnologyStruct),
  });

/**
 * Represents a mobile device. The id and name are suppose to be inherited from the Technology type.
 */
export type MobileDevice = {
  attributes: {
    "xsi:type": "MobileDevice";
  };
  id: number;
  name: string;
  manufacturerCriterionId: number;
};

/**
 * Represents a MobileDevice struct.
 */
export const MobileDeviceStruct: Describe<MobileDevice> = object({
  attributes: object({
    "xsi:type": literal("MobileDevice"),
  }),
  id: number(),
  name: string(),
  manufacturerCriterionId: number(),
});

/**
 * Represents mobile devices that are being targeted or excluded by the LineItem.
 */
export type MobileDeviceTargeting = {
  /**
   * Mobile devices that are being targeted by the LineItem.
   */
  targetedMobileDevices: MobileDevice[];

  /**
   * Mobile devices that are being excluded by the LineItem.
   */
  excludedMobileDevices: MobileDevice[];
};

/**
 * Represents a MobileDeviceTargeting struct.
 */
export const MobileDeviceTargetingStruct: Describe<MobileDeviceTargeting> =
  object({
    targetedMobileDevices: array(MobileDeviceStruct),
    excludedMobileDevices: array(MobileDeviceStruct),
  });

/**
 * Represents a mobile device submodel. The id and name are suppose to be inherited from the Technology type.
 */
export type MobileDeviceSubmodel = {
  attributes: {
    "xsi:type": "MobileDeviceSubmodel";
  };
  id: number;
  name: string;
  mobileDeviceCriterionId: number;
  deviceManufacturerCriterionId: number;
};

/**
 * Represents a MobileDeviceSubmodel struct.
 */
export const MobileDeviceSubmodelStruct: Describe<MobileDeviceSubmodel> =
  object({
    attributes: object({
      "xsi:type": literal("MobileDeviceSubmodel"),
    }),
    id: number(),
    name: string(),
    mobileDeviceCriterionId: number(),
    deviceManufacturerCriterionId: number(),
  });

/**
 * Represents mobile devices that are being targeted or excluded by the LineItem.
 */
export type MobileDeviceSubmodelTargeting = {
  /**
   * Mobile device submodels that are being targeted by the LineItem.
   */
  targetedMobileDeviceSubmodels: MobileDeviceSubmodel[];

  /**
   * Mobile device submodels that are being excluded by the LineItem.
   */
  excludedMobileDeviceSubmodels: MobileDeviceSubmodel[];
};

/**
 * Represents a
 */
export const MobileDeviceSubmodelTargetingStruct: Describe<MobileDeviceSubmodelTargeting> =
  object({
    targetedMobileDeviceSubmodels: array(MobileDeviceSubmodelStruct),
    excludedMobileDeviceSubmodels: array(MobileDeviceSubmodelStruct),
  });

/**
 * Represents operating systems that are being targeted or excluded by the LineItem.
 */
export type OperatingSystemTargeting = {
  /**
   * Indicates whether operating systems should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;

  /**
   * Operating systems that are being targeted or excluded by the LineItem.
   */
  operatingSystems: Technology[];
};

/**
 * Represents a OperatingSystemTargeting struct.
 */
export const OperatingSystemTargetingStruct: Describe<OperatingSystemTargeting> =
  object({
    isTargeted: boolean(),
    operatingSystems: array(TechnologyStruct),
  });

/**
 * Represents a specific version of an operating system. The id and name are suppose to be inherited from the Technology type.
 */
export type OperatingSystemVersion = {
  attributes: {
    "xsi:type": "OperatingSystemVersion";
  };
  id: number;
  name: string;
  majorVersion: string;
  minorVersion: string;
  microVersion: string;
};

/**
 * Represents an OperatingSystemVersion struct.
 */
export const OperatingSystemVersionStruct: Describe<OperatingSystemVersion> =
  object({
    attributes: object({
      "xsi:type": literal("OperatingSystemVersion"),
    }),
    id: number(),
    name: string(),
    majorVersion: string(),
    minorVersion: string(),
    microVersion: string(),
  });

/**
 * Represents operating system versions that are being targeted or excluded by the LineItem.
 */
export type OperatingSystemVersionTargeting = {
  /**
   * Operating system versions that are being targeted by the LineItem.
   */
  targetedOperatingSystemVersions?: OperatingSystemVersion[];

  /**
   * Operating system versions that are being excluded by the LineItem.
   */
  excludedOperatingSystemVersions?: OperatingSystemVersion[];
};

/**
 * Represents an OperatingSystemVersionTargeting struct.
 */
export const OperatingSystemVersionTargetingStruct: Describe<OperatingSystemVersionTargeting> =
  object({
    targetedOperatingSystemVersions: optional(
      array(OperatingSystemVersionStruct),
    ),
    excludedOperatingSystemVersions: optional(
      array(OperatingSystemVersionStruct),
    ),
  });

/**
 * Provides LineItem objects the ability to target or exclude technologies.
 */
export type TechnologyTargeting = {
  /**
   * The bandwidth groups being targeted by the LineItem.
   */
  bandwidthGroupTargeting?: BandwidthGroupTargeting;

  /**
   * The browsers being targeted by the LineItem.
   */
  browserTargeting?: BrowserTargeting;

  /**
   * The languages of browsers being targeted by the LineItem.
   */
  browserLanguageTargeting?: BrowserLanguageTargeting;

  /**
   * The device capabilities being targeted by the LineItem.
   */
  deviceCapabilityTargeting?: DeviceCapabilityTargeting;

  /**
   * The device categories being targeted by the LineItem.
   */
  deviceCategoryTargeting?: DeviceCategoryTargeting;

  /**
   * The device manufacturers being targeted by the LineItem.
   */
  deviceManufacturerTargeting?: DeviceManufacturerTargeting;

  /**
   * The mobile carriers being targeted by the LineItem.
   */
  mobileCarrierTargeting?: MobileCarrierTargeting;

  /**
   * The mobile devices being targeted by the LineItem.
   */
  mobileDeviceTargeting?: MobileDeviceTargeting;

  /**
   * The mobile device submodels being targeted by the LineItem.
   */
  mobileDeviceSubmodelTargeting?: MobileDeviceSubmodelTargeting;

  /**
   * The operating systems being targeted by the LineItem.
   */
  operatingSystemTargeting?: OperatingSystemTargeting;

  /**
   * The operating system versions being targeted by the LineItem.
   */
  operatingSystemVersionTargeting?: OperatingSystemVersionTargeting;
};

/**
 * Represents a TechnologyTargeting struct.
 */
export const TechnologyTargetingStruct: Describe<TechnologyTargeting> = object({
  bandwidthGroupTargeting: optional(BandwidthGroupTargetingStruct),
  browserTargeting: optional(BrowserTargetingStruct),
  browserLanguageTargeting: optional(BrowserLanguageTargetingStruct),
  deviceCapabilityTargeting: optional(DeviceCapabilityTargetingStruct),
  deviceCategoryTargeting: optional(DeviceCategoryTargetingStruct),
  deviceManufacturerTargeting: optional(DeviceManufacturerTargetingStruct),
  mobileCarrierTargeting: optional(MobileCarrierTargetingStruct),
  mobileDeviceTargeting: optional(MobileDeviceTargetingStruct),
  mobileDeviceSubmodelTargeting: optional(MobileDeviceSubmodelTargetingStruct),
  operatingSystemTargeting: optional(OperatingSystemTargetingStruct),
  operatingSystemVersionTargeting: optional(
    OperatingSystemVersionTargetingStruct,
  ),
});

/**
 * The date time ranges that the line item is eligible to serve.
 */
export type DateTimeRangeTargeting = {
  targetedDateTimeRanges: DateTimeRange[];
};

/**
 * Represents a DateTimeRangeTargeting struct.
 */
export const DateTimeRangeTargetingStruct: Describe<DateTimeRangeTargeting> =
  object({
    targetedDateTimeRanges: array(DateTimeRangeStruct),
  });

/**
 * Provides line items the ability to target or exclude users visiting their websites from a list of domains or subdomains.
 */
export type UserDomainTargeting = {
  /**
   * The domains or subdomains that are being targeted or excluded by the LineItem. This attribute is required and the maximum length of each domain is 67 characters.
   */
  domains: string[];

  /**
   * Indicates whether domains should be targeted or excluded. This attribute is optional and defaults to true.
   */
  targeted: boolean;
};

/**
 * Represents a UserDomainTargeting struct.
 */
export const UserDomainTargetingStruct: Describe<UserDomainTargeting> = object({
  domains: array(string()),
  targeted: boolean(),
});

/**
 * Used to target LineItems to specific videos on a publisher's site.
 */
export type ContentTargeting = {
  /**
   * The IDs of content being targeted by the LineItem.
   */
  targetedContentIds?: number[];

  /**
   * The IDs of content being excluded by the LineItem.
   */
  excludedContentIds?: number[];

  /**
   * A list of video content bundles, represented by ContentBundle IDs, that are being targeted by the LineItem.
   */
  targetedVideoContentBundleIds?: number[];

  /**
   * A list of video content bundles, represented by ContentBundle IDs, that are being excluded by the LineItem.
   */
  excludedVideoContentBundleIds?: number[];
};

/**
 * Represents a ContentTargeting struct.
 */
export const ContentTargetingStruct: Describe<ContentTargeting> = object({
  targetedContentIds: optional(array(number())),
  excludedContentIds: optional(array(number())),
  targetedVideoContentBundleIds: optional(array(number())),
  excludedVideoContentBundleIds: optional(array(number())),
});

/**
 * Provides line items the ability to target or exclude users' mobile applications.
 */
export type MobileApplicationTargeting = {
  /**
   * The IDs that are being targeted or excluded by the LineItem.
   */
  mobileApplicationIds: number[];

  /**
   * Indicates whether mobile apps should be targeted or excluded. This attribute is optional and defaults to true.
   */
  isTargeted: boolean;
};

/**
 * Represents a MobileApplicationTargeting struct.
 */
export const MobileApplicationTargetingStruct: Describe<MobileApplicationTargeting> =
  object({
    mobileApplicationIds: array(number()),
    isTargeted: boolean(),
  });

/**
 * The BuyerUserListTargeting associated with a programmatic LineItem or ProposalLineItem object.
 */
export type BuyerUserListTargeting = {
  /**
   * Whether the programmatic LineItem or ProposalLineItem object has buyer user list targeting.
   */
  hasBuyerUserListTargeting: boolean;
};

/**
 * Represents a BuyerUserListTargeting struct.
 */
export const BuyerUserListTargetingStruct: Describe<BuyerUserListTargeting> =
  object({ hasBuyerUserListTargeting: boolean() });

/**
 * The representation of an inventory Url that is used in targeting.
 */
export type InventoryUrl = {
  id: number;
};

/**
 * Represents an InventoryUrl
 */
export const InventoryUrlStruct: Describe<InventoryUrl> = object({
  id: number(),
});

/**
 * A collection of targeted inventory urls.
 */
export type InventoryUrlTargeting = {
  targetedUrls: InventoryUrl[];
  excludedUrls: InventoryUrl[];
};

/**
 * A collection of targeted inventory urls.
 */
export type InventorySizeTargeting = {
  /**
   * Whether the inventory sizes should be targeted or excluded.
   */
  isTargeted: boolean;

  /**
   * A list of TargetedSizeDtos.
   */
  targetedSizes: TargetedSize[];
};

export type TargetedSize = {
  size: Size;
};

/**
 * Represents an InventoryUrlTargeting struct.
 */
export const InventoryUrlTargetingStruct: Describe<InventoryUrlTargeting> =
  object({
    targetedUrls: array(InventoryUrlStruct),
    excludedUrls: array(InventoryUrlStruct),
  });

/**
 * Provides line items the ability to target the platform that requests and renders the ad.
 *
 * The following rules apply for RequestPlatformTargeting
 *
 * RequestPlatformTargeting must be specified for video line items. Empty values for RequestPlatformTargeting.targetedRequestPlatforms mean that all request platforms will be targeted.
 *
 * RequestPlatformTargeting is read-only and assigned by Google for non-video line items.
 *
 * RequestPlatformTargeting is read-only and assigned by Google for line items generated from proposal line items.
 */
export type RequestPlatformTargeting = {
  targetedRequestPlatforms: RequestPlatform[];
};

/**
 * Represents a RequestPlatformTargeting struct.
 */
export const RequestPlatformTargetingStruct: Describe<RequestPlatformTargeting> =
  object({
    targetedRequestPlatforms: array(RequestPlatformEnum),
  });

/**
 * Contains targeting criteria for LineItem objects. See LineItem.targeting.
 */
export type Targeting = {
  /**
   * Specifies what geographical locations are targeted by the LineItem. This attribute is optional.
   */
  geoTargeting?: GeoTargeting;

  /**
   * Specifies what inventory is targeted by the LineItem. This attribute is optional.
   */
  inventoryTargeting?: InventoryTargeting;

  /**
   * Specifies the days of the week and times that are targeted by the LineItem. This attribute is optional.
   */
  dayPartTargeting?: DayPartTargeting;

  /**
   * Specifies the dates and time ranges that are targeted by the LineItem. This attribute is optional.
   */
  dateTimeRangeTargeting?: DateTimeRangeTargeting;

  /**
   * Specifies the browsing technologies that are targeted by the LineItem. This attribute is optional.
   */
  technologyTargeting?: TechnologyTargeting;

  /**
   * Specifies the collection of custom criteria that is targeted by the LineItem.
   *
   * Once the LineItem is updated or modified with custom targeting, the server may return a normalized, but equivalent representation of the custom targeting expression.
   *
   * customTargeting will have up to three levels of expressions including itself.
   *
   * The top level CustomCriteriaSet i.e. the customTargeting object can only contain a CustomCriteriaSet.LogicalOperator.OR of all its children.
   *
   * The second level of CustomCriteriaSet objects can only contain CustomCriteriaSet.LogicalOperator.AND of all their children. If a CustomCriteria is placed on this level, the server will wrap it in a CustomCriteriaSet.
   *
   * The third level can only comprise of CustomCriteria objects.
   */
  customTargeting?: CustomCriteriaSet;

  /**
   * Specifies the domains or subdomains that are targeted or excluded by the LineItem. Users visiting from an IP address associated with those domains will be targeted or excluded. This attribute is optional.
   */
  userDomainTargeting?: UserDomainTargeting;

  /**
   * Specifies the video categories and individual videos targeted by the LineItem.
   */
  contentTargeting?: ContentTargeting;

  /**
   * Specifies targeting against video position types.
   */
  videoPositionTargeting?: VideoPositionTargeting;

  /**
   * Specifies targeting against mobile applications.
   */
  mobileApplicationTargeting?: MobileApplicationTargeting;

  /**
   * Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem. This attribute is readonly and is populated by Google.
   */
  buyerUserListTargeting?: BuyerUserListTargeting;

  /**
   * Specifies the URLs that are targeted by the entity.
   * This is currently only supported by {@link https://developers.google.com/ad-manager/api/reference/v202505/YieldGroupService.YieldGroup YieldGroup}.
   */
  inventoryUrlTargeting?: InventoryUrlTargeting;

  /**
   * Specifies the request platforms that are targeted by the LineItem. This attribute is required for video line items.
   *
   * This value is modifiable for video line items, but read-only for non-video line items.
   *
   * This value is read-only for video line items generated from proposal line items.
   */
  requestPlatformTargeting?: RequestPlatformTargeting | null;

  /**
   * Specifies the sizes that are targeted by the entity.
   *
   * This is currently only supported on YieldGroup and TrafficDataRequest.
   */
  inventorySizeTargeting?: InventorySizeTargeting;
};

/**
 * Represents a Targeting struct.
 */
export const TargetingStruct: Describe<Targeting> = object({
  geoTargeting: optional(GeoTargetingStruct),
  inventoryTargeting: optional(InventoryTargetingStruct),
  dayPartTargeting: optional(DayPartTargetingStruct),
  dateTimeRangeTargeting: optional(DateTimeRangeTargetingStruct),
  technologyTargeting: optional(TechnologyTargetingStruct),
  customTargeting: optional(CustomCriteriaSetStruct),
  userDomainTargeting: optional(UserDomainTargetingStruct),
  contentTargeting: optional(ContentTargetingStruct),
  videoPositionTargeting: optional(VideoPositionTargetingStruct),
  mobileApplicationTargeting: optional(MobileApplicationTargetingStruct),
  buyerUserListTargeting: optional(BuyerUserListTargetingStruct),
  inventoryUrlTargeting: optional(InventoryUrlTargetingStruct),
  requestPlatformTargeting: optional(nullable(RequestPlatformTargetingStruct)),
});

/**
 * Represents the creative targeting criteria for a LineItem.
 */
export type CreativeTargeting = {
  /**
   * The name of this creative targeting. This attribute is required.
   */
  name: string;

  /**
   * The Targeting criteria of this creative targeting. This attribute is required.
   */
  targeting: Targeting;
};

/**
 * Represents a CreativeTargeting struct.
 */
export const CreativeTargetingStruct: Describe<CreativeTargeting> = object({
  name: string(),
  targeting: TargetingStruct,
});
