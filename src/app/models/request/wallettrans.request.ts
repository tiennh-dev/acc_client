import { SortRequest } from './base.request';

export interface WalletTransListRequest extends SortRequest {
    keyword: string;
}
