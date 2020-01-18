import * as model from './../models/model/customer.model';
import * as modelCp from './../models/model/customer-profile.model';
import * as modelwall from './../models/model/wallet.model';
import * as res from './../models/response/customer.response';
import * as responsemember from './../models/response/MemberShipLevel.response';
import * as resCus from '../models/response/customer.response';
import * as req from './../models/request/customer.request';
import * as reqCus from './../models/request/customer.request';
import * as requestmember from './../models/request/membership.request';
import * as requestmembermodel from './../models/model/MemberShipLevel.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { CustomerGroup } from '../models/model/customergroup.model';
import { BankInfoList, BankInfoDetail } from '../models/model/bankinfo.model';


@Injectable()
export class CustomerService {
    constructor(private http: HttpClientService) { }

    getList(request: req.CustomerListRequest): Observable<res.CustomerListResponse> {
        const url = ConfigSetting.CUSTOMER_LIST;
        return this.http.postAuthorize<res.CustomerListResponse>(url, request);
    }
    getListAll(): Observable<res.CustomerListResponse> {
        const url = ConfigSetting.CUSTOMER_LIST_ALL;
        return this.http.postAuthorize<res.CustomerListResponse>(url, null);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.CustomerJTable>> {
        const url = ConfigSetting.CUSTOMER_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.CustomerJTable>>(url, request);
    }

    exportExcel(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_CUSTOMER;
        return this.http.postblob(url, request);
    }

    getDetail(id: number): Observable<res.CustomerDetailResponse> {
        const url = ConfigSetting.CUSTOMER_GET_DETAIL;
        return this.http.postAuthorize<res.CustomerDetailResponse>(url + '/' + id, null);
    }

    add(request: model.CustomerAdd): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.CustomerEdit): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    onActive(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ACTIVE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    onActiveTranCode(Accountid: string): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ACTIVE_TRANCODE;
        return this.http.post<BaseResponse>(url + '/' + Accountid, null);
    }
    cancelActiveTranCode(Accountid: string): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_CANCEL_TRANCODE;
        return this.http.post<BaseResponse>(url + '/' + Accountid, null);
    }
    onloadMembership(accountId:number):Observable<requestmembermodel.MemberShipLevel>{
        const url = ConfigSetting.LOAD_MEMBERSHIP;
        return this.http.post<requestmembermodel.MemberShipLevel>(url + '/' + accountId, null);
    }
    getLevelList():Observable<BaseResponse>{
        const url = ConfigSetting.LOAD_MEMBERSHIP_LEVEL_LIST;
        return this.http.post<BaseResponse>(url ,null);
    }
    onActiveMenbership(request:requestmember.membershipRequest):Observable<BaseResponse>{
        const url = ConfigSetting.MEMBERSHIP_CUSTOMER_ACTIVE;
        return this.http.post<BaseResponse>(url ,request);
    }
    getLevelDetail(level:number):Observable<BaseResponse>{
        const url = ConfigSetting.MEMBERSHIP_LEVEL_DETAIL;
        return this.http.post<BaseResponse>(url +'/'+level,null);
    }
    
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.LIST_CUSTOMER;
        return this.http.post<resCus.CustomerListResponse>(url, null);
    }

    temporaryDepositVIP(id: string): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_TEMPORARY_DEPOSIT_VIP;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }

    temporaryDepositVIPCancel(id: string): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_TEMPORARY_DEPOSIT_VIP_CANCEL;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }

    getCustomerByAccountId(accountId:string): Observable<BaseEntityResponse<model.CustomerList[]>> {
        const url = ConfigSetting.CUSTOMER_BY_ACCOUNTID;
        return this.http.postAuthorize<BaseEntityResponse<model.CustomerList[]>>(url + '/' + accountId , null);
    }

    getListBankInfoByBankNumber(): Observable<BaseEntityResponse<BankInfoList[]>> {
        const url = ConfigSetting.DEPOSITS_GET_LIST_BANKINFO;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoList[]>>(url, null);
    }


    getwallets(): Observable<BaseEntityResponse<modelwall.WalletList[]>> {
        const url = ConfigSetting.CUSTOMER_GET_WALLETS;
        return this.http.postAuthorize<BaseEntityResponse<modelwall.WalletList[]>>(url, null);
    }

    getBankInfoByBankNumber(bankNumber:string): Observable<BaseEntityResponse<BankInfoDetail>> {
        const url = ConfigSetting.DEPOSITS_GET_BANKINFO_BY_BANKNUMBER;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoDetail>>(url + '/' + bankNumber, null);
    }

    createdeposite(request: model.CreateDeposite): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_CREATE_DEPOSITE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    addrecharge(request: model.CreateDeposite): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADD_RECHGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    getCustomerGroup():Observable<BaseEntityResponse<CustomerGroup>> {
        const url = ConfigSetting.CUSTOMER_GROUP;
        return this.http.post<BaseEntityResponse<CustomerGroup>>(url ,null);
    }

    getTransportWaitForActivation(request: any): Observable<DataTableResponse<modelCp.CustomerProfileJTable>> {
        const url = ConfigSetting.CUSTOMER_LIST_TRANSPORT_WAIT_FOR_ACTIVATION_JTABLE;
        return this.http.postAuthorize<DataTableResponse<modelCp.CustomerProfileJTable>>(url, request);
    }
}
