import { BaseEntityResponse, BaseResponse, DataTableResponse } from './../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { BankAccountJTable, BankAccountEdit } from '../models/model/bankaccount.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
 


@Injectable()
export class BankAccountService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<BankAccountJTable>> {
        const url = ConfigSetting.GET_JTABLE_BANK_ACCOUNT;
        return this.http.postAuthorize<DataTableResponse<BankAccountJTable>>(url, request);
    }

    addBankAccount(request:BankAccountJTable):Observable<BaseResponse>{
        const url = ConfigSetting.ADD_NEW_BANK_ACCOUNT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    editBankAccount(request:BankAccountEdit):Observable<BaseResponse>{
        const url = ConfigSetting.Edit_NEW_BANK_ACCOUNT;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    bankAccountById(bankAccountId:number):Observable<BaseEntityResponse<BankAccountEdit>>{
        const url = ConfigSetting.GET_BANK_ACCOUNT_BUY_ID;
        return this.http.postAuthorize<BaseEntityResponse<BankAccountEdit>>(url + '/' + bankAccountId, null);
    }

    deleteBankAccount(Id:number):Observable<BaseResponse>{
        const url = ConfigSetting.DELETE_BANK_ACCOUNT;
        return this.http.postAuthorize<BaseResponse>(url + '/' + Id, null);
    }
   
}
