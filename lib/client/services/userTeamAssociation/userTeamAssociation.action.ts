/**
 * Represents the actions that can be performed on {@link https://developers.google.com/ad-manager/api/reference/v202505/UserTeamAssociationService.UserTeamAssociation UserTeamAssociation} objects.
 */
export abstract class UserTeamAssociationAction {}

/**
 * Action to delete the association between a {@link https://developers.google.com/ad-manager/api/reference/v202505/UserService.User User} and a {@link https://developers.google.com/ad-manager/api/reference/v202505/TeamService.Team Team}.
 */
export class DeleteUserTeamAssociations implements UserTeamAssociationAction {}
