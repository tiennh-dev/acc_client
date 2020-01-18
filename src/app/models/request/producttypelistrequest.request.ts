import { SortRequest } from "./base.request";

export class ProductTypeRequest{
    id:number;
    order:number;
}

export interface ProductTypeListRequestextends extends SortRequest {
    keyword: string;
}