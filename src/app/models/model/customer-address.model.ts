export class CustomerAddressJTable {
    Id: string;
    Name: string;
    CustomerId: number;
    Phone: string;
    Address: string;
    District: string;
    Note: string;
    _STT: number;
}

export class CustomerAddressAdd {
    name: string;
    phone: string;
    address: string;
    district: string;
    customerId: string;
    province:string;
    ward:string;
    note: string;
    constructor() {
        this.name = '',
        this.phone = '',
        this.customerId = '';
        this.address = '';
        this.note = '';
    }
}

export class CustomerAddressEdit {
    id: number;
    name: string;
    phone: string;
    address: string;
    district: string;
    province: string;
    customerId: number;
    ward:string;
    note: string;
    constructor() {
        this.name = '',
        this.phone = '',
        this.customerId = 0;
        this.address = '';
        this.note = '';
    }
}

export class CustomerAddressDetail {
    id: number;
    name: string;
    phone: string;
    address: string;
    district: string;
    customerId: number;
    province: string;
    ward:string;
    note: string;
}


export class CustomerAddressList {
    id: string;
    name: string;
    phone: string;
    address: string;
    province: string;
    district: string;
    customerId: number;
    note: string;
    ward:string;
}

