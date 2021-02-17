import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditWarehouseRoutingModule } from './edit-warehouse-routing.module';
import { EditWarehouseComponent } from './edit-warehouse.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [EditWarehouseComponent],
  imports: [
    CommonModule,
    EditWarehouseRoutingModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class EditWarehouseModule { }
