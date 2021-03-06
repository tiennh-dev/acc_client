import * as model from './../models/model/deposits.model';
import * as modelCus from './../models/model/customer.model';
import * as modelWallet from './../models/model/wallet.model';
import * as res from './../models/response/deposits.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/deposits.request';
import * as reqCus from './../models/request/customer.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as rewf from './../models/request/deposits.request';
import * as reqde from './../models/request/DepositsMessageGetById.Request';
import * as reqdep from './../models/request/deposits.request';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';


@Injectable()
export class RefundTransactionService {
    constructor(private http: HttpClientService) { }

    getList(request: req.DepositsListRequest): Observable<res.DepositsListResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_LIST;
        return this.http.postAuthorize<res.DepositsListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.DepositsJTable>> {
        const url = ConfigSetting.REFUND_TRANSACTION_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.DepositsJTable>>(url, request);
    }
    getListCustomer(request: reqdep.DepositsListTopRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getDetail(id: number): Observable<BaseEntityResponse<model.DepositsDetail>> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.DepositsDetail>>(url + '/' + id, null);
    }

    getStateById(id: number): Observable<BaseEntityResponse<model.DepositsDetail>> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_STATE_BY_ID;
        return this.http.postAuthorize<BaseEntityResponse<model.DepositsDetail>>(url + '/' + id, null);
    }

    confirmStatus(request: model.DepositsDetail): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_CONFIRM_STATUS;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    add(request: model.DepositsAdd): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.REFUND_TRANSACTION_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url, request);
    }

    getListWallet(): Observable<BaseEntityResponse<modelWallet.WalletList[]>> {
        const url = ConfigSetting.REFUND_TRANSACTION_LIST_WALLET;
        return this.http.getAuthorize<BaseEntityResponse<modelWallet.WalletList[]>>(url);
    }
    cancelPayment(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_CANCEL_PAYEMENT;
        return this.http.postAuthorize<BaseResponse>(url + '/' + id, null);
    }

    approveLevel1(request: rewf.DepositWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_APPROVELEVEL1;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    approveLevel2(request: rewf.DepositWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_APPROVELEVEL2;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    approveLevel3(request: rewf.DepositWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_APPROVELEVEL3;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    reject(request: rewf.DepositWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_REJECT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    cancel(request: rewf.DepositWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_CANCEL;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }


    getMessages(request: reqde.DepositsMessageGetByIdRequest): Observable<BaseEntityResponse<model.DepositsList[]>> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.DepositsList[]>>(url, request);
    }

    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.REFUND_TRANSACTION_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }
    updateFTCode(id: number, ftCode: string): Observable<BaseResponse> {
        const url = ConfigSetting.REFUND_TRANSACTION_UPDATE_FTCODE;
        return this.http.post<BaseResponse>(url + '/' + id + '/' + ftCode, null);
    }

    exportExcel(request:any): Observable<any> {
        const url =  ConfigSetting.REFUND_TRANSACTION_EXP_EXCEL;

        return this.http.postblob(url, request);
    }
}
