import * as model from './../models/model/level.model';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import * as res from '../models/response/level.response';


@Injectable()
export class LevelService {
    constructor(private http: HttpClientService) { }

    getListJTable(request: any): Observable<DataTableResponse<model.LevelListJTable>> {
        const url = ConfigSetting.LEVEL_LIST_JTABLE;
        return this.http.postAuthorize<DataTableResponse<model.LevelListJTable>>(url, request);
    }

    update(request: model.LevelUpdate): Observable<BaseResponse> {
        const url = ConfigSetting.LEVEL_UPDATE;
        return this.http.postAuthorize<BaseResponse>(url, request);
    }
    getDetail(id: number): Observable<res.LevelDetailResponse> {
        const url = ConfigSetting.LEVEL_GET_DETAIL;
        return this.http.post<res.LevelDetailResponse>(url + '/' + id, null);
    }

}
