import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOrdersRoutingModule } from './create-orders-routing.module';
import { CreateOrdersComponent } from './create-orders.component';


@NgModule({
  declarations: [CreateOrdersComponent],
  imports: [
    CommonModule,
    CreateOrdersRoutingModule
  ]
})
export class CreateOrdersModule { }
