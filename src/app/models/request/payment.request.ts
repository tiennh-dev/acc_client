import { SortRequest } from './base.request';

export interface PaymentListRequest extends SortRequest {
    keyword: string;
}

export class PaymentAddRequest{
    walletId:string;
    AccountId:string;
    Amount:number;
    Ref:number;
    refType:string;
    refCode:string;
    PaymentTye:string;
    status:number;
    PaymentForm:string;
    description:string;
}
export class PaymentAddForOrderBuyForYouRequest{
    walletId:string;
    AccountId:string;
    Amount:number;
    Ref:number;
    refType:string;
    refCode:string;
    status:number;
    description:string;
}

export class PaymentAddForOrderAutionRequest{
    walletId:string;
    AccountId:string;
    Amount:number;
    Ref:number;
    refType:string;
    refCode:string;
    PaymentTye:string;
    status:number;
    description:string;
}


export class PaymentAddNewRequest{
    walletId:string;
    AccountId:string;
    Amount:number;
    PaymentForm:string;
    description:string;
}

export class PaymentWorkflowRequest{
    Id:number;
    Message:string;
}

export class PaymentMessageGetByIdRequest{
    Id:number;
}

export class RefundRequest {
    paymentId: number;
    description: string;
}


export class CheckRefundFromPaymentExistingRequest {
    paymentId: number;
}