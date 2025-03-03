import { enums, type Describe } from "superstruct";

/**
 * Represents the target gender for a GRP demographic targeted line item.
 */
export enum GrpTargetGender {
  /**
   * The value returned if the actual value is not exposed by the requested API version.
   */
  UNKNOWN = "UNKNOWN",
  /**
   * Indicates that the GRP target gender is Male.
   */
  MALE = "MALE",
  /**
   * Indicates that the GRP target gender is Female.
   */
  FEMALE = "FEMALE",
  /**
   * Indicates that the GRP target gender is both male and female.
   */
  BOTH = "BOTH",
}

/**
 * Represents a GrpTargetGender enum in superstruct format.
 */
export const GrpTargetGenderEnum = enums([
  "UNKNOWN",
  "MALE",
  "FEMALE",
  "BOTH",
]) as Describe<GrpTargetGender>;

/**
 * Represents available GRP providers that a line item will have its target demographic measured by.
 */
export enum GrpProvider {
  /**
   * The value returned if the actual value is not exposed by the requested API version.
   */
  UNKNOWN = "UNKNOWN",

  NIELSEN = "NIELSEN",
  /**
   * Renamed to GOOGLE beginning in V201608.
   */
  GOOGLE = "GOOGLE",
}

/**
 * Represents a GrpProvider enum in superstruct format.
 */
export const GrpProviderEnum = enums([
  "UNKNOWN",
  "NIELSEN",
  "GOOGLE",
]) as Describe<GrpProvider>;

/**
 * Represents the pacing computation method for impressions on connected devices for a Nielsen measured line item.
 * This only applies when Nielsen measurement is enabled for connected devices.
 */
export enum NielsenCtvPacingType {
  /**
   * The value returned if the actual value is not exposed by the requested API version.
   */
  UNKNOWN = "UNKNOWN",
  /**
   * The value returned if Nielsen measurement is disabled for connected devices.
   */
  NONE = "NONE",
  /**
   * Indicates that Nielsen impressions on connected devices are included, and we apply coviewing in pacing.
   */
  COVIEW = "COVIEW",
  /**
   * Indicates that Nielsen impressions on connected devices are included, and we apply strict coviewing in pacing.
   */
  STRICT_COVIEW = "STRICT_COVIEW",
}

/**
 * Represents a NielsenCtvPacingType enum in superstruct format.
 */
export const NielsenCtvPacingTypeEnum = enums([
  "UNKNOWN",
  "NONE",
  "COVIEW",
  "STRICT_COVIEW",
]) as Describe<NielsenCtvPacingType>;

/**
 * Represents whose device categorization to use on Nielsen measured line item with auto-pacing enabled.
 */
export enum PacingDeviceCategorizationType {
  /**
   * The value returned if the actual value is not exposed by the requested API version.
   */
  UNKNOWN = "UNKNOWN",
  /**
   * Use Google's device categorization in auto-pacing.
   */
  GOOGLE = "GOOGLE",
  /**
   * Use Nielsen device categorization in auto-pacing
   */
  NIELSEN = "NIELSEN",
}

/**
 * Represents a PacingDeviceCategorizationType enum in superstruct format.
 */
export const PacingDeviceCategorizationTypeEnum = enums([
  "UNKNOWN",
  "GOOGLE",
  "NIELSEN",
]) as Describe<PacingDeviceCategorizationType>;
