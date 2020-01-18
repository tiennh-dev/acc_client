import { SortRequest } from './base.request';

export interface DepositsListRequest extends SortRequest {
    keyword: string;
}
export class DepositWorkflowRequest{
    Id:number;
    message:string;
}

export interface DepositsListTopRequest {
    keyword: string;
    limit: number;
}

export interface DepositsListExportRequest {
    StartTime : Date;
    EndTime:Date;
    AccountId:string;
    DepositSt:string;
    BankNumber:string;
    BankDescription:string;
    state:string;
}
