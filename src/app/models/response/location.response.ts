import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/location.model';

export interface LocationResponse extends BaseEntityResponse<model.Location[]> {

}
