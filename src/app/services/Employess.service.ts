import * as model from './../models/model/customer-address.model';
import * as res from './../models/response/EmployessListResponse.response';
import * as req from './../models/request/EmployessListRequest.request';
import * as requestupdate from './../models/request/customerUpdate.request';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';

@Injectable()

export class EmployessService{
    constructor(private http: HttpClientService) { }

    getList(request: req.EmployessListRequest): Observable<res.EmployessListResponse> {
        const url = ConfigSetting.EMPLOYESS_LIST_ALL;
        return this.http.postAuthorize<res.EmployessListResponse>(url, request);
    }

    updatecustomer(request:requestupdate.CustomerUpdate): Observable<res.EmployessListResponse> {
        const url = ConfigSetting.UPDATE_CUSTOMER_BY_CAREBY;
        return this.http.postAuthorize<res.EmployessListResponse>(url ,request);
    }

    GetEmployeeDetail(careBy:string): Observable<res.EmployessListResponse> {
        const url = ConfigSetting.GET_EMP_DETAIL;
        return this.http.postAuthorize<res.EmployessListResponse>(url + '/' +careBy,null);
    }
}