import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiService } from '../services/api.service';
import { HttpWrapperService } from '../services/httpwWrapper.service';

import {
  Workflow,
  WorkflowDefinition,
  WorkflowHistory,
  WorkflowVariable
} from '../models/model/workflow.model';
import { WorkflowPagingModel } from '../models/model/workflow.model';
import { BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { ConfigSetting } from '../common/config-setting';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  public constructor(
    private _api: ApiService,
    private _http: HttpWrapperService,
    private _client: HttpClient,
    private http: HttpClientService
  ) { }

  public workflows(page: WorkflowPagingModel): Observable<any> {
    const url = this._api.createApiUrl('workflow');

    let params = new HttpParams()
      .set('pageIndex', page.pageIndex.toString())
      .set('pageSize', page.pageSize.toString());

    if (page.type) {
      params = params.append('type', page.type);
    }
    if (page.correlationId) {
      params = params.append('correlationId', page.correlationId.toString());
    }
    if (page.assignee) {
      params = params.append('assignee', page.assignee);
    }

    return this._client.get<Array<Workflow>>(url, {
      params: params,
      observe: 'response'
    });
  }

  public get(id: number): Observable<Workflow> {
    return this._http.get<Workflow>(`workflow/${id}`);
  }

  public getHistory(id: number): Observable<Array<WorkflowHistory>> {
    return this._http.get<Array<WorkflowHistory>>(`workflow/${id}/history`);
  }

  public getVariables(id: number): Observable<Array<WorkflowVariable>> {
    return this._http.get<Array<WorkflowVariable>>(`workflow/${id}/variables`);
  }

  public getInstance(type: string, correlationId: number): Observable<Workflow> {
    const params = new HttpParams()
      .set('type', type)
      .set('correlationId', correlationId.toString());

    return this._http.get<Workflow>(`workflow/instance`, params);
  }

  public definitions(): Observable<Array<WorkflowDefinition>> {
    return this._http.get<Array<WorkflowDefinition>>('workflow/definitions');
  }

  public dot(type: string): Observable<string> {
    return this._http.getAsText(`workflow/dot/${type}`);
  }

  public dotWithHistory(type: string, correlationId: number): Observable<string> {
    return this._http.getAsText(`workflow/dotwithhistory/${type}/${correlationId}`);
  }
  //custom
  getWorkflow(id: number): Observable<BaseEntityResponse<Workflow>> {
    const url = ConfigSetting.GET_WORK_FLOW;
    return this.http.getAuthorize<BaseEntityResponse<Workflow>>(url + '/' + id);
  }
  getDotWithHistory(type: string, correlationId: number): Observable<string> {
    const url = ConfigSetting.GET_DOT_WITH_HISTORY;
    return this.http.getAuthorize<string>(url + '/' + type + '/' + correlationId);
  }
}
