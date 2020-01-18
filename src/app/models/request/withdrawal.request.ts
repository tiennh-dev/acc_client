import { SortRequest } from './base.request';

export interface WithdrawalListRequest extends SortRequest {
    keyword: string;
}

export class WithdraWalWorkflowRequest{
    Id:number;
    Message:string;
}


export class WithdrawalMessageGetByIdRequest{
    Id:number;
}
