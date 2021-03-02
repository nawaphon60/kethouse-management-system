import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteProductRoutingModule } from './delete-product-routing.module';
import { DeleteProductComponent } from './delete-product.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [DeleteProductComponent],
  imports: [
    CommonModule,
    DeleteProductRoutingModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule
  ]
})
export class DeleteProductModule { }
