import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/withdrawal.model';

export interface WithdrawalListResponse extends PagingResponse<model.WithdrawalList[]> {

}
