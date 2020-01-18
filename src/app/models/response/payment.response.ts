import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/payment.model';

export interface PaymentListResponse extends PagingResponse<model.PaymentJTable[]> {

}
export interface PaymentResponse extends BaseEntityResponse<model.PaymentList[]> {

}
