import { BaseEntityResponse, PagingResponse } from './base.response';
import * as model from '../model/Employess.model';

export interface EmployessListResponse extends PagingResponse<model.EmployessList[]> {

}