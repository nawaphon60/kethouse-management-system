import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferFilterComponent } from './transfer-filter.component';

const routes: Routes = [{ path: '', component: TransferFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferFilterRoutingModule { }
