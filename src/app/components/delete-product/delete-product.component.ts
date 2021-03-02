import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

interface Product {
  key: string;
  product: any;
  num_ofproduct: number;
}

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  listOfData: Product[] = [
    {
      key: '1',
      product: 'Product01',
      num_ofproduct: 20,
    },
    {
      key: '2',
      product: 'Product02',
      num_ofproduct: 100,
    },
    {
      key: '3',
      product: 'Product03',
      num_ofproduct: 250,
    }
  ]
  constructor(
    private nzModalRef: NzModalRef
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.nzModalRef.close()
  }
}
