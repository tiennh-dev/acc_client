import * as model from './../models/model/withdrawal.model';
import * as res from './../models/response/withdrawal.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/withdrawal.request';
import * as modelCus from './../models/model/customer.model';
import * as modelWallet from './../models/model/wallet.model';
import * as reqCus from './../models/request/customer.request';
import * as reqw from './../models/request/withdrawal.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';


@Injectable()
export class WithdrawalService {
    constructor(private http: HttpClientService) { }

    getList(request: req.WithdrawalListRequest): Observable<res.WithdrawalListResponse> {
        const url = ConfigSetting.WITHDRAWAL_LIST;
        return this.http.postAuthorize<res.WithdrawalListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.WithdrawalJTable>> {
        const url = ConfigSetting.WITHDRAWAL_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.WithdrawalJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WITHDRAWAL_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }

    getDetail(id: number): Observable<BaseEntityResponse<model.WithdrawalDetail>> {
        const url = ConfigSetting.WITHDRAWAL_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.WithdrawalDetail>>(url + '/' + id, null);
    }

    confirmStatus(request: model.WithdrawalDetail): Observable<BaseResponse> {
        const url = ConfigSetting.WITHDRAWAL_CONFIRM_STATUS;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }
    
    add(request: model.WithdrawalAdd): Observable<BaseResponse> {
        const url = ConfigSetting.WITHDRAWAL_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.WITHDRAWAL_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getListWallet(): Observable<BaseEntityResponse<modelWallet.WalletList[]>> {
        const url = ConfigSetting.WITHDRAWAL_LIST_WALLET;
        return this.http.getAuthorize<BaseEntityResponse<modelWallet.WalletList[]>>(url);
    }

    approveLevel1(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_APPROVELEVEL1;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }

    approveLevel2(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_APPROVELEVEL2;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }

    approveLevel3(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_APPROVELEVEL3;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }

    reject(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_REJECT;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }

    Transferred(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_TRANSFERRED;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }
    cancel(request:reqw.WithdraWalWorkflowRequest) : Observable<BaseResponse>{
        const url = ConfigSetting.WITHDRAWAL_CANCEL;
        return this.http.postAuthorize<BaseResponse>(url , request);
    }
    

    getMessages(request:reqw.WithdrawalMessageGetByIdRequest):Observable<BaseEntityResponse<model.WithdrawalMessage[]>>{
        const url = ConfigSetting.WITHDRAWAL_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.WithdrawalMessage[]>>(url , request);
    }
    getStateById(id: number): Observable<BaseEntityResponse<model.WithdrawalList>> {
        const url = ConfigSetting.WITHDRAWAL_GET_STATE_BY_ID;
        return this.http.postAuthorize<BaseEntityResponse<model.WithdrawalList>>(url + '/' + id, null);
    }

    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.WITHDRAWAL_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.WITHDRAWAL_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.WITHDRAWAL_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.WITHDRAWAL_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

}
