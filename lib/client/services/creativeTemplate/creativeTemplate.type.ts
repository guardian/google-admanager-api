import type { PageResult } from "../../../common/types";
import type {
  AssetCreativeTemplateVariableMimeType,
  CreativeTemplateStatus,
  CreativeTemplateType,
} from "./creativeTemplate.enum";

/**
 * Represents a file asset variable defined in a creative template.
 *
 * Use AssetCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative.
 */
export type AssetCreativeTemplateVariable = {
  /**
   * A set of supported mime types. This set can be empty or null if there's no constraint, meaning files of any mime types are allowed.
   */
  mimeTypes: AssetCreativeTemplateVariableMimeType[];
};

/**
 * Represents a long variable defined in a creative template.
 */
export type LongCreativeTemplateVariable = {
  /**
   * Default value to be filled in when creating creatives from the creative template.
   */
  defaultValue: number;
};

/**
 * Stores variable choices that users can select from
 */
export type ListStringCreativeTemplateVariableVariableChoice = {
  /**
   * Label that users can select from. This is displayed to users when creating a TemplateCreative. This attribute is intended to be more descriptive than value. This attribute is required and has a maximum length of 255 characters.
   */
  label: string;

  /**
   * Value that users can select from. When creating a TemplateCreative, the value in StringCreativeTemplateVariableValue should match this value, if you intend to select this value. This attribute is required and has a maximum length of 255 characters.
   */
  value: string;
};

/**
 * Represents a list variable defined in a creative template. This is similar to StringCreativeTemplateVariable, except that there are possible choices to choose from.
 *
 * Use StringCreativeTemplateVariableValue to specify the value for this variable when creating a TemplateCreative from a CreativeTemplate.
 */
export type ListStringCreativeTemplateVariable =
  StringCreativeTemplateVariable & {
    /**
     * The values within the list users need to select from.
     */
    choices: ListStringCreativeTemplateVariableVariableChoice[];

    /**
     * true if a user can specifiy an 'other' value. For example, if a variable called backgroundColor is defined as a list with values: red, green, blue,
     * this boolean can be set to allow a user to enter a value not on the list such as purple.
     */
    allowOtherChoice: boolean;
  };

/**
 * Represents a string variable defined in a creative template.
 *
 * Use StringCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative.
 */
export type StringCreativeTemplateVariable = {
  /**
   * Default value to be filled in when creating creatives from the creative template.
   */
  defaultValue: string;
};

/**
 * Represents a url variable defined in a creative template.
 *
 * Use UrlCreativeTemplateVariableValue to specify the value for this variable when creating TemplateCreative from the TemplateCreative
 */
export type UrlCreativeTemplateVariable = {
  /**
   * Default value to be filled in when creating creatives from the creative template.
   */
  defaultValue: string;

  /**
   * When true, if the URL is identified as from a known vendor, cache-busting macros will automatically be inserted upon save.
   */
  isTrackingUrl: boolean;
};

/**
 * Represents a variable defined in a creative template.
 */
export type CreativeTemplateVariable = {
  /**
   * Metadata field indicating the type of the CreativeTemplateVariable
   */
  attributes: {
    "xsi:type":
      | "AssetCreativeTemplateVariable"
      | "LongCreativeTemplateVariable"
      | "StringCreativeTemplateVariable"
      | "ListStringCreativeTemplateVariable"
      | "UrlCreativeTemplateVariable";
  };
  /**
   * Label that is displayed to users when creating TemplateCreative from the CreativeTemplate. This attribute is required and has a maximum length of 127 characters.
   */
  label: string;

  /**
   * Unique name used to identify the variable. This attribute is read-only and is assigned by Google, by deriving from label, when a creative template variable is created.
   */
  uniqueName: string;

  /**
   * Description of the creative template variable.
   * Note: SOAP API docs claim this is required, but in practice
   * it's often missing from actual GAM responses.
   */
  description?: string;

  /**
   * true if this variable is required to be filled in by users when creating TemplateCreative from the CreativeTemplate.
   */
  isRequired: boolean;
} & (
  | AssetCreativeTemplateVariable
  | LongCreativeTemplateVariable
  | StringCreativeTemplateVariable
  | UrlCreativeTemplateVariable
);

/**
 * A template upon which a creative can be created.
 */
export type CreativeTemplate = {
  /**
   * Uniquely identifies the CreativeTemplate. This attribute is read-only and is assigned by Google when a creative template is created.
   */
  id: number;

  /**
   * The name of the creative template. This attribute is required and has a maximum length of 255 characters.
   */
  name: string;

  /**
   * The description of the creative template. This attribute is optional.
   */
  description?: string;

  /**
   * The list of creative template variables. This attribute is required.
   */
  variables: CreativeTemplateVariable[];

  /**
   * The snippet of the creative template, with placeholders for the associated variables. This attribute is required.
   */
  snippet: string;

  /**
   * The status of the CreativeTemplate. This attribute is read-only and is assigned by Google.
   */
  status: CreativeTemplateStatus;

  /**
   * The type of the CreativeTemplate. Publisher can only create user-defined template
   */
  type: CreativeTemplateType;

  /**
   * true if this creative template produces interstitial creatives.
   */
  isInterstitial: boolean;

  /**
   * true if this creative template produces native-eligible creatives.
   */
  isNativeEligible: boolean;

  /**
   * Whether the Creative produced is compatible for SafeFrame rendering.
   *
   * This attribute is optional and defaults to true.
   */
  isSafeFrameCompatible: boolean;
};

/**
 * Captures a page of {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeTemplateService.CreativeTemplate CreativeTemplate} objects.
 */
export type CreativeTemplatePage = PageResult<CreativeTemplate>;
