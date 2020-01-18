import * as model from './../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { OrderDetailListResponse } from '../models/response/order-detail.response';


@Injectable()
export class OrderService {
    constructor(private http: HttpClientService) { }

    getOrderDetail(id: number): Observable<OrderDetailListResponse> {
        const url = ConfigSetting.ORDER_LIST_DETAIL;
        return this.http.postAuthorize<OrderDetailListResponse>(url + '/?id=' + id, null);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.ORDER_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }
}
