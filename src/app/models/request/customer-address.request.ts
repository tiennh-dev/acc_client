import { SortRequest } from './base.request';

export class CustomerAddressDeleteRequest {
    public id: number;
}

export interface CustomerAddressDetailRequest {
    id: number;
}

export interface CustomerAddressListRequest extends SortRequest {
    customerId: number;
    keyword: string;
}

export interface CustomerAddressByAccountListRequest {
    accountId: string;
}
