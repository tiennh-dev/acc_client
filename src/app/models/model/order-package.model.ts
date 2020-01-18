import * as model from '../model/order-package-product.model';
export class OrderPackageJTable {
    Id: number;
    Code:string;
    Weight: number;
    Width: number;
    Height: number;
    Length: number;
    OrderId: number;
    Image: string;
}

export class OrderPackageList {
    id: number;
    code:string;
    weight: number;
    width: number;
    height: number;
    length: number;
    orderId: number;
    image: string;
}

export class OrderPackageAdd {
    id: number;
    code:string;
    weight: number;
    width: number;
    height: number;
    length: number;
    orderId: number;
    image: string;
    image_preview: string;
    packageProducts: Array<model.OrderPackageProductAdd>;
    constructor(){
        this.packageProducts = new Array<model.OrderPackageProductAdd>();
        this.image = null;
        this.image_preview = null;
    }
}

export class OrderPackageEdit {
    id: number;
    code:string;
    weight: number;
    width: number;
    height: number;
    length: number;
    orderId: number;
    image: string;
    image_preview: string;
    packageProducts: Array<model.OrderPackageProductAdd>;
    constructor(){
        this.packageProducts = new Array<model.OrderPackageProductAdd>();
        this.image = null;
        this.image_preview = null;
    }
}

