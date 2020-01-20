import { NgModule } from '@angular/core';
import { VizModule } from 'src/app/shared/workflow/viz/viz.module';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { AccountCategorisRoutingModule } from './accounting-routing.module';
import { AccountingAccountsComponentModule } from './accountingaccounts/component.module';
import { BankAccountComponentModule } from './bankaccount/component.module';
import { CustomerGroupAndSuppliersComponentModule } from './customergroupandsubpliers/component.module';
 
 

@NgModule({
    declarations: [
    ],
    imports: [
        AccountCategorisRoutingModule,
        AccountingAccountsComponentModule,
        BankAccountComponentModule,
        CustomerGroupAndSuppliersComponentModule
    ],
    providers: [

    ]
})
export class AccountingModule { }
