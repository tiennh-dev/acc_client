import * as model from './../models/model/bankinfo.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as res from '../models/response/bankinfo.response';


@Injectable()
export class BankInfoService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.BankInfoListJTable>> {
        const url = ConfigSetting.BANKINFO_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.BankInfoListJTable>>(url, request);
    }

    add(request: model.BankInfoAdd): Observable<BaseResponse> {
        const url = ConfigSetting.BANKINFO_ADD;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: model.BankInfoUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.BANKINFO_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    delete(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.BANKINFO_DELETE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }
    getDetail(id: number): Observable<res.BankInfoDetailResponse> {
        const url = ConfigSetting.BANKINFO_GET_DETAIL;
        return this.http.post<res.BankInfoDetailResponse>(url + '/' + id, null);
    }
    onActive(id: number): Observable<BaseResponse> {
        const url = ConfigSetting.BANK_ACTIVE;
        return this.http.post<BaseResponse>(url + '/' + id, null);
    }

    forDeposite(id: number , value:number): Observable<BaseResponse> {
        const url = ConfigSetting.BANK_FOR_DEPOSITE;
        return this.http.post<BaseResponse>(url + '?id=' + id + '&value=' +value, null);
    }

    forWithDrawal(id: number,value:number): Observable<BaseResponse> {
        const url = ConfigSetting.BANK_WITHDRAWAL;
        return this.http.post<BaseResponse>(url + '?id=' + id + '&value=' + value, null);
    }

    UpdateBankType(id: number,banktype:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_BANK_TYPE;
        return this.http.post<BaseResponse>(url + '?id=' + id + '&banktype=' + banktype, null);
    }

    

}
