import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
  { path: 'edit-warehouse', loadChildren: () => import('./components/edit-warehouse/edit-warehouse.module').then(m => m.EditWarehouseModule) },
  { path: 'warehouse-detail', loadChildren: () => import('./pages/system/warehouse/warehouse-detail/warehouse-detail.module').then(m => m.WarehouseDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
