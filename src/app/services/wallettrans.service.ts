import * as model from './../models/model/wallettrans.model';
import * as res from './../models/response/wallettrans.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/wallettrans.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as modelCus from './../models/model/customer.model';
import * as reqCus from './../models/request/customer.request';


@Injectable()
export class WalletTransService {
    constructor(private http: HttpClientService) { }

    getList(request: req.WalletTransListRequest): Observable<res.WalletTransListResponse> {
        const url = ConfigSetting.WALLETTRANS_LIST;
        return this.http.postAuthorize<res.WalletTransListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.WalletTransJTable>> {
        const url = ConfigSetting.WALLETTRANS_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.WalletTransJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WALLETTRANS_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.WALLETTRANS_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

}
