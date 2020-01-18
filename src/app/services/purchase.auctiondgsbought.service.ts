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
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderUpdateRequest, OrderUpdateTrackingRequest, OrderUpdateOrderNumberRequest, OrderUpdateWarehouseRequest, OrderWorkflowManyRequest, OrderUpdateShippingFreeRequest, OrderUpdatesurchargeRequest, GetTrackingNumberRequest, AuctionTransactionDetailRequest, SendMessageTDRequest, OrderUpdateNoteRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import { WarehouseList } from '../models/model/warehouse.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import * as bid from './../models/response/bidClient.response';
import { ReceivedProductRequest } from '../models/request/receivedproduct.request';
import { HttpHeaders } from '@angular/common/http';
import { ImportModel } from './../models/model/order.model';


@Injectable()
export class PurchaseAuctionDgsBoughtService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetail(request: any): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.PURCHASEDETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    updateOrderShippingFree(request: OrderUpdateShippingFreeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SHIPPINGFREE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updateOrderSurCharge(request: OrderUpdatesurchargeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SURCHAGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    UpdateCOD(id:number,cod:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_UPDATE_COD;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + "&COD=" +cod, null);
    }
    updateOrderNote(request: OrderUpdateNoteRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_UPDATE_ORDER_NOTE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }


    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url, request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId, null);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    updateOrder(request: OrderUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderTracking(request: OrderUpdateTrackingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updateOrderOrderNumber(request: OrderUpdateOrderNumberRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_UPDATE_ORDER_ORDER_NUMBER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_REQUEST_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    buyProduct(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_BUY_PRODUCT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BOUGHT_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }
    preUpdateOrder(request: OrderUpdateWarehouseRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_PRE_UPDATE_WAREHOUSE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_ORDER_PURCHASEAUTIONDGS;
        return this.http.post<model.OrderJTable>(url, request);
    }

    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.APPROVE_MANY_PURCHASE_DGS_BOUGHT;
        return this.http.post<BaseResponse>(url, request);
    }

    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.GET_BID_DGS;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }

    getEmployeeBySale(): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_BOUGHT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url, null);
    }

    exportExcel(request: any): Observable<BaseResponse> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT;

        return this.http.postblob(url, request);
    }

    getTrackingumber(request: GetTrackingNumberRequest): Observable<BaseEntityResponse<string>> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_GET_TRACKING_NUMBER;
        return this.http.postAuthorize<BaseEntityResponse<string>>(url, request);
    }

    UpdateYCComplete(request: ReceivedProductRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_UPDATE_YCCOMPLETE;
        return this.http.post<BaseResponse>(url, request);
    }

    ImportTracking(formData: FormData): Observable<any> {
        let headers = new HttpHeaders();
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_IMPORT_TRACKING;
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.postAuthorize<any>(url, formData);
    }

    UpdateTracking(filename: ImportModel): Observable<BaseResponse> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_CAP_NHAT_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, filename);
    }

    getTransactionDetail(request: AuctionTransactionDetailRequest): Observable<BaseEntityResponse<string>> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_GET_TRANSACTION_DETAIL;

        return this.http.postAuthorize<BaseEntityResponse<string>>(url, request);
    }

    sendMessageTD(request: SendMessageTDRequest): Observable<BaseEntityResponse<boolean>> {
        const url = ConfigSetting.PUCHASE_AUTION_DGS_BOUGHT_SEND_MESSAGE_TD;

        return this.http.postAuthorize<BaseEntityResponse<boolean>>(url, request);
    }
}
