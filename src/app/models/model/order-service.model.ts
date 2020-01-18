export class OrderServiceJTable {
    Id: number;
    Name:string;
    Description: string;
    Price: number;
    Unit: string;
    Status: number;
    CreatedDate: Date;
}

export class OrderServiceList {
    id: number;
    name:string;
    description: string;
    price: number;
    unit: string;
    status: number;
    createdDate: Date;
}

export class OrderServiceAdd {
    id: number;
    name:string;
    description: string;
    price: number;
    unit: string;
    status: number;
    constructor (){
        this.status = 1;
    }
}

export class OrderServiceEdit {
    id: number;
    name:string;
    description: string;
    price: number;
    unit: string;
    status: number;
    constructor (){
        this.status = 1;
    }
}

