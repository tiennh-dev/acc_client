import { PagingResponse, BaseEntityResponse } from './base.response';
import * as model from '../model/warehouse.model';

export interface WarehouseListJTable extends PagingResponse<model.WarehouseListJTable[]> {

}
export interface WarehouseDetailResponse extends BaseEntityResponse<model.WarehouseUpdate> {

}
