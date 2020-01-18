import { BaseEntityResponse, BaseResponse } from './../models/response/base.response';
import * as model from './../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as resCus from './../models/response/customer.response';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderWorkflowManyRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import * as res from '../models/request/orderdetailupdate.request';
import { PaymentAddRequest } from '../models/request/payment.request';
import { WalletList } from '../models/model/wallet.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';


@Injectable()
export class ApprovalAdvancePaymentService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetail(request: any): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_ORDER_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_ORDER_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.ORDER_BUY_YOU_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId,null);
    }

    UpdateDetail(request:res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.ORDER_BUY_YOU_UPDATE_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    UpdateStatusDetail(request:res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.ORDER_BUY_YOU_UPDATE_STATUS_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    approvedCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }
    AddPayment(request: PaymentAddRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }
    getPaymentProfile(accountId: string): Observable<number> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_PAYMENT_PROFILE;
        return this.http.postAuthorize<number>(url + '/' + accountId, null);
    }
    getwallets(): Observable<BaseEntityResponse<WalletList[]>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_WALLETS;
        return this.http.postAuthorize<BaseEntityResponse<WalletList[]>>(url, null);
    }
    rejectCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_REJECT_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    rejectRequestApproveTempDeposit(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_REJECT_REQUEST_APPROVE_TEMPDEPOSIT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    approveTempDeposit(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_TEMP_DEPOSIT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    customerRejectPayment(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_CUSTOMER_REJECT_PAYMENT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    approvePaymentOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ORDER_APPROVE_PAYMENT_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    rejectPaymentOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    approvePaymentOrderDone(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_DONE;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_LIST_ORDER;
        return this.http.post<model.OrderJTable>(url ,request);
    }

    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_TEMP_DEPOSITE_MULTI;
        return this.http.post<BaseResponse>(url ,request);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.APPROVAL_ADVANCE_PAYMENT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }
}
