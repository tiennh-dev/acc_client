import { SortRequest } from './base.request';

export class CustomerDeleteRequest {
    public id: number;
}

export interface CustomerDetailRequest {
    id: number;
}

export interface CustomerListRequest extends SortRequest {
    keyword: string;
    UserName:string;
    Email:string;
    Phone:string;
    CustomerName:string;
    careBy:string;
    checkstatus:number;
}

export interface CustomerListTopRequest {
    keyword: string;
    limit: number;
}

