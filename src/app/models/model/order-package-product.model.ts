export class OrderPackageProductJTable {
    Id: number;
    Name:string;
    NameCustom:string;
    Qty: number;
    Price: number;
    PriceCustom: number;
    PackageId: number;
    Image: string;
}

export class OrderPackageProductList {
    id: number;
    name:string;
    nameCustom:string;
    qty: number;
    price: number;
    priceCustom: number;
    packageId: number;
    image: string;
}

export class OrderPackageProductAdd {
    id: number;
    name:string;
    nameCustom:string;
    qty: number;
    price: number;
    priceCustom: number;
    packageId: number;
    image: string;
    constructor(){
        this.qty = 1;
    }
}

export class OrderPackageProductEdit {
    id: number;
    name:string;
    nameCustom:string;
    qty: number;
    price: number;
    priceCustom: number;
    packageId: number;
    image: string;
    constructor(){
        this.qty = 1;
    }
}