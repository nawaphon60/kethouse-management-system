import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  listdata: [] = []
  constructor(
    private nzModalRef: NzModalRef
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.nzModalRef.close()
  }
}
