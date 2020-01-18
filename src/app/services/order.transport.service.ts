
import { BaseEntityResponse, BaseResponse, PagingResponse } from '../models/response/base.response';
import { DataTableResponse } from '../models/response/base.response';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as model from '../models/model/order.model';
import * as modelTransport from '../models/model/order-transport.model';
import * as modelOrderService from '../models/model/order-service.model';
import * as modelCus from './../models/model/customer.model';
import * as modelCusAddress from './../models/model/customer-address.model';
import * as modelWarehouse from './../models/model/warehouse.model';
import * as modelProductType from './../models/model/product-type.model';
import * as reqCus from './../models/request/customer.request';
import * as reqCusAddress from './../models/request/customer-address.request';

@Injectable()
export class OrderTransportService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.ORDER_TRANSPORT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }

    add(request: modelTransport.OrderTransportAdd): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_TRANSPORT_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: modelTransport.OrderTransportEdit): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_TRANSPORT_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getDetail(orderId: number): Observable<BaseEntityResponse<modelTransport.OrderTransportEdit>> {
        const url = ConfigSetting.ORDER_TRANSPORT_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<modelTransport.OrderTransportEdit>>(url + '/' + orderId,null);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getListCustomerAddressByAccount(request: reqCusAddress.CustomerAddressByAccountListRequest): Observable<PagingResponse<modelCusAddress.CustomerAddressList[]>> {
        const url = ConfigSetting.ORDER_TRANSPORT_GET_LIST_CUSTOMER_ADDRESS;
        return this.http.postAuthorize<PagingResponse<modelCusAddress.CustomerAddressList[]>>(url, request);
    }

    getAllOrderService(): Observable<BaseEntityResponse<modelOrderService.OrderServiceList[]>> {
        const url = ConfigSetting.ORDER_TRANSPORT_GET_ALL_ORDER_SERVICE;
        return this.http.getAuthorize<BaseEntityResponse<modelOrderService.OrderServiceList[]>>(url);
    } 

    getAllWarehouse(): Observable<BaseEntityResponse<modelWarehouse.WarehouseList[]>> {
        const url = ConfigSetting.ORDER_TRANSPORT_GET_ALL_WARE_HOUSE;
        return this.http.getAuthorize<BaseEntityResponse<modelWarehouse.WarehouseList[]>>(url);
    } 
    
    getAllProductType(): Observable<BaseEntityResponse<modelProductType.ProductTypeList[]>> {
        const url = ConfigSetting.ORDER_TRANSPORT_GET_ALL_PRODUCT_TYPE;
        return this.http.getAuthorize<BaseEntityResponse<modelProductType.ProductTypeList[]>>(url);
    } 

    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_TRANSPORT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    updateStatus(id:string,trackingStatus:number): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_TRANSPORT_UPDATE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url + '/?id='+id+'&trackingStatus='+trackingStatus, null);
    } 
}
