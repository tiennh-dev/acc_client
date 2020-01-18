import { SortRequest } from './base.request';

// tslint:disable-next-line: no-empty-interface
export interface FavoriteSellerListRequest extends SortRequest {
    keyword: string;
}
