import * as model from './../models/model/successfulbid.model';
import * as res from './../models/response/successsfulbid.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/successfulbid.request';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';

@Injectable()
export class SuccessfulBidService {
    constructor(private http: HttpClientService) { }

    getList(request: req.SuccessfulBidListRequest): Observable<res.SuccessfulBidListResponse> {
        const url = ConfigSetting.SUCCESSFULBID_LIST;
        return this.http.postAuthorize<res.SuccessfulBidListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.SuccessfulBidJTable>> {
        const url = ConfigSetting.SUCCESSFULBID_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.SuccessfulBidJTable>>(url, request);
    }
    getAllList(): Observable<res.SuccessfulBidListResponse> {
        const url = ConfigSetting.SUCCESSFULBID_ALL_LIST;
        return this.http.postAuthorize<res.SuccessfulBidListResponse>(url, null);
    }
    getListSuccessfulJTable(request: any): Observable<DataTableResponse<model.SuccessfulBidJTable>> {
        const url = ConfigSetting.SUCCESSFULBID_LIST_JTABLE_ORDER;
        return this.http.postAuthorize<DataTableResponse<model.SuccessfulBidJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.GET_ALL_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    changePaymentStatus(status: number, id: string): Observable<BaseResponse> {
        const url = ConfigSetting.SUCCESSFULBID_CHANGE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url + '/' + status + '/' + id, null);
    }
    exportExcel(): Observable<Blob> {
        const url = ConfigSetting.SUCCESSFULBID_EXP_EXCEL;
        return this.http.postAuthorize<Blob>(url, null);
    }
}
