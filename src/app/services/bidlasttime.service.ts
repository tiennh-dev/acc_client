import { DataTableResponse } from '../models/response/base.response';
import { ConfigSetting } from '../common/config-setting';
import { HttpClientService } from './http-client.service';
import * as res from '../models/response/bidlasttime.reponse';
import * as resCus from '../models/response/customer.response';
import * as req from '../models/request/bidlasttime.request';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable()
export class BidLastTimeService {
    constructor(private http: HttpClientService) { }
    getJTable(request: req.BidLastTimeRequest): Observable<DataTableResponse<res.BidLastTimeResponse>> {
        const url = ConfigSetting.BIDLASTTIME_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<res.BidLastTimeResponse>>(url, request);
    }
    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.BIDLASTTIME_GET_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
}
