import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/customerwallet.model';

export interface CustomerWalletResponse extends BaseEntityResponse<model.wallet> {

}
export interface CustomerWalletInfoResponse extends BaseEntityResponse<model.WalletInfo> {

}