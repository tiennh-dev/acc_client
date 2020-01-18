import { DataTableResponse } from '../models/response/base.response';
import { ConfigSetting } from '../common/config-setting';
import { HttpClientService } from './http-client.service';
import * as res from '../models/response/userbidproduct.response';
import * as resCus from '../models/response/customer.response';
import * as resProduct from '../models/response/productbid.response';
import * as req from '../models/request/userbidproduct.request';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable()
export class UserBidProductService {
    constructor(private http: HttpClientService) { }
    getListJTable(request: req.UserBidProductRequest): Observable<DataTableResponse<res.UserBidProductResponse>> {
        const url = ConfigSetting.USERBIDPRODUCT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<res.UserBidProductResponse>>(url, request);
    }
    getAllList(): Observable<res.UserBidProductListResponse> {
        const url = ConfigSetting.USERBIDPRODUCT_GET_LIST_ALL;
        return this.http.postAuthorize<res.UserBidProductResponse>(url, null);
    }
    getYAUserName(): Observable<resProduct.ProductBidClientInfoListResponse> {
        const url = ConfigSetting.GET_LIST_PRODUCTBID;
        return this.http.postAuthorize<resProduct.ProductBidClientInfoListResponse>(url, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.GET_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
}
