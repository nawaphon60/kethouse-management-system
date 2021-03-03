import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      { path: 'warehouse', loadChildren: () => import('../warehouse/warehouse-list/warehouse.module').then(m => m.WarehouseModule) },
      { path: 'warehouse-detail', loadChildren: () => import('../warehouse/warehouse-detail/warehouse-detail.module').then(m => m.WarehouseDetailModule) },
      { path: 'products', loadChildren: () => import('../products/products/products.module').then(m => m.ProductsModule) },
      { path: 'transfer', loadChildren: () => import('../transfer/transfer/transfer.module').then(m => m.TransferModule) },
      { path: 'create-product', loadChildren: () => import('../products/create-product/create-product.module').then(m => m.CreateProductModule) },
      { path: 'edit-product', loadChildren: () => import('../products/edit-product/edit-product.module').then(m => m.EditProductModule) },
      { path: 'transfer-create', loadChildren: () => import('../transfer/transfer-create/transfer-create.module').then(m => m.TransferCreateModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
