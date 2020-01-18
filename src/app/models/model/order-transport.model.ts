import * as model from '../model/order-package.model';
export class OrderTransportAdd {
    id: number;
    title: string;
    tracking: string;
    accountId: string;
    customerDistrict: string;
    customerAddress: string;
    customerPhone: string;
    customerName: string;
    customerProvince: string;
    note: string;
    warehouse: string;
    packages: Array<model.OrderPackageAdd>;
    orderServices: Array<number>;
    constructor(){
        this.packages = new Array<model.OrderPackageAdd>();
        this.orderServices = new Array<number>();
    }
}

export class OrderTransportEdit {
    id: number;
    title: string;
    tracking: string;
    accountId: string;
    accountName: string;
    customerDistrict: string;
    customerAddress: string;
    customerPhone: string;
    customerName: string;
    customerProvince: string;
    note: string;
    warehouse: string;
    packages: Array<model.OrderPackageAdd>;
    orderServices: Array<number>;
    constructor(){
        this.packages = new Array<model.OrderPackageAdd>();
        this.orderServices = new Array<number>();
    }
}

