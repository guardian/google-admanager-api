import { boolean, number, object, type Describe } from "superstruct";

/**
 * Represents a {@link https://developers.google.com/ad-manager/api/reference/v202505/LabelService.Label Label} that can be applied to an entity.
 * To negate an inherited label, create an **`AppliedLabel`** with **`labelId`** as the inherited label's ID and **`isNegated`** set to true.
 */
export type AppliedLabel = {
  /**
   * The ID of a created {@link https://developers.google.com/ad-manager/api/reference/v202505/LabelService.Label Label}.
   */
  labelId: number;
  /**
   * **isNegated** should be set to true to negate the effects of **labelId**.
   */
  isNegated: boolean;
};

/**
 * Represents an AppliedLabel struct.
 */
export const AppliedLabelStruct: Describe<AppliedLabel> = object({
  labelId: number(),
  isNegated: boolean(),
});
