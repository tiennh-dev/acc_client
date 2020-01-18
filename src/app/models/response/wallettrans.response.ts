import {  PagingResponse } from './base.response';
import * as model from '../model/wallettrans.model';

export interface WalletTransListResponse extends PagingResponse<model.WalletTransJTable[]> {
    
}
