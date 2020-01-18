import { PagingResponse } from './base.response';
import * as model from '../model/bidlasttime.model';
export interface BidLastTimeResponse extends PagingResponse<model.BidLastTimeJTable[]> {
    UserId: string;
}
