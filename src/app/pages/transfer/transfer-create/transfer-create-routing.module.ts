import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferCreateComponent } from './transfer-create.component';

const routes: Routes = [{ path: '', component: TransferCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferCreateRoutingModule { }
