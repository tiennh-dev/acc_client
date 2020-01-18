import { BaseEntityResponse, BaseResponse } from './../models/response/base.response';
import * as model from './../models/model/order.model';
import * as res from './../models/response/order.response';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as resCus from './../models/response/customer.response';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import * as modelrechage from './../models/model/order.model';
import { OrderWorkflowRequest,OrderWorkflowManyRequest, OrderMessageGetByOrderIdRequest, OrderPreUpdateRequest, OrderPaymentsRequest, OrderPaysRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import * as resCusw from './../models/response/wallettrans.response';
import * as modelwall from '../models/model/wallet.model';
import * as modelde from '../models/model/deposits.model';
import * as req from '../models/request/payment.request';
import { WarehouseList } from '../models/model/warehouse.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/warehouse-emp.model';
import { DepositsListResponse } from '../models/response/deposits.response';
import * as modelWallet from './../models/model/wallet.model';
import * as modeldeposite from './../models/model/deposits.model';
import * as bid from './../models/response/bidClient.response';
import { BankInfoDetail, BankInfoList } from '../models/model/bankinfo.model';



@Injectable()
export class OrderAuctionService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.ORDER_AUCTION_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetail(request: any): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.ORDER_AUCTION_ORDERDETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    changeAutionStatus(status: number, id: number): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_UPDATE_STATUS_AUTION;
        return this.http.postAuthorize<BaseResponse>(url + '/?status=' + status + '&Id=' + id, null);
    }
    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.ORDER_AUCTION_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.ORDER_AUCTION_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url, request);
    }
    updateStatusOrderDetail(id: number, status: string): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_UPDATE_STATUS_ORDER_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&status=' + status, null);
    }
    updateStatusOrder(request: any): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_UPDATE_STATUS_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.ORDER_AUCTION_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }
    getPaymentProfile(accountId: string): Observable<number> {
        const url = ConfigSetting.ORDER_AUCTION_GET_PAYMENT_PROFILE;
        return this.http.postAuthorize<number>(url + '/' + accountId, null);
    }

    getwalletByaccountId(accountId: string): Observable<resCusw.WalletTransListResponse> {
        const url = ConfigSetting.ORDER_AUCTION_GET_WALLET_TRANS;
        return this.http.postAuthorize<resCusw.WalletTransListResponse>(url + '/' + accountId, null);
    }

    getwalletById(walletId: string): Observable<modelwall.WalletList[]> {
        const url = ConfigSetting.ORDER_AUCTION_GET_WALLET_BY_WALLETID;
        return this.http.postAuthorize<modelwall.WalletList[]>(url + '/' + walletId, null);
    }

    getwallets(): Observable<BaseEntityResponse<modelwall.WalletList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_GET_WALLETS;
        return this.http.postAuthorize<BaseEntityResponse<modelwall.WalletList[]>>(url, null);
    }

    getBankInfoByBankNumber(bankNumber:string): Observable<BaseEntityResponse<BankInfoDetail>> {
        const url = ConfigSetting.DEPOSITS_GET_BANKINFO_BY_BANKNUMBER;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoDetail>>(url + '/' + bankNumber, null);
    }

    getListBankInfoByBankNumber(): Observable<BaseEntityResponse<BankInfoList[]>> {
        const url = ConfigSetting.DEPOSITS_GET_LIST_BANKINFO;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoList[]>>(url, null);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    AddPayment(request: req.PaymentAddForOrderAutionRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }
   
    AddPaymentOrderBuyForYou(request: req.PaymentAddForOrderBuyForYouRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.ORDER_BUY_FOR_YOU_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    preUpdateOrder(request: OrderPreUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.ORDER_AUCTION_REQUEST_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    requestApproveTempDeposit(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.ORDER_AUCTION_REQUEST_APPROVE_TEMP_DEPOSIT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_ORDER;
        return this.http.post<model.OrderJTable>(url ,request);
    }
    GetMessagesMany(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_MESSAGES_MANY;
        return this.http.post<model.OrderJTable>(url ,request);
    }
    
    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.APPROVE_MANY;
        return this.http.post<BaseResponse>(url ,request);
    }

    rechageAution(request: modelrechage.RechageAution): Observable<BaseResponse> {
        const url = ConfigSetting.ORDERAUTION_RECHAGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getCustomerByAccountId(accountId:string): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_AUTION_CUSTOMER_BY_ACCOUNTID;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url + '/' + accountId , null);
    }

    getOrderPayments(request: OrderPaymentsRequest): Observable<model.OrderJTable> {
        const url = ConfigSetting.ORDER_AUTION_GET_ORDER_PAYMENTS;
        return this.http.post<model.OrderJTable>(url, request);
    }

    payOrders(request: OrderPaysRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_PAY_ORDERS;
        return this.http.post<BaseResponse>(url, request);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.ORDER_AUTION_BIDCLIENT;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }

    getListWallet(): Observable<BaseEntityResponse<modelWallet.WalletList[]>> {
        const url = ConfigSetting.ORDER_AUTION_LIST_WALLET;
        return this.http.getAuthorize<BaseEntityResponse<modelWallet.WalletList[]>>(url);
    }

    
     addRecharge(request: modeldeposite.DepositsAdd): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_ADDRECHANGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    CreateDeposite(request: modeldeposite.DepositsAdd): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_CREATE_DEPOSITE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.GET_EXPORT_ORDER_AUCTION;
        return this.http.postblob(url, request);
    }
}
