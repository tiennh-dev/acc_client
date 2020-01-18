import { PagingResponse, BaseEntityResponse } from './base.response';
import * as model from '../model/customer-bankinginfo.model';

export interface Customerbankingresponse extends PagingResponse<model.BankingInfoList[]> {

}
 