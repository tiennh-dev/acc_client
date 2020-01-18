export class PurchaseReportRequest{
    Id:number;
    orderCode:string;
    productTitle:string;
    paymentBy:Array<string>;
    paymentStartDate:Date;
    paymentEndDate:Date;
    debtAmount:boolean;
}


export class PurchaseReportMercariRequest{
    Id:number;
}