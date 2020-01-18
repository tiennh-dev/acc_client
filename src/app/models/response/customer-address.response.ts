import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/customer-address.model';

export interface CustomerAddressDetailResponse extends BaseEntityResponse<model.CustomerAddressDetail> {

}

export interface CustomerAddressListResponse extends PagingResponse<model.CustomerAddressList[]> {

}
