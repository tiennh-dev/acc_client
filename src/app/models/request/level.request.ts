import { SortRequest } from './base.request';

export interface LevelListRequest extends SortRequest {
    keyword: string;
}
