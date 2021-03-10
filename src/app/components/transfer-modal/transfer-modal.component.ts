import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

interface Product {
  id: number;
  key: string;
  product: any;
  properties: any;
  num_ofproduct: number;
  num_oftransfer: number
}

// interface Product {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.css']
})
export class TransferModalComponent implements OnInit {
  listOfData: Product[] = [
    {
      id: 1,
      key: 'PD01-BLK-S',
      product: 'Product01',
      properties: 'สีขาว',
      num_ofproduct: 20,
      num_oftransfer: 10
    },
    {
      id: 2,
      key: 'PD02-BLK-M',
      product: 'Product02',
      properties: 'สีเดา',
      num_ofproduct: 100,
      num_oftransfer: 10
    },
    {
      id: 3,
      key: 'PD03-BLK-L',
      product: 'Product03',
      properties: 'สีเทา',
      num_ofproduct: 250,
      num_oftransfer: 10
    },
    {
      id: 4,
      key: 'PD03-BLK-L',
      product: 'Product03',
      properties: 'สีเทา',
      num_ofproduct: 250,
      num_oftransfer: 10
    },
    {
      id: 5,
      key: 'PD03-BLK-L',
      product: 'Product03',
      properties: 'สีเทา',
      num_ofproduct: 250,
      num_oftransfer: 10
    }
  ]
  listOfSelection = 
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    }
    
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: ReadonlyArray<Product> = [];
  // listOfData: ReadonlyArray<Product> = [];
  setOfCheckedId = new Set<number>();

  constructor(
    private nzModalRef: NzModalRef
  ) { }

  ngOnInit(): void {
    
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    console.log(id);
    
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
    
  }

  onCurrentPageDataChange($event: ReadonlyArray<Product>): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  closeModal() {
    this.nzModalRef.close()
  }
}
