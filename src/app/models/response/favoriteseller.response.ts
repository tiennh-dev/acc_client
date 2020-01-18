import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';
import * as model from '../model/favoriteseller.model';

export interface FavoriteSellerListResponse extends PagingResponse<model.FavoriteSellerJTable[]> {

}
// tslint:disable-next-line: no-empty-interface
export interface FavoriteSellerDeleteResponse extends BaseResponse {

}
