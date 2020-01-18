import { CustomerAddressAdd, CustomerAddressList } from "./customer-address.model";
import { CustomerJTable, CustomerList, CustomerBase } from "./customer.model";
import * as model from '../model/order-detail.model';

export class OrderJTable {
    Id: number;
    GuidID: string;
    Title: string;
    Operator: string;
    Saler: string;
    SalerRating:number;
    SalerReview:number;
    AccountId: string;
    Code: string;
    ShippingUnit: number;
    Total: number;AmountVND: number;
    ExchangeRate: number;
    Tracking: string;
    Status: number;
    State:string;
    StatusNote: string;
    TrackingStatus: number;
    OrderType: string;
    OrderDate: Date;
    PaymentType: number;
    PaymentDuration: number;
    DeliveryType: number;
    DeliveryExpected: Date;
    DeliveryDate: Date;
    DeliveryFee: number;
    DeliveryDiscount: number;
    Surcharge: number;
    CustomerDistrict: string;
    CustomerWard: string;
    CustomerAddress: string;
    CustomerPhone: string;
    CustomerName: string;
    CustomerIdName: string;
    CustomerProvince: string;
    IdOrderDetail:number;
    Note: string;
    MinPayment: number;
    Paid: number; PaidPercent: number;
    Hash: string;
    Seller: string;
    OrderNumber: string;
    Selected: boolean;
    ProAttribute:string;
    PreviewImage:string;
    ProductLink:string;
    ProductName:string;
    Ref:string;
    Price:string;
    Amount:number;
    Tax:number;
    OrderPaymentDetail: OrderPaymentDetail;
    OrderDetail:OrderDetailList[];
    constructor() {
        this.Selected = false;
    }
}

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
    exchangeRate: number;
    shippingFeeToLocal: number;
    shippingFeeLocal: number;
    buyFee: number;
    surcharge: number;
    status: number;
    note: string;
    ref: string;
    refType: string;
    orderDateStr: string;
    paymentDuration: number;
    proAttribute: string;
    orderNumber: string;
    paymentAccount:string;
    paymentAccountDisplay:string;
}
export class PaymentList {
    id: number;
    walletId: string;
    amount: number;
    amountstring: string;
    status: number;
    state:string;
    ref: string;
    refType: string;
    description: string;
    createdDate: Date;
    createdDateDisplay: string;
    paymentForm: string;
    note: string;
    paymentType: string;
    selected: boolean;
    refund: boolean;
}
export class OrderDetailPayment {
    orderdetails: OrderDetailList[];
    payments: PaymentList[];
    locations: CustomerAddressList[];
    order: OrderJTable;
    customer: CustomerBase;
}

export class OrderApp {
    id: number;
    guidId: string;
    title: string;
    operator: string;
    saler: string;
    accountId: string;
    code: string;
    shippingUnit: number | null;
    total: number | null;
    totalstring: string;
    buyFee: number | null;
    tracking: string;
    status: number | null;
    statusNote: string;
    trackingStatus: number | null;
    orderType: string;
    orderDate: Date | string;
    orderDateDisplay: string;
    paymentType: number | null;
    paymentDuration: number | null;
    deliveryType: number | null;
    deliveryExpected: Date | string | null;
    deliveryDate: Date | string | null;
    deliveryExpectedDisplay: string;
    deliveryDateDisplay: string;
    deliveryFee: number | null;
    deliveryDiscount: number | null;
    deliveryPartner: string;
    surcharge: number | null;
    customerDistrict: string;
    customerAddress: string;
    customerPhone: string;
    customerName: string;
    customerProvince: string;
    note: string;
    minPayment: number | null;
    paid: number | null;
    shippingFee: number | null;
    shippingFeeToLocal: number | null;
    orderPaymentDetail: OrderPaymentDetail;

    accountName: string;
    customerIdName: string;
    state: string;
    fullName: string;

    weight: number | null;
    width: number | null;
    hight: number | null;
    length: number | null;
    exchangeRate: number | null;
    shippingUnitGlobal: number | null;

    surchargeNote: string;
    warehouse: string;
    warehouseDisplay: string;
    productLink:string;
    tempAmountVND:number;
    amountVND:number;
}

export interface debtOrderList{
    orderListsAuc:Array<OrderApp>;
    orderListsBuyForYou:Array<OrderApp>;
    orderListsME:Array<OrderApp>;
}

export interface OrderMessage {
    id: number;
    author: string;
    message: string;
    orderId: number;
    createdDate: Date | string;
    createdDateDisplay: string;
    authorDisplay: string;
}

export interface OrderList {
   Id:string[];
}

export interface PurchaseAuctionQuoteUpdate{
    Id:number;
    Surcharge:number;
    Weight:number;
    Width:number;
    Hight:number;
    Length:number;
    Deliveryfee:number;
    ShippingFee:number;
}

export class RechageAution {
    amount: number;
    accountId: string;
    fullname:string;
    ftCode:string;
    walletId: string;
    bankDate:Date;
    bankDescription:string;
    note:string;
    bankNumber: string;
    accountNumber:string;
}

export interface OrderPaymentDetail {
    weight: number;
    width: number;
    hight: number;
    length: number;
    shippingUnitGlobal: number;
    shippingFee: number;
    shippingFeeVND: number;
    surcharge: number;
    surchargeVND: number;
    buyFee: number;
    total: number;
    totalVND: number;
    priceJP: number;
    buyFeeAmount: number;
    buyFeeAmountVND: number;
    shippingGlobalByWeightAmountVND: number;
    sizeToWeight: number;
    shippingGlobalBySizeAmountVND: number;
    shippingGlobalVND: number;
    exchangeRateVND: number;
    deliveryFeeVND: number;
    minPaymentPrice: number;
    minPaymentPriceVND: number;
    amountVND: number;
    totalDepositVND: number;
    debtVND: number;
    isPaid: boolean;
    temp: boolean;
    percentPayments: { [key: number]: number };
}

export class OrderAddNew{
    accountId:string;
    image:string;
    shippingFee:string;
    exchangeRate:string;
    title:string;
    price:number;
    amount:number;
    tax:number;
    note:string;
}

export class OrderBuyForYouAddRequest{
    accountId:string;
    title:string;
    customerDistrict: string;
    customerAddress: string;
    customerPhone: string;
    customerName: string;
    customerProvince: string;
    shippingFee:string;
    shippingUnitGlobal:string;
    buyFee:string;
    exchangeRate:string;
    Orderdetail: Array<model.OrderDetailList>;
    constructor(){
        this.Orderdetail = new Array<model.OrderDetailList>();
    }
}

export class ShippingInfo {
    warehouseCode: string;
    shippingFee: number;
}

export interface ImportModel{
    filename:string;
    
}
