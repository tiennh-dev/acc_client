import * as model from './../models/model/warehouse.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as res from '../models/response/warehouse.response';
import { WareHouseListRequestextends } from '../models/request/warehousesort.request';


@Injectable()
export class WarehouseService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.WarehouseListJTable>> {
        const url = ConfigSetting.WAREHOUSE_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.WarehouseListJTable>>(url, request);
    }

    getList(request : WareHouseListRequestextends): Observable<BaseEntityResponse<model.WarehouseList>> {
        const url = ConfigSetting.WAREHOUSE_LIST;
        return this.http.postAuthorize<BaseEntityResponse<model.WarehouseList>>(url, request);
    }

    updateSortOrder(request:model.WareHouseOrder[]):Observable<BaseResponse> {
        const url = ConfigSetting.WAREHOUSE_SORT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    add(request: model.WarehouseAdd): Observable<BaseResponse> {
        const url = ConfigSetting.WAREHOUSE_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.WarehouseUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.WAREHOUSE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.WAREHOUSE_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    getDetail(id: number): Observable<res.WarehouseDetailResponse> {
        const url = ConfigSetting.WAREHOUSE_GET_DETAIL;
        return this.http.post<res.WarehouseDetailResponse>(url + '/' + id, null);
    }
    changeStatus(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.WAREHOUSE_ACTIVE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }

}
