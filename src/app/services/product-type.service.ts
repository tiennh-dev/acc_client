import * as model from './../models/model/product-type.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { ProductTypeListRequestextends } from '../models/request/producttypelistrequest.request';


@Injectable()
export class ProductTypeService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.ProductTypeJTable>> {
        const url = ConfigSetting.PRODUCT_TYPE_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.ProductTypeJTable>>(url, request);
    }

    add(request: model.ProductTypeAdd): Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCT_TYPE_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.ProductTypeEdit): Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCT_TYPE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCT_TYPE_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    
    getDetail(id: number): Observable<BaseEntityResponse<model.ProductTypeEdit>> {
        const url = ConfigSetting.PRODUCT_TYPE_GET_DETAIL;
        return this.http.post<BaseEntityResponse<model.ProductTypeEdit>>(url + '/' + id, null);
    }

    getListSort(): Observable<BaseEntityResponse<model.ProductTypeList>> {
        const url = ConfigSetting.PRODUCTTYPE_LIST;
        return this.http.postAuthorize<BaseEntityResponse<model.ProductTypeList>>(url, null);
    }

    updateSortOrder(request:model.ProductTypeOrder[]):Observable<BaseResponse> {
        const url = ConfigSetting.PRODUCTTYPE_SORT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
}
