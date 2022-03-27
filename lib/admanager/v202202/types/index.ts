import {
  AccountStatus,
  DeclarationType,
  DelegationStatus,
  DelegationType,
  OnboardingTask,
} from '../enums';

export * from './cdnConfiguration.type';
export * from './audienceSegment.type';
export * from './customCriteria.type';
export * from './activityGroup.type';
export * from './videoPosition.type';
export * from './cmsMetadata.type';
export * from './adjustment.type';
export * from './targeting.type';
export * from './activity.type';
export * from './network.type';
export * from './adRule.type';
export * from './adSpot.type';
export * from './order.type';
export * from './user.type';

/**
 * Represents a set of declarations about what (if any) third party companies are associated with a given creative.
 *
 * This can be set at the network level, as a default for all creatives, or overridden for a particular creative.
 *
 */
export type ThirdPartyDataDeclaration = {
  declarationType: DeclarationType;
  thirdPartyCompanyIds: number[];
};

export type ChildPublisher = {
  approvedDelegationType: DelegationType;
  proposedDelegationType: DelegationType;
  status: DelegationStatus;
  accountStatus: AccountStatus;
  childNetworkCode: string;
  sellerId: string;
  proposedRevenueShareMillipercent: number;
  onboardingTasks: OnboardingTask[];
};

/**
 * Represents a money amount.
 */
export type Money = {
  /**
   * Three letter currency code in string format.
   */
  currencyCode: string;
  /**
   * Money values are always specified in terms of micros which are a millionth of the fundamental currency unit. For US dollars, $1 is 1,000,000 micros.
   */
  microAmount: number;
};
