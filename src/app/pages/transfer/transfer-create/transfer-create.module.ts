import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferCreateRoutingModule } from './transfer-create-routing.module';
import { TransferCreateComponent } from './transfer-create.component';
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


@NgModule({
  declarations: [TransferCreateComponent],
  imports: [
    CommonModule,
    TransferCreateRoutingModule,
    NzInputModule,
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
  ]
})
export class TransferCreateModule { }
