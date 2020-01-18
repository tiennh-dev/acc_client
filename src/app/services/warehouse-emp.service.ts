import * as model from './../models/model/warehouse-emp.model';
import * as modelwh from './../models/model/warehouse.model';
import * as res from './../models/response/warehouse-emp.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class WarehouseEmpService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.WarehouseEmpList>> {
        const url = ConfigSetting.WAREHOUSE_EMP_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.WarehouseEmpList>>(url, request);
    }
    getListWarehouse(): Observable<res.WarehouseListResponse> {
        const url = ConfigSetting.GET_WAREHOUSE_LIST;
        return this.http.postAuthorize<res.WarehouseListResponse>(url, null);
    }
    getListEmployee(request: any): Observable<DataTableResponse<model.Employee[]>> {
        const url = ConfigSetting.GET_LIST_EMP;
        return this.http.postAuthorize<DataTableResponse<model.Employee[]>>(url, request);
    }
    add(id: number, accountId: string): Observable<BaseResponse> {
        const url = ConfigSetting.ADD_WH;
        return this.http.postAuthorize<BaseResponse>(url + '/' + id + '/' + accountId, null);
    }
    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.DELETE_WH;
        return this.http.postAuthorize<BaseResponse>(url + '/' + id, null);
    }
}
