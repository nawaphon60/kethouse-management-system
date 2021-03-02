import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    NzInputModule,
    FormsModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule,
    NzTableModule
  ]
})
export class EditProductModule { }
