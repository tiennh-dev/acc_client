import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from 'src/app/services/auth/permission.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'whinfo',
                loadChildren: './warehouse/component.module#WarehouseComponentModule',
                canActivate: [PermissionGuard],
                data: { 
                    resourceKey: 'WAREHOUSE',
                    permissionAction: 'ACCESS'
                }
            },
            {
                path: 'whemployee',
                loadChildren: './warehouse-emp/component.module#WarehouseEmpComponentModule',
                canActivate: [PermissionGuard],
                data: { 
                    resourceKey: 'WAREHOUSEEMP',
                    permissionAction: 'ACCESS'
                }
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})


export class WarehouseRoutingModule { }
