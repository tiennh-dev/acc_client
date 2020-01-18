import { SortRequest } from './base.request';

export interface FavoriteProductListRequest extends SortRequest {
    keyword: string;
}
