import { BaseEntityResponse, BaseResponse } from './../models/response/base.response';
import * as model from './../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import * as bid from './../models/response/bidClient.response';
 


@Injectable()
export class CancelOrderService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.CANCEL_ORDER_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.APPROVAL_ORDER_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }

    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.ORDER_AUCTION_ORDERDETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }
    
    
    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_AUTION_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }

    exportExcel(request:any):Observable<BaseResponse>{
        const url = ConfigSetting.GET_EXPORT_CANCEL_ORDER;
        return this.http.postblob(url, request);
    }
}
