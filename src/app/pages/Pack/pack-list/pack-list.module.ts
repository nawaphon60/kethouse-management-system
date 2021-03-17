import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackListRoutingModule } from './pack-list-routing.module';
import { PackListComponent } from './pack-list.component';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Comp1Module } from 'src/app/components/comp1/comp1.module';
import { TransferFilterModule } from '../../transfer/transfer-filter/transfer-filter.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [PackListComponent],
  imports: [
    CommonModule,
    PackListRoutingModule,
    NzTabsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzPaginationModule,
    NzModalModule,
    NzIconModule,
    FormsModule,
    Comp1Module,
    NzTagModule,
    TransferFilterModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class PackListModule { }
