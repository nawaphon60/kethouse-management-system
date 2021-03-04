import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferDetailRoutingModule } from './transfer-detail-routing.module';
import { TransferDetailComponent } from './transfer-detail.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [TransferDetailComponent],
  imports: [
    CommonModule,
    TransferDetailRoutingModule,
    FormsModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTableModule,
    NzTagModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule
  ]
})
export class TransferDetailModule { }
