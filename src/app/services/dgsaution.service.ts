import * as model from './../models/model/successfulbid.model';
import * as res from './../models/response/successsfulbid.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/successfulbid.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as bid from './../models/response/bidClient.response';
import * as reqCus from '../models/request/customer.request';
import { OrderMessageGetByOrderIdRequest } from '../models/request/order.request';
import * as modelorder from './../models/model/order.model';



@Injectable()
export class DgsAutionService {
    constructor(private http: HttpClientService) { }

    getList(request: req.SuccessfulBidListRequest): Observable<res.SuccessfulBidListResponse> {
        const url = ConfigSetting.DGSAution_LIST;
        return this.http.postAuthorize<res.SuccessfulBidListResponse>(url, request);
    }
    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.DGSAution_BIDCLIENT;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }
    getListJTable(request: any): Observable<DataTableResponse<model.SuccessfulBidJTable>> {
        const url = ConfigSetting.DGSAution_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.SuccessfulBidJTable>>(url, request);
    }
    getAllList(): Observable<res.SuccessfulBidListResponse> {
        const url = ConfigSetting.DGSAution_ALL_LIST;
        return this.http.postAuthorize<res.SuccessfulBidListResponse>(url, null);
    }
    getListSuccessfulJTable(request: any): Observable<DataTableResponse<model.SuccessfulBidJTable>> {
        const url = ConfigSetting.DGSAution_LIST_JTABLE_ORDER;
        return this.http.postAuthorize<DataTableResponse<model.SuccessfulBidJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.GET_ALL_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.DGSAUTION_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }
    changePaymentStatus(status: number, id: string): Observable<BaseResponse> {
        const url = ConfigSetting.DGSAution_CHANGE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url + '/' + status + '/' + id, null);
    }
    exportExcel(): Observable<Blob> {
        const url = ConfigSetting.DGSAution_EXP_EXCEL;
        return this.http.postAuthorize<Blob>(url, null);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.AUCAUTION_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    getOrderByCode(Code:string):Observable<Number>{
        const url = ConfigSetting.DGSAution_GET_ORDER_BY_CODE;
        return this.http.postAuthorize<Number>(url + '/' + Code,null);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<modelorder.OrderMessage[]>> {
        const url = ConfigSetting.DGSAution_GET_MESSAGE;
        return this.http.postAuthorize<BaseEntityResponse<modelorder.OrderMessage[]>>(url, request);
    }
}
