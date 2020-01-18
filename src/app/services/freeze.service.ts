import * as model from './../models/model/freeze.model';
import * as res from './../models/response/freeze.response';
import * as rescus from '../models/response/payment.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/freeze.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as modelCus from '../models/model/customer.model';
import * as reqCus from '../models/request/customer.request';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import * as modelwall from '../models/model/wallet.model';
import * as reqfree from '../models/request/freeze.request';
import { FreeZeUpdateRequest } from './../models/request/freeze.request';


@Injectable()
export class FreezeService {
    constructor(private http: HttpClientService) { }

    getList(request: req.FreezeListRequest): Observable<res.FreezeListResponse> {
        const url = ConfigSetting.FREEZE_LIST;
        return this.http.postAuthorize<res.FreezeListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.FreezeJTable>> {
        const url = ConfigSetting.FREEZE_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.FreezeJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.FREEZE_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
  
    updatestatus(Id : number): Observable<BaseResponse> {
        const url = ConfigSetting.FREEZE_UPDATE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url + '/' + Id,null);
    }
    

    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.FREEZE_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.FREEZE_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.FREEZE_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.FREEZE_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<rescus.PaymentResponse> {
        const url = ConfigSetting.FREEZE_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<rescus.PaymentResponse>(url, request);
    }

    getwallets(): Observable<BaseEntityResponse<modelwall.WalletList[]>> {
        const url = ConfigSetting.FREEZE_GET_WALLET;
        return this.http.postAuthorize<BaseEntityResponse<modelwall.WalletList[]>>(url, null);
    }
    AddFreeZe(request: reqfree.FreeZeAddNewRequest):Observable<res.FreezeListResponse>{
        const url = ConfigSetting.ADD_FREEZE;
        return this.http.postAuthorize<res.FreezeListResponse>(url, request);
    }

}
