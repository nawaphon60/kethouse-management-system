import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackCreatePackComponent } from './pack-create-pack.component';

const routes: Routes = [{ path: '', component: PackCreatePackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackCreatePackRoutingModule { }
