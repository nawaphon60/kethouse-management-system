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
      { path: 'transfer-create', loadChildren: () => import('../transfer/transfer-create/transfer-create.module').then(m => m.TransferCreateModule) },
      { path: 'transfer-detail', loadChildren: () => import('../transfer/transfer-detail/transfer-detail.module').then(m => m.TransferDetailModule) },
      { path: 'orders-list', loadChildren: () => import('../Orders/orders-list/orders-list.module').then(m => m.OrdersListModule) },
      { path: 'pack-list', loadChildren: () => import('../Pack/pack-list/pack-list.module').then(m => m.PackListModule) },
      { path: 'create-orders', loadChildren: () => import('../Orders/create-orders/create-orders.module').then(m => m.CreateOrdersModule) },
      { path: 'pack-create-pack', loadChildren: () => import('../Pack/pack-create-pack/pack-create-pack.module').then(m => m.PackCreatePackModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
