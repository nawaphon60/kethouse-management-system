import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  { 
    path: '', component: SystemComponent,
    children: [
      { path: 'warehouse', loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule) }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
