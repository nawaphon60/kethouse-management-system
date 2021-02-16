import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWarehouseComponent } from './edit-warehouse.component';

const routes: Routes = [{ path: '', component: EditWarehouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditWarehouseRoutingModule { }
