import type { PageResult } from '../../../common/types';
import type { ApprovalStatus, DisapprovalReasonType } from './site.enum';

export type DisapprovalReason = {
  type: DisapprovalReasonType;
  details: string;
};

export type Site = {
  id: number;
  url: string;
  childNetworkCode: string;
  approvalStatus: ApprovalStatus;
  active: boolean;
  disapprovalReasons: DisapprovalReason[];
};

export type SitePage = PageResult<Site>;
