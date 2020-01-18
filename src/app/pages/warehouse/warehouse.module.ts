

import { NgModule } from '@angular/core';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponentModule } from './warehouse/component.module';
import {WarehouseEmpComponentModule} from './warehouse-emp/component.module';
@NgModule({
    declarations: [
    ],
    imports: [
        WarehouseRoutingModule,
        WarehouseComponentModule,
        WarehouseEmpComponentModule
    ],
    providers: [

    ]
})
export class WarehouseModule { }
