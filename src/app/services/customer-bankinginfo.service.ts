import * as model from './../models/model/customer-bankinginfo.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as res from '../models/response/customer-bankinginfo.response';
import * as req from '../models/request/customer-bankinginfo.request';

@Injectable()

export class CustomerbankinginfoService{
    constructor(private http: HttpClientService) { }

    getlistTable(request:req.BankingInfoListRequest):Observable<res.Customerbankingresponse>{
        const url = ConfigSetting.CUSTOMER_BANKIGINFO;
        return this.http.postAuthorize<res.Customerbankingresponse>(url, request);
    }
}