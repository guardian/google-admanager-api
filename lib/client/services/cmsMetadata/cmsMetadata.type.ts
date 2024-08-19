import type { PageResult } from '../../../common/types';
import type { CmsMetadataKeyStatus, CmsMetadataValueStatus } from './cmsMetadata.enum';

/**
 * Key associated with a piece of content from a publisher's CMS.
 */
type CmsMetadataKey = {
  /**
   * The ID of this CMS metadata key. This field is read-only and provided by Google.
   */
  id: number;
  /**
   * The key of a key-value pair.
   */
  name: string;
  /**
   * The status of this CMS metadata key. This attribute is read-only.
   */
  status: CmsMetadataKeyStatus;
};

/**
 * Captures a page of CMS metadata key objects.
 */
export type CmsMetadataKeyPage = PageResult<CmsMetadataKey>;

/**
 * Key value pair associated with a piece of content from a publisher's CMS.
 */
type CmsMetadataValue = {
  /**
   * The ID of this CMS metadata value, to be used in targeting. This field is read-only and provided by Google.
   */
  cmsMetadataValueId: number;
  /**
   * The value of this key-value pair.
   */
  valueName: string;

  key: CmsMetadataKey;
  /**
   * The status of this CMS metadata value. This attribute is read-only.
   */
  status: CmsMetadataValueStatus;
};

/**
 * Captures a page of CMS metadata value objects.
 */
export type CmsMetadataValuePage = PageResult<CmsMetadataValue>;
