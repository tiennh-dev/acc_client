import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { OwlModule } from 'ngx-owl-carousel';
import { CountUpModule } from 'countup.js-angular2';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DefaultComponent } from './default/default.component'; 
@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    ChartsModule,
    ChartistModule,
    CountUpModule,
    OwlModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
