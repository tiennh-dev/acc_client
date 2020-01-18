import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/deposits.model';

export interface DepositsListResponse extends PagingResponse<model.DepositsList[]> {

}
