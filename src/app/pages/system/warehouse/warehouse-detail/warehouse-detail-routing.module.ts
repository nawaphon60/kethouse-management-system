import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseDetailComponent } from './warehouse-detail.component';

const routes: Routes = [{ path: '', component: WarehouseDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseDetailRoutingModule { }
