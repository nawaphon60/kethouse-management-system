import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DeleteProductComponent } from 'src/app/components/delete-product/delete-product.component'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  checked = false

  constructor(
    private ModalService: NzModalService
  ) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    const modalRef = this.ModalService.error({
      nzTitle: 'ไม่สามารถลบสินค้าได้',
      nzWidth: '40%',
      nzContent: DeleteProductComponent,
      nzComponentParams: {
        // model: obj,
        // state: "edit"
      },
      nzClosable: false,
      nzOkText: null,
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        // this.getByID()
      }
    })
  }

  
  
}
