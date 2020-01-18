import { SortRequest } from './base.request';

export interface EmployessListRequest extends SortRequest {
    keyword: string;
    userName:string;
    fullName:string;
    phoneNumber:string;
    email:string;
}