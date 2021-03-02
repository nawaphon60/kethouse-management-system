import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
  { path: 'edit-warehouse', loadChildren: () => import('./components/edit-warehouse/edit-warehouse.module').then(m => m.EditWarehouseModule) },
  { path: 'change', loadChildren: () => import('./components/change/change.module').then(m => m.ChangeModule) },
  { path: 'Delete-Product', loadChildren: () => import('./components/delete-product/delete-product.module').then(m => m.DeleteProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
