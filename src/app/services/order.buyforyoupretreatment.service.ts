import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import * as model from '../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { OrderPreUpdateRequest, OrderUpdateShippingFeeRequest, OrderPreUpdateStatusRequest } from '../models/request/order.request'; 
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { WarehouseList } from '../models/model/warehouse.model';


@Injectable()
export class OrderBuyForPretreatmentYouService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url +
             '/?id=' + id + '&accountId=' + accountId , null);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    preUpdateOrder(request: OrderUpdateShippingFeeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_PRE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    preUpdateStatusOrder(request: OrderPreUpdateStatusRequest): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_BUY_YOU_PRETREATMENT_PRE_UPDATE_STATUS;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    UpdateOrderDetail(amount:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_DETAIL;
        return this.http.postAuthorize<BaseResponse>(url + '/?amount=' +amount+'&Id='+Id,null);
    }

    UpdateOrderPrice(price:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_PRICE;
        return this.http.postAuthorize<BaseResponse>(url + '/?price=' +price+'&Id='+Id,null);
    }
    
    
}
