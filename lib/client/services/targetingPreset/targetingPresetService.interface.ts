import type { Statement } from "../../../common/types";
import type {
  TargetingPreset,
  TargetingPresetPage,
} from "./targetingPreset.type";

/**
 * Service for interacting with Targeting Presets.
 */
export interface TargetingPresetServiceOperations {
  /**
   * Gets a {@link https://developers.google.com/ad-manager/api/reference/v202505/TargetingPresetService.TargetingPresetPage TargetingPresetPage}
   * of {@link https://developers.google.com/ad-manager/api/reference/v202505/TargetingPresetService.TargetingPreset TargetingPreset} objects that satisfy the given
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/TargetingPresetService.Statement#query Statement.query}.
   * The following fields are supported for filtering:
   *
   * | PQL Property | PQL Property                                                                                                                            |
   * | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
   * | id           | {@link https://developers.google.com/ad-manager/api/reference/v202505/TargetingPresetService.TargetingPreset#id TargetingPreset.id}     |
   * | name         | {@link https://developers.google.com/ad-manager/api/reference/v202505/TargetingPresetService.TargetingPreset#name TargetingPreset.name} |
   *
   * @param filterStatement a Publisher Query Language statement used to filter a set of labels.
   * @returns the targeting presets that match the given filter
   */
  getTargetingPresetsByStatement(
    filterStatement: Statement,
  ): Promise<TargetingPresetPage>;

  /**
   * Creates targeting presets
   * @param targetingPresets a list of targeting presets to be created
   * @returns the newly created list of targeting presets
   */
  createTargetingPresets(
    targetingPresets: Omit<TargetingPreset, "id">[],
  ): Promise<TargetingPreset[]>;

  /**
   * Updates targeting presets
   * @param targetingPresets a list of targeting presets to be updated
   * @returns the newly updated list of targeting presets
   */
  updateTargetingPresets(
    targetingPresets: Omit<TargetingPreset, "id">[],
  ): Promise<TargetingPreset[]>;
}
