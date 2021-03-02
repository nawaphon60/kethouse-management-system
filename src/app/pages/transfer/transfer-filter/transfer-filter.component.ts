import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  transfer_id: any;
  ow: any;
  dw: any;
  product: any;
  num_ofproduct: number;
  product_value: number;
  create_at: any;
  create_by: string;
}

@Component({
  selector: 'app-transfer-filter',
  templateUrl: './transfer-filter.component.html',
  styleUrls: ['./transfer-filter.component.css']
})

export class TransferFilterComponent implements OnInit {
  date = null;
  isEnglish = false;
  listOfData: Person[] = [
    {
      key: '1',
      transfer_id: 'TF-2530203001',
      ow: 'คลังสินค้า A',
      dw: 'คลังสินค้า B',
      product: 'Product01',
      num_ofproduct: 20,
      product_value: 3000,
      create_at: 'Feb 23, 2021, 9:09:31 AM',
      create_by: 'John Brown',
    },
    {
      key: '2',
      transfer_id: 'TF-2530203001',
      ow: 'คลังสินค้า A',
      dw: 'คลังสินค้า B',
      product: 'Product02',
      num_ofproduct: 100,
      product_value: 250,
      create_at: 'Feb 23, 2021, 9:09:31 AM',
      create_by: 'Jim Green',
    },
    {
      key: '3',
      transfer_id: 'TF-2530203001',
      ow: 'คลังสินค้า A',
      dw: 'คลังสินค้า B',
      product: 'Product03',
      num_ofproduct: 250,
      product_value: 1000,
      create_at: 'Feb 23, 2021, 9:09:31 AM',
      create_by: 'Joe Black',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
