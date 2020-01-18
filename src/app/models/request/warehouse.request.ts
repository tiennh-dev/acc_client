import { SortRequest } from './base.request';

export interface WarehouseListRequest extends SortRequest {
    Keyword: string;
}

