import { PagingResponse } from './base.response';
import * as model from '../model/productbid.model';


export interface ProductBidClientInfoListResponse extends PagingResponse<model.ProductBidClientInfoList[]> {
}
