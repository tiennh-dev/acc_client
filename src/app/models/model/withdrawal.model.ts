export class WithdrawalJTable {
    Id: number;
    Amount: number;
    AccountId: string;
    AccountName: string;
    BankNumber: string;
    BankAccountName:string;
    BankName: string;
    CreatedDate: Date;
    BankBranch: string;
    BankProvince: string;
    WithDrawalStatus: number;
    ConfirmStatus:number;
    WalletId:string;
    ProcessDate:Date;
    ProcessDateDisplay:Date;
    CreatedDateDisplay: Date;
    Note:string;
    ProofImage: string;
    State:string;
}


export class WithdrawalList {
    id: number;
    amount: number;
    accountId: string;
    bankNumber: string;
    bankAccountName:string;
    bankName: string;
    bankProvince: string;
    bankBranch: string;
    withDrawalStatus: number;
    confirmStatus: number;
    walletId: string;
    createdDate: Date;
    processDate: Date;
    note: string;
    proofImage: string;
    state:string;
}

export class WithdrawalDetail {
    id: number;
    amount: number;
    accountId: string;
    bankNumber: string;
    bankAccountName:string;
    bankName: string;
    bankProvince: string;
    bankBranch: string;
    withDrawalStatus: number;
    confirmStatus: number;
    walletId: string;
    createdDate: Date;
    processDate: Date;
    note: string;
    proofImage: string;
}

export class WithdrawalAdd {
    amount: number;
    accountId: string;
    // withDrawalStatus: number;
    // confirmStatus: number;
    walletId: string;
    note: string;
    proofImage: string;
    bankNumber: string;
    bankAccountName:string;
    bankName: string;
    bankProvince: string;
    bankBranch: string;
}

export class WithdrawalMessage {
    Id:number;
    Author:string;
    Message:string;
    WithDrawalId:number;
    CreatedDate:Date;
    Action:string;
}


