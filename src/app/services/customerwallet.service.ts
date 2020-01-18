import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as model from './../models/model/customerwallet.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import * as res from './../models/response/customerwallet.response';

@Injectable()

export class customerwalletservice{
    constructor(private http: HttpClientService) { }

    getlistTable(accountId:string):Observable<res.CustomerWalletResponse>{
        const url = ConfigSetting.CUSTOMER_WALLET;
        return this.http.postAuthorize<res.CustomerWalletResponse>(url + '/' + accountId,null);
    }
}