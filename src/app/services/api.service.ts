import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class ApiService {
  private _apiUrl = env.baseUrl.cmsApi;

  public get apiUrl(): string {
    return `${this._apiUrl}`;
  }

  public createRawUrl(endpoint: string): string {
    return `${endpoint}`;
  }

  public createApiUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

  public handleError(error: Response): any {
    console.log(error || 'Server error');
    return error;
  }
}
