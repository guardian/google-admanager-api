/**
 * Represents the actions that can be performed on {@link https://developers.google.com/ad-manager/api/reference/latest/TeamService.Team Team} objects.
 */
export abstract class TeamAction {}

/**
 * The action used for activating {@link https://developers.google.com/ad-manager/api/reference/latest/TeamService.Team Team} objects.
 */
export class ActivateTeams implements TeamAction {}

/**
 * The action used for deactivating {@link https://developers.google.com/ad-manager/api/reference/latest/TeamService.Team Team} objects.
 */
export class DeactivateTeams implements TeamAction {}
