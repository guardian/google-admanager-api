export enum ReportingType {
  DISABLED = "DISABLED",
  CLIENT = "CLIENT",
  SERVER = "SERVER",
  AD_MEDIA = "AD_MEDIA",
  UNKNOWN = "UNKNOWN",
}

export enum SamErrorType {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  AD_REQUEST_ERROR = "AD_REQUEST_ERROR",
  VAST_PARSE_ERROR = "VAST_PARSE_ERROR",
  UNSUPPORTED_AD_SYSTEM = "UNSUPPORTED_AD_SYSTEM",
  CANNOT_FIND_UNIQUE_TRANSCODE_ID = "CANNOT_FIND_UNIQUE_TRANSCODE_ID",
  CANNOT_FIND_MEDIA_FILE_PATH = "CANNOT_FIND_MEDIA_FILE_PATH",
  MISSING_INLINE_ELEMENTS = "MISSING_INLINE_ELEMENTS",
  MAX_WRAPPER_DEPTH_REACHED = "MAX_WRAPPER_DEPTH_REACHED",
  INVALID_AD_SEQUENCE_NUMBER = "INVALID_AD_SEQUENCE_NUMBER",
  FAILED_PING = "FAILED_PING",
  AD_TAG_PARSE_ERROR = "AD_TAG_PARSE_ERROR",
  VMAP_PARSE_ERROR = "VMAP_PARSE_ERROR",
  INVALID_VMAP_RESPONSE = "INVALID_VMAP_RESPONSE",
  NO_AD_BREAKS_IN_VMAP = "NO_AD_BREAKS_IN_VMAP",
  CUSTOM_AD_SOURCE_IN_VMAP = "CUSTOM_AD_SOURCE_IN_VMAP",
  AD_BREAK_TYPE_NOT_SUPPORTED = "AD_BREAK_TYPE_NOT_SUPPORTED",
  NEITHER_AD_SOURCE_NOR_TRACKING = "NEITHER_AD_SOURCE_NOR_TRACKING",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  AD_POD_DROPPED_TO_MANY_AD_PODS = "AD_POD_DROPPED_TO_MANY_AD_PODS",
  AD_POD_DROPPED_EMPTY_ADS = "AD_POD_DROPPED_EMPTY_ADS",
  AD_BREAK_WITHOUT_AD_POD = "AD_BREAK_WITHOUT_AD_POD",
  TRANSCODING_IN_PROGRESS = "TRANSCODING_IN_PROGRESS",
  UNSUPPORTED_VAST_VERSION = "UNSUPPORTED_VAST_VERSION",
  AD_POD_DROPPED_BUMPER_ERROR = "AD_POD_DROPPED_BUMPER_ERROR",
  NO_VALID_MEDIAFILES_FOUND = "NO_VALID_MEDIAFILES_FOUND",
  EXCEEDS_MAX_FILLER = "EXCEEDS_MAX_FILLER",
  SKIPPABLE_AD_NOT_SUPPORTED = "SKIPPABLE_AD_NOT_SUPPORTED",
  AD_REQUEST_TIMEOUT = "AD_REQUEST_TIMEOUT",
  AD_POD_DROPPED_UNSUPPORTED_TYPE = "AD_POD_DROPPED_UNSUPPORTED_TYPE",
  DUPLICATE_AD_TAG = "DUPLICATE_AD_TAG",
  FOLLOW_REDIRECTS_IS_FALSE = "FOLLOW_REDIRECTS_IS_FALSE",
  UNKNOWN = "UNKNOWN",
}

export enum CreativeTranscodeIdType {
  AD_ID = "AD_ID",
  CREATIVE_ID = "CREATIVE_ID",
  CREATIVE_ADID = "CREATIVE_ADID",
  UNIVERSAL_AD_ID = "UNIVERSAL_AD_ID",
  MEDIA_URI = "MEDIA_URI",
  MEDIA_URI_PATH = "MEDIA_URI_PATH",
  CREATIVE_ADID_WITH_FALLBACK = "CREATIVE_ADID_WITH_FALLBACK",
  CANONICALIZED_MEDIA_URI = "CANONICALIZED_MEDIA_URI",
  GV_REGISTRY_ID = "GV_REGISTRY_ID",
  UNKNOWN_ID_TYPE = "UNKNOWN_ID_TYPE",
  MEDIA_URI_HASH = "MEDIA_URI_HASH",
  UNKNOWN = "UNKNOWN",
}
