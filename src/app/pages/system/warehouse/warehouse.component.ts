import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditWarehouseComponent} from './../../../components/edit-warehouse/edit-warehouse.component'

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(
    private ModalService: NzModalService
  ) { }

  ngOnInit(): void {
    // this.editWarehouse('narmol')
  }

  editWarehouse(type:string): void {
    this.ModalService.create<EditWarehouseComponent>({
      nzTitle: 'แก้ไขคลังสินค้า',
      nzWidth: '40%',
      nzContent: EditWarehouseComponent,
      nzClosable: false,
      // nzFooter: tplFooter
    });
  }

}
