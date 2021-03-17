import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrdersComponent } from './create-orders.component';

const routes: Routes = [{ path: '', component: CreateOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOrdersRoutingModule { }
