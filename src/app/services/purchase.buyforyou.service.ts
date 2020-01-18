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
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderUpdateRequest, OrderUpdateTrackingRequest, OrderUpdateWareHouseRequest, OrderUpdateOrderNumberRequest, OrderUpdatePaymentAccountRequest, OrderWorkflowManyRequest, OrderUpdateShippingFreeRequest, OrderSplitRequest, OrderUpdatesurchargeRequest } from '../models/request/order.request';
import { WarehouseList } from '../models/model/warehouse.model';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import { PaymentAccountList } from '../models/model/paymentAccountList.model';
import { ReceivedProductRequest } from '../models/request/receivedproduct.request';
import { HttpHeaders } from '@angular/common/http';
import { ImportModel } from '../models/model/order.model';
import { OrderDetailList } from '../models/model/order-detail.model';


@Injectable()
export class PurchaseBuyForYouService {

    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    exportExcel(request: any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_BUY_FOR_YOU_MH;
        return this.http.postblob(url, request);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url, request);
    }
    getListTable(request: reqor.orderbyforyoulistrequest): Observable<DataTableResponse<response.OrderListResponse>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_LIST_TABLE;
        return this.http.postAuthorize<DataTableResponse<response.OrderListResponse>>(url, request);
    }
    getOrderDetail(request: OrderDetailGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId, null);
    }

    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }


    getwalletByaccountId(accountId: string): Observable<resCusw.WalletTransListResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_WALLET_TRANS;
        return this.http.postAuthorize<resCusw.WalletTransListResponse>(url + '/' + accountId, null);
    }

    getwalletById(walletId: string): Observable<modelwall.WalletList[]> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_WALLET_BY_WALLETID;
        return this.http.postAuthorize<modelwall.WalletList[]>(url + '/' + walletId, null);
    }

    getpaymentprofile(accountId: string): Observable<number> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_PAYMENT_PROFILE;
        return this.http.postAuthorize<number>(url + '/' + accountId, null);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }

    UpdateDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    UpdateStatusDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_STATUS_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }
    getAllPaymentAccount(): Observable<BaseEntityResponse<PaymentAccountList[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_GET_ALL_PAYMENT_ACCOUNT;
        return this.http.postAuthorize<BaseEntityResponse<PaymentAccountList[]>>(url, null);
    }


    updateOrder(request: OrderUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderTracking(request: OrderUpdateTrackingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_ORDER_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updateOrderWareHouse(request: OrderUpdateWareHouseRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_ORDER_WAREHOUSE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updateOrderNumber(request: OrderUpdateOrderNumberRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_ORDER_NUMBER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updatePaymentAccount(request: OrderUpdatePaymentAccountRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_PAYMENT_ACCOUNT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }


    Add(request: req.PaymentAddRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    buyProduct(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_BUY_PRODUCT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    paymentOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_PAYMENT_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.PURCHASE_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.PURCHASE_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.PURCHASE_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.PURCHASE_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_ORDER_PURCHASEBUYFORYOU;
        return this.http.post<model.OrderJTable>(url, request);
    }

    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.APPROVE_MANY_PURCHASE_BUY_FOR_YOU;
        return this.http.post<BaseResponse>(url, request);
    }

    UpdateAmountOrderDetail(id: string, amount: string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_AMOUNT_ORDER_DETAIL;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + '&amount=' + amount, null);
    }

    updateNoteOrderDetail(IdOrderDetail:number,note:string): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_WAITING_BUYFORYOU_UPDATE_NOTE;
        return this.http.postAuthorize<BaseResponse>(url + '?IdOrderDetail=' + IdOrderDetail + '&note='+note, null);
    }

    getOrderById(IdOrder:number):Observable<BaseEntityResponse<OrderDetailList>>{
        const url = ConfigSetting.PURCHASE_WAITTING_GET_ORDERDETAIL_BY_ID;

        return this.http.post<BaseEntityResponse<OrderDetailList>>(url + '/' +IdOrder, null);
    }

     updateShippingFree(idOrderDetail:string,shippingFree:string):Observable<BaseResponse>{
        const url = ConfigSetting.PURCHASE_WAITTING_UPDATE_ORDERDETAIL;

        return this.http.post<BaseResponse>(url + '?IdOrderDetail=' +idOrderDetail+'&shippingFree='+shippingFree, null);
    }

    UpdatePriceOrderDetail(id: string, price: string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_PRICE_ORDER_DETAIL;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + '&price=' + price, null);
    }


    UpdateTaxOrderDetail(id: string, tax: string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_TAX_ORDER_DETAIL;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + '&tax=' + tax, null);
    }

    UpdateShippingFree(request: OrderUpdateShippingFreeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_SHIPPINGFREE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    UpdateYCComplete(request: ReceivedProductRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_UPDATE_YCCOMPLETE;
        return this.http.post<BaseResponse>(url, request);
    }

    ImportTracking(formData: FormData): Observable<any> {
        let headers = new HttpHeaders();
        const url = ConfigSetting.PURCHASE_BUY_YOU_IMPORT_TRACKING;
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.postAuthorize<any>(url, formData);
    }

    UpdateTracking(filename: ImportModel): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_CAP_NHAT_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, filename);
    }

    splitOrderBought(request: OrderSplitRequest): Observable<BaseEntityResponse<number[]>> {
        const url = ConfigSetting.PURCHASE_BUY_YOU_SPLIT_ORDER_BOUGHT;

        return this.http.post<BaseEntityResponse<number[]>>(url ,request);
    }

    UpdateSurcharge(request: OrderUpdatesurchargeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.URCHASE_BUY_YOU_UPDATE_SURCHARGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
}
