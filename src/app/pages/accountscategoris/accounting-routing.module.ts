import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from 'src/app/services/auth/permission.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'accountingaccounts',
                loadChildren: './accountingaccounts/component.module#AccountingAccountsComponentModule',
            },
            {
                path: 'bankaccount',
                loadChildren: './bankaccount/component.module#BankAccountComponentModule',
            },
            {
                path: 'customergroupandsubpliers',
                loadChildren: './customergroupandsubpliers/component.module#CustomerGroupAndSuppliersComponentModule',
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})


export class AccountCategorisRoutingModule { }
