import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferModalRoutingModule } from './transfer-modal-routing.module';
import { TransferModalComponent } from './transfer-modal.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


@NgModule({
  declarations: [TransferModalComponent],
  imports: [
    CommonModule,
    TransferModalRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzTagModule,
    NzCheckboxModule
  ]
})
export class TransferModalModule { }
