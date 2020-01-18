import * as model from '../models/model/favoriteseller.model';
import * as res from '../models/response/favoriteseller.response';
import * as req from '../models/request/favoriteseller.request';
import * as resCus from '../models/response/customer.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from '../models/request/customer.request';


@Injectable()
export class FavoriteSellerService {
    constructor(private http: HttpClientService) { }

    getList(request: req.FavoriteSellerListRequest): Observable<res.FavoriteSellerListResponse> {
        const url = ConfigSetting.FAVORITE_SELLER_LIST;
        return this.http.postAuthorize<res.FavoriteSellerListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.FavoriteSellerJTable>> {
        const url = ConfigSetting.FAVORITE_SELLER_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.FavoriteSellerJTable>>(url, request);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.FAVORITE_SELLER_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.FAVORITE_SELLER_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    delete(id: string, accountId: string): Observable<res.FavoriteSellerDeleteResponse> {
        const url = ConfigSetting.FAVORITE_SELLER_DELETE;
        return this.http.postAuthorize<res.FavoriteSellerDeleteResponse>(url + '/' + id + '/' + accountId, null);
    }
}
