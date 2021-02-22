import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseDetailRoutingModule } from './warehouse-detail-routing.module';
import { WarehouseDetailComponent } from './warehouse-detail.component';


@NgModule({
  declarations: [WarehouseDetailComponent],
  imports: [
    CommonModule,
    WarehouseDetailRoutingModule
  ]
})
export class WarehouseDetailModule { }
