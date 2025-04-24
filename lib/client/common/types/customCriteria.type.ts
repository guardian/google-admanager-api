import {
  array,
  type Describe,
  lazy,
  literal,
  number,
  object,
  optional,
  union,
} from "superstruct";
import {
  type CmsMetadataCriteriaComparisonOperator,
  CmsMetadataCriteriaComparisonOperatorEnum,
  type ComparisonOperator,
  ComparisonOperatorEnum,
  type LogicalOperator,
  LogicalOperatorEnum,
} from "../enums";

/**
 * A CustomCriteria object is used to perform custom criteria targeting on custom targeting keys of type CustomTargetingKey.Type.PREDEFINED or CustomTargetingKey.Type.FREEFORM.
 */
export type CustomCriteria = {
  attributes?: {
    "xsi:type": "CustomCriteria";
  };
  /**
   * The CustomTargetingKey.id of the CustomTargetingKey object that was created using CustomTargetingService. This attribute is required.
   */
  keyId: number;

  /**
   * The ids of CustomTargetingValue objects to target the custom targeting key with id CustomCriteria.keyId. This attribute is required.
   */
  valueIds: number[];

  /**
   * The comparison operator. This attribute is required.
   */
  operator: ComparisonOperator;
};

/**
 * Represents a CustomCriteria struct.
 */
export const CustomCriteriaStruct: Describe<CustomCriteria> = object({
  //Need to double check the type for attributes
  attributes: optional(object({ "xsi:type": literal("CustomCriteria") })),
  keyId: number(),
  valueIds: array(number()),
  operator: ComparisonOperatorEnum,
});

/**
 * A CmsMetadataCriteria object is used to target CmsMetadataValue objects.
 */
export type CmsMetadataCriteria = {
  attributes?: {
    "xsi:type": "CmsMetadataCriteria";
  };
  /**
   * The comparison operator. This attribute is required.
   */
  operator: CmsMetadataCriteriaComparisonOperator;

  /**
   * The ids of CmsMetadataValue objects used to target CMS metadata. This attribute is required.
   */
  cmsMetadataValueIds: number[];
};

/**
 * Represents a CmsMetadataCriteria struct.
 */
export const CmsMetadataCriteriaStruct: Describe<CmsMetadataCriteria> = object({
  attributes: optional(object({ "xsi:type": literal("CmsMetadataCriteria") })),
  operator: CmsMetadataCriteriaComparisonOperatorEnum,
  cmsMetadataValueIds: array(number()),
});

/**
 * An AudienceSegmentCriteria object is used to target AudienceSegment objects.
 */
export type AudienceSegmentCriteria = {
  attributes?: {
    "xsi:type": "AudienceSegmentCriteria";
  };
  /**
   * The comparison operator. This attribute is required.
   */
  operator: ComparisonOperator;

  /**
   * The ids of AudienceSegment objects used to target audience segments. This attribute is required.
   */
  audienceSegmentIds: number[];
};

/**
 * Represents an AudienceSegmentCriteria struct.
 */
export const AudienceSegmentCriteria: Describe<AudienceSegmentCriteria> =
  object({
    attributes: optional(
      object({ "xsi:type": literal("AudienceSegmentCriteria") }),
    ),
    operator: ComparisonOperatorEnum,
    audienceSegmentIds: array(number()),
  });

/**
 * A CustomCriteriaSet comprises of a set of CustomCriteriaNode objects combined by the CustomCriteriaSet.LogicalOperator.logicalOperator. The custom criteria targeting tree is subject to the rules defined on Targeting.customTargeting.
 */
export type CustomCriteriaSet = {
  attributes?: {
    "xsi:type": "CustomCriteriaSet";
  };

  /**
   * The logical operator to be applied to CustomCriteriaSet.children. This attribute is required.
   */
  logicalOperator: LogicalOperator;

  /**
   * The custom criteria. This attribute is required.
   */
  children: Array<
    | CustomCriteriaSet
    | CustomCriteria
    | CmsMetadataCriteria
    | AudienceSegmentCriteria
  >;
};

/**
 * Represents a CustomCriteriaSet struct.
 */
export const CustomCriteriaSetStruct: Describe<CustomCriteriaSet> = object({
  attributes: optional(object({ "xsi:type": literal("CustomCriteriaSet") })),
  logicalOperator: LogicalOperatorEnum,
  children: array(
    union([
      CustomCriteriaStruct,
      lazy(() => CustomCriteriaSetStruct),
      CmsMetadataCriteriaStruct,
      AudienceSegmentCriteria,
    ]),
  ),
});
