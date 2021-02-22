import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from 'src/app/components/comp1/comp1.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [WarehouseComponent, Comp1Component],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzPaginationModule,
    NzModalModule,
    NzIconModule,
    FormsModule
  ]
})
export class WarehouseModule { }
