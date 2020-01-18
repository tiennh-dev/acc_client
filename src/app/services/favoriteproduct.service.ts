import * as model from '../models/model/favoriteproduct.model';
import * as res from '../models/response/favoriteproduct.response';
import * as req from '../models/request/favoriteproduct.request';
import * as resCus from '../models/response/customer.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from '../models/request/customer.request';


@Injectable()
export class FavoriteProductService {
    constructor(private http: HttpClientService) { }

    getList(request: req.FavoriteProductListRequest): Observable<res.FavoriteProductListResponse> {
        const url = ConfigSetting.FAVORITE_PRODUCT_LIST;
        return this.http.postAuthorize<res.FavoriteProductListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.FavoriteProductJTable>> {
        const url = ConfigSetting.FAVORITE_PRODUCT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.FavoriteProductJTable>>(url, request);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.FAVORITE_PRODUCT_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.FAVORITE_PRODUCT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }
    delete(id: string, accountId: string): Observable<BaseResponse> {
        const url = ConfigSetting.FAVORITE_PRODUCT_DELETE;
        return this.http.postAuthorize<BaseResponse>(url + '/' + id + '/' + accountId, null);
    }
}
