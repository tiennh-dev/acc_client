import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/favoriteproduct.model';

export interface FavoriteProductListResponse extends PagingResponse<model.FavoriteProductJTable[]> {

}
