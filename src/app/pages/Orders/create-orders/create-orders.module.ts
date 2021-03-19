import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOrdersRoutingModule } from './create-orders-routing.module';
import { CreateOrdersComponent } from './create-orders.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [CreateOrdersComponent],
  imports: [
    CommonModule,
    CreateOrdersRoutingModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzTableModule
  ]
})
export class CreateOrdersModule { }
