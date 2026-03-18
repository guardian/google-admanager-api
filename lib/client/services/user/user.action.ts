/**
 * Represents the actions that can be performed on {@link https://developers.google.com/ad-manager/api/reference/latest/UserService.User User} objects.
 */
export abstract class UserAction {}

/**
 * The action used for activating {@link https://developers.google.com/ad-manager/api/reference/latest/UserService.User User} objects.
 */
export class ActivateUsers implements UserAction {}

/**
 * The action used for deactivating {@link https://developers.google.com/ad-manager/api/reference/latest/UserService.User User} objects.
 */
export class DeactivateUsers implements UserAction {}
