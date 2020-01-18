import { SortRequest } from './base.request';
export interface BankingInfoListRequest extends SortRequest {
    accountId: number;
    keyword: string;
}