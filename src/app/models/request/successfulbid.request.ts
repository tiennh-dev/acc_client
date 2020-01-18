import { SortRequest } from './base.request';

export interface SuccessfulBidListRequest extends SortRequest {
    accountId: string;
    YauserName: string;
    keyword: string;
}

