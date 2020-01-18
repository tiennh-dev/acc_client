import * as model from './../models/model/BidExternalConfig.model';;
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from '../models/request/customer.request';
import * as res from '../models/response/payment.response';
import * as rescus from '../models/response/customer.response';
import * as reqbid from '../models/response/bidExternalconfig.response';
import * as resbid from '../models/request/Bidexternalconfigadd.request';


@Injectable()
export class BidExternalConfigService {
    constructor(private http: HttpClientService) { }
    getListJTable(request: any): Observable<DataTableResponse<model.BidExternalConfigJTable>> {
        const url = ConfigSetting.BID_EXTERNALCONFIG_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.BidExternalConfigJTable>>(url, request);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<res.PaymentResponse> {
        const url = ConfigSetting.BID_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<res.PaymentResponse>(url, request);
    }
    getListCustomer(): Observable<rescus.CustomerListResponse> {
        const url = ConfigSetting.BID_LIST_CUSTOMER;
        return this.http.postAuthorize<rescus.CustomerListResponse>(url, null);
    }
    AddBid(request: resbid.BidexternalconfigAdd): Observable<BaseResponse> {
        const url = ConfigSetting.BID_EXTERNALCONFIG_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    delete(Id:number): Observable<BaseResponse> {
        const url = ConfigSetting.BID_EXTERNALCONFIG_DELETE;
        return this.http.postAuthorize<BaseResponse>(url + '/' + Id,null);
    }
    getDetail(Id:number): Observable<model.BidExternalConfigUpdate> {
        const url = ConfigSetting.BID_EXTERNALCONFIG_DETAIL;
        return this.http.postAuthorize<model.BidExternalConfigUpdate>(url + '/' + Id,null);
    }
    UpdateBid(request:model.BidExternalConfigUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.BID_EXTERNALCONFIG_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url,request);
    }
    
    
}