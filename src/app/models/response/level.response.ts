import { PagingResponse, BaseEntityResponse } from './base.response';
import * as model from '../model/level.model';

export interface LevelListJTable extends PagingResponse<model.LevelListJTable[]> {

}
export interface LevelUpdateResponse extends BaseEntityResponse<model.LevelUpdate> {

}
export interface LevelDetailResponse extends BaseEntityResponse<model.LevelDetail> {

}

