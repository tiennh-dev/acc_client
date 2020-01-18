import * as model from './../models/model/order-detail.model';
import * as res from './../models/response/order-detail.response';
import * as req from './../models/request/order-detail.request';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class OrderDetailService {
    constructor(private http: HttpClientService) { }

    getList(request: req.OrderDetailListRequest): Observable<res.OrderDetailListResponse> {
        const url = ConfigSetting.ORDERDETAIL_LIST;
        return this.http.postAuthorize<res.OrderDetailListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderDetailJTable>> {
        const url = ConfigSetting.ORDERDETAIL_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderDetailJTable>>(url, request);
    }
}
