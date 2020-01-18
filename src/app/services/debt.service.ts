import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTableResponse, BaseEntityResponse, BaseResponse, PagingResponse } from '../models/response/base.response';
import * as model from './../models/model/customer.model';
import * as modeldeposite from './../models/model/deposits.model';
import * as modelw from './../models/model/withdrawal.model';
import * as modelorder from './../models/model/order.model';
import * as modelCusWallet from './../models/model/customerwallet.model';
import { ConfigSetting } from '../common/config-setting';
import { HttpClientService } from './http-client.service';
import { debtOrderList } from './../models/model/order.model';

@Injectable()
export class DeBtService {
    constructor(private http: HttpClientService){}
    getListJTable(request: any): Observable<DataTableResponse<model.CustomerJTable>> {
        const url = ConfigSetting.DEBT_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.CustomerJTable>>(url, request);
    }
    
    getTableAucPre(request: any): Observable<DataTableResponse<modelorder.OrderJTable>> {
        const url = ConfigSetting.DEBT_AUCPRE_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<modelorder.OrderJTable>>(url, request);
    }

    getTableOrder(request: any): Observable<PagingResponse<modelorder.OrderApp[]>> {
        const url = ConfigSetting.DEBT_ORDER_LIST_JTABLE;
        return this.http.postAuthorize<PagingResponse<modelorder.OrderApp[]>>(url, request);
    }

    getTableOrderBuyForYou(request: any): Observable<PagingResponse<modelorder.OrderApp[]>> {
        const url = ConfigSetting.DEBT_ORDER_LIST_JTABLE_BUY_FOR_YOU;
        return this.http.postAuthorize<PagingResponse<modelorder.OrderApp[]>>(url, request);
    }

    getTableOrderME(request: any): Observable<PagingResponse<modelorder.OrderApp[]>> {
        const url = ConfigSetting.DEBT_ORDER_LIST_JTABLE_ME;
        return this.http.postAuthorize<PagingResponse<modelorder.OrderApp[]>>(url, request);
    }

    getTableWaitPurchase(request: any): Observable<BaseEntityResponse<debtOrderList>> {
        const url = ConfigSetting.DEBT_WAITPURCHASE_LIST_JTABLE;
        return this.http.postAuthorize<BaseEntityResponse<debtOrderList>>(url, request);
    }


    getTablePurchased(request: any): Observable<BaseEntityResponse<debtOrderList>> {
        const url = ConfigSetting.DEBT_PURCHASED_LIST_JTABLE;
        return this.http.postAuthorize<BaseEntityResponse<debtOrderList>>(url, request);
    }


    getTableWaitPayment(request: any): Observable<BaseEntityResponse<debtOrderList>> {
        const url = ConfigSetting.DEBT_WAITPAYMENT_LIST_JTABLE;
        return this.http.postAuthorize<BaseEntityResponse<debtOrderList>>(url, request);
    }

    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<modelorder.OrderDetailPayment>> {
        const url = ConfigSetting.WAITING_ORDER_AUCTION_AUC_ORDERDETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<modelorder.OrderDetailPayment>>(url + '/?id=' + id + '&accountId=' + accountId, null);
    }

    getTablePaid(request: any): Observable<BaseEntityResponse<debtOrderList>> {
        const url = ConfigSetting.DEBT_PAID_LIST_JTABLE;
        return this.http.postAuthorize<BaseEntityResponse<debtOrderList>>(url, request);
    }

    getTableDeliveRed(request: any): Observable<BaseEntityResponse<debtOrderList>> {
        const url = ConfigSetting.DEBT_DELIVERED_LIST_JTABLE;
        return this.http.postAuthorize<BaseEntityResponse<debtOrderList>>(url, request);
    }

    exportDeposite(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DEBT_DEPOSITE;
        return this.http.postblob(url, request);
    }

    exportRefundransaction(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DEBT_REFUND_TRANSACTION;
        return this.http.postblob(url, request);
    }


    exportPayment(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DEBT_PAYMENT;
        return this.http.postblob(url, request);
    }

    exportWithDrawal(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DEBT_WithDrawal;
        return this.http.postblob(url, request);
    }

    exportExcelAucPre(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DEBT;
        return this.http.postblob(url, request);
    }

     exportExcelWaitDeposite(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_WAITDEPOSITE;
        return this.http.postblob(url, request);
    }


    exportExcelWaitPurchase(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_WAITPURCHASE;
        return this.http.postblob(url, request);
    }

    exportExcelPurchased(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_PURCHASED;
        return this.http.postblob(url, request);
    }

    exportExcelPaid(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_PAID;
        return this.http.postblob(url, request);
    }

    exportExcelWaitPayment(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_WAITPAYMENT;
        return this.http.postblob(url, request);
    }

    exportExcelDeliverd(request:any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_DELIVERED;
        return this.http.postblob(url, request);
    }

    

    GetDeposite(request:any): Observable<BaseEntityResponse<modeldeposite.DepositsList>> {
        const url = ConfigSetting.DEBT_GET_DEPOSITE;
        return this.http.postAuthorize<BaseEntityResponse<modeldeposite.DepositsList>>(url,request);
    }
    GetDepositeRe(request: string): Observable<BaseEntityResponse<modeldeposite.DepositsList>> {
        const url = ConfigSetting.DEBT_GET_DEPOSITE_RE;
        return this.http.postAuthorize<BaseEntityResponse<modeldeposite.DepositsList>>(url, request);
    }
    GetWithDrawal(request: any): Observable<BaseEntityResponse<modelw.WithdrawalList>> {
        const url = ConfigSetting.DEBT_GET_Withdrawal;
        return this.http.postAuthorize<BaseEntityResponse<modelw.WithdrawalList>>(url,request);
    }

    GetOrderDetailAccountId(request:any): Observable<BaseEntityResponse<modelorder.OrderList>> {
        const url = ConfigSetting.DEBT_GET_ORDER;
        return this.http.postAuthorize<BaseEntityResponse<modelorder.OrderList>>(url,request);
    }

    GetCustomerWallet(accountId: string): Observable<BaseEntityResponse<modelCusWallet.WalletInfo>> {
        const url = ConfigSetting.DEBT_GET_CUSTOMER_WALLET;
        return this.http.postAuthorize<BaseEntityResponse<modelCusWallet.WalletInfo>>(url + '/' + accountId, null);
    }

    GetCustomerInfomation(accountId: string): Observable<BaseEntityResponse<Object>> {
        const url = ConfigSetting.DEBT_GET_CUSTOMER_INFOMATION;
        return this.http.postAuthorize<BaseEntityResponse<Object>>(url + '/' + accountId, null);
    }

    GetPayment(request: any): Observable<BaseEntityResponse<Object>> {
        const url = ConfigSetting.DEBT_GET_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<Object>>(url, request);
    }
    
    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.DEBT_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }
}