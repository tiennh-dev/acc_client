import { PagingResponse, BaseEntityResponse } from './base.response';
import * as modeld from '../model/order-detail.model';
import * as model from '../model/order.model';

export interface OrderListResponse extends BaseEntityResponse<modeld.OrderDetailList[]> {

}
export interface OrderDetailPayment extends BaseEntityResponse<model.OrderDetailPayment> {

}
export interface WorkflowTriggerInfoResponse {
    succeeded: boolean;
    errors: string[];
    triggers: string[];
}