export class DepositsJTable {
    Id: number;
    Amount: number;
    DepositStatus: number;
    AccountId: string;
    CreatedDate: Date;
    BankName: string;
    BankDescription: string;
    BankNumber: string;
    PayImage: string;
    PayStatus: number;
    ConfirmStatus: number;
    DepositType: string;
    WalletId: string;
    ProcessDate: Date;
    ProcessDateDisplay: string;
    CreatedDateDisplay: string;
    Note: string;
    AccountName: string;
    State:string;
}

export class DepositsList {
    id: number;
    amount: number;
    depositStatus: number;
    accountId: string;
    createdDate: Date;
    bankName: string;
    bankDescription: string;
    bankNumber: string;
    payImage: string;
    payStatus: number;
    confirmStatus: number;
    depositType: string;
    walletId: string;
    processDate: Date;
}

export class DepositsDetail {
    id: number;
    amount: number;
    depositStatus: number;
    accountId: string;
    createdDate: Date;
    bankName: string;
    bankDescription: string;
    bankNumber: string;
    payImage: string;
    payStatus: number;
    confirmStatus: number;
    depositType: string;
    walletId: string;
    processDate: Date;
    state:string;
}

export class DepositsAdd {
    amount: number;
    depositStatus: number;
    accountId: string;
    ftCode:string;
    bankName: string;
    bankDate:Date;
    bankDescription: string;
    bankNumber: string;
    payImage: string;
    payStatus: number;
    confirmStatus: number;
    depositType: string;
    walletId: string;
    note:string;
    accountNumber:string;
}

export interface DepositsMessage {
    id: number;
    author: string;
    message: string;
    orderId: number;
    action:string;
    createdDate: Date | string;
    createdDateDisplay: string;
    authorDisplay: string;
}