/**
 * Provides methods for creating, updating and retrieving AdRule objects.
 *
 * Ad rules contain data that the ad server uses to generate a playlist of video ads.
 */
export interface AdsTxtServiceOperations {
  /**
   * Returns the download URL String for the MCM Manage Inventory SupplyChain diagnostics report. The report is refreshed twice daily.
   *
   */
  getMcmSupplyChainDiagnosticsDownloadUrl(): Promise<string>;
}
