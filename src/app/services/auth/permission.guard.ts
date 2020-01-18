import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { PermissionService } from '../permission.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private permissionService: PermissionService) {

  }

  async canActivate(route: ActivatedRouteSnapshot) {
    const resourceKey = route.data.resourceKey;
    const permissionAction = route.data.permissionAction;
    
    return await this.permissionService.checkPermissionLive(resourceKey, permissionAction);
  }
}
