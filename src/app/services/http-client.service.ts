import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigSetting } from '../common/config-setting';

@Injectable()
export class HttpClientService {
    constructor(private http: HttpClient) {
    }

    post<TEntity>(url: string, body: any): Observable<TEntity> {
        return this.http.post<TEntity>(url, body);
    }

    private defineHeader(): HttpHeaders  {
        const token: string = ConfigSetting.GetAuthenToken;
        const headers: HttpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

        return headers;
    }

    postAuthorize<TEntity>(url: string, body: any): Observable<TEntity> {
        const headers = this.defineHeader();

        return this.http.post<TEntity>(url, body, { headers: headers });
    }

  
    postblob(url: string, obj:any): Observable<any> { 
        const headers = this.defineHeader(); 
        const response = this.http.post(url, obj, {
            headers: headers,
            responseType: 'blob'
        });
        return response;
    }
    getAuthorize<TEntity>(url: string): Observable<TEntity> {
        const headers = this.defineHeader();

        return this.http.get<TEntity>(url, { headers: headers });
    }
}
