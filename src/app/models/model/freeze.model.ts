export class FreezeJTable {
    Id: number;
    Amount: number;
    Status: number;
    AccountId: string;
    CreatedDate: Date;
    Description:string;
    RefType:string;
    Ref:string;
    Type:string;
    WalletId:string;
    ProcessDate:Date;
    ProcessDateDisplay:string;
    CreatedDateDisplay:string;
}

export class FreezeAdd {
    amount: number;
    status: number;
    accountId: string;
    createdDate: Date;
    description:string;
    refType:string;
    ref:string;
    type:string;
    walletId:string;
}