import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferModalComponent } from './transfer-modal.component';

const routes: Routes = [{ path: '', component: TransferModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferModalRoutingModule { }
