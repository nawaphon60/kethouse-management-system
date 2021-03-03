import { Component, OnInit } from '@angular/core';

interface Product {
  key: string;
  product: any;
  num_ofproduct: number;
  num_oftransfer: number
}

@Component({
  selector: 'app-transfer-create',
  templateUrl: './transfer-create.component.html',
  styleUrls: ['./transfer-create.component.css']
})
export class TransferCreateComponent implements OnInit {
  date = null
  listOfData: Product[] = [
    {
      key: 'PD01-BLK-S',
      product: 'Product01',
      num_ofproduct: 20,
      num_oftransfer: 10
    },
    {
      key: 'PD02-BLK-M',
      product: 'Product02',
      num_ofproduct: 100,
      num_oftransfer: 10
    },
    {
      key: 'PD03-BLK-L',
      product: 'Product03',
      num_ofproduct: 250,
      num_oftransfer: 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
