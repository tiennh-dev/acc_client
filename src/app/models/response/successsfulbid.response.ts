import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/successfulbid.model';


export interface SuccessfulBidListResponse extends PagingResponse<model.SuccessfulBidList[]> {
}
