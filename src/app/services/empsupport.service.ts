import * as model from './../models/model/customer-address.model';
import * as modelresq from './../models/model/customer.model';
import * as modelres from './../models/model/Employess.model';
import * as res from './../models/response/EmployessListResponse.response';
import * as resc from './../models/response/customer.response';
import * as req from './../models/model/Employess.model';
import * as requestupdate from './../models/request/customerUpdate.request';
import * as requestcus from './../models/request/customer.request';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';

@Injectable()

export class EmpSupportService {
    constructor(private http: HttpClientService) { }
    getAllEmp(){
        const url = ConfigSetting.EMPSUPPORT_LIST_EMPPLOYEES;
        return this.http.postAuthorize<res.EmployessListResponse>(url, null);
    }

    getListCustomerwithCareBy(request: requestcus.CustomerListRequest): Observable<resc.CustomerListResponse> {
        const url = ConfigSetting.GET_LIST_CUSTOMER_WITH_CAREBY;
        return this.http.postAuthorize<resc.CustomerListResponse>(url, request);
    }

    GetListCustomerWithoutCareBy(request: requestcus.CustomerListRequest): Observable<resc.CustomerListResponse> {
        const url = ConfigSetting.GET_LIST_CUSTOMER_WITHOUT_CAREBY;
        return this.http.postAuthorize<resc.CustomerListResponse>(url, request);
    }

    getListAllCustomer(request: requestcus.CustomerListRequest): Observable<resc.CustomerListResponse> {
        const url = ConfigSetting.EMPSUPPORT_LIST_ALL_CUSTOMER;
        return this.http.postAuthorize<resc.CustomerListResponse>(url, request);
    }

    // getListAllCustomer(request: requestcus.CustomerListRequest): Observable<DataTableResponse<resc.CustomerListResponse>> {
    //     const url = ConfigSetting.EMPSUPPORT_LIST_ALL_CUSTOMER;
    //     return this.http.postAuthorize<DataTableResponse<resc.CustomerListResponse>>(url, request);
    // }

    // getCustomerByCare(request:any): Observable<DataTableResponse<resc.CustomerListResponse>> {
    //     const url = ConfigSetting.EMPSUPPORT_LIST_CUSTOMER_BY_CAREBY;
    //     return this.http.postAuthorize<DataTableResponse<resc.CustomerListResponse>>(url,request);
    // }

    getCustomerByCare(request:any): Observable<DataTableResponse<modelresq.CustomerJTable>> {
        const url = ConfigSetting.EMPSUPPORT_LIST_CUSTOMER_BY_CAREBY;
        return this.http.postAuthorize<DataTableResponse<modelresq.CustomerJTable>>(url,request);
    }

    updatecustomer(request:requestupdate.CustomerUpdate): Observable<res.EmployessListResponse> {
        const url = ConfigSetting.EMPS_UPDATE_CUSTOMER_BY_CAREBY;
        return this.http.postAuthorize<res.EmployessListResponse>(url,request);
    }
    
}

