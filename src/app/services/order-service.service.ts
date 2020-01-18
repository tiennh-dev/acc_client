import * as model from './../models/model/order-service.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class OrderServiceService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderServiceJTable>> {
        const url = ConfigSetting.ORDER_SERVICE_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderServiceJTable>>(url, request);
    }

    add(request: model.OrderServiceAdd): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_SERVICE_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.OrderServiceEdit): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_SERVICE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.ORDER_SERVICE_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    
    getDetail(id: number): Observable<BaseEntityResponse<model.OrderServiceEdit>> {
        const url = ConfigSetting.ORDER_SERVICE_GET_DETAIL;
        return this.http.post<BaseEntityResponse<model.OrderServiceEdit>>(url + '/' + id, null);
    }
}
