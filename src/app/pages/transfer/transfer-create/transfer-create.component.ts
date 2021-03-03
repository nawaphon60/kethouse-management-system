import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TransferModalComponent } from 'src/app/components/transfer-modal/transfer-modal.component';

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

  constructor(
    private ModalService: NzModalService
  ) { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  ChooseProducts(tplTitle: TemplateRef<{}>): void {
    const modalRef = this.ModalService.create({
      nzTitle: tplTitle,
      nzWidth: '50%',
      nzContent: TransferModalComponent,
      nzClosable: false,
      nzFooter: null
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        // this.getByID()
      }
    })
  }
}
