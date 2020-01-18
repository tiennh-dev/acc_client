import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { Resource } from '../models/model/is4.model';
import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';

@Injectable()
export class IS4Service {
    constructor(private http: HttpClientService) { }

    accessGetResources(): Observable<BaseEntityResponse<Resource[]>> {
        const url = ConfigSetting.IS4_ACCESS_GET_RESOURCES;

        return this.http.getAuthorize<BaseEntityResponse<Resource[]>>(url);
    }

    accessCheckPermission(resourceKey: string, action: string): Observable<BaseResponse> {
        const url = ConfigSetting.IS4_ACCESS_CHECK_PERMISSION;
        
        return this.http.getAuthorize<BaseResponse>(url + '?resourceKey=' + resourceKey + "&action=" + action);
    }
}