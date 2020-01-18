import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/customer.model';

export interface CustomerDetailResponse extends BaseEntityResponse<model.CustomerEdit> {

}

export interface CustomerListResponse extends PagingResponse<model.CustomerList[]> {

}
