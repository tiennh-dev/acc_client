import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/banktransactionhistory.model';

export interface BankTransactionListResponse extends PagingResponse<model.BankTransactionHistoryJTable[]> {

}
export interface BankTransactionDetailResponse extends BaseEntityResponse<model.BankTransactionHistoryDetail> {

}
