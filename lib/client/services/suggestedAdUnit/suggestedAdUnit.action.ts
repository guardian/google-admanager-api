/**
 * Represents the actions that can be performed on {@link https://developers.google.com/ad-manager/api/reference/latest/SuggestedAdUnitService.SuggestedAdUnit SuggestedAdUnit} objects.
 */
export abstract class SuggestedAdUnitAction {}

/**
 * Action to approve {@link https://developers.google.com/ad-manager/api/reference/latest/SuggestedAdUnitService.SuggestedAdUnit SuggestedAdUnit} objects.
 */
export class ApproveSuggestedAdUnits implements SuggestedAdUnitAction {}
