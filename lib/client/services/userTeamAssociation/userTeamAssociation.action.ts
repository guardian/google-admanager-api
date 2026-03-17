/**
 * Represents the actions that can be performed on {@link https://developers.google.com/ad-manager/api/reference/latest/UserTeamAssociationService.UserTeamAssociation UserTeamAssociation} objects.
 */
export abstract class UserTeamAssociationAction {}

/**
 * Action to delete the association between a {@link https://developers.google.com/ad-manager/api/reference/latest/UserService.User User} and a {@link https://developers.google.com/ad-manager/api/reference/latest/TeamService.Team Team}.
 */
export class DeleteUserTeamAssociations implements UserTeamAssociationAction {}
