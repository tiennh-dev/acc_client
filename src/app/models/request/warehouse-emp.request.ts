import { SortRequest } from './base.request';

export interface WarehouseEmpListRequest extends SortRequest {
    keyword: string;
}
