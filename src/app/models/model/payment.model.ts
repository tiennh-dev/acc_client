export class PaymentJTable {
    Id: number;
    AccountId:string;
    WalletId: string;
    Amount: number;
    Status: number;
    Ref: string;
    RefType: string;
    RefCode: string;
    PaymentType: string;
    Description: string;
    Note: string;
    ProcessDate: Date;
    CreatedDate: Date;
    CreatedDateDisplay: string;
    AccountName: string;
    FullName: string;
    PaymentForm: string;
    State:string;
}
export class PaymentList {
    id: number;
    walletId: string;
    ref: string;refund: boolean;
    refType: string;
    refCode: string;
    description: string;
    createdDate: Date;
    createdDateDisplay: string;
    amount: number;
    status: number;
    paymentType: string;
    note: string;
    ơrocessDate: Date;
    accountName: string;
    paymentForm: string;
    state:string;
}
export class PaymentAdd {
    id: number;
    walletId:string;
    description: string;
    note: string;
    payType: string;
    amount: number;
    accountId: string;
    paymentform: string;
    refCode: string;
    constructor(){
        this.payType = null;
    }
}

export interface PaymentMessage {
    id: number;
    author: string;
    message: string;
    orderId: number;
    action:string;
    createdDate: Date | string;
    createdDateDisplay: string;
    authorDisplay: string;
}
