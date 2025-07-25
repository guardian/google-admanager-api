import type { StartDateTimeType } from "../../../common/enums";
import type { DateTime, PageResult } from "../../../common/types";
import type {
  AdBreakFillType,
  AdBreakMarkupType,
  AdServingFormat,
  DynamicAdInsertionType,
  LiveStreamEventStatus,
  PlaylistType,
  RefreshType,
  SlateStatus,
  StreamingFormat,
  TranscodeStatus,
} from "./liveStreamEvent.enum";

/**
 * Settings for the HLS (HTTP Live Streaming) master playlist.
 */
export type MasterPlaylistSettings = {
  /**
   * Indicates how the master playlist gets refreshed. This field is optional and defaults to RefreshType.AUTOMATIC.
   * This field can only be modified when the live stream is in a LiveStreamEventStatus.PAUSED state.
   */
  refreshType: RefreshType;
};

/**
 * LiveStream settings that are specific to the HTTP live streaming (HLS) protocol.
 */
export type HlsSettings = {
  /**
   * Indicates the type of the playlist associated with this live stream. The playlist type is analogous to the EXT-X-PLAYLIST-TYPE HLS tag.
   * This field is optional and will default to PlaylistType.LIVE. This field cannot be modified after live stream creation.
   */
  playlistType: PlaylistType;

  /**
   *  The settings for the master playlist. This field is optional and if it is not set will default to a MasterPlaylistSettings with a refresh type of RefreshType.AUTOMATIC.
   */
  masterPlaylistSettings: MasterPlaylistSettings;
};

/**
 * The information needed to prefetch ad requests for an ad break.
 */
export type PrefetchSettings = {
  /**
   * The duration of the part of the break to be prefetched.
   */
  initialAdRequestDurationSeconds: number;
};

/**
 * A LiveStreamEvent encapsulates all the information necessary to enable DAI (Dynamic Ad Insertion) into a live video stream.
 *
 * This includes information such as the start and expected end time of the live stream, the URL of the actual content for Ad Manager to pull and insert ads into,
 * as well as the metadata necessary to generate ad requests during the live stream.
 */
export type LiveStreamEvent = {
  /**
   * The unique ID of the LiveStreamEvent. This value is read-only and is assigned by Google.
   */
  id: number;

  /**
   * The name of the LiveStreamEvent. This value is required to create a live stream event and has a maximum length of 255 characters.
   */
  name: string;

  /**
   * The status of this LiveStreamEvent. This attribute is read-only and is assigned by Google. Live stream events are created in the LiveStreamEventStatus.PAUSED state.
   */
  status: LiveStreamEventStatus;

  /**
   * The date and time this LiveStreamEvent was created. This attribute is read-only.
   */
  creationDateTime: DateTime;

  /**
   * The date and time this LiveStreamEvent was last modified. This attribute is read-only.
   */
  lastModifiedDateTime: DateTime;

  /**
   * The start date and time of this LiveStreamEvent. This attribute is required if the LiveStreamEvent.startDateTimeType is StartDateTimeType.USE_START_DATE_TIME and is ignored for all other values of StartDateTimeType. Modifying this attribute for an active live stream can impact traffic.
   */
  startDateTime: DateTime;

  /**
   * Specifies whether to start the LiveStreamEvent right away, in an hour, etc. This attribute is optional and defaults to StartDateTimeType.USE_START_DATE_TIME.
   */
  startDateTimeType: StartDateTimeType;

  /**
   * The scheduled end date and time of this LiveStreamEvent. This attribute is required if unlimitedEndDateTime is false and ignored if unlimitedEndDateTime is true. Modifying this attribute for an active live stream can impact traffic.
   */
  endDateTime: DateTime;

  /**
   * Whether the LiveStreamEvent has an end time. This attribute is optional and defaults to false. If this field is true, endDateTime is ignored.
   */
  unlimitedEndDateTime: boolean;

  /**
   * The total number of concurrent users expected to watch this live stream across all regions. This attribute is optional and default value is 0.
   */
  totalEstimatedConcurrentUsers: number;

  /**
   * The list of URLs pointing to the live stream content in Content Delivery Network. This attribute is required and can be modified when the live stream is in a LiveStreamEventStatus.PAUSED state.
   */
  contentUrls: string[];

  /**
   * The list of Ad Manager ad tag URLs generated by the Ad Manager trafficking workflow that are associated with this live stream event. Currently, the list includes only one element: the master ad tag. This attribute is required.
   */
  adTags: string[];

  /**
   * This code is used in constructing a live stream event master playlist URL. This attribute is read-only and is assigned by Google. liveStreamEventCode was renamed assetKey in v201911.
   */
  assetKey: string;

  /**
   * ID corresponding to the slate for this live event. If not set, network default value will be used.
   */
  slateCreativeId: number;

  /**
   * Length of the DVR window in seconds. This value is optional. If unset the default window as provided by the input encoder will be used. Modifying this value for an active live stream can impact traffic.
   */
  dvrWindowSeconds: number;

  /**
   * Whether the live stream's requests to the IMA SDK API will be authenticated using the DAI authentication keys.
   */
  enableDaiAuthenticationKeys: boolean;

  /**
   * The type of content that should be used to fill an empty ad break. This value is optional and defaults to AdBreakFillType.SLATE.
   */
  adBreakFillType: AdBreakFillType;

  /**
   * The type of content that should be used to fill the time remaining in the ad break when there are not enough ads to fill the entire break.
   * This value is optional and defaults to AdBreakFillType.SLATE. To set this field a network needs to have the "Live stream ad break underfill type" feature enabled.
   */
  underfillAdBreakFillType: AdBreakFillType;

  /**
   * The duration (in seconds), starting from the time the user enters the DAI stream, for which mid-roll decisioning will be skipped. This field is only applicable when an ad holiday is requested in the stream create request. This value is optional and defaults to 0.
   */
  adHolidayDuration: number;

  /**
   * Whether there will be max filler duration in this live stream. If true, maxFillerDuration should be specified. This field is optional and defaults to false.
   */
  enableMaxFillerDuration: boolean;

  /**
   * The maximum number of seconds that can be used to fill this ad pod, either with a slate or underlying content, depending on your settings. If more time needs to be filled, the ad pod will instead be dropped and the underlying content will be served.
   */
  maxFillerDuration: number;

  /**
   * Whether there will be durationless ad breaks in this live stream. If true, defaultAdBreakDuration should be specified. This field is optional and defaults to false;
   */
  enableDurationlessAdBreaks: boolean;

  /**
   * The default ad pod duration (in seconds) that will be requested when an ad break cue-out does not specify a duration. This field is optional and defaults to 0;
   */
  defaultAdBreakDuration: number;

  /**
   * The list of DaiAuthenticationKey IDs used to authenticate stream create requests for this live stream. Modifying keys for an active live stream may break the stream for some users. Exercise caution.
   */
  streamCreateDaiAuthenticationKeyIds: number[];

  /**
   * The list of CdnConfiguration IDs that provide settings for ingesting and delivering the videos associated with this source. Modifying settings for an active live stream may break the stream for some users. Exercise caution.
   */
  sourceContentConfigurationIds: number[];

  /**
   * The settings that are specific to HTTPS live streaming (HLS) protocol. This field is optional and if it is not set will use the default HLS settings.
   */
  hlsSettings: HlsSettings;

  /**
   * Whether specific allowlisted IP addresses should be used to access this live stream. This field is optional and will default to false. To set this field a network needs to have the "Video live allowlisted IPS enabled" feature enabled. Modifying this field for an active live stream can impact traffic.
   */
  enableAllowlistedIps: boolean;

  /**
   * The method of dynamic ad insertion that is used to insert ads into this live stream. This attribute is optional and defaults to DynamicAdInsertionType.LINEAR. This field cannot be modified after live stream creation.
   */
  dynamicAdInsertionType: DynamicAdInsertionType;

  /**
   * Whether the served playlists can include relative URLs. This field is optional and defaults to false.
   * To set this field a network needs to have the "Video live stream relative playlist URLs" feature enabled.
   * This field can be modified when the live stream is in a LiveStreamEventStatus.PAUSED state.
   */
  enableRelativePlaylistDelivery: boolean;

  /**
   * The streaming format of the LiveStreamEvent media. This field cannot be modified after live stream creation.
   */
  streamingFormat: StreamingFormat;

  /**
   * Indicates whether the option to prefetch ad requests is enabled.
   */
  prefetchEnabled: boolean;

  /**
   * The information needed to prefetch ad requests for an ad break.
   */
  prefetchSettings: PrefetchSettings;

  /**
   * Whether live stream placement opportunities without #EXT-CUE-IN markers should be force closed. This field is optional and defaults to false. To set this field a network needs to have the "Video live stream forced cue in" feature enabled.
   */
  enableForceCloseAdBreaks: boolean;

  /**
   * Whether segments shorter than 1 second at the end of an ad pod should be dropped. This field is optional and defaults to false. To set this field a network needs to have the "Video live stream short segment dropping" feature enabled.
   */
  enableShortSegmentDropping: boolean;

  /**
   * An additional code that can be used in constructing live stream event URLs. This field is immutable after creation and can only be set for pod serving live streams. The custom asset key may be at most 64 characters and can contain alphanumeric characters and symbols other than the following: ", ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character.
   */
  customAssetKey: string;

  /**
   * The list of DaiEncodingProfile IDs that will be used for this live stream event. This field only applies to pod serving events. New profile IDs can be added to running live streams. Profile IDs cannot be removed from running live streams. Modifying settings for an active live stream may break the stream for some users. Exercise caution.
   */
  daiEncodingProfileIds: number[];

  /**
   * The list of DaiAuthenticationKey IDs used to authenticate ad segment url requests for this live stream. This field only applies to pod serving events. Modifying settings for an active live stream may break the stream for some users. Exercise caution.
   */
  segmentUrlAuthenticationKeyIds: number[];

  /**
   * The formats that will be recognized as ad break start/end markers. This field is ignored if adBreakMarkupTypesEnabled is false
   */
  adBreakMarkups: AdBreakMarkupType[];

  /**
   * Whether this LiveStreamEvent is specifying a subset of supported adBreakMarkups. If this field is false, all supported formats will be treated as ad break start/end markers.
   */
  adBreakMarkupTypesEnabled: boolean;

  /**
   * Whether ads on this LiveStreamEvent are served by Google Ad Manager DAI or Google Ad Serving.
   */
  adServingFormat: AdServingFormat;
};

/**
 * Captures a page of {@link https://developers.google.com/ad-manager/api/reference/v202505/LiveStreamEventService.LiveStreamEvent LiveStreamEvent} objects.
 */
export type LiveStreamEventPage = PageResult<LiveStreamEvent>;

/**
 * A Slate encapsulates all the information necessary to represent a Slate entity, the video creative used by Dynamic Ad Insertion to fill vacant ad slots.
 */
export type Slate = {
  /**
   * The unique ID of the Slate. This value is read-only and is assigned by Google.
   */
  id: number;

  /**
   * The name of the Slate. This value is required to create a slate and has a maximum length of 255 characters.
   */
  name: string;

  /**
   * The status of this Slate. This attribute is read-only and is assigned by Google. Slates are created in the SlateStatus.ACTIVE state.
   */
  status: SlateStatus;

  /**
   * Server side transcoding status of the current slate.
   */
  transcodeStatus: TranscodeStatus;

  /**
   * The location of the original asset if publisher provided and slate is externally hosted.
   */
  videoSourceUrl: string;

  /**
   * The date and time this slate was last modified.
   */
  lastModifiedDateTime: DateTime;
};

/**
 * Represents the actions that can be performed on slates.
 */
export type SlateAction = "ArchiveSlates" | "UnarchiveSlates";

/**
 * Captures a page of Slate objects.
 */
export type SlatePage = PageResult<Slate>;
