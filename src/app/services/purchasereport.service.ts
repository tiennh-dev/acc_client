import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { PurchaseReport, PurchaseReportView } from '../models/model/purchasereport.model';
import { OrderListResponse } from '../models/response/order.response';
import * as model from './../models/model/order.model'
import { OrderApp } from './../models/model/order.model';
import { PurchaseReportRequest } from '../models/request/purchasereport.request';
import { PurchaseReportLoadRequest } from '../models/request/PurchaseReportLoadRequest.request';
 


@Injectable()
export class PurchaseReportService {

    constructor(private http: HttpClientService) { }
    UpdatePrchaseReport(request: PurchaseReport): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_AUC;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    GetListPurchaseReport(): Observable<BaseEntityResponse<PurchaseReportView>> {
        const url = ConfigSetting.PURCHASE_REPORT_GET_LIST;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView>>(url, null);
    }

    DeletePurchaseReport(Id:number): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_DELETE;
        return this.http.postAuthorize<BaseResponse>(url + '/'+ Id, null);
    }

    SyncPurchaseReport(request:PurchaseReportLoadRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_SYNCDATA;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    LockPurchaseReport(Id:number,valueLock:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_LOCK;
        return this.http.postAuthorize<BaseResponse>(url + '?Id='+Id + '&valueLock='+valueLock, null);
    }

    unLockPurchaseReport(Id:number,valueLock:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_UNLOCK;
        return this.http.postAuthorize<BaseResponse>(url + '?Id='+Id + '&valueLock='+valueLock, null);
    }


    AddNewPrchaseReportDG(request: PurchaseReport): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_DG;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    GetListPurchaseReportDG(): Observable<BaseEntityResponse<PurchaseReportView>> {
        const url = ConfigSetting.PURCHASE_REPORT_GET_LIST_DG;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView>>(url, null);
    }

    DeletePurchaseReportDG(Id:number): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_DELETE_DG;
        return this.http.postAuthorize<BaseResponse>(url + '/'+ Id, null);
    }


    AddNewPrchaseReportME(request: PurchaseReport): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_ME;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    GetListPurchaseReportME(): Observable<BaseEntityResponse<PurchaseReportView>> {
        const url = ConfigSetting.PURCHASE_REPORT_GET_LIST_ME;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView>>(url, null);
    }

    DeletePurchaseReportME(Id:number): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_DELETE_ME;
        return this.http.postAuthorize<BaseResponse>(url + '/'+ Id, null);
    }

    AddNewPrchaseReportMH(request: PurchaseReport): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_UPDATE_MH;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    GetListPurchaseReportMH(): Observable<BaseEntityResponse<PurchaseReportView>> {
        const url = ConfigSetting.PURCHASE_REPORT_GET_LIST_MH;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView>>(url, null);
    }

    DeletePurchaseReportMH(Id:number): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_REPORT_DELETE_MH;
        return this.http.postAuthorize<BaseResponse>(url + '/'+ Id, null);
    }

    GetOrderPurchaseReport(request:PurchaseReportRequest): Observable<BaseEntityResponse<PurchaseReportView[]>> {
        const url = ConfigSetting.GET_ORDER_PURCHASE_REPORT;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView[]>>(url, request);
    }

    Export(request:PurchaseReportRequest): Observable<BaseResponse> {
        const url = ConfigSetting.EXPORT_ORDER_PURCHASE_REPORT;
        return this.http.postblob(url, request);
    }

    SearchOrderPurchaseReport(request:PurchaseReportRequest): Observable<BaseEntityResponse<OrderApp[]>> {
        const url = ConfigSetting.SEARCH_ORDER_PURCHASE_REPORT;
        return this.http.postAuthorize<BaseEntityResponse<OrderApp[]>>(url, request);
    }

    GetListEmps(request:PurchaseReportRequest): Observable<BaseResponse> {
        const url = ConfigSetting.GET_LIST_EMPS_PURCHASE_REPORT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
}
