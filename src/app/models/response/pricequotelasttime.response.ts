import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';
import * as model from '../model/pricequotelasttime.model';

export interface PriceQuoteLastTimeListResponse extends PagingResponse<model.PriceQuoteLastTimeJTable[]> {

}
// tslint:disable-next-line: no-empty-interface
export interface PriceQuoteLastTimeDeleteResponse extends BaseResponse {

}
