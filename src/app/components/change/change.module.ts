import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [ChangeComponent],
  imports: [
    CommonModule,
    ChangeRoutingModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class ChangeModule { }
