import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/freeze.model';

export interface FreezeListResponse extends PagingResponse<model.FreezeJTable[]> {

}
