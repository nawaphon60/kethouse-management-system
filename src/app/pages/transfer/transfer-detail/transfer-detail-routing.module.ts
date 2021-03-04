import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferDetailComponent } from './transfer-detail.component';

const routes: Routes = [{ path: '', component: TransferDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferDetailRoutingModule { }
