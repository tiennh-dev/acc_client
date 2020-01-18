import { OrderPaysRequest } from './../models/request/order.request';
import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import * as model from '../models/model/order.model';
import * as modelwall from '../models/model/wallet.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as resCus from '../models/response/customer.response';
import { OrderDetailGetByOrderIdRequest } from '../models/request/order-detail.request';
import * as res from '../models/request/orderdetailupdate.request';
import * as req from '../models/request/payment.request';
import * as response from '../models/response/order.response';
import * as reqor from '../models/request/orderbyforyouListrequest.request';
import * as resCusw from './../models/response/wallettrans.response';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderPreUpdateRequest, OrderUpdateShippingFeeRequest, OrderWorkflowManyRequest, OrderPaymentsRequest } from '../models/request/order.request'; 
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { WarehouseList } from '../models/model/warehouse.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import * as modelrechage from './../models/model/order.model';
import * as modeldeposite from './../models/model/deposits.model';
import * as modelmemberShipLevel from './../models/model/MemberShipLevel.model';
import { BankInfoDetail, BankInfoList } from '../models/model/bankinfo.model';




@Injectable()
export class WaitingBuyForYouService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.OrderJTable>> {
        const url = ConfigSetting.WAITING_BUY_YOU_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.OrderJTable>>(url, request);
    }

    getListTable(request: reqor.orderbyforyoulistrequest): Observable<DataTableResponse<response.OrderListResponse>> {
        const url = ConfigSetting.WAITING_BUY_YOU_LIST_TABLE;
        return this.http.postAuthorize<DataTableResponse<response.OrderListResponse>>(url, request);
    }
    getOrderDetail(request: OrderDetailGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderDetailList[]>> {
        const url = ConfigSetting.WAITING_BUY_YOU_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailList[]>>(url, request);
    }
    getDetail(orderId: number): Observable<BaseEntityResponse<model.OrderApp>> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_DETAIL;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderApp>>(url + '/' + orderId,null);
    }
    getOrderDetailPayment(id: number, accountId: string): Observable<BaseEntityResponse<model.OrderDetailPayment>> {
        const url = ConfigSetting.WAITING_BUY_YOU_DETAIL_PAYMENT;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderDetailPayment>>(url +
             '/?id=' + id + '&accountId=' + accountId , null);
    }
    getwalletByaccountId(accountId: string): Observable<resCusw.WalletTransListResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_WALLET_TRANS;
        return this.http.postAuthorize<resCusw.WalletTransListResponse>(url + '/' + accountId, null);
    }

    getwalletById(walletId: string): Observable<modelwall.WalletList[]> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_WALLET_BY_WALLETID;
        return this.http.postAuthorize<modelwall.WalletList[]>(url + '/' + walletId, null);
    }

    getPaymentProfile(accountId: string): Observable<number> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_PAYMENT_PROFILE;
        return this.http.postAuthorize<number>(url + '/' + accountId, null);
    }

    getListCustomer(): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_LIST_CUSTOMER;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, null);
    }
    getListTopCustomer(request: reqCus.CustomerListTopRequest): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.ORDER_AUCTION_LIST_TOP_CUSTOMER;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url , request);
    }
    getListBankInfoByBankNumber(): Observable<BaseEntityResponse<BankInfoList[]>> {
        const url = ConfigSetting.DEPOSITS_GET_LIST_BANKINFO;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoList[]>>(url, null);
    }
    

    getCustomerByAccountId(accountId:string): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.WAITING_CUSTOMER_BY_ACCOUNTID;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url + '/' + accountId , null);
    }
    GetCustomerAddressByAccountId(accountId:string): Observable<BaseEntityResponse<modelCus.CustomerList[]>> {
        const url = ConfigSetting.WAITING_CUSTOMER_ADDRESS_BY_ACCOUNTID;
        return this.http.postAuthorize<BaseEntityResponse<modelCus.CustomerList[]>>(url + '/' + accountId , null);
    }
    
    UpdateDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_UPDATE_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    UpdateStatusDetail(request: res.OrderdetailupdateRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_UPDATE_STATUS_DETAIL;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    Add(request: req.PaymentAddRequest): Observable<resCus.CustomerListResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_PAYMENT_ADD_REQUEST;
        return this.http.postAuthorize<resCus.CustomerListResponse>(url, request);
    }

    getAllWarehouseActive(): Observable<BaseEntityResponse<WarehouseList[]>> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_ALL_WAREHOUSE_ACTIVE;
        return this.http.postAuthorize<BaseEntityResponse<WarehouseList[]>>(url, null);
    }

    preUpdateOrder(request: OrderUpdateShippingFeeRequest): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_PRE_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    cancelOrderByForYou(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_CANCEL_ORDER_BUY_FOR_YOU;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    requestCancelOrder(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_REQUEST_CANCEL_ORDER;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }

    requestApproveTempDeposit(request: OrderWorkflowRequest): Observable<WorkflowTriggerInfoResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_REQUEST_APPROVE_TEMP_DEPOSIT;

        return this.http.postAuthorize<WorkflowTriggerInfoResponse>(url, request);
    }
    getMessages(request: OrderMessageGetByOrderIdRequest): Observable<BaseEntityResponse<model.OrderMessage[]>> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_MESSAGES;
        return this.http.postAuthorize<BaseEntityResponse<model.OrderMessage[]>>(url, request);
    }
    loadCustomerInfo(accountId: string): Observable<BaseEntityResponse<modelCus.Customer>> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_CUSTOMER_INFO;

        return this.http.postAuthorize<BaseEntityResponse<modelCus.Customer>>(url + '/' + accountId, null);
    }
    getWalletInfo(accountId: string): Observable<CustomerWalletInfoResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_WALLET_INFO;
        return this.http.postAuthorize<CustomerWalletInfoResponse>(url + '/' + accountId, null);
    }
    getMembershipInfo(accountId: number): Observable<MemberShipLevel> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_MEMBERSHIP_INFO;
        return this.http.post<MemberShipLevel>(url + '/' + accountId, null);
    }
    getEmpInfo(accountId: string): Observable<BaseEntityResponse<EmployeeDetail>> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_EMP_INFO;
        return this.http.post<BaseEntityResponse<EmployeeDetail>>(url + '/' + accountId, null);
    }
    UpdateOrderPrice(price:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_PRICE;
        return this.http.postAuthorize<BaseResponse>(url + '/?price=' +price+'&Id='+Id,null);
    }
    UpdateOrderNote(note:string,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_NOTE;
        return this.http.postAuthorize<BaseResponse>(url + '/?note=' +note+'&idOrderDetail='+Id,null);
    }
    UpdateOrderDetail(amount:number,Id:string): Observable<BaseResponse> {
        const url = ConfigSetting.UPDATE_ORDER_DETAIL;
        return this.http.postAuthorize<BaseResponse>(url + '/?amount=' +amount+'&Id='+Id,null);
    }
    getListOrder(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.GET_LIST_WAITING_BUY_FOR_YOU;
        return this.http.post<model.OrderJTable>(url ,request);
    }
    getOrderPayments(request: OrderPaymentsRequest): Observable<model.OrderJTable> {
        const url = ConfigSetting.WAITING_BUY_YOU_GET_ORDER_PAYMENTS;
        return this.http.post<model.OrderJTable>(url, request);
    }
    GetMessagesMany(request: model.OrderList): Observable<model.OrderJTable> {
        const url = ConfigSetting.WAITING_GET_LIST_MESSAGES_MANY_BUY_FOR_YOU;
        return this.http.post<model.OrderJTable>(url ,request);
    }
    
    RequestApproveMany(request: OrderWorkflowManyRequest): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_APPROVE_MANY_BUY_FOR_YOU;
        return this.http.post<BaseResponse>(url ,request);
    }

    getwallets(): Observable<BaseEntityResponse<modelwall.WalletList[]>> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_WALLET;
        return this.http.postAuthorize<BaseEntityResponse<modelwall.WalletList[]>>(url, null);
    }

    rechageBuyForYou(request: modelrechage.RechageAution): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_ADD_RECHAGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    payOrders(request: OrderPaysRequest): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_YOU_PAY_ORDERS;
        return this.http.post<BaseResponse>(url, request);
    }
    getEmployeeBySale():Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_GET_EMPLOYEE_SALER;
        return this.http.post<BaseResponse>(url ,null);
    }
    
    addNewOrder(request:model.OrderBuyForYouAddRequest):Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_ADD_NEW_ORDER;
        return this.http.post<BaseResponse>(url ,request);
    }


    CreateDeposite(request: modeldeposite.DepositsAdd): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_CREATE_DEPOSITE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    addRecharge(request: modeldeposite.DepositsAdd): Observable<BaseResponse> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_ADD_RECHAGE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    getBankInfoByBankNumber(bankNumber:string): Observable<BaseEntityResponse<BankInfoDetail>> {
        const url = ConfigSetting.DEPOSITS_GET_BANKINFO_BY_BANKNUMBER;
        return this.http.postAuthorize<BaseEntityResponse<BankInfoDetail>>(url + '/' + bankNumber, null);
    }

    getcustomerprofile(accountId:string): Observable<modelmemberShipLevel.MemberShipLevel> {
        const url = ConfigSetting.WAITING_BUY_FOR_YOU_GET_CUSTOMER_LEVEL;
        return this.http.postAuthorize<modelmemberShipLevel.MemberShipLevel>(url + '/' + accountId, null);
    }

    exportExcel(request: any): Observable<BaseResponse> {
        const url = ConfigSetting.GET_EXPORT_WAITING_BUY_FOR_YOU;
        return this.http.postblob(url, request);
    }
}
