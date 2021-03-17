import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
  { path: 'edit-warehouse', loadChildren: () => import('./components/edit-warehouse/edit-warehouse.module').then(m => m.EditWarehouseModule) },
  { path: 'change', loadChildren: () => import('./components/change/change.module').then(m => m.ChangeModule) },
  { path: 'Delete-Product', loadChildren: () => import('./components/delete-product/delete-product.module').then(m => m.DeleteProductModule) },
  { path: 'transfer-filter', loadChildren: () => import('./pages/transfer/transfer-filter/transfer-filter.module').then(m => m.TransferFilterModule) },
  { path: 'transfer-modal', loadChildren: () => import('./components/transfer-modal/transfer-modal.module').then(m => m.TransferModalModule) },
  { path: 'pack-list', loadChildren: () => import('./pages/Pack/pack-list/pack-list.module').then(m => m.PackListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
