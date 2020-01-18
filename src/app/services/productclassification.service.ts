import { BaseEntityResponse, BaseResponse } from './../models/response/base.response';
import * as model from './../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { OrderPreUpdateRequest, OrderPreUpdateStatusRequest, OrderUpdateShippingFeeRequest, OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, GetShippingInfoRequest } from '../models/request/order.request';
import { WarehouseList } from '../models/model/warehouse.model';
import * as res from './../models/response/successsfulbid.response';
import * as bid from './../models/response/bidClient.response';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import { ShippingInfo } from './../models/model/order.model';
import { ProductTypeList } from '../models/model/product-type.model';
import { ProductOrigin } from '../models/model/productorigin.model';
import { ProductFromUrl } from '../models/request/productfromurl.request';
import { ProductDetail } from '../models/model/productdetail.model';
import { OrderdetailupdateFromUrlRequest } from '../models/request/orderdetailupdate.request';

@Injectable()
export class ProductClassificationService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.PRODUCT_CLASSIFICATION_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    getProductType(): Observable<BaseEntityResponse<ProductTypeList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_GET_ALL_PRODUCT_TYPE;
        return this.http.postAuthorize<BaseEntityResponse<ProductTypeList[]>>(url, null);
    }
     

    getProductOrigin(): Observable<BaseEntityResponse<ProductOrigin[]>> {
        const url = ConfigSetting.PRODUCT_CLASSIFICATION_GET_ALL_PRODUCT_ORIGIN;
        return this.http.postAuthorize<BaseEntityResponse<ProductOrigin[]>>(url, null);
    }

    preUpdateOrder(request: OrderUpdateShippingFeeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_PRE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    UpdateProductType(id:number,producttype:string): Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCTCLASSIFICATION_UPDATE_PRODUCT_TYPE;
        return this.http.postAuthorize<BaseResponse>(url + '/?id='+ id + '&producttype='+producttype, null);
    }


    UpdateProductOrigin(id:number,productorigin:string): Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCTCLASSIFICATION_UPDATE_PRODUCT_ORIGIN;
        return this.http.postAuthorize<BaseResponse>(url + '/?id='+ id + '&productorigin='+productorigin, null);
    }


    UpdateCOD(id:number,cod:boolean): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_UPDATE_COD;
        return this.http.postAuthorize<BaseResponse>(url + '/?id=' + id + "&COD=" +cod, null);
    }


    preUpdateStatusOrder(request: OrderPreUpdateStatusRequest): Observable<BaseResponse> {
        const url = ConfigSetting.AUTION_PRETREATMENT_PRE_UPDATE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getAllList(): Observable<res.SuccessfulBidListResponse> {
        const url = ConfigSetting.AUTION_PRETREATMENTALL_LIST;
        return this.http.postAuthorize<res.SuccessfulBidListResponse>(url, null);
    }

    getBidClient(): Observable<bid.BidClientResponse> {
        const url = ConfigSetting.AUTION_PRETREATMENTAL_BIDCLIENT;
        return this.http.postAuthorize<bid.BidClientResponse>(url, null);
    }

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    RequestCancelOrder(request: OrderWorkflowRequest):Observable<WorkflowTriggerInfoResponse>{
        const url = ConfigSetting.AUTION_PRETREATMENTALL_REQUESTCANCELORDER;
        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    getShippingInfo(request: GetShippingInfoRequest):Observable<BaseEntityResponse<ShippingInfo>> {
        const url = ConfigSetting.ORDER_AUCTION_PRETREATMENT_GET_SHIPPING_INFO;
        return this.http.postAuthorize<BaseEntityResponse<ShippingInfo>>(url, request);
    }
    
    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.ORDER_BUY_YOU_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.AUCTION_DGS_PRETREATMENT_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId, null);
    }
    GetProductFromUrl(request:ProductFromUrl): Observable<BaseEntityResponse<ProductDetail>> {
        const url = ConfigSetting.ORDER_BUY_YOU_UPDATE_PRODUCT_URL;
        return this.http.postAuthorize<BaseEntityResponse<ProductDetail>>(url,request);
    }
    UpdateProductFromUrl(request:OrderdetailupdateFromUrlRequest): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_DETAIL_FROM_URL;
        return this.http.postAuthorize<BaseResponse>(url,request);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.GET_EXPORT_PROCLASS_PRE;
        return this.http.postblob(url, request);
    }
}
