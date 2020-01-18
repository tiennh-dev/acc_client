import { SortRequest } from './base.request';

export interface FreezeListRequest extends SortRequest {
    keyword: string;
}


export class FreeZeAddNewRequest {
    walletId: string;
    AccountId: string;
    amount: number;
    Type: string;
    RefType: string;
    description: string;
}

export class FreeZeUpdateRequest {
    Id: number;
    AccountId: string
    WalletId: string
    Amount: number
    Type: string
    Ref: string
    Description: string
    Status: number
    RefType: string
}

