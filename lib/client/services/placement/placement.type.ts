import type { DateTime, PageResult } from "../../../common/types";
import type { InventoryStatus } from "./placement.enum";

/**
 * Deprecated container for information required for AdWords advertisers to place their ads.
 */
type SiteTargetingInfo = object;

/**
 * A Placement groups related AdUnit objects.
 */
export type Placement = SiteTargetingInfo & {
  /**
   * Uniquely identifies the Placement. This attribute is read-only and is assigned by Google when a placement is created.
   */
  id: number;
  /**
   * The name of the Placement. This value is required and has a maximum length of 255 characters.
   */
  name: string;
  /**
   * A description of the Placement. This value is optional and its maximum length is 65,535 characters.
   */
  description: string;
  /**
   * A string used to uniquely identify the Placement for purposes of serving the ad. This attribute is read-only and is assigned by Google when a placement is created.
   */
  placementCode: string;
  /**
   * The status of the Placement. This attribute is read-only.
   */
  status: InventoryStatus;
  /**
   * The collection of AdUnit object IDs that constitute the Placement.
   */
  targetedAdUnitIds: string[];
  /**
   * The date and time this placement was last modified.
   */
  lastModifiedDateTime: DateTime;
};

/**
 * Captures a page of {@link https://developers.google.com/ad-manager/api/reference/v202405/PlacementService.Placement Placement} objects.
 */
export type PlacementPage = PageResult<Placement>;
