export class OrderDetailJTable {
    Id: number;
    OrderId: number;
    ProductName: string;
    Images: string;
    Width: number;
    Hight: number;
}
export class OrderDetailList {
    id: number;
    orderId: number;
    productName: string;
    productLink: string;
    previewImage: string;
    images: string;
    barCode: string;
    trackingNumber: string;
    amount: number;
    amountUnit: string;
    weight: number;
    width: number;
    hight: number;
    lenght: number;
    price: number;
    tax: number;
    shippingFee: number;
    exchangeRate: string;
    shippingFeeToLocal: number;
    shippingFeeLocal: number;
    buyFee: number;
    surcharge: number;
    status: number;
    note: string;
    ref: string;
    refType: string;
    paymentDuration:number;
    proAttribute:string;
    size:string;
    color:string;
    public constructor(){
        this.amount=1;
        this.tax=0;
    }
}
