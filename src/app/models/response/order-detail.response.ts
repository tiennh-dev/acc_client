import { BaseEntityResponse } from './base.response';
import * as model from '../model/order-detail.model';

export interface OrderDetailListResponse extends BaseEntityResponse<model.OrderDetailList[]> {

}
