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
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderUpdateRequest, OrderUpdateTrackingRequest, OrderUpdateOrderNumberRequest, OrderUpdateWarehouseRequest, OrderWorkflowManyRequest, GetTrackingNumberRequest, OrderUpdateShippingFreeRequest, OrderUpdatesurchargeRequest, OrderUpdateNoteRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import { WarehouseList } from '../models/model/warehouse.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import * as bid from './../models/response/bidClient.response';


@Injectable()
export class PurchaseAuctionDgsService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetail(request: any): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    updateOrderShippingFree(request: OrderUpdateShippingFreeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_UPDATE_ORDER_SHIPPINGFREE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderNote(request: OrderUpdateNoteRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_UPDATE_ORDER_NOTE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderSurCharge(request: OrderUpdatesurchargeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_BOUGHT_UPDATE_ORDER_SURCHARGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }


    UpdateCOD(id:number,cod:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_UPDATE_COD;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + "&COD=" +cod, null);
    }


    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.PURCHASEDETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId,null);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    updateOrder(request: OrderUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_UPDATE_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderTracking(request: OrderUpdateTrackingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_UPDATE_ORDER_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    updateOrderOrderNumber(request: OrderUpdateOrderNumberRequest): Observable<BaseResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_UPDATE_ORDER_ORDER_NUMBER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_REQUEST_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    buyProduct(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_BUY_PRODUCT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.PURCHASE_AUCTION_DGS_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }
    preUpdateOrder(request: OrderUpdateWarehouseRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_PRE_UPDATE_WAREHOUSE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_ORDER_PURCHASEAUTIONDGS;
        return this.http.post<model.OrderJTable>(url ,request);
    }

    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.APPROVE_MANY_PURCHASE_DGS;
        return this.http.post<BaseResponse>(url ,request);
    }

    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.GET_BID_DGS;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_BOUGHT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.GET_EXPORT_DGS;
        return this.http.postblob(url, request);
    }
    
    getTrackingumber(request: GetTrackingNumberRequest): Observable<BaseEntityResponse<string>> {
        const url = ConfigSetting.PURCHASE_AUCTION_GET_TRACKING_NUMBER;
        return this.http.postAuthorize<BaseEntityResponse<string>>(url, request);
    }
}
