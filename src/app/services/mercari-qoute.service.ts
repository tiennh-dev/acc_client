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
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderUpdateRequest, OrderUpdateTrackingRequest, OrderPaymentsRequest, OrderWorkflowManyRequest, GetShippingInfoRequest, OrderUpdateShippingFreeRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse, OrderListResponse } from '../models/response/order.response';
import { WarehouseList } from '../models/model/warehouse.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import { PurchaseAuctionQuoteUpdate, ImportModel, ShippingInfo } from './../models/model/order.model';
import * as bid from './../models/response/bidClient.response';
import { ReceivedProductRequest } from '../models/request/receivedproduct.request';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class QuoteMercariService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.QUOTE_MERCARI_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetail(request: any): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.QUOTE_MERCARI_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.QUOTEDETAIL_MERCARI_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.QUOTE_MERCARI_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId,null);
    }

    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    updateOrder(request: OrderUpdateRequest): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_UPDATE_ORDER;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    updateOrderTracking(request: OrderUpdateTrackingRequest): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_UPDATE_ORDER_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_REQUEST_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    paymentOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_PAYMENT_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }


    paymentOrderMuilti(request: OrderWorkflowManyRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_PAYMENT_ORDER_MULTI;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }

    UpdatePuchaseAutionQoute(request: PurchaseAuctionQuoteUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_UPDATE;
        return this.http.post<BaseResponse>(url, request);
    }

    updateOrderShippingFree(request: OrderUpdateShippingFreeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_UPDATE_ORDER_SHIPPINGFREE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }


    getShippingInfo(request: GetShippingInfoRequest):Observable<BaseEntityResponse<ShippingInfo>> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_SHIPPING_INFO;
        return this.http.postAuthorize<BaseEntityResponse<ShippingInfo>>(url, request);
    }

    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.GET_BID_QUOTE_MERCARI;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.QUOTE_MERCARI_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    getListDataOrder(request:OrderPaymentsRequest):Observable<model.OrderJTable> {
        const url = ConfigSetting.MERCARI_QUOTE_GET_ORDER_PAYMENTS;
        return this.http.post<model.OrderJTable>(url, request);
    }

    UpdateYCComplete(request:ReceivedProductRequest):Observable<BaseResponse> {
        const url = ConfigSetting.AUTION_QUOTE_UPDATE_YCCOMPLETE;
        return this.http.post<BaseResponse>(url, request);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.EXPORT_MERCARI_QOUTE;
        return this.http.postblob(url, request);
    }

    UpdateCOD(id:number,cod:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_UPDATE_COD;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + "&COD=" +cod, null);
    }


    ImportTrongLuong(formData: FormData):Observable<any> {  
        let headers = new HttpHeaders();  
        const url = ConfigSetting.QUOTE_MERCARI_IMPORT_FILE;
        headers.append('Content-Type', 'multipart/form-data');  
        headers.append('Accept', 'application/json');  
      
        return this.http.postAuthorize<any>(url , formData);  
      }  

      CapNhatFile(filename:ImportModel):Observable<BaseResponse> {  
        const url = ConfigSetting.QUOTE_MERCARI_CAP_NHAT_FILE;
        return this.http.postAuthorize<BaseResponse>(url , filename);  
      }  


      ImportTracking(formData: FormData):Observable<any> {  
        let headers = new HttpHeaders();  
        const url = ConfigSetting.QUOTE_MERCARI_IMPORT_TRACKING;
        headers.append('Content-Type', 'multipart/form-data');  
        headers.append('Accept', 'application/json');  
      
        return this.http.postAuthorize<any>(url , formData);  
      }  

      UpdateTracking(filename:ImportModel):Observable<BaseResponse> {  
        const url = ConfigSetting.QUOTE_MERCARI_CAP_NHAT_TRACKING;
        return this.http.postAuthorize<BaseResponse>(url , filename);  
      }  

      ImportSurcharge(formData: FormData):Observable<any> {  
        let headers = new HttpHeaders();  
        const url = ConfigSetting.QUOTE_MERCARI_IMPORT_SURCHARGE;
        headers.append('Content-Type', 'multipart/form-data');  
        headers.append('Accept', 'application/json');  
      
        return this.http.postAuthorize<any>(url , formData);  
      }
      
      UpdateSurcharge(filename:ImportModel):Observable<BaseResponse> {  
        const url = ConfigSetting.QUOTE_MERCARI_UPDATE_SURCHARGE;
        return this.http.postAuthorize<BaseResponse>(url , filename);  
      } 
}
