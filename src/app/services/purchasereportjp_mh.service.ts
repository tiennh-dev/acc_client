import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { PurchaseReport, PurchaseReportView, PurchaseReportData } from '../models/model/purchasereport.model';
import { OrderListResponse } from '../models/response/order.response';
import * as model from './../models/model/order.model'
import { OrderApp } from './../models/model/order.model';
import { PurchaseReportRequest, PurchaseReportMercariRequest } from '../models/request/purchasereport.request';
import { PurchaseReportLoadRequest } from '../models/request/PurchaseReportLoadRequest.request';
 


@Injectable()
export class PurchaseReportJP_MHService {

    constructor(private http: HttpClientService) { }
    GetListPurchaseReportJPMH(): Observable<BaseEntityResponse<PurchaseReportView[]>> {
        const url = ConfigSetting.GET_PURCHASE_REPORT_JPANDMH;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView[]>>(url, null);
    }
    GetOrderPurchaseReport(request:PurchaseReportRequest): Observable<BaseEntityResponse<PurchaseReportView[]>> {
        const url = ConfigSetting.GET_ORDER_PURCHASE_REPORT;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportView[]>>(url, request);
    }

    GetPurchaseReportDataJPMH(request:PurchaseReportMercariRequest): Observable<BaseEntityResponse<PurchaseReportData[]>> {
        const url = ConfigSetting.GET_PURCHASE_REPORT_DATA_JPANDMH;
        return this.http.postAuthorize<BaseEntityResponse<PurchaseReportData[]>>(url, request);
    }

    Export(request:PurchaseReportRequest): Observable<BaseResponse> {
        const url = ConfigSetting.EXPORT_ORDER_PURCHASE_REPORT_JPANDMH;
        return this.http.postblob(url, request);
    }
    
}
