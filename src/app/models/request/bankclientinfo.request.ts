
import { SortRequest } from './base.request';

export interface BankClientInfoListRequest extends SortRequest {
    keyword: string;
}
export class LoginRequest {
    capcha: string;
    constructor() {
        this.capcha = '';
    }
}
