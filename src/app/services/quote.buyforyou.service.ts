import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import * as model from '../models/model/order.model';
import * as modelwall from '../models/model/wallet.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as resCus from '../models/response/customer.response';
import { OrderDetailGetByOrderIdRequest } from '../models/request/order-detail.request';
import * as res from '../models/request/orderdetailupdate.request';
import * as req from '../models/request/payment.request';
import * as response from '../models/response/order.response';
import * as reqor from '../models/request/orderbyforyouListrequest.request';
import * as resCusw from './../models/response/wallettrans.response';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderUpdateRequest, OrderUpdateTrackingRequest, OrderPaymentsRequest, OrderWorkflowManyRequest, OrderUpdatePaymentAccountRequest } from '../models/request/order.request';
import { WarehouseList } from '../models/model/warehouse.model';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import { PurchaseAuctionQuoteUpdate } from '../models/model/order.model';
import { OrderDetailList } from '../models/model/order-detail.model';


@Injectable()
export class QuoteBuyForYouService {

    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url, request);
    }
    getListTable(request: reqor.orderbyforyoulistrequest): Observable<DataTableResponse<response.OrderListResponse>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_LIST_TABLE;
        return this.http.postAuthorize<DataTableResponse<response.OrderListResponse>>(url, request);
    }
    getOrderDetail(request: OrderDetailGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId, null);
    }

    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id='+ id + '&accountId=' + accountId, null);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    UpdateOrderPrice(price:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_UPDATE_ORDERDETAILS_PRICE;
        return this.http.postAuthorize<BaseResponse>(url + '/?price=' +price+'&Id='+Id,null);
    }

    UpdateShippingfeeForOrderDetails(shippingfee:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_UPDATE_ORDERDETAILS_SHIPPINGFEE;
        return this.http.postAuthorize<BaseResponse>(url + '/?shippingfee=' +shippingfee+'&Id='+Id,null);
    }

    updatePaymentAccount(request: OrderUpdatePaymentAccountRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_PAYMENT_ACCOUNT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getOrderDetailById(IdOrderDetail:number):Observable<BaseEntityResponse<OrderDetailList>>{
        const url = ConfigSetting.PURCHASE_WAITTING_GET_ORDERDETAIL_BY_ID;

        return this.http.post<BaseEntityResponse<OrderDetailList>>(url + '/' +IdOrderDetail, null);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.EXPORT_BUYFORYOU_QUOTE;
        return this.http.postblob(url, request);
    }

    
    getOrderById(IdOrder:number):Observable<BaseEntityResponse<OrderDetailList>>{
        const url = ConfigSetting.PURCHASE_WAITTING_GET_ORDERDETAIL_BY_ID;

        return this.http.post<BaseEntityResponse<OrderDetailList>>(url + '/' +IdOrder, null);
    }

    getwalletByaccountId(accountId: string): Observable<resCusw.WalletTransListResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_WALLET_TRANS;
        return this.http.postAuthorize<resCusw.WalletTransListResponse>(url + '/' + accountId, null);
    }

    getwalletById(walletId: string): Observable<modelwall.WalletList[]> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_WALLET_BY_WALLETID;
        return this.http.postAuthorize<modelwall.WalletList[]>(url + '/' + walletId, null);
    }

    getpaymentprofile(accountId: string): Observable<number> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_PAYMENT_PROFILE;
        return this.http.postAuthorize<number>(url + '/' + accountId, null);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }

    UpdateDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_UPDATE_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    UpdateStatusDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_UPDATE_STATUS_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    updateOrder(request: OrderUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_UPDATE_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    
    updateOrderTracking(request: OrderUpdateTrackingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_AUCTION_UPDATE_ORDER_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    Add(request: req.PaymentAddRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    buyProduct(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_BUY_PRODUCT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    paymentOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_PAYMENT_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.QUOTE_BUY_YOU_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    UpdatePuchaseBuyForYouQoute(request: PurchaseAuctionQuoteUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_BUY_FOR_YOU_UPDATE;
        return this.http.post<BaseResponse>(url, request);
    }

    getListDataOrder(request:OrderPaymentsRequest):Observable<model.OrderJTable> {
        const url = ConfigSetting.BUYFORYOU_QUOTE_GET_ORDER_PAYMENTS;
        return this.http.post<model.OrderJTable>(url, request);
    }

    paymentOrderMuilti(request: OrderWorkflowManyRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.BUYFORYOU_QUOTE_PAYMENT_ORDER_MULTI;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
}
