import * as model from './../models/model/pricequotelasttime.model';
import * as res from './../models/response/pricequotelasttime.response';
import * as req from './../models/request/pricequotelasttime.request';
import * as resCus from './../models/response/customer.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as reqCus from '../models/request/customer.request';


@Injectable()
export class PriceQuoteLastTimeService {
    constructor(private http: HttpClientService) { }

    getList(request: req.PriceQuoteLastTimeListRequest): Observable<res.PriceQuoteLastTimeListResponse> {
        const url = ConfigSetting.PRICE_QUOTE_LAST_TIME_LIST;
        return this.http.postAuthorize<res.PriceQuoteLastTimeListResponse>(url, request);
    }

    getListJTable(request: any): Observable<DataTableResponse<model.PriceQuoteLastTimeJTable>> {
        const url = ConfigSetting.PRICE_QUOTE_LAST_TIME_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.PriceQuoteLastTimeJTable>>(url, request);
    }

    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PRICE_QUOTE_LAST_TIME_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.PRICE_QUOTE_LAST_TIME_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    delete(id: string, accountId: string): Observable<res.PriceQuoteLastTimeDeleteResponse> {
        const url = ConfigSetting.PRICE_QUOTE_LAST_TIME_DELETE;
        return this.http.postAuthorize<res.PriceQuoteLastTimeDeleteResponse>(url + '/' + id + '/' + accountId, null);
    }

}
