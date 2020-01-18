import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/bankclientinfo.model';


export interface BankClientInfoListResponse extends BaseEntityResponse<model.BankClientInfoList[]> {

}
