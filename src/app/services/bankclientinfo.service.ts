import { LoginRequest } from './../models/request/bankclientinfo.request';
import { BaseEntityResponse } from './../models/response/base.response';

import * as res from './../models/response/bankclientinfo.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class BankClientInfoService {
    constructor(private http: HttpClientService) { }

    getList(): Observable<res.BankClientInfoListResponse> {
        const url = ConfigSetting.BANKCLIENTINFO_LIST;
        return this.http.postAuthorize<res.BankClientInfoListResponse>(url, null);
    }
    getCapcha(apiUrl: string): Observable<BaseEntityResponse<string>> {
        const url = ConfigSetting.GET_CAPCHA;
        return this.http.postAuthorize<BaseEntityResponse<string>>(url + '?apiUrl=' + apiUrl, null);
    }
    login(request: LoginRequest, apiUrl: string): Observable<BaseEntityResponse<boolean>> {
        const url = ConfigSetting.LOGIN;
        return this.http.postAuthorize<BaseEntityResponse<boolean>>(url + '?apiUrl=' + apiUrl, request);
    }
}
