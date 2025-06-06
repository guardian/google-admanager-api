export enum InvitationStatus {
  /**
   * The value returned if the actual value is not exposed by the requested API version.
   */
  UNKNOWN = "UNKNOWN",
  /**
   * The association request from the parent network has been accepted by the child network.
   */
  ACCEPTED = "ACCEPTED",
  /**
   * The invitation has expired. An invitation is valid for 90 days. Expired invitations can be resent.
   */
  EXPIRED = "EXPIRED",
  /**
   * The child publisher has not acted on the invite from the parent.
   */
  PENDING = "PENDING",
  /**
   * The child publisher has declined the invite.
   */
  REJECTED = "REJECTED",
  /**
   * The parent network withdrew the invite.
   */
  WITHDRAWN = "WITHDRAWN",
  /**
   * The invitation was disapproved by Google.
   */
  DEACTIVATED_BY_AD_MANAGER = "DEACTIVATED_BY_AD_MANAGER",
}
