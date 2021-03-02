import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferFilterRoutingModule } from './transfer-filter-routing.module';
import { TransferFilterComponent } from './transfer-filter.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [TransferFilterComponent],
  imports: [
    CommonModule,
    TransferFilterRoutingModule,
    NzTableModule,
    FormsModule,
    NzTagModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzDatePickerModule
  ],
  exports: [
    TransferFilterComponent
  ]
})
export class TransferFilterModule { }
