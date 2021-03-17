import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackListComponent } from './pack-list.component';

const routes: Routes = [{ path: '', component: PackListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackListRoutingModule { }
