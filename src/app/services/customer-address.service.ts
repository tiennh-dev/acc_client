import * as model from './../models/model/customer-address.model';
import * as modellocation from './../models/model/location.model';
import * as res from './../models/response/customer-address.response';
import * as req from './../models/request/customer-address.request';
import * as responselocation from './../models/response/location.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class CustomerAddressService {
    constructor(private http: HttpClientService) { }

    getList(request: req.CustomerAddressListRequest): Observable<res.CustomerAddressListResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST;
        return this.http.postAuthorize<res.CustomerAddressListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.CustomerAddressJTable>> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.CustomerAddressJTable>>(url, request);
    }

    getDetail(id: number): Observable<res.CustomerAddressDetailResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_GET_DETAIL;
        return this.http.postAuthorize<res.CustomerAddressDetailResponse>(url + '/' + id, null);
    }

    add(request: model.CustomerAddressAdd): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.CustomerAddressEdit): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }

    getListProvince():Observable<BaseResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST_PROVINCE;
        return this.http.post<BaseResponse>(url, null);
    }

    getListProvinceDetail(name:string):Observable<responselocation.LocationResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST_PROVINCE_DETAIL;
        return this.http.post<responselocation.LocationResponse>(url + '/' +name, null);
    }

    getListDistins(code:string):Observable<responselocation.LocationResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST_DISTINS;
        return this.http.post<responselocation.LocationResponse>(url + '/' +code, null);
    }

    getListWard(Id:any):Observable<responselocation.LocationResponse> {
        const url = ConfigSetting.CUSTOMER_ADDRESS_LIST_WARD;
        return this.http.post<responselocation.LocationResponse>(url + '/' +Id, null);
    }

    
}
