export class BankTransactionHistoryJTable {
    Id: string;
    AccountNumber: string;
    BankType: string;
    DebitAmount: number;
    CreditAmount: number;
    TransactionDate: Date;
    Description: string;
    CreatedDate: Date;
    Status: number;
    Note: string;
}
export class BankTransactionHistoryList {
    id: string;
    accountNumber: string;
    bankType: string;
    debitAmount: number;
    creditAmount: number;
    transactionDate: Date;
    description: string;
    createdDate: Date;
    status: number;
    note: string;
}
export class BankTransactionHistoryDetail {
    id: string;
    accountNumber: string;
    bankType: string;
    debitAmount: number;
    creditAmount: number;
    transactionDate: Date;
    description: string;
    createdDate: Date;
    status: number;
    note: string;
}
export class BankTransactionHistoryUpdate {
    id: string;
    note: string;
}