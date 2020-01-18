import { SortRequest } from './base.request';

export interface OrderDetailListRequest extends SortRequest {
    orderId: number;
    keyword: string;
}

export interface OrderDetailGetByOrderIdRequest {
    orderId: number;
}
