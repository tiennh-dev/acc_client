export class OrderdetailupdateRequest{
    Id:number;
    orderId:string;
    price:number;
    tax:number;
    exchangeRate:number;
    shippingFee:number;
    BuyFee:number;
    status:number;
    previewimage:string;
}

export class OrderdetailupdateFromUrlRequest{
    Id:number;
    ref:string
    previewimage:string;
    name:string;
}