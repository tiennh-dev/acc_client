import * as model from './../models/model/banktransactionhistory.model';
import * as resbank from './../models/response/bankinfo.response';
import * as res from './../models/response/banktransactionhistory.response';
import { DataTableResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';


@Injectable()
export class BankTransactionHistoryService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.BankTransactionHistoryJTable>> {
        const url = ConfigSetting.BANK_TRANS_HISTORY_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.BankTransactionHistoryJTable>>(url, request);
    }

    getListBankInfo(): Observable<resbank.BankInfoListResponse> {
        const url = ConfigSetting.BANK_INFO_LIST;
        return this.http.postAuthorize<resbank.BankInfoListResponse>(url, null);
    }
    getDetail(id: string): Observable<res.BankTransactionDetailResponse> {
        const url = ConfigSetting.BANK_TRANS_GET_DETAIL;
        return this.http.postAuthorize<res.BankTransactionDetailResponse>(url + '/' + id, null);
    }
    update(request: any): Observable<BaseResponse> {
        const url = ConfigSetting.BANK_TRANS_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

}
