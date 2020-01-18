import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'accountscategoris',
    loadChildren: './pages/accountscategoris/accounting.module#AccountingModule'
  },
  {
    path: 'warehouse',
    loadChildren: './pages/warehouse/warehouse.module#WarehouseModule'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
