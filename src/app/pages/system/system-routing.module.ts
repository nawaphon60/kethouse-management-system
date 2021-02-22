import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  { 
    path: '', component: SystemComponent,
    children: [
      { path: 'warehouse', loadChildren: () => import('./warehouse/warehouse-list/warehouse.module').then(m => m.WarehouseModule) },
      { path: 'products', loadChildren: () => import('./products/products/products.module').then(m => m.ProductsModule) },
      { path: 'transfer', loadChildren: () => import('./products/transfer/transfer.module').then(m => m.TransferModule) }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
