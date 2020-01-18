import { SortRequest } from './base.request';

export interface BankTransactionHistoryListRequest extends SortRequest {
    keyword: string;
}
