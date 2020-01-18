import { PagingResponse, BaseResponse } from './base.response';
import * as model from '../model/userbidproduct.model';
export interface UserBidProductResponse extends PagingResponse<model.UserBidProduct[]> {
    UserId: string;
    Productid: string;
}
export interface UserBidProductListResponse extends PagingResponse<model.UserBidProduct[]> {

}
