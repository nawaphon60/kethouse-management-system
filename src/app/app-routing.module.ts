import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
  { path: 'edit-warehouse', loadChildren: () => import('./components/edit-warehouse/edit-warehouse.module').then(m => m.EditWarehouseModule) },
  { path: 'create-product', loadChildren: () => import('./pages/system/products/products/create-product/create-product/create-product.module').then(m => m.CreateProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
