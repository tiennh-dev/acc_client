import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/BidExternalConfig.model';

export interface BidExternalConfigListResponse extends PagingResponse<model.BidExternalConfigJTable[]> {

}