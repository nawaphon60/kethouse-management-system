import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

interface Product {
  key: string;
  product: any;
  properties: any;
  num_ofproduct: number;
  num_oftransfer: number
}

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.css']
})
export class TransferModalComponent implements OnInit {
  checked = false
  listOfData: Product[] = [
    {
      key: 'PD01-BLK-S',
      product: 'Product01',
      properties: 'สีขาว',
      num_ofproduct: 20,
      num_oftransfer: 10
    },
    {
      key: 'PD02-BLK-M',
      product: 'Product02',
      properties: 'สีเดา',
      num_ofproduct: 100,
      num_oftransfer: 10
    },
    {
      key: 'PD03-BLK-L',
      product: 'Product03',
      properties: 'สีเทา',
      num_ofproduct: 250,
      num_oftransfer: 10
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
