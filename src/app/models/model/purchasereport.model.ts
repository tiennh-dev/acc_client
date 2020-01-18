export class PurchaseReport{
    Id:number;
    Title:string;
    Description:string;
    startDate:Date;
    endDate:Date;
    createdDate:Date;
    Status:number;
    SyncBy:string;
    SyncDate:Date;
    Type:string;
}


export class PurchaseReportView{
    Id:number;
    ReportId:number;
    OrderCode:string;
    ProductImage:string;
    ProductTitle:string;
    ProductLink:string;
    PaymentBy:string;
    PaymentType:string;
    PaymentDate:Date;
    Price:number;
    Tax:number;
    ShippingFee:number;
    ShippingCod:boolean;
    Warehouse:string;
    AccountId:string;
    DebitAmount:number;
    CreditAmount:number;
    CancelDate:Date;
}


export class PurchaseReportData{
    Id:number;
    Title:string;
    Description:string;
    StartDate:Date;
    EndDate:Date;
    CreatedDate:Date;
    CreatedBy:string;
    CreatedByString:string;
    Status:number;
    SyncBy:string;
    SyncDate:Date;
    Type:string;
}