import { SortRequest } from "./base.request";

export class WareHouseRequest{
    id:number;
    order:number;
}

export interface WareHouseListRequestextends extends SortRequest {
    keyword: string;
}