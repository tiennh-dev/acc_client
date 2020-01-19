import { BaseEntityResponse, BaseResponse } from './../models/response/base.response';
import * as model from './../models/model/order.model';
import { DataTableResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as resCus from './../models/response/customer.response';
import * as reqCus from './../models/request/customer.request';
import * as modelCus from './../models/model/customer.model';
import { OrderWorkflowRequest, OrderMessageGetByOrderIdRequest, OrderWorkflowManyRequest, AuctionCheckDeletedBidRequest } from '../models/request/order.request';
import { WorkflowTriggerInfoResponse } from '../models/response/order.response';
import * as res from '../models/request/orderdetailupdate.request';
import { PaymentAddRequest } from '../models/request/payment.request';
import { WalletList } from '../models/model/wallet.model';
import { CustomerWalletInfoResponse } from '../models/response/customerwallet.response';
import { MemberShipLevel } from '../models/model/MemberShipLevel.model';
import { EmployeeDetail } from '../models/model/Employess.model';
import { AccountingAccountJTable } from '../models/model/accountingaccounts.model';


@Injectable()
export class AccountingAccountsService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<BaseEntityResponse<AccountingAccountJTable>> {
        const url = ConfigSetting.CET_JTABLE_ACCOUNTINGACCOUNTS;
        return this.http.postAuthorize<BaseEntityResponse<AccountingAccountJTable>>(url, request);
    }
   
}
