import * as model from '../model/warehouse-emp.model';
import * as modelwh from '../model/warehouse.model';
import {PagingResponse, BaseEntityResponse} from './base.response';
export interface WarehouseEmpListResponse extends PagingResponse<model.WarehouseEmpList[]> {

}
export interface WarehouseListResponse extends PagingResponse<modelwh.WarehouseList[]> {

}
export interface EmployeeListRepsonse extends PagingResponse<model.Employee[]> {

}
