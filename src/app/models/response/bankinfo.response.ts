import { PagingResponse, BaseEntityResponse } from './base.response';
import * as model from '../model/bankinfo.model';

export interface BankInfoListResponse extends PagingResponse<model.BankInfoListJTable[]> {

}
export interface BankInfoDetailResponse extends BaseEntityResponse<model.BankInfoUpdate> {

}
