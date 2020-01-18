import * as model from './../models/model/payment.model';
import * as res from '../models/response/payment.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/payment.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as modelCus from '../models/model/customer.model';
import * as modelDetal from '../models/model/order-detail.model';
import * as modelWall from '../models/model/wallet.model';
import * as reqCus from '../models/request/customer.request';
import * as reqpayment from './../models/request/payment.request';
import * as modelor from './../models/model/order.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import { PaymentUpdatePriorityRequest } from '../models/request/paymentupdatepriority.Request';


@Injectable()
export class PaymentService {
    constructor(private http: HttpClientService) { }

    getList(request: req.PaymentListRequest): Observable<res.PaymentListResponse> {
        const url = ConfigSetting.PAYMENT_LIST;
        return this.http.postAuthorize<res.PaymentListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.PaymentJTable>> {
        const url = ConfigSetting.PAYMENT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.PaymentJTable>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PAYMENT_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<res.PaymentResponse> {
        const url = ConfigSetting.PAYMENT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<res.PaymentResponse>(url, request);
    }

    getCustomerByAccountId(AccountId: string): Observable<modelCus.CustomerList[]> {
        const url = ConfigSetting.PAYMENT_CUSTOMER_DETAIL;
        return this.http.postAuthorize<modelCus.CustomerList[]>(url + '/' + AccountId, null);
    }

    approveLevel1(request: reqpayment.PaymentWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_APPROVELEVEL1;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    approveLevel2(request: reqpayment.PaymentWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_APPROVELEVEL2;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    approveLevel3(request: reqpayment.PaymentWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_APPROVELEVEL3;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    reject(request: reqpayment.PaymentWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_REJECT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    cancel(request: reqpayment.PaymentWorkflowRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_CANCEL;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }




    getMessages(request: reqpayment.PaymentMessageGetByIdRequest): Observable<BaseEntityResponse<model.PaymentList[]>> {
        const url = ConfigSetting.PAYMENT_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.PaymentList[]>>(url, request);
    }
    getStateById(id: number): Observable<BaseEntityResponse<model.PaymentList>> {
        const url = ConfigSetting.PAYMENT_GET_STATE_BY_ID;
        return this.http.postAuthorize<BaseEntityResponse<model.PaymentList>>(url + '/' + id, null);
    }

    getwallets(): Observable<BaseEntityResponse<modelWall.WalletList[]>> {
        const url = ConfigSetting.PAYMENT_GET_WALLET;
        return this.http.postAuthorize<BaseEntityResponse<modelWall.WalletList[]>>(url, null);
    }
    AddPayment(request: req.PaymentAddNewRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }
    getOrderDetail(OrderId: string): Observable<BaseEntityResponse<modelDetal.OrderDetailList[]>> {
        const url = ConfigSetting.GET_ORDER_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<modelDetal.OrderDetailList[]>>(url + '/' + OrderId, null);
    }
    getTableOrderDetail(OrderId: string): Observable<BaseEntityResponse<modelDetal.OrderDetailList[]>> {
        const url = ConfigSetting.GET_LIST_ORDER_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<modelDetal.OrderDetailList[]>>(url + '/' + OrderId, null);
    }
    getOrderDetailPayment(AccountId: string, OrderId: string): Observable<BaseEntityResponse<model.PaymentList>> {
        const url = ConfigSetting.GET_ORDER_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.PaymentList>>(url + '/?AccountId=' + AccountId + '&OrderId=' + OrderId, null);
    }

    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.PAYMENT_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.PAYMENT_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.PAYMENT_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.PAYMENT_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    refund(request: req.RefundRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_REFUND;

        return this.http.post<BaseResponse>(url, request);
    }

    checkRefundExisting(request: req.CheckRefundFromPaymentExistingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_CHECK_REFUND_EXISTING;

        return this.http.post<BaseResponse>(url, request);
    }

    UpdatePriority(request:PaymentUpdatePriorityRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PAYMENT_UPDATE_PRIORITY;
        return this.http.post<BaseResponse>(url, request);
    }
}
