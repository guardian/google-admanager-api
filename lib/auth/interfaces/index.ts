export interface Credential {
  /**
   * Get a non-expired access token, after refreshing if necessary
   */
  getToken(): Promise<string | null | undefined>;
}
